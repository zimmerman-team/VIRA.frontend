import { Box, Grid } from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';
import { IntentTexField } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextField';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';
import { TextFielMock } from 'app/modules/report/sub-modules/outcomes/mock';
import React from 'react';
import 'styled-components/macro';

export const OutcomesLayout = () => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* textareas */}

    <Grid item container lg={12} alignItems="center">
      <IntentTexField {...TextFielMock[0]} />
    </Grid>

    <Grid item container lg={7} alignItems="center">
      <IntentTexField {...TextFielMock[1]} />
    </Grid>

    <Grid item lg={2}>
      <ContainedButton text="Add " />
    </Grid>

    <Box width="100%" height="24px" />

    {/* ---------------------------------------------------------------------*/}
    {/* options */}
    <Grid item container lg={12}>
      <Grid item lg={12}>
        <FieldDescription text="Target beneficiaries" />
      </Grid>
      <Box width="100%" height="24px" />
      <Grid item lg={5}>
        <IntentTexFieldSingleLine description="Total number: " />
      </Grid>
    </Grid>

    <Box width="100%" height="54px" />
    <Grid item container lg={12}>
      <Grid item lg={12}>
        <FieldDescription text="Of which the beneficiaries will likely include approximately" />
      </Grid>
    </Grid>

    <Box width="100%" height="24px" />

    <Grid item container lg={12} spacing={1}>
      <Grid item lg={4}>
        <IntentTexFieldSingleLine description="Children/Young people:" />
      </Grid>

      <Grid item lg={4}>
        <IntentTexFieldSingleLine description="Elderly:" />
      </Grid>

      <Grid item lg={4}>
        <IntentTexFieldSingleLine description="Women:" />
      </Grid>
      <Grid item lg={12} />
      <Grid item lg={4}>
        <IntentTexFieldSingleLine description="Refugees:" />
      </Grid>
      <Grid item lg={4}>
        <IntentTexFieldSingleLine description="Low income individuals:" />
      </Grid>
    </Grid>
  </React.Fragment>
);
