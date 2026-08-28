import useSWR, { SWRResponse } from 'swr';

import {
  getHistoryUrl,
  HISTORY_TIMESTAMP_URL,
  HistoryKind,
} from '../../../utils/discharge/historyUrls';
import { DischargeHistoricalDataJSON } from '../../../utils/discharge/types';

/**
 * A CSO with nothing on record has no history file published for it. Rendering an empty
 * table gives the same result the combined-table lookup used to: "No Recorded Discharge".
 */
const NO_RECORDED_HISTORY: DischargeHistoricalDataJSON = {
  LocationName: {},
  PermitNumber: {},
  ReceivingWaterCourse: {},
  StartDateTime: {},
  StopDateTime: {},
};

/**
 * Fetches one CSO's history file.
 *
 * The bucket policy grants no `s3:ListBucket`, so S3 answers 403 rather than 404 for a
 * key that does not exist. Both mean "this CSO has nothing on record", and neither is an
 * error worth showing the user. Anything else is a genuine failure and is thrown, so the
 * caller can say so.
 */
export async function fetchCSOHistory(url: string): Promise<DischargeHistoricalDataJSON> {
  const res = await fetch(url);

  if (res.status === 403 || res.status === 404) {
    return NO_RECORDED_HISTORY;
  }

  if (!res.ok) {
    throw new Error('An error occurred while fetching the historic discharge data.');
  }

  return res.json();
}

/**
 * Loads the discharge or offline history of a single CSO.
 * @param permitNumber The CSO's permit number. No request is made if it is empty.
 * @param kind Whether to load discharge events or offline periods.
 */
export function useDischargeHistory(
  permitNumber: string,
  kind: HistoryKind,
): SWRResponse<DischargeHistoricalDataJSON, Error> {
  return useSWR(permitNumber ? getHistoryUrl(permitNumber, kind) : null, fetchCSOHistory);
}

/** Fetches the date the history data was last refreshed, stored as a plain-text file. */
const fetchTimeStamp = async (url: string): Promise<Date> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('An error occurred while fetching the Timestamp.');
  }

  return new Date(await res.text());
};

/** Loads the date the history data was last refreshed. */
export function useHistoryLastUpdated(): SWRResponse<Date, Error> {
  return useSWR(HISTORY_TIMESTAMP_URL, fetchTimeStamp);
}
