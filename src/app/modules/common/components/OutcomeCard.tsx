import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Box } from '@material-ui/core';

export interface OutcomeCardParams {
  title: string;
  description: string;
}
export const OutcomeCard = (props: OutcomeCardParams) => {
  return (
    <Grid item lg={12}>
      <Card>
        <CardHeader title={props.title} css={``} />
        <CardContent>
          <Typography>{props.description}</Typography>
        </CardContent>
      </Card>
      <Box height="24px" width="100%" />
    </Grid>
  );
};
