// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import { SignInLayout } from 'app/modules/sign-in/layout';
export default { title: 'Sign In ' };

export const SignIn = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <SignInLayout />
      </Grid>
    </Container>
  </Providers>
);
