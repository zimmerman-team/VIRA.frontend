import React from 'react';
import 'styled-components/macro';
import { Grid } from '@material-ui/core';
import { ChallengesPlansPropsModel } from 'app/modules/report/model';
import { IntentTexArea } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextArea';
import { ChallengeAreaMock } from './mock';

export const ChallengesPlansLayout = (props: ChallengesPlansPropsModel) => {
  console.log(props);

  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* textareas */}
      <Grid item container lg={12} alignItems="center">
        <IntentTexArea
          {...ChallengeAreaMock[0]}
          value={props.keyImplChallenges}
          setValue={props.setKetImplChallenges}
        />
      </Grid>
      <Grid item container lg={12} alignItems="center">
        <IntentTexArea
          {...ChallengeAreaMock[1]}
          value={props.otherProjOutObs}
          setValue={props.setOtherProjOutObs}
        />
      </Grid>
      <Grid item container lg={12} alignItems="center">
        <IntentTexArea
          {...ChallengeAreaMock[2]}
          value={props.futurePlans}
          setValue={props.setFuturePlans}
        />
      </Grid>
      <Grid item container lg={12} alignItems="center">
        <IntentTexArea
          {...ChallengeAreaMock[3]}
          value={props.otherComms}
          setValue={props.setOtherComms}
        />
      </Grid>
    </React.Fragment>
  );
};
