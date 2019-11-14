import React from 'react';
import { LandingLayout } from './layout';
import Providers from 'app/Providers';

export default {
  component: LandingLayout,
  title: 'Container',
};

export const text = () => (
  <Providers>
    <LandingLayout />
  </Providers>
);
