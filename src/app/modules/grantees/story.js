import React from 'react';
import Providers from 'app/Providers';
import { Grantee } from './index';

export default {
  component: Grantee,
  title: 'Grantee Layout',
};

export const text = () => (
  <Providers>
    <Grantee />
  </Providers>
);
