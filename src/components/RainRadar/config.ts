import type MapView from "@arcgis/core/views/MapView";

export const RAINVIEWERCOVERAGEURL = "https://api.rainviewer.com/public/weather-maps.json";

export interface Config {
    colorScheme: string;
    playOnLoad: boolean;
    opacity: number;
    relativeTime: boolean;
    playSpeed: number;
    view: MapView;
}

export interface RainviewerItem {
    time: number; // unix time for rainviewer, yyyyMMddhhmm for BOM
    path: string;
}

export const colorScheme = [
    { value: "1", text: "Original" },
    { value: "2", text: "Universal Blue" },
    { value: "3", text: "TITAN" },
    { value: "4", text: "The Weather Channel (TWC)" },
    { value: "5", text: "Meteored" },
    { value: "6", text: "NEXRAD Level III" },
    { value: "7", text: "Rainbow @ SELEX-SI" },
    { value: "8", text: "Dark Sky" }
];

export const rainColorCodes: Record<string, string[]> = {
    "1": [
        // Original
        "#dfdfdfff",
        "#9bea8fff",
        "#58ff42ff",
        "#47c278ff",
        "#4793f9ff",
        "#0c59ffff",
        "#6153c1ff",
        "#ff93a3ff",
        "#ff3f35ff",
        "#c20511ff",
        "#ffeb0aff",
        "#ff9811ff",
        "#a84c06ff",
        "#dda8ffff",
        "#ffffffff"
    ],
    "2": [
        // Universal Blue
        "#79746044",
        "#92887188",
        "#cec087cc",
        "#88ddeeff",
        "#0099ccff",
        "#0077aaff",
        "#005588ff",
        "#ffee00ff",
        "#ffaa00ff",
        "#ff7700ff",
        "#ff4400ff",
        "#ee0000ff",
        "#ffaaffff",
        "#ff44ffff",
        "#ff00ffff",
        "#aa00aaff"
    ],
    "3": [
        // TITAN
        "#353535ff",
        "#757575ff",
        "#005a00ff",
        "#007e00ff",
        "#087fdbff",
        "#1c47e8ff",
        "#6e0dc6ff",
        "#c80f86ff",
        "#c06487ff",
        "#d2883bff",
        "#fac431ff",
        "#fefb02ff",
        "#fe9a58ff",
        "#fe5f05ff",
        "#fd341cff",
        "#bebebeff"
    ],
    "4": [
        // The Weather Channel (TWC)
        "#01b714ff",
        "#088915ff",
        "#0c7617ff",
        "#007e00ff",
        "#106218ff",
        "#074407ff",
        "#3b6707ff",
        "#859a07ff",
        "#ffee07ff",
        "#f7b708ff",
        "#f38b08ff",
        "#ef7008ff",
        "#ea5e09ff",
        "#e95d09ff",
        "#df370aff",
        "#dc2e0aff"
    ],
    "5": [
        // Meteored
        "#3ffefcff",
        "#1790f9ff",
        "#0000f3ff",
        "#41ff50ff",
        "#32c23dff",
        "#4b8339ff",
        "#ffff50ff",
        "#fdbb3cff",
        "#df5e0bff",
        "#fd8788ff",
        "#e90000ff",
        "#a80000ff",
        "#ef5beeff",
        "#924cbeff",
        "#502a68ff"
    ],
    "6": [
        // NEXRAD Level III
        "#04e9e7ff",
        "#00efe7ff",
        "#009cf7ff",
        "#0000f7ff",
        "#00ff00ff",
        "#03b703ff",
        "#087305ff",
        "#ffff00ff",
        "#ecce00ff",
        "#fe9300ff",
        "#ff0000ff",
        "#bd0000ff",
        "#fe00feff",
        "#9c52c6ff",
        "#fefefeff",
        "#ffffffff"
    ],
    "7": [
        // Rainbow @ Selex SI
        "#009f9fff",
        "#009047ff",
        "#00b031ff",
        "#00ff00ff",
        "#00d319ff",
        "#10e81dff",
        "#92fd1eff",
        "#fffd1bff",
        "#ffd400ff",
        "#ffab00ff",
        "#fe6d00ff",
        "#ef0f02ff",
        "#d00523ff",
        "#e503b5ff",
        "#ff66ffff",
        "#ffaaffff"
    ],
    "8": [
        // Dark Sky
        "#005eb617",
        "#005eb628",
        "#005eb639",
        "#005eb64e",
        "#005eb670",
        "#075cb4a6",
        "#1c59b0cf",
        "#3955abe3",
        "#6350a3f1",
        "#8e4b9bff",
        "#d04f81ff",
        "#fc676fff",
        "#fd8f6eff",
        "#ffb76eff",
        "#ffe12eff",
        "#fffd05ff"
    ]
};
