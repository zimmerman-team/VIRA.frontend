import 'styled-components/macro';
import React, { ReactChild } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

interface MainContentParams {
  children: ReactChild;
}

export function MainContent(props: MainContentParams) {
  return (
    <Container maxWidth="lg">
      <Box height="100px" />
      <Grid container spacing={4}>
        {props.children}
      </Grid>
    </Container>
  );
}
