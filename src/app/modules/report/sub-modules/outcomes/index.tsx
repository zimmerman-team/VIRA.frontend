import React from 'react';
import { css } from 'styled-components/macro';
import {
  Box,
  Grid,
  Typography,
  Hidden,
  CardHeader,
  Card,
  CardContent,
  Button,
} from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';
import { IntentTexField } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextField';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';
import { OutcomesPropsModel } from 'app/modules/report/model';
import { GeoMap } from 'app/components/charts/GeoMap';
import { countries } from 'app/assets/data/countries';
import { Autocomplete } from './common/Autocomplete';
import { policyPriorities } from './mock';

const locMock = {
  longitude: 4.895168,
  latitude: 52.370216,
};

const locMock2 = {
  longitude: 4.895168,
  latitude: 40.370216,
};

const styles: any = {
  card: css`
    height: 100%;
  `,
  cardHeader: css`
    padding-left: 18px;
    padding-top: 12px;
  `,
  cardContent: css`
    padding-left: 12px;
    padding-top: 12px;
  `,
};

export const OutcomesLayout = (props: OutcomesPropsModel) => {
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* title */}
      <Grid item xs={12} md={12} lg={6}>
        <Card css={styles.card}>
          <CardHeader
            css={styles.cardHeader}
            title={'Please provide a title for your report'}
          />
          <CardContent css={styles.cardContent}>
            <IntentTexField
              value={props.title}
              componentID="outcome1"
              setValue={props.setTitle}
            />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardHeader css={styles.cardHeader} title={'Add location'} />
          <CardContent css={styles.cardContent}>
            <Autocomplete
              values={countries}
              value={props.country}
              setValue={props.setCountry}
            />
            <Box width="100%" height="8px" />
            <Typography variant="body2" color="secondary">
              In which of the following geographical locations will the project
              be implemented
            </Typography>
            {/*<Hidden smDown>*/}
            {/*  <Box width="100%" height="30px" />*/}
            {/*</Hidden>*/}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardHeader title={'Select Exact Location'} />
          <CardContent>
            <GeoMap
              noData
              height={265}
              pointSelection={props.location}
              setPointSelection={props.setLocation}
            />
            {props.location && (
              <>
                <Box width="100%" height="14px" />
                <div>
                  <Typography>
                    {props.location?.latitude}, {props.location?.longitude}
                  </Typography>
                </div>
                <Box width="100%" height="14px" />
                <ContainedButton
                  text="Remove"
                  onClick={() => props.setLocation(null)}
                />
              </>
            )}
          </CardContent>
        </Card>
      </Grid>

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* country *!/*/}
      {/*<Grid item xs={12} md={6} lg={6}>*/}
      {/*  <Autocomplete*/}
      {/*    values={countries}*/}
      {/*    description="Project location"*/}
      {/*    value={props.country}*/}
      {/*    setValue={props.setCountry}*/}
      {/*  />*/}
      {/*  <Typography variant="body2" color="secondary">*/}
      {/*    In which of the following geographical locations will the project be*/}
      {/*    implemented*/}
      {/*  </Typography>*/}
      {/*  <Hidden smDown>*/}
      {/*    <Box width="100%" height="30px" />*/}
      {/*  </Hidden>*/}
      {/*</Grid>*/}

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* geomap *!/*/}
      {/*<Hidden mdDown>*/}
      {/*  <React.Fragment>*/}
      {/*    <Grid item xs={12} md={6} lg={6}>*/}
      {/*      <FieldDescription text="Select exact location (optional)" />*/}
      {/*      <Box width="100%" height="20px" />*/}

      {/*      <GeoMap*/}
      {/*        noData*/}
      {/*        height={300}*/}
      {/*        pointSelection={props.location}*/}
      {/*        setPointSelection={props.setLocation}*/}
      {/*      />*/}

      {/*{props.location && (*/}
      {/*  <>*/}
      {/*    <Box width="100%" height="14px" />*/}
      {/*    <div>*/}
      {/*      <Typography>{props.location?.place}</Typography>*/}
      {/*      <Typography>*/}
      {/*        Longitude: {props.location?.longitude}*/}
      {/*      </Typography>*/}
      {/*      <Typography>Latitude: {props.location?.latitude}</Typography>*/}
      {/*    </div>*/}
      {/*    <Box width="100%" height="14px" />*/}
      {/*    <ContainedButton*/}
      {/*      text="Remove"*/}
      {/*      onClick={() => props.setLocation(null)}*/}
      {/*    />*/}
      {/*  </>*/}
      {/*)}*/}
      {/*    </Grid>*/}
      {/*    <Box width="100%" height="32px" />*/}
      {/*  </React.Fragment>*/}
      {/*</Hidden>*/}

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* policy priorities *!/*/}

      {/*<Grid item xs={12} md={6} lg={6}>*/}
      {/*  <Autocomplete*/}
      {/*    values={policyPriorities}*/}
      {/*    value={props.policyPriority}*/}
      {/*    setValue={props.setPolicyPriority}*/}
      {/*    description="Insinger Foundation policy priorities"*/}
      {/*  />*/}
      {/*  <Typography variant="body2" color="secondary">*/}
      {/*    For the selected policy priority, the relevant SDGs will automatically*/}
      {/*    be mapped*/}
      {/*  </Typography>*/}
      {/*</Grid>*/}

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* budget *!/*/}
      {/*<Grid item xs={12} md={6} lg={6}>*/}
      {/*  <FieldDescription text="Budget" />*/}
      {/*  <Box width="100%" height="24px" />*/}
      {/*  <IntentTexFieldSingleLine*/}
      {/*    type="number"*/}
      {/*    min={0}*/}
      {/*    description=""*/}
      {/*    value={props.budget}*/}
      {/*    setValue={props.setBudget}*/}
      {/*  />*/}
      {/*  <Typography variant="body2" color="secondary">*/}
      {/*    Remaning fot this project: {props.remainBudget}€*/}
      {/*  </Typography>*/}
      {/*</Grid>*/}

      {/*<Box width="100%" height="32px" />*/}

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* options *!/*/}

      {/*<Grid item lg={12}>*/}
      {/*  <FieldDescription text="Target beneficiaries" />*/}
      {/*</Grid>*/}
      {/*<Box width="100%" height="32px" />*/}

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* Target beneficiaries *!/*/}
      {/*<Grid item sm={12} md={6} lg={4}>*/}
      {/*  <IntentTexFieldSingleLine*/}
      {/*    type="number"*/}
      {/*    min={0}*/}
      {/*    value={props.tarBenTotal}*/}
      {/*    description="Total target number: "*/}
      {/*    setValue={props.setTarBenTotal}*/}
      {/*  />*/}
      {/*</Grid>*/}
      {/*<Grid item sm={12} md={6} lg={4}>*/}
      {/*  <IntentTexFieldSingleLine*/}
      {/*    type="number"*/}
      {/*    min={0}*/}
      {/*    value={props.tarBenTotal2}*/}
      {/*    description="Total commited number: "*/}
      {/*    setValue={props.setTarBenTotal2}*/}
      {/*  />*/}
      {/*</Grid>*/}

      {/*<Box width="100%" height="54px" />*/}
      {/*<Grid item container lg={12}>*/}
      {/*  <Grid item lg={12}>*/}
      {/*    <FieldDescription text="Of which the beneficiaries will likely include approximately" />*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}

      {/*<Box width="100%" height="24px" />*/}

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* Beneficiary type *!/*/}

      {/*{props.beneficiaryCounts.map((item: any, index: number) => (*/}
      {/*  <Grid item xs={12} lg={4} key={item.name}>*/}
      {/*    <IntentTexFieldSingleLine*/}
      {/*      type="number"*/}
      {/*      min={0}*/}
      {/*      value={item.value}*/}
      {/*      description={item.name}*/}
      {/*      setValue={(v: number) => {*/}
      {/*        const values = [...props.beneficiaryCounts];*/}
      {/*        values[index].value = v;*/}
      {/*        props.setBeneficiaryCounts(values);*/}
      {/*      }}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*))}*/}
    </React.Fragment>
  );
};
