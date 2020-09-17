import React from 'react';
import find from 'lodash/find';
import sumBy from 'lodash/sumBy';
import {
  Grid,
  Typography,
  CardHeader,
  Card,
  CardContent,
  Box,
} from '@material-ui/core';
import { useIsMount } from 'app/utils/useIsMount';

/* multilabg */
import { useTranslation } from 'react-i18next';

/* data */
import {
  BeneficiaryCountsModel,
  PolicyPrioritiesPropsModel,
} from 'app/modules/report/model';

/* ui */
import { styles } from 'app/modules/report/sub-modules/policy-priorities/styles';
import { RadioButtonsGroup } from 'app/components/inputs/radiobuttons/RadioButtonGroup';
import { Autocomplete } from 'app/modules/report/sub-modules/outcomes/common/Autocomplete';
import { PercentageDropdown } from 'app/modules/report/sub-modules/policy-priorities/common/percentage-dropdown';
import { IntentTexFieldSingleLine } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextFieldSingleLine';

/* mock */
import {
  sdgs,
  pillars,
  funderList,
  FunderProps,
  PolicyPriorityProps,
  pillar1PolicyPriorities,
  pillar2PolicyPriorities,
} from 'app/modules/report/sub-modules/policy-priorities/mock';
import SmallIconChecked from 'app/assets/icons/SmallIconChecked';

export const PolicyPrioritiesLayout = (props: PolicyPrioritiesPropsModel) => {
  const isMount = useIsMount();
  const { t } = useTranslation();
  const [isBlur, setIsBlur] = React.useState(false);
  const [showTargetGroupMessage, setShowTargetGroupMessage] = React.useState(
    ''
  );

  React.useEffect(() => {
    const ppTotal = sumBy(props.policyPriorities, 'weight');
    const sdgsTotal = sumBy(props.sdgs, 'weight');
    setIsBlur(ppTotal < 100 || sdgsTotal < 100);
  }, [props.policyPriorities, props.sdgs]);

  // React.useEffect(() => {
  //   if (!isMount) {
  //     props.setPolicyPriorities([]);
  //   }
  // }, [props.pillar]);

  React.useEffect(() => {
    if (
      find(
        props.beneficiaryCounts,
        (bc: BeneficiaryCountsModel) => bc.value > 0
      )
    ) {
      setShowTargetGroupMessage(
        t('reports.form.textfield.target_group_sdg_expl')
      );
    } else {
      setShowTargetGroupMessage('');
    }
  }, [props.beneficiaryCounts]);

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
              testid={'dropdown-one'}
              values={
                props.pillar === 'Pillar 1: Social Good Projects'
                  ? pillar1PolicyPriorities
                  : pillar2PolicyPriorities
              }
              value={props.policyPriorities}
              setValue={props.setPolicyPriorities}
            />
            {/* <Box height="14px" width="100%" /> */}
            <Box height="5px" width="100%" />
            <Typography
              variant="body2"
              color="secondary"
              css={styles.infoTextWithIcon}
            >
              {t('reports.form.textfield.percentage_expl')}
              {sumBy(props.policyPriorities, 'weight') === 100 && (
                <SmallIconChecked />
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* SDGs */}
      <Grid data-cy="sdgs" item xs={12} md={12} lg={4}>
        <Card css={styles.card}>
          <CardHeader title={t('reports.form.textfield.sdgs')} />
          <CardContent>
            <PercentageDropdown
              testid={'dropdown-two'}
              values={sdgs}
              value={props.sdgs}
              setValue={props.setSDGs}
              listItemTooltipPath="sdg_descriptions"
            />
            {/* <Box height="14px" width="100%" /> */}
            <Box height="5px" width="100%" />
            <Typography
              variant="body2"
              color="secondary"
              css={styles.infoTextWithIcon}
            >
              {t('reports.form.textfield.percentage_expl')}
              {sumBy(props.sdgs, 'weight') === 100 && <SmallIconChecked />}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={false} sm={false} md={false} lg={4} />

      {/* ---------------------------------------------------------------------*/}
      {/* Budget */}
      <Grid
        data-cy="budget-container"
        item
        xs={12}
        md={6}
        lg={4}
        css={isBlur ? styles.blurBlock : ``}
      >
        <Card css={styles.card}>
          <CardHeader title={t('reports.form.textfield.budget')} />
          <CardContent
            css={`
              padding-bottom: 6px !important;
              > div:first-of-type {
                height: inherit;
              }
            `}
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
            <Box height="5px" width="100%" />
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
        css={isBlur ? styles.blurBlock : ``}
      >
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

            <Box height="14px" width="100%" />
          </CardContent>
        </Card>
      </Grid>

      {/* --------------------------------------------------------------------- */}
      {/* Total committed number */}
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
        <Card css={styles.card}>
          <CardHeader title={t('reports.form.textfield.other_funders')} />
          <CardContent>
            <Autocomplete
              testAttr="dropdown-jan"
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
        lg={10}
        css={isBlur ? styles.blurBlock : ``}
        spacing={0}
      >
        <Card css={styles.card}>
          <CardHeader title={t('reports.form.textfield.of_which_ben')} />
          <CardContent>
            <Grid item container lg={12} spacing={4}>
              {props.beneficiaryCounts.map((item: any, index: number) => (
                <Grid item xs={12} md={6} lg={3} key={item.name}>
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

            {showTargetGroupMessage !== '' && (
              <Typography
                color="secondary"
                variant="subtitle1"
                css={styles.infoText}
              >
                {showTargetGroupMessage}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
