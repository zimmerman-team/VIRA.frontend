import React from 'react';
import { Search } from 'app/modules/common/components/Search/index';
import Providers from 'app/Providers';

export default {
  component: Search,
  title: 'Search',
};

export const text = () => (
  <Providers>
    <Search />
  </Providers>
);
