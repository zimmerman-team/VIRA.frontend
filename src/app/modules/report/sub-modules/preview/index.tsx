import React from 'react';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import {
  OutcomesPropsModel,
  PolicyPrioritiesPropsModel,
  IndicatorVerificationPropsModel,
  ChallengesPlansPropsModel,
} from 'app/modules/report/model';
import { Grid, Typography, Box } from '@material-ui/core';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';

const Spacer = () => <Box width="100%" height="35px" />;

export interface InfoTextCompParams {
  title: string;
  description: string;
}

export const InfoTextComp = (props: InfoTextCompParams) => (
  <React.Fragment>
    <Typography variant="subtitle2">{props.title}</Typography>
    <Box width="100%" height={props.title === '' ? '35px' : '10px'} />
    <Typography>{props.description}</Typography>
  </React.Fragment>
);

export const InfoTextAreaComp = (props: InfoTextCompParams) => (
  <Grid item container lg={12} spacing={1}>
    <Grid item lg={12}>
      <Typography variant="subtitle2">{props.title}</Typography>
    </Grid>
    <Box width="100%" height="10px" />
    <Grid
      item
      lg={12}
      css={`
        input {
          color: #000 !important;
        }
      `}
    >
      <SingleMultiLineTextField
        disabled
        fullWidth
        defaultValue={props.description}
      />
    </Grid>
  </Grid>
);

export const InfoTextMock: InfoTextCompParams[] = [
  {
    title: 'Title',
    description: 'Title name',
  },
  {
    title: 'Project location',
    description: 'Amsterda, 1396TH, Netherlands',
  },
  {
    title: 'Of which the beneficiaries will likely include approximately',
    description: 'Prisoner rehabilitation / reintegration',
  },
];

export const InfoTextAreaMock: InfoTextCompParams[] = [
  {
    title: 'Please describe the key outcomes the project aims to achieve',
    description:
      'Prisoners recidivism reduced through skills-training demonstrably improving their labor market access and retention upon release',
  },
  {
    title:
      'Please tell us how you intend to monitor and report on the outcomes',
    description:
      'Number of prisoners obtaining a Tertiary and Vocational Education certificate, labor market connection after one year after the release from prison',
  },
  {
    title:
      'Finally, please select which ones of these Insinger Foundation policy priorities the project aims to support.',
    description: 'Prisoner rehabilitation / reintegration',
  },
  {
    title: 'Key implementation challenges',
    description: 'Total number: 5',
  },
  {
    title: 'Other project outcomes and observations',
    description: 'Total number: 5',
  },
  {
    title: 'Future plans',
    description: 'Total number: 5',
  },
  {
    title: 'Other comments',
    description: 'Total number: 5',
  },
];

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
  <React.Fragment>
    {/* -------------------------------------------------------------- */}
    <Grid item lg={12}>
      <InfoTextComp title="Title" description={props.outcomesProps.title} />
    </Grid>
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <Grid item lg={12}>
      <InfoTextComp
        title="Country"
        description={props.outcomesProps.country.label}
      />
    </Grid>
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <Grid item container lg={12}>
      <Grid item sm={12} md={6} lg={4}>
        <InfoTextComp
          title="Target beneficiaries"
          description={`Total target number: ${props.policyPrioritiesProps.tarBenTotal}`}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <InfoTextComp
          title=""
          description={`Total number commited: ${props.policyPrioritiesProps.tarBenTotal2}`}
        />
      </Grid>
    </Grid>
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <Grid item lg={12}>
      <Typography variant="subtitle2">
        Of which the beneficiaries will likely include approximately
      </Typography>
    </Grid>
    <Box width="100%" height="10px" />
    <Grid container spacing={4}>
      {props.policyPrioritiesProps.beneficiaryCounts.map(b => (
        <Grid item lg={4}>
          <Typography>
            {b.name}: {b.value}
          </Typography>
        </Grid>
      ))}
    </Grid>
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <InfoTextAreaComp
      title="Please describe the key outcomes the project aims to achieve"
      description={props.indicatorVerificationProps.keyOutcomes}
    />
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <InfoTextAreaComp
      title="Please tell us how you intend to monitor and report on the outcomes"
      description={props.indicatorVerificationProps.monRepOutcomes}
    />
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <Grid item lg={12}>
      <Typography variant="subtitle2">
        Finally, please select which ones of these Insinger Foundation policy
        priorities the project aims to support.
      </Typography>
    </Grid>
    <Box width="100%" height="10px" />
    <Grid
      item
      lg={12}
      css={`
        display: flex;
      `}
    >
      <div
        css={`
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 20px;
          background: ${ProjectPalette.common.white};
          border: 5px solid ${ProjectPalette.secondary.main};
        `}
      />
      <Typography>
        {props.policyPrioritiesProps.policyPriority.label}
      </Typography>
    </Grid>
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <InfoTextAreaComp
      title="Key implementation challenges"
      description={props.challengesPlansProps.keyImplChallenges}
    />
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <InfoTextAreaComp
      title="Other project outcomes and observations"
      description={props.challengesPlansProps.otherProjOutObs}
    />
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <InfoTextAreaComp
      title="Future plans"
      description={props.challengesPlansProps.futurePlans}
    />
    <Spacer />

    {/* -------------------------------------------------------------- */}
    <InfoTextAreaComp
      title="Other comments"
      description={props.challengesPlansProps.otherComms}
    />
    <Spacer />
  </React.Fragment>
);
