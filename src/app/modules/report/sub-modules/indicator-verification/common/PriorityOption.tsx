import 'styled-components/macro';
import React from 'react';
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { outcomeCheckboxes } from 'app/modules/report/mock';
import { InfoCaption } from './InfoCaption';

export interface PriorityOptionParams {
  description: string;
  explanation?: string;
}

export const PolicyPriorityOptions = (props: PriorityOptionParams) => (
  <React.Fragment>
    <Typography variant="subtitle2" color="textPrimary">
      {props.description}
    </Typography>
    <Grid container>
      {outcomeCheckboxes.map(checkbox => (
        <Grid item key={checkbox.value} lg={6}>
          <FormControlLabel
            label={checkbox.label}
            control={<Checkbox value={checkbox.value} />}
          />
        </Grid>
      ))}
    </Grid>
    {props.explanation && <InfoCaption text={props.explanation} />}
  </React.Fragment>
);
