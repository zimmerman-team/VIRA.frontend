// @ts-nocheck
import React from 'react';
import { GlobalLayout } from './layout';
import Providers from 'app/Providers';

export default {
  component: GlobalLayout,
  title: 'Container',
};

export const text = () => (
  <Providers>
    <GlobalLayout />
  </Providers>
);
