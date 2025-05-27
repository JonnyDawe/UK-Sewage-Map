export type ApiType = 'stream' | 'thames';

export type WaterCompanyConfig = {
  apiLayerId: string;
  dischargeUrl: string;
  apiType: ApiType;
};

export const waterCompanyConfig: Record<string, WaterCompanyConfig> = {
  'Northumbrian Water': {
    apiLayerId: '2d91e4a41b884c9a9dd58dec4ee49b75',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/northumbrian/northumbrian_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Yorkshire Water': {
    apiLayerId: '7f575862a2254a4aaba62573e1012731',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/yorkshire/yorkshire_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'United Utilities': {
    apiLayerId: '8225548a267f4a408c36a91b6e0f5a1c',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/united/united_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Anglian Water': {
    apiLayerId: '333c5c0600f94757b134b276ac4ad8b0',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/anglian/anglian_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Severn Trent Water': {
    apiLayerId: '9c5edb37e19044738373137ac76feea2',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/severntrent/severntrent_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Thames Water': {
    apiLayerId: 'ea3da7aab68d44a98581306d4b2ba1e1',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/thames/thames_now_incl_48hrs.geojson',
    apiType: 'thames',
  },
  'Wessex Water': {
    apiLayerId: '632885799ff946cd86200f07b7f175fb',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/wessex/wessex_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Southern Water': {
    apiLayerId: 'e45af5111aa943638d6988ba33eb444e',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/southern/southern_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'South West Water': {
    apiLayerId: 'cabfce76b72a4a278a33d737c0708d42',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/southwest/southwest_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
} as const;
