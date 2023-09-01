import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import * as symbolUtils from "@arcgis/core/symbols/support/symbolUtils";
import {
    AnimatableLayerView,
    AnimationEasingConfig,
    IAnimatableSymbolProps,
    IAnimatedGraphic,
    SymbolAnimationManager
} from "arcgis-animate-markers-plugin";

import { throttleAsync } from "./throttle";

/** Example - create a pop-up animation effect on a map when a marker is
 * hovered over.
 *
 * This example uses Spring easing and demonstrates cancelling an animation
 * everytime a new point is hovered.
 *
 */
export class MarkerHoverPopAnimation {
    private mapView: __esri.MapView;
    private layerView: AnimatableLayerView;
    private to: IAnimatableSymbolProps;
    private easingConfig: AnimationEasingConfig;
    private symbolAnimationManager: SymbolAnimationManager;

    private hoverHandler: IHandle;

    constructor({
        symbolAnimationManager,
        mapView,
        layerView,
        to,
        easingConfig
    }: {
        symbolAnimationManager: SymbolAnimationManager;
        mapView: __esri.MapView;
        layerView: AnimatableLayerView;
        to: IAnimatableSymbolProps;
        easingConfig: AnimationEasingConfig;
    }) {
        this.mapView = mapView;
        this.layerView = layerView;
        this.to = to;
        this.easingConfig = easingConfig;
        this.symbolAnimationManager = symbolAnimationManager;

        this.hoverHandler = reactiveUtils.on(
            () => this.mapView,
            "pointer-move",
            (event: __esri.ViewPointerMoveEvent) => {
                if (event.pointerType === "touch") {
                    //ignore if it is a touch event
                    return;
                }
                const opts = {
                    include: [this.layerView.layer]
                };

                this.hitTest(event, opts);
            }
        );
    }

    /**
     * performs a hit test on the mapView object. The function is decorated with the throttle
     * function which limits the rate at which the function can be executed.
     */
    private hitTest = throttleAsync(
        async (
            event: __esri.MapViewScreenPoint | MouseEvent,
            options: { include: __esri.HitTestItem[] }
        ) => {
            const { results } = await this.mapView.hitTest(event, options);
            const hitGraphics = results.filter(
                (result) => (result.type = "graphic")
            ) as __esri.GraphicHit[];

            if (hitGraphics.length) {
                const firstLayerGraphic: __esri.Graphic = hitGraphics[0].graphic;
                this.mapView.container.style.cursor = "pointer";

                // The hit test result does not include a symbol so quickly regenerate it here.
                firstLayerGraphic.symbol = await symbolUtils.getDisplayedSymbol(firstLayerGraphic, {
                    scale: this.mapView.scale
                });
                this.activeGraphic = firstLayerGraphic;
            } else {
                this.mapView.container.style.cursor = "default";
                this.activeGraphic = null;
            }
        },
        70
    );

    private _activeGraphic: __esri.Graphic | null = null;
    public set activeGraphic(hitGraphic: __esri.Graphic | null) {
        if (hitGraphic && this.symbolAnimationManager.hasAnimatedGraphic({ graphic: hitGraphic })) {
            return;
        }

        if (this._activeGraphic === null) {
            if (hitGraphic === null) {
                return;
            }
        } else {
            const currentAnimatedSymbol = this.symbolAnimationManager.getAnimatedGraphic({
                graphic: this._activeGraphic
            });
            currentAnimatedSymbol && this.cancelAnimation(currentAnimatedSymbol);
        }
        this._activeGraphic = hitGraphic;
        if (this._activeGraphic === null) {
            return;
        }

        const newAnimatedGraphic = this.symbolAnimationManager.makeAnimatableSymbol({
            graphic: this._activeGraphic,
            easingConfig: this.easingConfig
        });
        this.animatePointPopEffect(newAnimatedGraphic);
    }

    private animatePointPopEffect(animatedGraphic: IAnimatedGraphic) {
        animatedGraphic.symbolAnimation.start({
            to: this.to
        });
    }

    private cancelAnimation(animatedGraphic: IAnimatedGraphic) {
        animatedGraphic.symbolAnimation.start({
            to: { scale: 1, rotate: 0 },
            onFinish: () => {
                this.symbolAnimationManager.removeAnimatedGraphic({ graphic: animatedGraphic });
            }
        });
    }

    destroy() {
        this.hoverHandler.remove();
    }
}
