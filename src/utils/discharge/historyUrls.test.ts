import { describe, expect, it } from 'vitest';

import { getHistoryUrl, sanitisePermitNumber } from './historyUrls';

/**
 * History is published as one file per CSO, named after its permit number by the
 * back-end's `split_history.py`. If the sanitising here and there ever disagree, the
 * front-end silently requests a key that does not exist and every affected CSO reports
 * having no history — so these pin the naming rather than the URL formatting.
 */

describe('sanitisePermitNumber', () => {
  it.each([
    ['EPRAB3890AS', 'EPRAB3890AS'],
    ['CSAB.0557', 'CSAB.0557'],
    ['TEMP.2920', 'TEMP.2920'],
    ['CNTD.0028', 'CNTD.0028'],
  ])('leaves the already-safe permit %s untouched', (permit, expected) => {
    expect(sanitisePermitNumber(permit)).toBe(expected);
  });

  // The only permits in the Thames Water data needing this: 'RET/TH/23' and 'RET/TH/24'.
  // An unescaped '/' would address a nested key that the back-end never wrote.
  it.each([
    ['RET/TH/24', 'RET_TH_24'],
    ['RET/TH/23', 'RET_TH_23'],
  ])('replaces the path separator in %s', (permit, expected) => {
    expect(sanitisePermitNumber(permit)).toBe(expected);
  });

  it('trims surrounding whitespace, as the back-end does', () => {
    expect(sanitisePermitNumber('  CSAB.0557  ')).toBe('CSAB.0557');
  });
});

describe('getHistoryUrl', () => {
  it('addresses discharge events by permit number', () => {
    expect(getHistoryUrl('EPRAB3890AS', 'discharge')).toBe(
      'https://d1kmd884co9q6x.cloudfront.net/discharge_histories/thames/EPRAB3890AS.json',
    );
  });

  it('addresses offline periods separately', () => {
    expect(getHistoryUrl('EPRAB3890AS', 'offline')).toBe(
      'https://d1kmd884co9q6x.cloudfront.net/discharge_histories/thames_offline/EPRAB3890AS.json',
    );
  });

  it('sanitises the permit number into the file name', () => {
    expect(getHistoryUrl('RET/TH/24', 'discharge')).toBe(
      'https://d1kmd884co9q6x.cloudfront.net/discharge_histories/thames/RET_TH_24.json',
    );
  });
});
