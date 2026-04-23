/**
 * Diagnostic endpoint for the Scottish Water API integration.
 *
 * Accessible at /api/debug-scottish-water — returns a structured JSON report of
 * every step in the fetch → parse → validate pipeline so failures can be identified
 * without needing access to a browser console.
 */

import { z } from 'zod';

export const config = {
  runtime: 'edge',
};

const SCOTTISH_WATER_API_URL =
  'https://api.scottishwater.co.uk/overflow-event-monitoring/v1/near-real-time';

// Mirror of the schema in src/utils/discharge/schemas.ts
const emptyStringToNull = (val: unknown) => (val === '' ? null : val);

const scottishWaterApiResultSchema = z.object({
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

const scottishWaterApiResponseSchema = z.object({
  results: z.array(scottishWaterApiResultSchema),
});

export default async function handler(): Promise<Response> {
  const report: Record<string, unknown> = {};

  // ── Step 1: fetch ────────────────────────────────────────────────────────
  let rawText: string;
  try {
    const response = await fetch(SCOTTISH_WATER_API_URL);
    report['step1_fetch'] = {
      ok: response.ok,
      status: response.status,
      statusText: response.statusText,
      contentType: response.headers.get('content-type'),
    };

    if (!response.ok) {
      return json({ ...report, conclusion: `FAILED at step 1: HTTP ${response.status}` });
    }

    rawText = await response.text();
    report['step2_raw_text'] = {
      byteLength: rawText.length,
      preview: rawText.slice(0, 500),
    };
  } catch (err) {
    report['step1_fetch'] = {
      ok: false,
      error: String(err),
      hint: 'fetch() threw — likely a network or CORS error from the edge function',
    };
    return json({ ...report, conclusion: 'FAILED at step 1: fetch threw an exception' });
  }

  // ── Step 2: JSON parse ───────────────────────────────────────────────────
  let parsed: unknown;
  try {
    parsed = JSON.parse(rawText);
    report['step3_json_parse'] = { ok: true };
  } catch (err) {
    report['step3_json_parse'] = { ok: false, error: String(err) };
    return json({ ...report, conclusion: 'FAILED at step 3: response is not valid JSON' });
  }

  // ── Step 3: top-level shape ──────────────────────────────────────────────
  const topLevelKeys =
    parsed !== null && typeof parsed === 'object' ? Object.keys(parsed as object) : [];
  report['step4_top_level_keys'] = topLevelKeys;

  // ── Step 4: schema validation ────────────────────────────────────────────
  const schemaResult = scottishWaterApiResponseSchema.safeParse(parsed);

  if (!schemaResult.success) {
    report['step5_schema_validation'] = {
      ok: false,
      errorCount: schemaResult.error.issues.length,
      // Show up to 10 issues to keep the response readable
      issues: schemaResult.error.issues.slice(0, 10),
    };
    return json({ ...report, conclusion: 'FAILED at step 5: Zod schema validation failed' });
  }

  const { results } = schemaResult.data;
  report['step5_schema_validation'] = { ok: true, totalRecords: results.length };

  // ── Step 5: coordinate filter ────────────────────────────────────────────
  const withCoords = results.filter(
    (r) =>
      r.DISCHARGE_OVERFLOW_LOCATION_LATITUDE != null &&
      r.DISCHARGE_OVERFLOW_LOCATION_LONGITUDE != null,
  );
  const withoutCoords = results.length - withCoords.length;

  report['step6_coordinate_filter'] = {
    recordsWithCoords: withCoords.length,
    recordsDropped: withoutCoords,
  };

  if (withCoords.length === 0) {
    return json({ ...report, conclusion: 'FAILED at step 6: no records have valid coordinates' });
  }

  // ── Step 6: sample parsed records ───────────────────────────────────────
  report['step7_sample_records'] = withCoords.slice(0, 3);

  return json({ ...report, conclusion: 'SUCCESS: all steps passed' });
}

function json(data: unknown): Response {
  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
