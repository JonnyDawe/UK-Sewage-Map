import { afterEach, describe, expect, it, vi } from 'vitest';

import { fetchCSOHistory } from './useDischargeHistory';

/**
 * A CSO with nothing on record simply has no history file. The bucket policy grants no
 * `s3:ListBucket`, so S3 answers 403 rather than 404 for an absent key — both have to be
 * read as "nothing on record", or the ~29 Thames Water CSOs without published history
 * would show an error instead of an empty chart. Genuine failures must still surface,
 * since silently swallowing them is what would hide the next outage.
 */

const respondWith = (init: { status: number; body?: unknown }) => {
  const fetchMock = vi.fn().mockResolvedValue({
    status: init.status,
    ok: init.status >= 200 && init.status < 300,
    json: async () => init.body,
  });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
};

afterEach(() => {
  vi.unstubAllGlobals();
});

const EMPTY_HISTORY = {
  LocationName: {},
  PermitNumber: {},
  ReceivingWaterCourse: {},
  StartDateTime: {},
  StopDateTime: {},
};

describe('fetchCSOHistory', () => {
  it.each([403, 404])('reads a missing history file (%i) as nothing on record', async (status) => {
    respondWith({ status });

    await expect(fetchCSOHistory('https://cdn.test/TEMP.0376.json')).resolves.toEqual(
      EMPTY_HISTORY,
    );
  });

  it('returns the published history when the file exists', async () => {
    const history = {
      LocationName: { '12': 'Hillside Avenue' },
      PermitNumber: { '12': 'EPRAB3890AS' },
      ReceivingWaterCourse: { '12': 'River Roding' },
      StartDateTime: { '12': 1782887400000 },
      StopDateTime: { '12': 1782900900000 },
    };
    respondWith({ status: 200, body: history });

    await expect(fetchCSOHistory('https://cdn.test/EPRAB3890AS.json')).resolves.toEqual(history);
  });

  it.each([500, 502, 504])('still reports a genuine failure (%i)', async (status) => {
    respondWith({ status });

    await expect(fetchCSOHistory('https://cdn.test/EPRAB3890AS.json')).rejects.toThrow(
      'An error occurred while fetching the historic discharge data.',
    );
  });

  it('propagates a network failure rather than reporting an empty history', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError('Failed to fetch'));
    vi.stubGlobal('fetch', fetchMock);

    await expect(fetchCSOHistory('https://cdn.test/EPRAB3890AS.json')).rejects.toThrow(
      'Failed to fetch',
    );
  });
});
