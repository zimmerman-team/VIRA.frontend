import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { InputForm } from 'app/modules/sign-in/common/InputForm';
import styled from 'styled-components/macro';
import { LayoutModel } from 'app/modules/sign-in/models';
import { ProjectPalette } from 'app/theme';
import { GroupImage } from 'app/assets/images/group';

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
      {/*Left side*/}
      <Grid
        item
        xs={6}
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

      {/*Right side*/}
      <Grid
        item
        xs={6}
        css={`
          align-self: center;
        `}
      >
        <Container maxWidth="sm">
          <InputForm {...props} />
        </Container>
      </Grid>
    </Grid>
  );
};
