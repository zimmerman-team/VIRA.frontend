import React from 'react';
import Providers from 'app/Providers';
import { PasswordRecoveryLayout } from 'src/app/modules/sign-in/sub-modules/password-recovery/layout';

export default {
  component: PasswordRecoveryLayout,
  title: 'Password Recovery',
};

export const text = () => (
  <Providers>
    <PasswordRecoveryLayout />
  </Providers>
);
