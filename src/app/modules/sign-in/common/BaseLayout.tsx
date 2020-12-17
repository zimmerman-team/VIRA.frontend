import React from 'react';
import 'styled-components/macro';
import { Grid, Hidden } from '@material-ui/core';
import { SignInDeco } from 'app/modules/sign-in/common/SignInDeco';
import { SignInDecoDesktop } from 'app/modules/sign-in/common/SignInDecoDesktop';

export const BaseLayout = (props: any) => {
  return (
    <Grid
      container
      css={`
        overflow: hidden;
        height: 100vh;

        @media (max-width: 768px) {
          padding: 0 36px;
        }
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
          {props.children}
        </Grid>
      </Grid>
    </Grid>
  );
};
