import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import { TitleFragment } from 'app/modules/common/components/TitleParams';
import {
  cookieDescriptionMock,
  CookieItemsMock,
  privacyDescriptionMock,
  PrivacyModuleItemsMock,
} from 'app/modules/privacy/mock';

/* todo: this module is a it convoluted, let's refactor asap */

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
    {PrivacyModuleItemsMock.map((privacyItem, index) => (
      <Grid item xs={12} lg={12}>
        <Typography>{index + 1 + '. ' + privacyItem.title}</Typography>
        <Typography>{privacyItem.description}</Typography>
      </Grid>
    ))}

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container xs={12} lg={12}>
      <TitleFragment title="Cookie Policy" />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* content */}
    <Grid item xs={12} lg={12}>
      <Typography>{cookieDescriptionMock}</Typography>
    </Grid>

    <Grid item xs={12} lg={12}>
      <Typography>{CookieItemsMock.title}</Typography>
      <Typography>{CookieItemsMock.description}</Typography>
    </Grid>
  </React.Fragment>
);
