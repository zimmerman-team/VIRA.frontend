import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Box } from '@material-ui/core';
import { ReactChild } from 'react';

export interface BaseCardParams {
  title: string;
  children?: ReactChild;
}
export const BaseCard = (props: BaseCardParams) => {
  return (
    <Grid item lg={12}>
      <Card>
        <CardHeader title={props.title} />
        <CardContent>{props.children}</CardContent>
      </Card>
      <Box height="30px" width="100%" />
    </Grid>
  );
};
