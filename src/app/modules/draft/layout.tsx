import 'styled-components/macro';
import React from 'react';
import { Container, Grid } from '@material-ui/core';

const SignInLayout = () => {
  return (
    <Container maxWidth={'lg'}>
      <Grid container>
        <Grid
          item
          md={6}
          lg={6}
          css={`
            background-color: #242e42;
            height: 100vh;
          `}
        >
          1
        </Grid>
        <Grid
          item
          md={6}
          lg={6}
          css={`
            background-color: #242e42;
            height: 100vh;
          `}
        >
          2
        </Grid>
      </Grid>
    </Container>
  );
};
