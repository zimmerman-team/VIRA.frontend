import React from 'react';
import { css } from 'styled-components/macro';
import {
  Grid,
  useMediaQuery,
  CardHeader,
  Card,
  CardContent,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import {
  LabelValueModel,
  ChallengesPlansPropsModel,
} from 'app/modules/report/model';
import { Autocomplete } from 'app/modules/report/sub-modules/outcomes/common/Autocomplete';
import { IntentTexArea } from 'app/modules/report/sub-modules/indicator-verification/common/IntentTextArea';
import { ChallengeAreaMock } from './mock';

const styles: any = {
  infoText: css`
    bottom: 0;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
  `,
  card: css`
    height: 100%;
  `,
  cardHeader: css`
    padding-left: 18px;
    padding-top: 12px;
  `,
  cardContent: css`
    padding-left: 12px;
    padding-top: 12px;
  `,
  gridMobile: css`
    padding-top: 0 !important;
  `,
};

export const ChallengesPlansLayout = (props: ChallengesPlansPropsModel) => {
  const { t } = useTranslation();
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* textareas */}
      <Grid item xs={12} lg={12}>
        <IntentTexArea
          testattr="text-area-1"
          {...ChallengeAreaMock[0]}
          explanation={
            ChallengeAreaMock[0].explanation &&
            t(ChallengeAreaMock[0].explanation)
          }
          description={t(ChallengeAreaMock[0].description)}
          tooltip={t(ChallengeAreaMock[0].description)}
          value={props.keyImplChallenges}
          setValue={props.setKetImplChallenges}
        />
      </Grid>

      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-2"
          {...ChallengeAreaMock[1]}
          explanation={
            ChallengeAreaMock[1].explanation &&
            t(ChallengeAreaMock[1].explanation)
          }
          description={t(ChallengeAreaMock[1].description)}
          tooltip={t(ChallengeAreaMock[1].description)}
          value={props.addressChallenges}
          setValue={props.setAddressChallenges}
        />
      </Grid>

      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-3"
          {...ChallengeAreaMock[2]}
          explanation={
            ChallengeAreaMock[2].explanation &&
            t(ChallengeAreaMock[2].explanation)
          }
          description={t(ChallengeAreaMock[2].description)}
          tooltip={t(ChallengeAreaMock[2].description)}
          value={props.otherProjOutObs}
          setValue={props.setOtherProjOutObs}
        />
      </Grid>

      <Grid
        item
        container
        xs={12}
        lg={12}
        css={isMobileWidth && styles.gridItem}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          css={isMobileWidth && styles.gridMobile}
          data-cy="how-important-insinger-support"
        >
          <Card
            css={`
              overflow: visible;
              height: 100%;
              margin-right: 24px;
            `}
          >
            <CardHeader
              css={styles.cardHeader + 'margin-bottom: 23px;'}
              title={t('reports.form.cards.how_important_insinger_support')}
            />
            <CardContent css={styles.cardContent}>
              <Autocomplete
                testAttr="dropdown-1"
                values={[
                  { label: t('Not at all'), value: 'Not at all' },
                  { label: t('A little'), value: 'A little' },
                  { label: t('A lot'), value: 'A lot' },
                  {
                    label: t(
                      'It was crucial/ I couldn’t have done it otherwise'
                    ),
                    value: 'It was crucial/ I couldn’t have done it otherwise',
                  },
                ]}
                value={{
                  label: t(props.howImportantInsingerSupport),
                  value: props.howImportantInsingerSupport,
                }}
                setValue={(e: LabelValueModel) =>
                  props.setHowImportantInsingerSupport(e.value)
                }
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          css={isMobileWidth && styles.gridMobile}
          data-cy="how-important-insinger-support"
        >
          <Card
            css={`
              overflow: visible;
            `}
          >
            <CardHeader
              css={styles.cardHeader}
              title={t('reports.form.cards.apply_for_more_funding')}
            />
            <CardContent css={styles.cardContent}>
              <Autocomplete
                testAttr="dropdown-2"
                values={[
                  { label: t('Yes'), value: 'Yes' },
                  { label: t('No'), value: 'No' },
                  { label: t('Maybe'), value: 'Maybe' },
                ]}
                value={{
                  label: t(props.applyForMoreFunding),
                  value: props.applyForMoreFunding,
                }}
                setValue={(e: LabelValueModel) =>
                  props.setApplyForMoreFunding(e.value)
                }
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-6"
          {...ChallengeAreaMock[3]}
          explanation={
            ChallengeAreaMock[3].explanation &&
            t(ChallengeAreaMock[3].explanation)
          }
          description={t(ChallengeAreaMock[3].description)}
          tooltip={t(ChallengeAreaMock[3].description)}
          value={props.otherComms}
          setValue={props.setOtherComms}
        />
      </Grid>
    </React.Fragment>
  );
};
