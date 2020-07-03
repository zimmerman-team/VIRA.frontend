import React from 'react';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { Container, Grid, Hidden, useMediaQuery } from '@material-ui/core';
import { GroupImage } from 'app/assets/images/group';
import { InputForm } from 'app/modules/sign-in/common/InputForm';
import { LayoutModel } from 'app/modules/sign-in/models';
import { SignInDeco } from './common/SignInDeco';
import { SignInDecoDesktop } from 'app/modules/sign-in/common/SignInDecoDesktop';

// TODO: so a lot of code is repeated in recovery in sign in
// TODO: Also the sign in flow should be outside of the generel wrapper component
export const SignInLayout = (props: LayoutModel) => {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <Grid
      container
      css={`
        padding: ${isMobileWidth && '0 36px'};
        overflow: hidden;
        height: 100vh;
      `}
    >
      <Hidden smDown>
        <Grid container justify="flex-end" item sm={6} lg={6} md={6}>
          <div
            css={`
              z-index: 10;
              position: absolute;
            `}
          >
            <SignInDecoDesktop />
          </div>

          <div
            css={`
              left: -50vw;
              top: 0;
              position: absolute;
              width: 100vw;
              height: 100%;
              background-color: #242e42;
            `}
          />
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <div
          css={`
            z-index: 10;
            top: 10px;
            left: 0;
            position: absolute;
          `}
        >
          <SignInDeco />
        </div>
      </Hidden>

      {/* Right side */}
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        md={6}
        container
        css={`
          justify-content: center;
          align-items: center;
        `}
      >
        <Grid
          item
          xs={12}
          md={10}
          lg={8}
          container
          spacing={2}
          alignItems="flex-start"
          alignContent="flex-start"
        >
          <InputForm {...props} />
        </Grid>
      </Grid>
    </Grid>
  );
};
