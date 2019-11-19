import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { mockSearchResultText } from './mockSearchText';
import { SearchResultItem } from './ResultItemParams';
import { SearchResultNavigation } from './SearchResultNavigation';

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
