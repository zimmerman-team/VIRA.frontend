import React from 'react';
import { MiniDrawer } from './';
import Providers from 'app/Providers';

export default {
  component: MiniDrawer,
  title: 'MiniDrawer',
};

export const text = () => (
  <Providers>
    <MiniDrawer />
  </Providers>
);
