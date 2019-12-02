import React from 'react';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';
import { Typography, Box } from '@material-ui/core';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';

export interface IntentTextAreaParams {
  description: string;
  tooltip?: string;
  text?: string;
  explanation?: string;
  componentID?: string;
}
export const IntentTexArea = (props: IntentTextAreaParams) => (
  <React.Fragment>
    <Typography>{props.description}</Typography>
    {props.tooltip && <Tooltip tip={props.tooltip} />}
    <SingleMultiLineTextField
      fullWidth
      multiline
      id={props.componentID}
      placeholder="Type"
      setValue={() => console.log('value set')}
    />
    {props.explanation && <Typography>{props.explanation}</Typography>}
    <Box width="100%" height="30px" />
  </React.Fragment>
);
