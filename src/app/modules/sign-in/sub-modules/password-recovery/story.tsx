// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { PasswordRecoveryLayout } from 'app/modules/sign-in/sub-modules/password-recovery/layout';
export default { title: 'Sign In ' };

export const PasswordRecovery = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <PasswordRecoveryLayout />
      </Grid>
    </Container>
  </Providers>
);
