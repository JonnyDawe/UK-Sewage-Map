import UniqueValueClass from "@arcgis/core/renderers/support/UniqueValueClass";
import UniqueValueGroup from "@arcgis/core/renderers/support/UniqueValueGroup";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";

import { ERRORICON, GREENTICKICON, POOICON, UNKNOWNICON } from "@/constants/hostedImages";

import dischargeSourceRendererArcade from "./dischargeSourceRendererArcade";

const uniqueValueGroups = [
    new UniqueValueGroup({
        classes: [
            new UniqueValueClass({
                label: "Discharging",
                symbol: new PictureMarkerSymbol({ url: POOICON, width: "40", height: "40" }),
                values: "Discharging"
            }),
            new UniqueValueClass({
                label: "Not Discharging",
                symbol: new PictureMarkerSymbol({ url: GREENTICKICON, width: "20", height: "20" }),
                values: "Not Discharging"
            }),
            new UniqueValueClass({
                label: "Recent Discharge",
                symbol: new PictureMarkerSymbol({ url: ERRORICON, width: "24", height: "24" }),
                values: "Recent Discharge"
            }),
            new UniqueValueClass({
                label: "Unknown Status",
                symbol: new PictureMarkerSymbol({ url: UNKNOWNICON, width: "20", height: "20" }),
                values: "Offline"
            })
        ]
    })
];

const sizeVariable = new SizeVariable({
    valueExpression: "$view.scale",
    stops: [
        { size: 40, value: 4504.2581702617545 },
        { size: 24, value: 36034.065362094036 },
        { size: 12, value: 2306180.183174018 }
    ]
});

export const dischargeRenderer = new UniqueValueRenderer({
    valueExpression: dischargeSourceRendererArcade,
    uniqueValueGroups,
    visualVariables: [sizeVariable]
});
