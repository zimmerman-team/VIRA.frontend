import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { privacyDescriptionMock } from 'app/modules/privacy/mock';

export const PrivacyModule = () => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container xs={12} lg={12}>
      <TitleFragment title="Privacy Policy" />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* content */}
    <Grid item xs={12} lg={12}>
      <Typography>{privacyDescriptionMock}</Typography>
    </Grid>
    <Grid item xs={12} lg={12}></Grid>
  </React.Fragment>
);
