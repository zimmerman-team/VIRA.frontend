import 'styled-components/macro';
import React, { ReactChild } from 'react';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';

interface MainContentParams {
  classes: Record<
    | 'content'
    | 'hide'
    | 'root'
    | 'appBar'
    | 'appBarShift'
    | 'menuButton'
    | 'drawer'
    | 'drawerPaper'
    | 'drawerHeader'
    | 'contentShift',
    string
  >;
  open: boolean;
  children: ReactChild;
}

export function MainContent(props: MainContentParams) {
  return (
    <Container maxWidth="lg">
      <Box height="100px" />

      {props.children}
    </Container>
  );
}
