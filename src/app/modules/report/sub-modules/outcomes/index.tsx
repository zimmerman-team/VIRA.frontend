import React from 'react';
import 'styled-components/macro';
import { Box, Grid } from '@material-ui/core';
// import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';
import { IntentTexField } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextField';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';
import { OutcomesPropsModel } from 'app/modules/report/model';
import { Autocomplete } from './common/Autocomplete';

export const OutcomesLayout = (props: OutcomesPropsModel) => {
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* textareas */}

      <Grid item container lg={12} alignItems="center">
        <IntentTexField
          description="Title"
          value={props.title}
          componentID="outcome1"
          setValue={props.setTitle}
        />
      </Grid>

      <Grid item container lg={12} alignItems="center">
        <Autocomplete
          description="Country"
          value={props.country}
          setValue={props.setCountry}
        />
      </Grid>

      {/* <Grid item lg={2}>
        <ContainedButton text="Add " />
      </Grid> */}

      <Box width="100%" height="24px" />

      {/* ---------------------------------------------------------------------*/}
      {/* options */}
      <Grid item container lg={12}>
        <Grid item lg={12}>
          <FieldDescription text="Target beneficiaries" />
        </Grid>
        <Box width="100%" height="24px" />
        <Grid item lg={5}>
          <IntentTexFieldSingleLine
            type="number"
            min={0}
            value={props.tarBenTotal}
            description="Total number: "
            setValue={props.setTarBenTotal}
          />
        </Grid>
      </Grid>

      <Box width="100%" height="54px" />
      <Grid item container lg={12}>
        <Grid item lg={12}>
          <FieldDescription text="Of which the beneficiaries will likely include approximately" />
        </Grid>
      </Grid>

      <Box width="100%" height="24px" />

      <Grid item container lg={12} spacing={3}>
        {props.beneficiaryCounts.map((item: any, index: number) => (
          <Grid item lg={4} key={item.name}>
            <IntentTexFieldSingleLine
              type="number"
              min={0}
              value={item.value}
              description={item.name}
              setValue={(v: number) => {
                const values = [...props.beneficiaryCounts];
                values[index].value = v;
                props.setBeneficiaryCounts(values);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
