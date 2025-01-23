import { z } from "zod";

export const thamesWaterDischargeAttributesSchema = z.object({
    AlertPast48Hours: z.string().max(10).nullable(),
    PermitNumber: z.string().max(20).nullable(),
    LocationName: z.string().max(256).nullable(),
    ReceivingWaterCourse: z.string().max(256).nullable(),
    MostRecentDischargeAlertStart: z.number().nullable(), // esriFieldTypeDate
    MostRecentDischargeAlertStop: z.number().nullable(), // esriFieldTypeDate
    AlertStatus: z.string().max(20).nullable()
});

export type ThamesWaterDischargeAttributes = z.infer<typeof thamesWaterDischargeAttributesSchema>;

export const validateDischargeAttributes = (
    attributes: unknown
): ThamesWaterDischargeAttributes | null => {
    const result = thamesWaterDischargeAttributesSchema.safeParse(attributes);
    if (!result.success) {
        console.error("Invalid discharge attributes:", result.error);
        return null;
    }
    return result.data;
};
