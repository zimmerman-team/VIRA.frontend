import 'styled-components/macro';
import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Grid, Box } from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { TextAreaMock, PriorityOptionMock } from './mock';
import { IntentTexArea } from './common/IntentTextArea';
import { PolicyPriorityOptions } from './common/PriorityOption';

export const IndicatorVerificationLayout = () => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* textareas */}
    {TextAreaMock.map(textArea => (
      <Grid item container lg={12} alignItems="center">
        <IntentTexArea {...textArea} />
      </Grid>
    ))}

    <Grid item lg={2}>
      <ContainedButton text="Add media (Optional)" icon={<GetAppIcon />} />
    </Grid>

    <Box width="100%" height="24px" />
    {/* ---------------------------------------------------------------------*/}
    {/* options */}
    <Grid item lg={12}>
      <PolicyPriorityOptions {...PriorityOptionMock} />
    </Grid>
  </React.Fragment>
);
