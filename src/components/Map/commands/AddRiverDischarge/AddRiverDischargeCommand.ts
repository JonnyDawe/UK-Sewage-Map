import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import EsriMap from "@arcgis/core/Map";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";
import LineSymbol from "@arcgis/core/symbols/LineSymbol";

import { MapCommand, ViewCommand } from "@/arcgis/typings/commandtypes";

export class AddRiverDischargeCommand implements MapCommand {
    private mapLayer: __esri.GeoJSONLayer = new GeoJSONLayer({
        url: "https://d1kmd884co9q6x.cloudfront.net/now/now.geojson",
        copyright: "Sewage Map",
        renderer: new SimpleRenderer({
            symbol: new LineSymbol({
                color: "#733f2e",
                width: "6px"
            })
        })
    });

    private lastTimestamp: number | undefined;
    private stepDuration = 100;
    private offset = 0;

    private animateDischargeRenderer(layer: GeoJSONLayer, timestamp: number) {
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
        }

        const elapsed = timestamp - this.lastTimestamp;

        if (elapsed >= this.stepDuration) {
            this.offset++;
            this.lastTimestamp = timestamp;
        }

        layer.renderer = new SimpleRenderer({
            symbol: new CIMSymbol({
                data: {
                    type: "CIMSymbolReference",
                    symbol: {
                        type: "CIMLineSymbol",
                        symbolLayers: [
                            {
                                // white dashed layer at center of the line
                                type: "CIMSolidStroke",
                                effects: [
                                    {
                                        type: "CIMGeometricEffectDashes",
                                        offsetAlongLine: this.offset,
                                        dashTemplate: [3, 5, 3, 5], // width of dashes and spacing between the dashes
                                        lineDashEnding: "NoConstraint"
                                    }
                                ],
                                enable: true, // must be set to true in order for the symbol layer to be visible
                                capStyle: "Round",
                                joinStyle: "Round",
                                width: 2,
                                color: [115, 63, 46, 255]
                            },
                            {
                                // lighter green line layer that surrounds the dashes
                                type: "CIMSolidStroke",
                                enable: true,
                                capStyle: "Round",
                                joinStyle: "Round",
                                width: 3,
                                color: [170, 93, 68, 255]
                            },
                            {
                                // darker green outline around the line symbol
                                type: "CIMSolidStroke",
                                enable: true,
                                capStyle: "Round",
                                joinStyle: "Round",
                                width: 6,
                                color: [115, 63, 46, 255]
                            }
                        ]
                    }
                }
            })
        });

        requestAnimationFrame((timestamp) => this.animateDischargeRenderer(layer, timestamp)); // Call animate again on the next frame
    }

    async executeOnMap(map: EsriMap): Promise<ViewCommand> {
        map.add(this.mapLayer);
        return {
            executeOnView: async () => {
                requestAnimationFrame((timestamp) =>
                    this.animateDischargeRenderer(this.mapLayer, timestamp)
                );
            }
        };
    }
}
