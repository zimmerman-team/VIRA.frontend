import { Box, Typography } from '@material-ui/core';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import React from 'react';
import 'styled-components/macro';
import { InfoCaption } from './InfoCaption';
import { FieldDescription } from './FieldDescription';

export interface IntentTexFieldSingleLineParams {
  description: string;
  tooltip?: string;
  text?: string;
  explanation?: string;
  componentID?: string;
}

export const IntentTexFieldSingleLine = (
  props: IntentTexFieldSingleLineParams
) => (
  <React.Fragment>
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
      `}
    >
      <Typography
        css={`
          font-size: 14px;
          line-height: 1.71;
          letter-spacing: 0.25px;
          //margin-right: 15px;
          width: 60%;
        `}
        variant="subtitle2"
        color="textPrimary"
      >
        {props.description}
      </Typography>

      <SingleMultiLineTextField
        fullWidth
        id={props.componentID}
        // placeholder="Type"
        setValue={() => console.info('value set')}
        css={`
          width: 90px;
        `}
      />
    </div>
  </React.Fragment>
);
