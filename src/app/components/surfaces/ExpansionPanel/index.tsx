import React from 'react';
import 'styled-components/macro';
import styled from 'styled-components';
import { ExpansionPanel as MuiExpansionPanel } from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanelModel } from 'app/components/surfaces/ExpansionPanel/model';
import Box from '@material-ui/core/Box';
import { ProjectPalette } from 'app/theme';

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  && {
    color: ${ProjectPalette.common.black};
  }
`;

export const ExpansionPanel = (props: ExpansionPanelModel) => {
  return (
    <Box width="100%">
      {props.faqItems.map(question => (
        <MuiExpansionPanel
          css={`
            margin: 8px !important;
          `}
        >
          <ExpansionPanelSummary
            css={`
              && {
                padding: 0 32px 0 32px;
                box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08);
                [class*='MuiExpansionPanelSummary-content'] {
                  margin: 28px 0;
                }
              }
            `}
            expandIcon={<StyledExpandMoreIcon fontSize="large" />}
          >
            <Typography variant="subtitle1">{question.title}</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails
            css={`
              && {
                padding: 32px;
              }
            `}
          >
            <Typography variant="body1">{question.expl}</Typography>
          </ExpansionPanelDetails>
        </MuiExpansionPanel>
      ))}
    </Box>
  );
};
