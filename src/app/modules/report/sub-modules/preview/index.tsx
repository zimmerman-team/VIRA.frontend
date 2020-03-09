import React from 'react';
import 'styled-components/macro';
import { Grid } from '@material-ui/core';
import {
  OutcomesPropsModel,
  PolicyPrioritiesPropsModel,
  IndicatorVerificationPropsModel,
  ChallengesPlansPropsModel,
  BeneficiaryCountsModel,
} from 'app/modules/report/model';
import { PreviewCard } from './common/PreviewCard';

type Props = {
  step2Enabled: boolean;
  step3Enabled: boolean;
  step4Enabled: boolean;
  step5Enabled: boolean;
  outcomesProps: OutcomesPropsModel;
  policyPrioritiesProps: PolicyPrioritiesPropsModel;
  indicatorVerificationProps: IndicatorVerificationPropsModel;
  challengesPlansProps: ChallengesPlansPropsModel;
};

export const PreviewLayout = (props: Props) => (
  <Grid container spacing={4}>
    <Grid item xs={12} lg={6}>
      <PreviewCard
        title="Please provide a title for your report"
        content={props.outcomesProps.title}
      />
    </Grid>
    <Grid item xs={12} lg={6}>
      <PreviewCard
        title="Add Location"
        content={props.outcomesProps.country.label}
        explanation="In which of the following geographical locations will the project be implemented"
      />
    </Grid>
    <Grid item xs={12} lg={6}>
      <PreviewCard
        title="Insinger Foundation policy priorities"
        tooltip="Insinger Foundation policy priorities"
        content={props.policyPrioritiesProps.policyPriority.label}
        explanation="For each priority selected, the relevant SDGs appear and can be selected based on our mapping"
      />
    </Grid>
    <Grid item xs={12} lg={6}>
      <PreviewCard
        title="Budget"
        tooltip="Budget"
        content={props.policyPrioritiesProps.budget}
      />
    </Grid>
    <Grid item xs={12} lg={6}>
      <PreviewCard
        title="Target beneficiaries"
        tooltip="Target beneficiaries"
        content={props.policyPrioritiesProps.tarBenTotal}
      />
    </Grid>
    <Grid item xs={12} lg={6}>
      <PreviewCard
        title="Of which the beneficiaries will likely include approximately"
        tooltip="Of which the beneficiaries will likely include approximately"
        content={props.policyPrioritiesProps.beneficiaryCounts.map(
          (b: BeneficiaryCountsModel) => `${b.name}: ${b.value}`
        )}
      />
    </Grid>
    <Grid item xs={12} lg={12}>
      <PreviewCard
        title="Please describe the key outcomes the project aims to achieve"
        tooltip="Please describe the key outcomes the project aims to achieve"
        content={props.indicatorVerificationProps.keyOutcomes}
      />
    </Grid>
    <Grid item xs={12} lg={12}>
      <PreviewCard
        title="Please tell us how you intend to monitor and report on the outcomes listed above"
        tooltip="Please tell us how you intend to monitor and report on the outcomes listed above"
        content={props.indicatorVerificationProps.monRepOutcomes}
      />
    </Grid>
    <Grid item xs={12} lg={12}>
      <PreviewCard
        title="Key implementation challenges"
        tooltip="Key implementation challenges"
        content={props.challengesPlansProps.keyImplChallenges}
        explanation="Please indicate the key implementation challenges experience and how these were addressed"
      />
    </Grid>
    <Grid item xs={12} lg={12}>
      <PreviewCard
        title="Other project outcomes and observations"
        tooltip="Other project outcomes and observations"
        content={props.challengesPlansProps.otherProjOutObs}
        explanation="Did the project achieve any other unexpected (positive or negative) outcomes"
      />
    </Grid>
    <Grid item xs={12} lg={12}>
      <PreviewCard
        title="Future plans"
        tooltip="Future plans"
        content={props.challengesPlansProps.futurePlans}
        explanation="Are you likely to apply for funding for future activities from the Insinger Foundation within the next 1-2 years?"
      />
    </Grid>
    <Grid item xs={12} lg={12}>
      <PreviewCard
        title="Other comments"
        tooltip="Other comments"
        content={props.challengesPlansProps.otherComms}
        explanation="Please let us know if you want to share other observations or comments with the Insinger Foundation"
      />
    </Grid>
    <div
      css={`
        width: 100%;
        height: 54px;
      `}
    />
  </Grid>
);
