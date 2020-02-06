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
        height: 100vh;
      `}
    >
      {/* Left side */}
      <Hidden smDown>
        <Grid
          item
          lg={6}
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
      </Hidden>

      {/* Right side */}
      <Grid
        item
        xs={12}
        lg={6}
        css={`
          display: flex;
          justify-content: center;
          align-items: center;

          @media (max-width: 768px) {
            background-color: #242e42;
          }
        `}
      >
        <Container maxWidth="sm">
          <InputForm {...props} />
        </Container>
      </Grid>
    </Grid>
  );
};
