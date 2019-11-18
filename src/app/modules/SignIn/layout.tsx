import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from 'app/modules/common/Page';
import { InputForm } from 'app/modules/SignIn/common/InputForm';
import { LayoutModel } from 'app/modules/SignIn/models';

export const SignInLayout = (props: LayoutModel) => {
  return (
    <Page title="Sign in">
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <InputForm {...props} />
        </Grid>
      </Grid>
    </Page>
  );
};
