/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchResultItem } from 'app/modules/common/components/Search/common/ResultItemParams';
import { SearchResultNavigation } from 'app/modules/common/components/Search/common/SearchResultNavigation';
import { ProjectPalette } from 'app/theme';
import get from 'lodash/get';
import React from 'react';
import 'styled-components/macro';

type Props = {
  width: number;
  results: object;
  resultType: string;
  changeResultType: Function;
};

export const SearchResult = (props: Props) => (
  <div
    css={`
      top: 46px;
      display: flex;
      position: absolute;
      padding-bottom: 20px;
      flex-direction: column;
      width: ${props.width}px;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: ${ProjectPalette.primary.light};
    `}
  >
    <SearchResultNavigation
      results={props.results}
      activeTab={props.resultType}
      onChange={props.changeResultType}
    />
    <div
      css={`
        overflow-y: auto;
        max-height: 70vh;
        width: ${props.width}px;

        &::-webkit-scrollbar {
          background: ${ProjectPalette.primary.light};
        }
        &::-webkit-scrollbar-track {
          background: ${ProjectPalette.primary.light};
        }
        &::-webkit-scrollbar-thumb {
          background: ${ProjectPalette.grey[400]};
        }
      `}
    >
      {get(props.results, `[${props.resultType}]`, []).map(
        (resultItem: any) => (
          <SearchResultItem text={resultItem.title} link={resultItem.link} />
        )
      )}
    </div>
  </div>
);
