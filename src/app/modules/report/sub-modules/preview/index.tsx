import React from 'react';
import 'styled-components/macro';
import { Grid, Hidden, useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
  OutcomesPropsModel,
  PolicyPrioritiesPropsModel,
  IndicatorVerificationPropsModel,
  ChallengesPlansPropsModel,
  BeneficiaryCountsModel,
} from 'app/modules/report/model';
import { PreviewCard } from './common/PreviewCard';

interface PreviewParams {
  step2Enabled: boolean;
  step3Enabled: boolean;
  step4Enabled: boolean;
  step5Enabled: boolean;
  outcomesProps: OutcomesPropsModel;
  policyPrioritiesProps: PolicyPrioritiesPropsModel;
  indicatorVerificationProps: IndicatorVerificationPropsModel;
  challengesPlansProps: ChallengesPlansPropsModel;
}

const Spacer = () => (
  <Hidden smUp>
    <div
      css={`
        width: 100%;
        height: 25px;
      `}
    />
  </Hidden>
);

export const PreviewLayout = (props: PreviewParams) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {/* --------------------------------- */}
      {/* title */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.preview_title"
          content={props.outcomesProps.title}
          testattr="title-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* location */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.location"
          content={props.outcomesProps.country.label}
          explanation={t('reports.form.textfield.location_expl')}
          testattr="location-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* insinger policy priorities */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.insinger_f_policy_priorities"
          tooltip="reports.form.textfield.insinger_f_policy_priorities"
          content={props.policyPrioritiesProps.policyPriorities.map(
            (pp) => `${t(pp.label)}: ${pp.weight}%`
          )}
          // explanation="reports.form.textfield.sdg_mapping_expl"
          testattr="policy-priority-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* SDGs */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.sdgs"
          tooltip="reports.form.textfield.sdgs"
          content={props.policyPrioritiesProps.sdgs.map(
            (sdg) => `${t(sdg.label)}: ${sdg.weight}%`
          )}
          testattr="sdgs-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* budget */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.budget"
          tooltip="reports.form.textfield.budget"
          content={props.policyPrioritiesProps.budget}
          testattr="budget-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* insinger contribution */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.contribution"
          tooltip="reports.form.textfield.contribution"
          content={props.policyPrioritiesProps.insContribution}
          testattr="contribution-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* target beneficiaries */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.target_beneficiaries"
          tooltip="reports.form.textfield.target_beneficiaries"
          content={props.policyPrioritiesProps.tarBenTotal}
          testattr="target-beneficiaries-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* total committed */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.total_commited"
          tooltip="reports.form.textfield.total_commited"
          content={props.policyPrioritiesProps.tarBenTotal2}
          testattr="target-beneficiaries-2-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* Of which the beneficiaries will likely include approximately (Optional) */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.of_which_ben"
          tooltip="reports.form.textfield.of_which_ben"
          content={props.policyPrioritiesProps.beneficiaryCounts.map(
            (b: BeneficiaryCountsModel) => `${b.name}: ${b.value}`
          )}
          testattr="include-ben-preview-card"
        />
      </Grid>

      <Spacer />

      {/* --------------------------------- */}
      {/* Other funders */}
      <Grid item xs={12} lg={6}>
        <PreviewCard
          title="reports.form.textfield.other_funders"
          tooltip="reports.form.textfield.other_funders"
          content={props.policyPrioritiesProps.funders}
          testattr="other-funders-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.key_outcomes"
          tooltip="reports.form.cards.key_outcomes"
          content={props.indicatorVerificationProps.keyOutcomes}
          testattr="key-outcomes-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.monitor"
          tooltip="reports.form.cards.monitor_expl"
          content={props.indicatorVerificationProps.monRepOutcomes}
          testattr="outcomes-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.inputs_invested"
          tooltip="reports.form.cards.inputs_invested"
          content={props.indicatorVerificationProps.inputsInvested}
          testattr="inputs-invested-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.activities_undertaken"
          tooltip="reports.form.cards.activities_undertaken"
          content={props.indicatorVerificationProps.activitiesUndertaken}
          testattr="activities-undertaken-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.projectgoals_socialbenefits"
          tooltip="reports.form.cards.projectgoals_socialbenefits"
          content={props.indicatorVerificationProps.projectgoalsSocialbenefits}
          testattr="projectgoals-socialbenefits-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.important_factors"
          tooltip="reports.form.cards.important_factors"
          content={props.indicatorVerificationProps.importantFactors}
          testattr="important-factors-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.orgs_partners"
          tooltip="reports.form.cards.orgs_partners"
          content={props.indicatorVerificationProps.orgsPartners}
          testattr="orgs-partners-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.key_implementation_challenges"
          tooltip="reports.form.cards.key_implementation_challenges"
          content={props.challengesPlansProps.keyImplChallenges}
          explanation="reports.form.cards.key_implementation_challenges_expl"
          testattr="key-implementation-challenges-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.how_address_challenges"
          tooltip="reports.form.cards.how_address_challenges"
          content={props.challengesPlansProps.addressChallenges}
          testattr="how-address-challenges-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.other_project"
          tooltip="reports.form.cards.other_project"
          content={props.challengesPlansProps.otherProjOutObs}
          testattr="other-project-preview-card"
        />
      </Grid>

      <Spacer />

      <Grid item container xs={12} lg={12}>
        <Grid item xs={12} lg={6}>
          <PreviewCard
            title="reports.form.cards.how_important_insinger_support"
            tooltip="reports.form.cards.how_important_insinger_support"
            content={
              t(
                props.challengesPlansProps.howImportantInsingerSupport
              ) as string
            }
            testattr="how-important-insinger-support-preview-card"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <PreviewCard
            title="reports.form.cards.apply_for_more_funding"
            tooltip="reports.form.cards.apply_for_more_funding"
            content={
              t(props.challengesPlansProps.applyForMoreFunding) as string
            }
            testattr="apply-for-more-funding-preview-card"
          />
        </Grid>
      </Grid>

      <Spacer />

      <Grid item xs={12} lg={12}>
        <PreviewCard
          title="reports.form.cards.other_comments"
          tooltip="reports.form.cards.other_comments"
          content={props.challengesPlansProps.otherComms}
          explanation="reports.form.cards.other_comments_expl"
          testattr="other-comments-preview-card"
        />
      </Grid>

      <div
        css={`
          width: 100%;
          height: 54px;
        `}
      />
    </React.Fragment>
  );
};
