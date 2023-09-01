import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol.js";

const tidalHatchSymbol = new CIMSymbol({
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

export function getThamesTidalLayer() {
    return new FeatureLayer({
        url: "https://services1.arcgis.com/e5YqQVeOlRe9Wmq5/arcgis/rest/services/GLA_Tidal_Water/FeatureServer/0",
        renderer: new SimpleRenderer({
            symbol: tidalHatchSymbol
        })
    });
}
