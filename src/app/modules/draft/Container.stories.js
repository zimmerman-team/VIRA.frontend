import React from 'react';
import { SignInLayout } from './layout';
import Providers from 'app/Providers';

export default {
  component: SignInLayout,
  title: 'SignInLayout',
};

export const text = () => (
  <Providers>
    <SignInLayout />
  </Providers>
);
