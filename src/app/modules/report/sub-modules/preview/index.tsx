import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';

const Spacer = () => <Box width="100%" height="35px" />;

export interface InfoTextCompParams {
  title: string;
  description: string;
}
export const InfoTextComp = (props: InfoTextCompParams) => (
  <React.Fragment>
    <Typography>{props.title}</Typography>
    <Typography>{props.description}</Typography>
  </React.Fragment>
);

export const InfoTextAreaComp = (props: InfoTextCompParams) => (
  <Grid item container lg={12} spacing={1}>
    <Grid item lg={12}>
      <Typography variant="subtitle2">{props.title}</Typography>
    </Grid>

    <Grid item lg={12}>
      <SingleMultiLineTextField fullWidth defaultValue={props.description} />
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

export const PreviewLayout = () => (
  <React.Fragment>
    {/* -------------------------------------------------------------- */}
    <Grid item lg={12}>
      <InfoTextComp {...InfoTextMock[0]} />
    </Grid>

    <Spacer />

    {/* -------------------------------------------------------------- */}
    <Grid item lg={12}>
      <InfoTextComp {...InfoTextMock[1]} />
    </Grid>

    <Spacer />
    {/* -------------------------------------------------------------- */}
    <Grid item lg={12}>
      <InfoTextComp {...InfoTextMock[2]} />
    </Grid>

    <Spacer />
    {/* -------------------------------------------------------------- */}
    <Grid item lg={12}>
      <Typography>
        Of which the beneficiaries will likely include approximately
      </Typography>
      <Typography>Children/Young people: 1</Typography>
      <Typography>Elderly: 1</Typography>
      <Typography>Women: 1</Typography>
      <Typography>Refugees: 1</Typography>
      <Typography>Low income individuals: 1</Typography>
    </Grid>

    <Spacer />
    {/* -------------------------------------------------------------- */}

    {InfoTextAreaMock.map(item => (
      <React.Fragment>
        <InfoTextAreaComp {...item} />
        <Spacer />
      </React.Fragment>
    ))}
  </React.Fragment>
);
