import { Route } from '@/routes/__root';

import Map from '../Map/Map';

export function App() {
  const { asset_id, company } = Route.useSearch();

  return <Map csoId={asset_id} company={company} />;
}
