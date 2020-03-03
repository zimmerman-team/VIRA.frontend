import React from 'react';
import { css } from 'styled-components/macro';
import {
  Box,
  Grid,
  Typography,
  CardHeader,
  Card,
  CardContent,
} from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { IntentTexField } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextField';
import { OutcomesPropsModel } from 'app/modules/report/model';
import { GeoMap } from 'app/components/charts/GeoMap';
import { countries } from 'app/assets/data/countries';
import { Autocomplete } from './common/Autocomplete';

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
            title="Please provide a title for your report"
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

      {/* ---------------------------------------------------------------------*/}
      {/* location */}
      <Grid item xs={12} md={12} lg={6}>
        <Card
          css={`
            overflow: visible;
          `}
        >
          <CardHeader css={styles.cardHeader} title="Add location" />
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
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* exact location */}
      <Grid item xs={12} md={12} lg={6}>
        <Card>
          <CardHeader title="Select Exact Location" />
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
                  <Typography>{props.location?.place}</Typography>
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
    </React.Fragment>
  );
};
