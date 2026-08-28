/**
 * URLs for the Thames Water historic discharge data.
 *
 * History is published as one file per CSO, addressed by permit number, rather than as a
 * single table covering every CSO. The combined table had grown to ~13MB and the popup
 * downloaded all of it to display the ~0.2% belonging to the CSO the user clicked, which
 * intermittently failed. A per-CSO file is a median of ~14KB.
 *
 * The files are produced by `split_history.py` in the sewage back-end repository.
 */

const HISTORY_BASE = import.meta.env.VITE_HISTORY_BASE ?? 'https://d1kmd884co9q6x.cloudfront.net';

export type HistoryKind = 'discharge' | 'offline';

const HISTORY_DIRECTORY: Record<HistoryKind, string> = {
  discharge: 'discharge_histories/thames',
  offline: 'discharge_histories/thames_offline',
};

/** Anything outside this set is replaced when a permit number is used as a file name. */
const UNSAFE_FILENAME_CHARACTERS = /[^A-Za-z0-9._-]/g;

/**
 * Converts a permit number into the file name its history is published under.
 *
 * This must stay identical to `sanitise_permit` in the back-end's `split_history.py`,
 * which names the files. Only permits containing a '/' (e.g. 'RET/TH/24') are affected.
 */
export function sanitisePermitNumber(permitNumber: string): string {
  return permitNumber.trim().replace(UNSAFE_FILENAME_CHARACTERS, '_');
}

/**
 * Builds the URL of a single CSO's history file.
 * @param permitNumber The CSO's permit number, as held in the discharge layer.
 * @param kind Whether to fetch discharge events or offline periods.
 */
export function getHistoryUrl(permitNumber: string, kind: HistoryKind): string {
  return `${HISTORY_BASE}/${HISTORY_DIRECTORY[kind]}/${sanitisePermitNumber(permitNumber)}.json`;
}

/** URL of the timestamp recording when the history data was last refreshed. */
export const HISTORY_TIMESTAMP_URL = `${HISTORY_BASE}/discharges_to_date/timestamp.txt`;
