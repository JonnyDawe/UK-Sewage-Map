export type ApiType = 'stream' | 'thames' | 'scottishwater' | 'welshwater';

export type ArcGISWaterCompanyConfig = {
  apiLayerId: string;
  dischargeUrl: string;
  infoUrl: string;
  apiType: Extract<ApiType, 'stream' | 'thames'>;
};

export type ScottishWaterCompanyConfig = {
  apiType: Extract<ApiType, 'scottishwater'>;
  apiUrl: string;
  dischargeUrl: string;
  infoUrl: string;
};

export type WelshWaterCompanyConfig = {
  apiType: Extract<ApiType, 'welshwater'>;
  apiUrl: string;
  dischargeUrl: string;
  infoUrl: string;
};

export type WaterCompanyConfig =
  | ArcGISWaterCompanyConfig
  | ScottishWaterCompanyConfig
  | WelshWaterCompanyConfig;

export function isArcGISWaterCompanyConfig(
  config: WaterCompanyConfig,
): config is ArcGISWaterCompanyConfig {
  return config.apiType === 'stream' || config.apiType === 'thames';
}

export function isWelshWaterCompanyConfig(
  config: WaterCompanyConfig,
): config is WelshWaterCompanyConfig {
  return config.apiType === 'welshwater';
}

export const waterCompanyConfig: Record<string, WaterCompanyConfig> = {
  'Northumbrian Water': {
    apiLayerId: '2d91e4a41b884c9a9dd58dec4ee49b75',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/northumbrian/northumbrian_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/northumbrian/northumbrian_info_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Yorkshire Water': {
    apiLayerId: '7f575862a2254a4aaba62573e1012731',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/yorkshire/yorkshire_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/yorkshire/yorkshire_info_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'United Utilities': {
    apiLayerId: '8225548a267f4a408c36a91b6e0f5a1c',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/united/united_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/united/united_info_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Anglian Water': {
    apiLayerId: '333c5c0600f94757b134b276ac4ad8b0',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/anglian/anglian_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/anglian/anglian_info_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Severn Trent Water': {
    apiLayerId: '9c5edb37e19044738373137ac76feea2',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/severntrent/severntrent_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/severntrent/severntrent_info_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Thames Water': {
    apiLayerId: 'ea3da7aab68d44a98581306d4b2ba1e1',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/thames/thames_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/thames/thames_info_now_incl_48hrs.geojson',
    apiType: 'thames',
  },
  'Wessex Water': {
    apiLayerId: '632885799ff946cd86200f07b7f175fb',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/wessex/wessex_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/wessex/wessex_info_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Southern Water': {
    apiLayerId: '7f5ee61ab15d4c79a3f708ccf448a810',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/southern/southern_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/southern/southern_info_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'South West Water': {
    apiLayerId: 'cabfce76b72a4a278a33d737c0708d42',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/southwest/southwest_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/southwest/southwest_info_now_incl_48hrs.geojson',
    apiType: 'stream',
  },
  'Scottish Water': {
    apiType: 'scottishwater',
    apiUrl: '/api/scottish-water',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/scottish/scottish_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/scottish/scottish_info_now_incl_48hrs.geojson',
  },
  'Welsh Water': {
    apiType: 'welshwater',
    apiUrl:
      'https://services3.arcgis.com/KLNF7YxtENPLYVey/arcgis/rest/services/Spill_Prod/FeatureServer/0',
    dischargeUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/welsh/welsh_now_incl_48hrs.geojson',
    infoUrl:
      'https://d1kmd884co9q6x.cloudfront.net/downstream_impact/welsh/welsh_info_now_incl_48hrs.geojson',
  },
};
