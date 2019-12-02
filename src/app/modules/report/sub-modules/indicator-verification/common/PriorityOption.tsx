import React from 'react';
import {
  Grid,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { outcomeCheckboxes } from 'app/modules/report/mock';

export interface PriorityOptionParams {
  description: string;
  explanation?: string;
}
export const PolicyPriorityOptions = (props: PriorityOptionParams) => (
  <React.Fragment>
    <Typography>{props.description}</Typography>
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
    {props.explanation && <Typography>{props.explanation}</Typography>}
  </React.Fragment>
);
