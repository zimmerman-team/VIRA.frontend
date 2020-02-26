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
} from '@material-ui/core';
import { PolicyPrioritiesPropsModel } from 'app/modules/report/model';
import { policyPriorities } from 'app/modules/report/sub-modules/policy-priorities/mock';
import { Autocomplete } from 'app/modules/report/sub-modules/outcomes/common/Autocomplete';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';

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
  input: css`
    [class*='-input'] {
      width: 90px;
    }
  `,
  test: css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
};

export const PolicyPrioritiesLayout = (props: PolicyPrioritiesPropsModel) => {
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* Policy Priorities */}
      <Grid item xs={12} md={12} lg={4}>
        <Card css={styles.card}>
          <CardHeader
            css={styles.cardHeader}
            title={'Insinger Foundation policy priorities'}
          />
          <CardContent css={styles.cardContent}>
            <Autocomplete
              values={policyPriorities}
              value={props.policyPriority}
              setValue={props.setPolicyPriority}
            />
            <Typography variant="body2" color="secondary">
              For each priority selected, the relevant SDGs appear and can be
              selected based on our mapping
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* Budget */}
      <Grid item xs={12} md={6} lg={4}>
        <Card css={styles.card}>
          <CardHeader css={styles.cardHeader} title={'Budget'} />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              type="number"
              min={0}
              value={props.budget}
              setValue={props.setBudget}
              description=""
            />
            <Typography variant="body2" color="secondary">
              Remaning fot this project: {props.remainBudget}€
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* Target beneficiaries *!/*/}
      <Grid item sm={12} md={6} lg={4}>
        <Card css={styles.card}>
          <CardHeader css={styles.cardHeader} title={'Target Beneficiaries'} />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              type="number"
              min={0}
              value={props.tarBenTotal}
              description=""
              setValue={props.setTarBenTotal}
            />
          </CardContent>
        </Card>
      </Grid>

      {/*/!* ---------------------------------------------------------------------*!/*/}
      {/*/!* Of which the beneficiaries will likely include approximately *!/*/}
      <Grid item sm={12} md={8} lg={8}>
        <Card css={styles.card}>
          <CardHeader
            css={styles.cardHeader}
            title={
              'Of which the beneficiaries will likely include approximately'
            }
          />
          <CardContent css={styles.cardContent}>
            <div css={styles.test}>
              {props.beneficiaryCounts.map((item: any, index: number) => (
                <Grid item xs={12} lg={4} key={item.name}>
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
                    smallWidth
                  />
                </Grid>
              ))}
            </div>
            <Typography variant="body2" color="secondary">
              For each priority selected, the relevant SDGs appear and can be
              selected based on our mapping
            </Typography>
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
