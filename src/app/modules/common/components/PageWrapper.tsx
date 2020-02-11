import 'styled-components/macro';
import React, { ReactChild } from 'react';
import { Grid, Box, Container, useMediaQuery } from '@material-ui/core';

interface PageWrapperParams {
  children: ReactChild;
}

export function PageWrapper(props: PageWrapperParams) {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <Container
      css={`
        padding-left: 16px;
        padding-right: 16px;
      `}
      maxWidth="lg"
    >
      {isMobileWidth ? <Box height="80px" /> : <Box height="100px" />}
      <Grid container spacing={4}>
        {props.children}
      </Grid>
    </Container>
  );
}
