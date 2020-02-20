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
  const isPrivacyModule = useRouteMatch('/privacy');

  return (
    <Container
      css={`
        padding: 0 16px;
        background-color: ${isPrivacyModule ? ProjectPalette.grey[100] : ''};
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
