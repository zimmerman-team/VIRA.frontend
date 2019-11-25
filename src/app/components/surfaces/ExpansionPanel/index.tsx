import React from 'react';
import 'styled-components/macro';
import { ExpansionPanel as MuiExpansionPanel } from '@material-ui/core';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExpansionPanelModel } from 'app/components/surfaces/ExpansionPanel/model';
import Box from '@material-ui/core/Box';
import { ProjectPalette } from 'app/theme';

export const ExpansionPanel = (props: ExpansionPanelModel) => {
  return (
    <Box width="100%">
      {props.faqItems.map(question => (
        <MuiExpansionPanel
          square={true}
          css={`
            margin: 8px !important;
            && {
              box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08) !important;
            }
            & [class*='MuiExpansionPanelSummary-root Mui-expanded'] {
              box-shadow: 0 0 2px 1px rgba(130, 136, 148, 0.08) !important;
            }
            && :before {
              background-color: rgba(0, 0, 0, 0);
            }
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
                svg {
                  font-size: 40px;
                }
                && [class*='MuiPaper-elevation1'] {
                  border: 1px red solid !important;
                }
              }
            `}
            expandIcon={
              <ExpandMoreIcon
                css={`
                  color: ${ProjectPalette.common.black};
                `}
              />
            }
          >
            <Typography
              variant="subtitle1"
              css={`
                color: ${ProjectPalette.common.black} !important;
                font-size: 16px !important;
                font-weight: 500 !important;
              `}
            >
              {question.title}
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails
            css={`
              && {
                padding: 33px 29.7px 33px 29.7px;
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
