import 'styled-components/macro';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from '@material-ui/core';
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
}

const projectsMock = [];

const StatItem = () => <div>stat item</div>;
const StatContainer = () => <div>statcontainer</div>;

const PriorityArea = () => <div>priority</div>;
const Project = () => <div>project</div>;
const Projects = () => <div>projects</div>;

export function MainContent(props: MainContentParams) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box height="100px" />
        <Grid container spacing={4}>
          <Grid item lg={4}>
            <Typography paragraph>1</Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography paragraph>2</Typography>
          </Grid>
          <Grid item lg={4}>
            <Typography paragraph>3</Typography>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
