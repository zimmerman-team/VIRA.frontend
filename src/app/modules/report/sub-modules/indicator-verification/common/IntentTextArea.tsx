import React from 'react';
import 'styled-components/macro';
import {
  Box,
  Typography,
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';
import {
  ExpandMoreIconStyle,
  ExpansionPanelStyle,
  ExpansionPanelSummaryStyle,
  ExpansionPanelDetailsStyle,
} from 'app/components/surfaces/ExpansionPanel';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { InfoCaption } from './InfoCaption';
import { FieldDescription } from './FieldDescription';

export interface IntentTextAreaParams {
  description: string;
  tooltip?: string;
  text?: string;
  explanation?: string;
  componentID?: string;
  value: string;
  setValue: Function;
  testattr?: string;
}

export const IntentTexArea = (props: IntentTextAreaParams) => (
  <Accordion
    square
    css={ExpansionPanelStyle}
    key={props.description}
    data-cy={`${props.testattr}-container`}
  >
    <AccordionSummary
      css={ExpansionPanelSummaryStyle}
      expandIcon={<ExpandMoreIcon css={ExpandMoreIconStyle} />}
    >
      <div
        css={`
          display: flex;
          align-items: center;

          @media (max-width: 768px) {
            align-items: flex-start;
          }
        `}
      >
        <FieldDescription text={props.description} />
        {props.tooltip && <Tooltip tip={props.tooltip} />}
      </div>
    </AccordionSummary>
    <AccordionDetails css={ExpansionPanelDetailsStyle}>
      <SingleMultiLineTextField
        testattr={props.testattr}
        fullWidth
        multiline
        // placeholder="Type"
        value={props.value}
        id={props.componentID}
        setValue={props.setValue}
      />
      {props.explanation && (
        <Typography
          variant="body2"
          color="secondary"
          css={`
            font-style: normal;
            font-weight: 300;
            font-size: 12px;
            bottom: 0;
          `}
        >
          {props.explanation}
        </Typography>
      )}
    </AccordionDetails>
  </Accordion>
);
