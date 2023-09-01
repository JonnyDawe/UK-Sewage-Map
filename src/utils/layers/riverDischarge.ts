import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

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

    return geojsonlayer;
}
