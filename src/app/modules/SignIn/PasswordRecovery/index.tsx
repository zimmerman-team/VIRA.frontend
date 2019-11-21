/* third-party */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { PasswordRecoveryLayout } from './layout';
/* project */

export default function PasswordRecovery() {
  useTitle(`Password Recovery - Sign in`);

  return <PasswordRecoveryLayout />;
}
