import React from 'react';
import { css } from 'styled-components/macro';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { ChallengesPlansPropsModel } from 'app/modules/report/model';
import { IntentTexArea } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextArea';
import { ChallengeAreaMock } from './mock';

const styles: any = {
  card: css`
    width: 100%;
    height: 100%;
    overflow: visible;
  `,
  cardHeader: css`
    padding: 12px !important;
  `,
  cardContent: css`
    padding: 12px !important;
  `,
  infoText: css`
    bottom: 0;
  `,
};

export const ChallengesPlansLayout = (props: ChallengesPlansPropsModel) => {
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* textareas */}
      <Grid item container lg={12} alignItems="center">
        <Card css={styles.card}>
          <CardContent css={styles.cardContent}>
            <IntentTexArea
              {...ChallengeAreaMock[0]}
              explanation=""
              value={props.keyImplChallenges}
              setValue={props.setKetImplChallenges}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              {ChallengeAreaMock[0].explanation}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container lg={12} alignItems="center">
        <Card css={styles.card}>
          <CardContent css={styles.cardContent}>
            <IntentTexArea
              {...ChallengeAreaMock[1]}
              explanation=""
              value={props.otherProjOutObs}
              setValue={props.setOtherProjOutObs}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              {ChallengeAreaMock[1].explanation}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container lg={12} alignItems="center">
        <Card css={styles.card}>
          <CardContent css={styles.cardContent}>
            <IntentTexArea
              {...ChallengeAreaMock[2]}
              explanation=""
              value={props.futurePlans}
              setValue={props.setFuturePlans}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              {ChallengeAreaMock[2].explanation}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container lg={12} alignItems="center">
        <Card css={styles.card}>
          <CardContent css={styles.cardContent}>
            <IntentTexArea
              {...ChallengeAreaMock[3]}
              explanation=""
              value={props.otherComms}
              setValue={props.setOtherComms}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              {ChallengeAreaMock[3].explanation}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
