import React from 'react';
import Providers from 'app/Providers';
import { PasswordRecoveryLayout } from './layout';

export default {
  component: PasswordRecoveryLayout,
  title: 'Password Recovery',
};

export const text = () => (
  <Providers>
    <PasswordRecoveryLayout />
  </Providers>
);
