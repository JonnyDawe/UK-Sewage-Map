import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import EsriMap from "@arcgis/core/Map";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";

import { MapCommand } from "@/arcgis/typings/commandtypes";

export class AddTidalPolygonCommand implements MapCommand {
    private tidalHatchSymbol = new CIMSymbol({
        data: {
            type: "CIMSymbolReference",
            symbol: {
                type: "CIMPolygonSymbol",
                symbolLayers: [
                    {
                        type: "CIMSolidStroke",
                        enable: true,
                        capStyle: "Round",
                        joinStyle: "Round",
                        miterLimit: 10,
                        width: 0.4,
                        color: [0, 0, 0, 0]
                    },
                    {
                        type: "CIMHatchFill",
                        enable: true,
                        lineSymbol: {
                            type: "CIMLineSymbol",
                            symbolLayers: [
                                {
                                    type: "CIMSolidStroke",
                                    enable: true,
                                    capStyle: "Butt",
                                    joinStyle: "Miter",
                                    miterLimit: 10,
                                    width: 1,
                                    color: [156, 156, 156, 255]
                                }
                            ]
                        },
                        rotation: 45,
                        separation: 5
                    }
                ]
            }
        }
    });

    private mapLayer: __esri.FeatureLayer = new FeatureLayer({
        url: "https://services1.arcgis.com/e5YqQVeOlRe9Wmq5/arcgis/rest/services/GLA_Tidal_Water/FeatureServer/0",
        renderer: new SimpleRenderer({
            symbol: this.tidalHatchSymbol
        })
    });

    async executeOnMap(map: EsriMap): Promise<void> {
        map.add(this.mapLayer);
    }
}
