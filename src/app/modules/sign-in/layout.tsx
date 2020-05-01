import React from 'react';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { Container, Grid, Hidden } from '@material-ui/core';
import { GroupImage } from 'app/assets/images/group';
import { InputForm } from 'app/modules/sign-in/common/InputForm';
import { LayoutModel } from 'app/modules/sign-in/models';

// TODO: so a lot of code is repeated in recovery in sign in
// TODO: Also the sign in flow should be outside of the generel wrapper component
export const SignInLayout = (props: LayoutModel) => {
  return (
    <Grid
      container
      css={`
        overflow: hidden;
        height: 100vh;
      `}
    >
      {/* Left side */}
      {/*<Hidden smDown>
        <Grid
          item
          lg={6}
          md={6}
          css={`
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${ProjectPalette.primary.main};
          `}
        >
          <GroupImage />
        </Grid>
      </Hidden>*/}
      <Hidden smDown>
        <Grid container justify="flex-end" item sm={6} lg={6} md={6}>
          <div
            css={`
              z-index: 10;
              width: 200px;
              height: 200px;
              background-color: red;
            `}
          />

          {/*<div
            css={`
              left: -50vw;
              top: 0;
              position: absolute;
              width: 100vw;
              height: 100%;
              background-color: #242e42;
            `}
          />*/}

          {/*<GroupImage />*/}
        </Grid>
      </Hidden>

      {/*<Hidden smUp>
        <Grid container item xs={12} sm={6} lg={6} md={6}>
          <div
            css={`
              z-index: 10;
              width: 100px;
              height: 100px;
              background-color: red;
            `}
          />
        </Grid>
      </Hidden>*/}

      {/* Right side */}
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        md={6}
        container
        // direction="column"
        alignContent="center"
        spacing={2}
      >
        {/*<Grid >*/}
        <InputForm {...props} />
        {/*</Grid>*/}
      </Grid>
    </Grid>
  );
};
