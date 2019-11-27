import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { mockSearchResultText } from 'app/modules/common/components/Search/mockSearchText';
import { SearchResultItem } from 'app/modules/common/components/Search/ResultItemParams';
import { SearchResultNavigation } from 'app/modules/common/components/Search/SearchResultNavigation';

export const SearchResult = () => (
  <div
    css={`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding-bottom: 20px;
      background-color: ${ProjectPalette.primary.light};
    `}
  >
    <SearchResultNavigation />
    {mockSearchResultText.map(resultItem => (
      <SearchResultItem text={resultItem} />
    ))}
  </div>
);
