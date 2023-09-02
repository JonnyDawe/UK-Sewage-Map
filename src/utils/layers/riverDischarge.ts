import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol.js";

export function getRiverDischargeLayer() {
    const geojsonlayer = new GeoJSONLayer({
        url: "https://thamessewage.s3.eu-west-2.amazonaws.com/now/now.geojson",
        copyright: "Sewage Map",
        renderer: {
            type: "simple", // autocasts as new SimpleRenderer()
            symbol: {
                type: "simple-line", // autocasts as new SimpleLineSymbol()
                color: "#733f2e",
                width: "6px",
                style: "solid"
            }
        } as any
    });

    //Animation logic - basic as anything!
    let offset = 0;
    window.setInterval(() => {
        offset++;
        geojsonlayer.renderer = new SimpleRenderer({
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
                                        offsetAlongLine: offset,
                                        dashTemplate: [3, 2, 3, 2], // width of dashes and spacing between the dashes
                                        lineDashEnding: "NoConstraint"
                                    }
                                ],
                                enable: true, // must be set to true in order for the symbol layer to be visible
                                capStyle: "Butt",
                                joinStyle: "Round",
                                width: 2,
                                color: [115, 63, 46, 255]
                            },
                            {
                                // lighter green line layer that surrounds the dashes
                                type: "CIMSolidStroke",
                                enable: true,
                                capStyle: "Butt",
                                joinStyle: "Round",
                                width: 3,
                                color: [170, 93, 68, 255]
                            },
                            {
                                // darker green outline around the line symbol
                                type: "CIMSolidStroke",
                                enable: true,
                                capStyle: "Butt",
                                joinStyle: "Round",
                                width: 6,
                                color: [115, 63, 46, 255]
                            }
                        ]
                    }
                }
            })
        });
    }, 100);

    return geojsonlayer;
}
