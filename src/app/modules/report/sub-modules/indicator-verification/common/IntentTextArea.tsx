import { Box } from '@material-ui/core';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import React from 'react';
import 'styled-components/macro';
import { InfoCaption } from './InfoCaption';
import { FieldDescription } from './FieldDescription';

export interface IntentTextAreaParams {
  description: string;
  tooltip?: string;
  text?: string;
  explanation?: string;
  componentID?: string;
}

export const IntentTexArea = (props: IntentTextAreaParams) => (
  <React.Fragment>
    <FieldDescription text={props.description} />
    {props.tooltip && <Tooltip tip={props.tooltip} />}
    <Box width="100%" height="20px" />
    <SingleMultiLineTextField
      fullWidth
      multiline
      id={''}
      placeholder="Type"
      setValue={() => console.info('value set')}
    />
    {props.explanation && <InfoCaption text={props.explanation} />}
    <Box width="100%" height="30px" />
  </React.Fragment>
);
