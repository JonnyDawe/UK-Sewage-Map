import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer.js";
import CIMSymbol from "@arcgis/core/symbols/CIMSymbol.js";
import LineSymbol from "@arcgis/core/symbols/LineSymbol.js";
import { ArcGeoJSONLayer } from "arcgis-react";

export function RiverDischargeGeoJsonLayer() {
    let lastTimestamp = 0;
    let offset = 0;
    const stepDuration = 100; // 100ms

    function animate(layer: GeoJSONLayer, timestamp: number) {
        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }

        const elapsed = timestamp - lastTimestamp;

        if (elapsed >= stepDuration) {
            offset++;
            lastTimestamp = timestamp;
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
                                        offsetAlongLine: offset,
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

        // requestAnimationFrame((timestamp) => animate(layer, timestamp)); // Call animate again on the next frame
    }

    const urls = [
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/thames/thames_now_incl_48hrs.geojson", // Thames Water
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/anglian/anglian_now_incl_48hrs.geojson", // Anglian Water
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/united/united_now_incl_48hrs.geojson", // United Utilities
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/southern/southern_now_incl_48hrs.geojson", // Southern Water
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/northumbrian/northumbrian_now_incl_48hrs.geojson", // Northumbrian Water
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/severntrent/severntrent_now_incl_48hrs.geojson", // Severn Trent Water
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/wessex/wessex_now_incl_48hrs.geojson", // Wessex Water
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/yorkshire/yorkshire_now_incl_48hrs.geojson", // Yorkshire Water
        "https://d1kmd884co9q6x.cloudfront.net/downstream_impact/southwest/southwest_now_incl_48hrs.geojson" // South West Water
    ];

    return (
        <>
            {urls.map((url, index) => (
                <ArcGeoJSONLayer
                    key={index}
                    url={url}
                    copyright="Sewage Map"
                    renderer={
                        new SimpleRenderer({
                            symbol: new LineSymbol({
                                color: "#733f2e",
                                width: "6px"
                            })
                        })
                    }
                    onLayerCreated={(layer) => {
                        requestAnimationFrame((timestamp) => animate(layer, timestamp));
                    }}
                />
            ))}
        </>
    );
}
