import React from 'react';
import Providers from 'app/Providers';
import { mockData } from './mock';
import { GranteeDetail } from './index';

export default {
  component: GranteeDetail,
  title: 'GranteeDetail Layout',
};

export const text = () => (
  <Providers>
    <GranteeDetail />
  </Providers>
);
