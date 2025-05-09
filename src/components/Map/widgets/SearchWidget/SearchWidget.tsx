import '@arcgis/map-components/dist/components/arcgis-search';

import Collection from '@arcgis/core/core/Collection.js';
import LocatorSearchSource from '@arcgis/core/widgets/Search/LocatorSearchSource';
import styled from '@emotion/styled';
import React from 'react';

const SearchPositionWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding-top: 15px;
  padding-bottom: 0px;
  top: 0;
  bottom: unset;
  @media (max-width: 640px) {
    bottom: 0;
    top: unset;
    padding-top: 0px;
    padding-bottom: 54px;
  }
`;

const SearchWrapper = styled.div`
  pointer-events: auto;

  --search-input-max-width: 85vw;
  --search-input-width: 480px;
  --calcite-autocomplete-input-corner-radius: var(--radius-1);
  --calcite-progress-fill-color: var(--river-blue, blue);
  --calcite-autocomplete-input-loading-fill-color: var(--river-blue, blue);
  --calcite-progress-background-color: var(--gray-4);
  --calcite-corner-radius: var(--radius-1);
  --calcite-color-border-input: var(--river-blue, blue);
  --calcite-color-focus: var(--focus-8);
  --calcite-color-foreground-1: var(--color-panel-solid);
  --calcite-color-foreground-2: var(--gray-4);

  .esri-search.esri-widget {
    max-width: var(--search-input-max-width, 85vw);
    width: var(--search-input-width, 480px);
    background-color: transparent;
  }
`;

export const SearchWidget = React.memo(function SearchWidget() {
  const searchSource = React.useMemo(() => {
    return new Collection([
      new LocatorSearchSource({
        placeholder: 'Find address or place',
        url: 'https://utility.arcgis.com/usrsvcs/servers/4b613e3cb0ca4e7fb3ce8e99e5cd7a41/rest/services/World/GeocodeServer',
        countryCode: 'GB',
        suggestionsEnabled: true,
        minSuggestCharacters: 2,
        maxSuggestions: 4,
      }),
    ]);
  }, []);
  return (
    <SearchPositionWrapper>
      <SearchWrapper>
        <arcgis-search includeDefaultSourcesDisabled popupDisabled sources={searchSource} />
      </SearchWrapper>
    </SearchPositionWrapper>
  );
});
