import { z } from 'zod';

export const thamesWaterDischargeAttributesSchema = z.object({
  AlertPast48Hours: z.string().max(10).nullable(),
  PermitNumber: z.string().max(20).nullable(),
  LocationName: z.string().max(256).nullable(),
  ReceivingWaterCourse: z.string().max(256).nullable(),
  MostRecentDischargeAlertStart: z.number().nullable(), // esriFieldTypeDate
  MostRecentDischargeAlertStop: z.number().nullable(), // esriFieldTypeDate
  AlertStatus: z.string().max(20).nullable(),
});

export type ThamesWaterDischargeAttributes = z.infer<typeof thamesWaterDischargeAttributesSchema>;

export const validateThamesWaterDischargeAttributes = (
  attributes: unknown,
): ThamesWaterDischargeAttributes | null => {
  const result = thamesWaterDischargeAttributesSchema.safeParse(attributes);
  if (!result.success) {
    return null;
  }
  return result.data;
};

export const waterCompanyDischargeAttributesSchema = z.object({
  Id: z.string().max(256).nullable(),
  Company: z.string().max(256).nullable(),
  Status: z.number().nullable(), // -1: Offline, 0: Stop, 1: Start
  StatusStart: z.number().nullable(), // esriFieldTypeDate
  LatestEventStart: z.number().nullable(), // esriFieldTypeDate
  LatestEventEnd: z.number().nullable(), // esriFieldTypeDate
  Latitude: z.number().nullable(),
  Longitude: z.number().nullable(),
  ReceivingWaterCourse: z.string().max(256).nullable(),
  LastUpdated: z.number().nullable(), // esriFieldTypeDate
});

export type WaterCompanyDischargeAttributes = z.infer<typeof waterCompanyDischargeAttributesSchema>;

export const validateWaterCompanyDischargeAttributes = (
  attributes: unknown,
): WaterCompanyDischargeAttributes | null => {
  const result = waterCompanyDischargeAttributesSchema.safeParse(attributes);
  if (!result.success) {
    return null;
  }
  return result.data;
};

// Scottish Water OVERFLOW_STATUS_ID values:
// 13 - Overflowing, 14 - Recent Overflow, 15 - No Overflows, 16 - No Data Available

// The API may return empty strings for numeric fields; treat them as null before coercing.
const emptyStringToNull = (val: unknown) => (val === '' ? null : val);

export const scottishWaterApiResultSchema = z.object({
  ASSET_ID: z.string().max(256).nullable(),
  ASSET_NAME: z.string().max(256).nullable(),
  OVERFLOW_STATUS_ID: z.preprocess(emptyStringToNull, z.coerce.number().nullable()),
  RECEIVING_WATER: z.string().max(256).nullable(),
  OVERFLOW_START_DATETIME: z.string().nullable(),
  OVERFLOW_END_DATETIME: z.string().nullable(),
  DISCHARGE_OVERFLOW_LOCATION_LATITUDE: z.preprocess(
    emptyStringToNull,
    z.coerce.number().nullable(),
  ),
  DISCHARGE_OVERFLOW_LOCATION_LONGITUDE: z.preprocess(
    emptyStringToNull,
    z.coerce.number().nullable(),
  ),
});

export type ScottishWaterApiResult = z.infer<typeof scottishWaterApiResultSchema>;

export const scottishWaterApiResponseSchema = z.object({
  results: z.array(scottishWaterApiResultSchema),
});

export type ScottishWaterApiResponse = z.infer<typeof scottishWaterApiResponseSchema>;

export const validateScottishWaterApiResponse = (
  data: unknown,
): ScottishWaterApiResponse | null => {
  const result = scottishWaterApiResponseSchema.safeParse(data);
  return result.success ? result.data : null;
};

// Schema for attributes stored on the in-memory FeatureLayer (dates converted to ms timestamps)
export const scottishWaterDischargeAttributesSchema = z.object({
  ASSET_ID: z.string().max(256).nullable(),
  ASSET_NAME: z.string().max(256).nullable(),
  OVERFLOW_STATUS_ID: z.number().nullable(),
  RECEIVING_WATER: z.string().max(256).nullable(),
  OVERFLOW_START_DATETIME: z.number().nullable(), // ms timestamp
  OVERFLOW_END_DATETIME: z.number().nullable(), // ms timestamp
});

export type ScottishWaterDischargeAttributes = z.infer<
  typeof scottishWaterDischargeAttributesSchema
>;

export const validateScottishWaterDischargeAttributes = (
  attributes: unknown,
): ScottishWaterDischargeAttributes | null => {
  const result = scottishWaterDischargeAttributesSchema.safeParse(attributes);
  return result.success ? result.data : null;
};

export const southWestWaterDischargeAttributesSchema = z.object({
  ID: z.string().max(256).nullable(),
  company: z.string().max(256).nullable(),
  status: z.number().nullable(), // -1: Offline, 0: Stop, 1: Start
  statusStart: z.number().nullable(), // esriFieldTypeDate
  latestEventStart: z.number().nullable(), // esriFieldTypeDate
  latestEventEnd: z.number().nullable(), // esriFieldTypeDate
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  receivingWaterCourse: z.string().max(256).nullable(),
  lastUpdated: z.number().nullable(), // esriFieldTypeDate
});

export type SouthWestWaterDischargeAttributes = z.infer<
  typeof southWestWaterDischargeAttributesSchema
>;

export const validateSouthWestWaterDischargeAttributes = (
  attributes: unknown,
): SouthWestWaterDischargeAttributes | null => {
  const result = southWestWaterDischargeAttributesSchema.safeParse(attributes);
  if (!result.success) {
    return null;
  }
  return result.data;
};
