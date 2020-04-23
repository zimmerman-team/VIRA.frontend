import React from 'react';
import { css } from 'styled-components/macro';
import {
  Grid,
  Typography,
  CardHeader,
  Card,
  CardContent,
  useMediaQuery,
  Hidden,
  Box,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
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
  blurBlock: css`
    opacity: 0.2;
    pointer-events: none;
  `,
  gridMobile: css`
    padding-top: 0 !important;
  `,
};

export const PolicyPrioritiesLayout = (props: PolicyPrioritiesPropsModel) => {
  const { t } = useTranslation();
  const isMobileWidth = useMediaQuery('(max-width: 600px)');
  const [isBlur, setIsBlur] = React.useState(false);

  React.useEffect(() => {
    setIsBlur(
      props.policyPriority.value === '' ||
        props.budget === 0 ||
        props.insContribution === 0
    );
  }, [props.policyPriority, props.budget, props.insContribution]);

  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* Policy Priorities */}
      <Grid data-cy="policy-priority" item xs={12} md={12} lg={4}>
        <Card css={styles.card}>
          <CardHeader
            css={styles.cardHeader}
            title={t('reports.form.textfield.insinger_f_policy_priorities')}
          />
          <CardContent css={styles.cardContent}>
            <Autocomplete
              values={policyPriorities.map((pp: any) => ({
                ...pp,
                label: t(pp.label),
              }))}
              value={props.policyPriority}
              setValue={props.setPolicyPriority}
            />
            <Box height="24px" width="100%" />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              {t('reports.form.textfield.sdg_mapping_expl')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* Budget */}
      <Grid
        data-cy="budget-container"
        item
        xs={12}
        md={6}
        lg={4}
        css={isMobileWidth && styles.gridMobile}
      >
        <Card css={styles.card}>
          <CardHeader
            css={styles.cardHeader}
            title={t('reports.form.textfield.budget')}
          />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              testAttr="budget-field"
              fullWidth
              type="number"
              min={0}
              value={props.budget}
              setValue={props.setBudget}
              description=""
            />
            <Box height="24px" width="100%" />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              {t('reports.form.textfield.remaining')}: {props.remainBudget}€
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* Insinger contribution */}
      <Grid
        data-cy="insinger-contribution"
        item
        xs={12}
        md={6}
        lg={4}
        css={isMobileWidth && styles.gridMobile}
      >
        <Card css={styles.card}>
          <CardHeader
            css={styles.cardHeader}
            title={t('reports.form.textfield.contribution')}
          />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              testAttr="insinger-contribution-field"
              fullWidth
              type="number"
              min={0}
              value={props.insContribution}
              setValue={props.setInsContribution}
              description=""
            />

            <Box height="24px" width="100%" />
          </CardContent>
        </Card>
      </Grid>

      <Hidden smDown>
        <Box height="80px" width="100%" />
      </Hidden>

      {/* /!* ---------------------------------------------------------------------*!/ */}
      {/* /!* Target beneficiaries *!/ */}
      <Grid container item lg={12} css={isBlur ? styles.blurBlock : ``}>
        <Grid item sm={12} md={6} lg={4}>
          <Card css={styles.card}>
            <CardHeader
              css={styles.cardHeader}
              title={t('reports.form.textfield.target_beneficiaries')}
            />
            <CardContent css={styles.cardContent}>
              <IntentTexFieldSingleLine
                testAttr="target-beneficiaries-field"
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
            <CardHeader
              css={styles.cardHeader}
              title={t('reports.form.textfield.total_commited')}
            />
            <CardContent css={styles.cardContent}>
              <IntentTexFieldSingleLine
                testAttr="total-committed-field"
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

        <Hidden smDown>
          <Box height="80px" width="100%" />
        </Hidden>

        {/* /!* ---------------------------------------------------------------------*!/ */}
        {/* /!* Of which the beneficiaries will likely include approximately *!/ */}
        <Grid
          item
          container
          sm={12}
          md={10}
          lg={8}
          css={isMobileWidth && styles.gridMobile}
        >
          <Card css={styles.card}>
            <CardHeader
              css={styles.cardHeader}
              title={t('reports.form.textfield.of_which_ben')}
            />
            <CardContent css={styles.cardContent}>
              <Grid item container lg={12} spacing={5}>
                {props.beneficiaryCounts.map((item: any, index: number) => (
                  <Grid item xs={12} md={6} lg={4} key={item.name}>
                    <IntentTexFieldSingleLine
                      testAttr={`which-when-item-${index}`}
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
              <Typography
                variant="body2"
                color="secondary"
                css={styles.infoText}
              >
                {t('reports.form.textfield.sdg_mapping_expl')}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
