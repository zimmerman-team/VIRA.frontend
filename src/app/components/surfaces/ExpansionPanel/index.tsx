/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import 'styled-components/macro';

import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanelModel } from 'app/components/surfaces/ExpansionPanel/model';
import Box from '@material-ui/core/Box';
import { ProjectPalette } from 'app/theme';
import { css } from 'styled-components/macro';

const ExpansionPanelStyle = css`
  //margin: 8px !important;
  margin-bottom: 8px !important;

  && {
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08) !important;
  }
  & [class*='MuiExpansionPanelSummary-root Mui-expanded'] {
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08) !important;
  }
  && :before {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const ExpansionPanelSummaryStyle = css`
  && {
    height: 80px;
    padding: 0 32px 0 32px;
    box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08);
    [class*='MuiExpansionPanelSummary-content'] {
      margin: 28px 0;
    }
    svg {
      font-size: 40px;
    }
    && [class*='MuiPaper-elevation1'] {
      border: 1px red solid !important;
    }
  }
`;

const SubtitleStyle = css`
  color: ${ProjectPalette.common.black} !important;
  font-size: 16px !important;
  font-weight: 500 !important;
`;

const ExpandMoreIconStyle = css`
  color: #a1aebd;
`;

const ExpansionPanelDetailsStyle = css`
  && {
    padding: 33px 29.7px 33px 29.7px;
  }
`;

export const ExpansionPanel = (props: ExpansionPanelModel) => {
  return (
    <Box width="100%">
      {props.faqItems.map((question, index) => (
        <Accordion
          square
          css={ExpansionPanelStyle}
          key={`question-${index}`}
          data-cy={`question-${index}`}
        >
          <AccordionSummary
            css={ExpansionPanelSummaryStyle}
            expandIcon={<ExpandMoreIcon css={ExpandMoreIconStyle} />}
          >
            <Typography
              variant="subtitle1"
              css={SubtitleStyle}
              data-cy={`question-${index}-title`}
            >
              {question.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails css={ExpansionPanelDetailsStyle}>
            <Typography variant="body1" data-cy={`question-${index}-expl`}>
              {question.expl}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
