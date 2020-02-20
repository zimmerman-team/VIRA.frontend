import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { privacyDescriptionMock } from 'app/modules/privacy/mock';
import { PrivacyModuleItemsMock } from 'app/modules/privacy/mock';
import { cookieDescriptionMock } from 'app/modules/privacy/mock';
import { CookieItemsMock } from 'app/modules/privacy/mock';
import { css } from 'styled-components/macro';
import { Box } from '@material-ui/core';

/* todo: this module is a it convoluted, let's refactor asap */
const style: any = {
  description: css`
    line-height: 1.5;
    font-size: 20px;
  `,
  paragraphTitle: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 24px;
  `,
  paragraphBody: css`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: #1b1b1b;
  `,
};
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
      <Typography css={style.description}>{privacyDescriptionMock}</Typography>
      <Box height={'32px'} width={'100%'} />
    </Grid>
    {PrivacyModuleItemsMock.map((privacyItem, index) => (
      <Grid item xs={12} lg={12}>
        <Typography css={style.paragraphTitle}>
          {index + 1 + '. ' + privacyItem.title}
        </Typography>
        <Typography css={style.paragraphBody}>
          {privacyItem.description}
        </Typography>
      </Grid>
    ))}

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container xs={12} lg={12}>
      <Box height={'32px'} width={'100%'} />
      <TitleFragment title="Cookie Policy" />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* content */}
    <Grid item xs={12} lg={12}>
      <Typography css={style.description}>{cookieDescriptionMock}</Typography>
    </Grid>

    <Grid item xs={12} lg={12}>
      <Typography css={style.paragraphTitle}>
        {CookieItemsMock.title}
      </Typography>
      <Typography css={style.paragraphBody}>
        {CookieItemsMock.description}
      </Typography>
    </Grid>
  </React.Fragment>
);
