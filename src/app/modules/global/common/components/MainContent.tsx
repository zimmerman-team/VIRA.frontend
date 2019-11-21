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

const projectsMock: StatItemParams[] = [
  {
    amount: 104,
    type: 'projects',
  },
  {
    amount: 5,
    type: 'new reports',
  },
  {
    amount: 140,
    type: 'total reports',
  },
];

interface StatItemParams {
  amount: number;
  type: string;
}

const StatItem = (props: StatItemParams) => (
  <Grid
    item
    lg={4}
    css={`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
  >
    <Typography
      css={`
        && {
          font-size: 36px;
          font-weight: 600;
          color: #155366;
        }
      `}
    >
      {props.amount}
    </Typography>
    <Typography
      css={`
        && {
          font-size: 20px;
          font-weight: 500;
          color: black;
        }
      `}
    >
      {props.type}
    </Typography>
  </Grid>
);
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
          {projectsMock.map(project => (
            <StatItem amount={project.amount} type={project.type} />
          ))}
        </Grid>
        <Grid container spacing={4}>
          <Grid item lg={9}>
            1
          </Grid>
          <Grid item lg={3}>
            2
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
