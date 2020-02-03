import React from 'react';
import 'styled-components/macro';
import { Box, Grid, Typography } from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';
import { IntentTexField } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextField';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';
import { OutcomesPropsModel } from 'app/modules/report/model';
import { GeoMap } from 'app/components/charts/GeoMap';
import { countries } from 'app/assets/data/countries';
import { Autocomplete } from './common/Autocomplete';
import { policyPriorities } from './mock';

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

      <Grid item container lg={12} justify="space-between">
        <Grid item xs={12} md={12} lg={5}>
          <Autocomplete
            values={countries}
            description="Country"
            value={props.country}
            setValue={props.setCountry}
          />
          <Typography variant="body2" color="secondary">
            In which of the following geographical locations will the project be
            implemented
          </Typography>
          <Box width="100%" height="30px" />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <FieldDescription text="Select exact location (optional)" />
          <Box width="100%" height="14px" />
          <GeoMap
            noData
            height={300}
            pointSelection={props.location}
            setPointSelection={props.setLocation}
          />
          {props.location && (
            <>
              <Box width="100%" height="14px" />
              <div>
                <Typography>{props.location?.place}</Typography>
                <Typography>Longitude: {props.location?.longitude}</Typography>
                <Typography>Latitude: {props.location?.latitude}</Typography>
              </div>
              <Box width="100%" height="14px" />
              <ContainedButton
                text="Remove"
                onClick={() => props.setLocation(null)}
              />
            </>
          )}
        </Grid>
      </Grid>

      <Box width="100%" height="32px" />

      <Grid item container lg={12} justify="space-between">
        <Grid item xs={12} md={12} lg={5}>
          <Autocomplete
            values={policyPriorities}
            value={props.policyPriority}
            setValue={props.setPolicyPriority}
            description="Insinger Foundation policy priorities"
          />
          <Typography variant="body2" color="secondary">
            For the selected policy priority, the relevant SDGs will
            automatically be mapped
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <FieldDescription text="Budget" />
          <Box width="100%" height="24px" />
          <IntentTexFieldSingleLine
            type="number"
            min={0}
            description=""
            value={props.budget}
            setValue={props.setBudget}
          />
          <Typography variant="body2" color="secondary">
            Remaning fot this project: {props.remainBudget}€
          </Typography>
        </Grid>
      </Grid>

      <Box width="100%" height="32px" />
      {/* ---------------------------------------------------------------------*/}
      {/* options */}
      <Grid item container lg={12}>
        <Grid item lg={12}>
          <FieldDescription text="Target beneficiaries" />
        </Grid>
        <Box width="100%" height="32px" />
        <Grid item sm={12} md={6} lg={4}>
          <IntentTexFieldSingleLine
            type="number"
            min={0}
            value={props.tarBenTotal}
            description="Total target number: "
            setValue={props.setTarBenTotal}
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <IntentTexFieldSingleLine
            type="number"
            min={0}
            value={props.tarBenTotal2}
            description="Total commited number: "
            setValue={props.setTarBenTotal2}
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
