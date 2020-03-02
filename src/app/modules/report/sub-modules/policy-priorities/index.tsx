import React from 'react';
import { css } from 'styled-components/macro';
import {
  Grid,
  Typography,
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
    overflow: visible;
  `,
  cardHeader: css`
    padding: 12px !important;
  `,
  cardContent: css`
    padding: 12px !important;
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
  infoText: css`
    bottom: 0;
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
            title="Insinger Foundation policy priorities"
          />
          <CardContent css={styles.cardContent}>
            <Autocomplete
              values={policyPriorities}
              value={props.policyPriority}
              setValue={props.setPolicyPriority}
            />
            <div
              css={`
                width: 100%;
                height: 24px;
              `}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
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
          <CardHeader css={styles.cardHeader} title="Budget" />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              fullWidth
              type="number"
              min={0}
              value={props.budget}
              setValue={props.setBudget}
              description=""
            />
            <div
              css={`
                width: 100%;
                height: 24px;
              `}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              Remaning fot this project: {props.remainBudget}€
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* Budget */}
      <Grid item xs={12} md={6} lg={4}>
        <Card css={styles.card}>
          <CardHeader css={styles.cardHeader} title="Insinger Contribution" />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              fullWidth
              type="number"
              min={0}
              // TODO: change these to correct prop vars ! ! !
              value={props.budget}
              setValue={props.setBudget}
              description=""
            />
            <div
              css={`
                width: 100%;
                height: 24px;
              `}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              Remaning fot this project: {props.remainBudget}€
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* /!* ---------------------------------------------------------------------*!/ */}
      {/* /!* Target beneficiaries *!/ */}
      <Grid item sm={12} md={6} lg={4}>
        <Card css={styles.card}>
          <CardHeader css={styles.cardHeader} title="Target Beneficiaries" />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              fullWidth
              type="number"
              min={0}
              value={props.tarBenTotal}
              description=""
              setValue={props.setTarBenTotal}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <Card css={styles.card}>
          <CardHeader css={styles.cardHeader} title="Total commited number" />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              fullWidth
              type="number"
              min={0}
              value={props.tarBenTotal2}
              description=""
              setValue={props.setTarBenTotal2}
            />
          </CardContent>
        </Card>
      </Grid>

      {/* /!* ---------------------------------------------------------------------*!/ */}
      {/* /!* Of which the beneficiaries will likely include approximately *!/ */}
      <Grid item container sm={12} md={10} lg={8}>
        <Card css={styles.card}>
          <CardHeader
            css={styles.cardHeader}
            title="Of which the beneficiaries will likely include approximately (Optional)"
          />
          <CardContent css={styles.cardContent}>
            <Grid item container lg={12} spacing={5}>
              {props.beneficiaryCounts.map((item: any, index: number) => (
                <Grid item xs={12} md={6} lg={4} key={item.name}>
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
            </Grid>
            <div
              css={`
                width: 100%;
                height: 24px;
              `}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              For each priority selected, the relevant SDGs appear and can be
              selected based on our mapping
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
