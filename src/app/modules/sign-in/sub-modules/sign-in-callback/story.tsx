// @ts-nocheck
import React from 'react';
import Providers from 'app/Providers';
import { PasswordRecoveryLayout } from './index';

export default {
  component: PasswordRecoveryLayout,
  title: 'Password Recovery',
};

export const text = () => (
  <Providers>
    <PasswordRecoveryLayout />
  </Providers>
);
