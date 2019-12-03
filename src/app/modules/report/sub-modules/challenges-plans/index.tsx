import { Grid } from '@material-ui/core';
import { IntentTexArea } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextArea';
import React from 'react';
import 'styled-components/macro';
import { ChallengeAreaMock } from './mock';

export const ChallengesPlansLayout = () => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* textareas */}
    {ChallengeAreaMock.map(textArea => (
      <Grid item container lg={12} alignItems="center">
        <IntentTexArea {...textArea} />
      </Grid>
    ))}
  </React.Fragment>
);
