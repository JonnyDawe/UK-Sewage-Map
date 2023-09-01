declare module "sewage-discharge-map" {
    type DischargeSourceFeature = {
        attributes: {
            AlertPast48Hours: "true" | "false";
            PermitNumber: string;
            LocationName: string;
            ReceivingWaterCourse: string;
            MostRecentDischargeAlertStart: number;
            MostRecentDischargeAlertStop: number;
        };
        geometry: { x: number; y: number };
    };

    type DischargeSourceFeatureSet = {
        features: DischargeSourceFeature[];
        fields: unknown;
    };

    export { DischargeSourceFeature, DischargeSourceFeatureSet };
}
