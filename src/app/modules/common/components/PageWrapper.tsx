import 'styled-components/macro';
import React, { ReactChild } from 'react';
import { Grid, Box, Container, useMediaQuery } from '@material-ui/core';
import { useRouteMatch } from 'react-router-dom';
import { ProjectPalette } from 'app/theme';

interface PageWrapperParams {
  children: ReactChild;
}

export function PageWrapper(props: PageWrapperParams) {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <Container
      css={`
        padding: ${isMobileWidth ? 0 : '0 16px'};
        width: calc(100% - 32px);
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
