/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { PasswordRecoveryLayout } from 'app/modules/sign-in/sub-modules/password-recovery/layout';
/* project */

export function PasswordRecovery() {
  useTitle(`Password Recovery - Sign in`);

  return <PasswordRecoveryLayout />;
}
