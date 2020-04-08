import React from 'react';
import get from 'lodash/get';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { navItems } from 'app/modules/common/components/Search/mockSearchText';
import { SearchResultNavItem } from 'app/modules/common/components/Search/common/NavItemParams';

type Props = {
  results: object;
  activeTab: string;
  onChange: Function;
};

export const SearchResultNavigation = (props: Props) => (
  <div
    data-cy="SearchResultNavigation"
    css={`
      display: flex;
      padding: 15px 24px;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: ${ProjectPalette.primary.light};
    `}
  >
    {navItems.map((navItem, index) => (
      <SearchResultNavItem
        key={`search-nav-item-${index}`}
        // data-cy={navItem}
        index={index}
        name={navItem}
        active={props.activeTab === navItem}
        onClick={() => props.onChange(navItem)}
        count={get(props.results, `[${navItem}]`, []).length}
      />
    ))}
  </div>
);
