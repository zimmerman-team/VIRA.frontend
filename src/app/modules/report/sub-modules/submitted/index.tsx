import React from 'react';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Grid, Typography } from '@material-ui/core';

export const SubmittedLayout = () => (
  <React.Fragment>
    <Grid item container lg={12} justify="center" alignItems="center">
      <Typography> Your report has been sent</Typography>
    </Grid>
    <Grid item container lg={12} justify="center" alignItems="center">
      <ContainedButton text="Go to report" />
    </Grid>
  </React.Fragment>
);
