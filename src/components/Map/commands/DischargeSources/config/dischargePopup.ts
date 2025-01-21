import PopupTemplate from "@arcgis/core/PopupTemplate";

import { setEsriPopupTitle } from "@/components/DischargePopup/popupfactory";
import { setEsriPopupHTMLContent } from "@/components/DischargePopup/popupfactory";

export const dischargePopupTemplate = new PopupTemplate({
    title: setEsriPopupTitle,
    returnGeometry: true,
    content: setEsriPopupHTMLContent,
    actions: [
        {
            id: "copy-link",
            className: "esri-icon-share2",
            title: "Copy Link",
            type: "button"
        }
    ]
});
