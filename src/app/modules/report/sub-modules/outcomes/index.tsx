import React from 'react';
import { css } from 'styled-components/macro';
import {
  Box,
  Grid,
  Typography,
  CardHeader,
  Card,
  CardContent,
  useMediaQuery,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';
import { IntentTexField } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextField';
import { OutcomesPropsModel } from 'app/modules/report/model';
import { GeoMap } from 'app/components/charts/GeoMap';
import { countries } from 'app/assets/data/countries';
import { Autocomplete } from './common/Autocomplete';

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
  gridMobile: css`
    padding-top: 0 !important;
  `,
};

export const OutcomesLayout = (props: OutcomesPropsModel) => {
  const { t } = useTranslation();
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* title */}
      <Grid data-cy="outcomes-title" item xs={12} md={12} lg={6}>
        <Card css={styles.card}>
          <CardHeader
            css={styles.cardHeader}
            title={t('reports.form.textfield.title')}
          />
          <CardContent css={styles.cardContent}>
            <IntentTexField
              testattr="outcome-title"
              value={props.title}
              componentID="outcome1"
              setValue={props.setTitle}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* location */}
      <Grid
        item
        xs={12}
        md={12}
        lg={6}
        css={isMobileWidth && styles.gridMobile}
        data-cy="add-location"
      >
        <Card
          css={`
            overflow: visible;
          `}
        >
          <CardHeader
            css={styles.cardHeader}
            title={t('reports.form.textfield.location')}
          />
          <CardContent css={styles.cardContent}>
            <Autocomplete
              values={countries}
              value={props.country}
              setValue={props.setCountry}
            />
            <Box width="100%" height="8px" />
            <Typography variant="body2" color="secondary">
              {t('reports.form.textfield.location_expl')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* exact location */}
      <Grid
        item
        xs={12}
        md={12}
        lg={6}
        css={isMobileWidth && styles.gridMobile}
        data-cy="exact-location"
      >
        <Card>
          <CardHeader title={t('reports.form.textfield.exact_location')} />
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
                  testattr="remove-button"
                  text="Remove"
                  onClick={() => props.setLocation(null)}
                />
              </>
            )}
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* budget & insinger-contribution */}
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        data-cy="budget-container"
        css={isMobileWidth && styles.gridMobile}
      >
        <Card>
          <CardHeader title={t('reports.form.textfield.budget')} />
          <CardContent
          // css={`
          //   padding-bottom: 6px !important;
          //   > div:first-of-type {
          //     height: inherit;
          //   }
          // `}
          >
            <IntentTexFieldSingleLine
              testattr="budget-field"
              fullWidth
              type="number"
              min={0}
              value={props.budget}
              setValue={props.setBudget}
              description=""
            />
            <Box height="14px" width="100%" />
            {/* <Box height="5px" width="100%" /> */}
            {/* <Typography variant="body2" color="secondary" css={styles.infoText}>
              {t('reports.form.textfield.remaining')}: {props.remainBudget}€
            </Typography> */}
          </CardContent>
        </Card>
        <div css="width: 100%;height: 50px;" />
        <Card>
          <CardHeader title={t('reports.form.textfield.contribution')} />
          <CardContent>
            <IntentTexFieldSingleLine
              testattr="insinger-contribution-field"
              fullWidth
              type="number"
              min={0}
              value={props.insContribution}
              setValue={props.setInsContribution}
              description=""
            />
            <Box height="14px" width="100%" />
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
