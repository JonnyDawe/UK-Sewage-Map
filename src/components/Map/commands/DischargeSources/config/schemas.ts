import { z } from "zod";

export const thamesWaterDischargeAttributesSchema = z.object({
    AlertPast48Hours: z.enum(["true", "false"]),
    PermitNumber: z.string(),
    LocationName: z.string(),
    ReceivingWaterCourse: z.string(),
    MostRecentDischargeAlertStart: z.number(),
    MostRecentDischargeAlertStop: z.number().nullable()
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
