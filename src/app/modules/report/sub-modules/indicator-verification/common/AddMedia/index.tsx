import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';

import {
  AddMediaParams,
  AddMediaNavContainer,
  AddMediaInputFieldLabel,
  AddMediaInputField,
  AddMediaButton,
  AddMediaCloseButton,
  AddMediaBigButton,
  AddMediaTitle,
} from './AddMediaParams';

export const AddMediaLayout = (props: AddMediaParams) => (
  <React.Fragment>
    <Grid
      item
      container
      xs={12}
      lg={8}
      css={`
        background-color: #2f3b52;
      `}
      spacing={4}
    >
      <Grid
        item
        container
        lg={12}
        justify="flex-end"
        css={`
          && {
            padding-bottom: 0;
          }
        `}
      >
        <AddMediaCloseButton />
      </Grid>
      <Grid
        item
        lg={12}
        css={`
          && {
            padding-top: 0;
          }
        `}
      >
        <AddMediaTitle />
      </Grid>
      <Grid
        item
        container
        lg={12}
        justify="center"
        alignItems="center"
        css={`
          && {
            padding-top: 0;
          }
        `}
      >
        <AddMediaNavContainer />
      </Grid>
      <Grid item container lg={12}>
        <Grid item lg={6} justify="center" alignItems="center">
          <AddMediaBigButton />
        </Grid>
        <Grid
          item
          container
          lg={6}
          justify="flex-start"
          alignItems="flex-start"
          direction="row"
          css={`
            height: 70px;
          `}
        >
          <AddMediaInputFieldLabel />
          <AddMediaInputField />
        </Grid>
        <Grid item container lg={12} justify="flex-end">
          <Grid item container lg={4} justify="space-between">
            <AddMediaButton text="Cancel" />
            <AddMediaButton text="Save" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </React.Fragment>
);
