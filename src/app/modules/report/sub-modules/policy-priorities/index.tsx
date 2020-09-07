import React from 'react';
import {
  Grid,
  Typography,
  CardHeader,
  Card,
  CardContent,
  Box,
} from '@material-ui/core';

/* multilabg */
import { useTranslation } from 'react-i18next';

/* data */
import { PolicyPrioritiesPropsModel } from 'app/modules/report/model';

/* ui */
import { styles } from 'app/modules/report/sub-modules/policy-priorities/styles';
import { RadioButtonsGroup } from 'app/components/inputs/radiobuttons/RadioButtonGroup';
import { Autocomplete } from 'app/modules/report/sub-modules/outcomes/common/Autocomplete';
import { PercentageDropdown } from 'app/modules/report/sub-modules/policy-priorities/common/percentage-dropdown';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';

/* mock */
import {
  pillars,
  funderList,
  FunderProps,
  policyPriorities,
  PolicyPriorityProps,
} from 'app/modules/report/sub-modules/policy-priorities/mock';

export const PolicyPrioritiesLayout = (props: PolicyPrioritiesPropsModel) => {
  const { t } = useTranslation();
  const [isBlur, setIsBlur] = React.useState(false);

  React.useEffect(() => {
    setIsBlur(
      props.policyPriorities.length > 0 ||
        props.budget === 0 ||
        props.insContribution === 0
    );
  }, [props.policyPriorities, props.budget, props.insContribution]);

  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* Pillar */}
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        data-cy="pillar-radio-buttons"
        css="padding-left: 32px !important;"
      >
        <RadioButtonsGroup
          items={pillars}
          value={props.pillar}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.setPillar(event.target.value)
          }
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* Policy Priorities */}
      <Grid data-cy="policy-priority" item xs={12} md={12} lg={4}>
        <Card css={styles.card}>
          <CardHeader
            title={t('reports.form.textfield.insinger_f_policy_priorities')}
          />
          <CardContent>
            <PercentageDropdown
              values={policyPriorities.map(
                (policyPriority: PolicyPriorityProps) => ({
                  ...policyPriority,
                  label: t(policyPriority.label),
                })
              )}
              value={props.policyPriorities}
              setValue={props.setPolicyPriorities}
            />
            <Box height="14px" width="100%" />
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* Budget */}
      <Grid data-cy="budget-container" item xs={12} md={6} lg={4}>
        <Card css={styles.card}>
          <CardHeader title={t('reports.form.textfield.budget')} />
          <CardContent>
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
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              {t('reports.form.textfield.remaining')}: {props.remainBudget}€
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* Insinger contribution */}
      <Grid data-cy="insinger-contribution" item xs={12} md={6} lg={4}>
        <Card css={styles.card}>
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

      {/* --------------------------------------------------------------------- */}
      {/* Target beneficiaries */}

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={4}
        css={isBlur ? styles.blurBlock : ``}
      >
        <Card css={styles.card}>
          <CardHeader
            title={t('reports.form.textfield.target_beneficiaries')}
          />
          <CardContent>
            <IntentTexFieldSingleLine
              testattr="target-beneficiaries-field"
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

      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={4}
        css={isBlur ? styles.blurBlock : ``}
      >
        <Card css={styles.card}>
          <CardHeader title={t('reports.form.textfield.total_commited')} />
          <CardContent css={styles.cardContent}>
            <IntentTexFieldSingleLine
              testattr="total-committed-field"
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

      {/* ---------------------------------------------------------------------*/}
      {/* Other funders */}
      <Grid
        data-cy="other-funders"
        item
        xs={12}
        md={12}
        lg={4}
        css={isBlur ? styles.blurBlock : ``}
      >
        <Card css={styles.cardSecondary}>
          <CardHeader title={t('reports.form.textfield.other_funders')} />
          <CardContent>
            <Autocomplete
              multiple
              values={funderList.map((funder: FunderProps) => ({
                ...funder,
                label: t(funder.label),
              }))}
              value={props.funders}
              setValue={props.setFunders}
            />
            {/*<Box height="14px" width="100%" />*/}
          </CardContent>
        </Card>
      </Grid>

      {/* /!* ---------------------------------------------------------------------*!/ */}
      {/* /!* Of which the beneficiaries will likely include approximately *!/ */}
      <Grid
        item
        container
        sm={12}
        md={12}
        lg={8}
        css={isBlur ? styles.blurBlock : ``}
        spacing={0}
      >
        <Card css={styles.card}>
          <CardHeader title={t('reports.form.textfield.of_which_ben')} />
          <CardContent>
            <Grid item container lg={12} spacing={4}>
              {props.beneficiaryCounts.map((item: any, index: number) => (
                <Grid item xs={12} md={6} lg={4} key={item.name}>
                  <IntentTexFieldSingleLine
                    testattr={`which-when-item-${index}`}
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
              {t('reports.form.textfield.sdg_mapping_expl')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
