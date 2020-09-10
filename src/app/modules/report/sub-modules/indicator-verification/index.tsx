import React from 'react';
import { css } from 'styled-components/macro';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Grid, Box, Modal, useMediaQuery, Hidden } from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { useTranslation } from 'react-i18next';
import { IntentTexArea } from './common/IntentTextArea';
import { IndicatorVerificationPropsModel } from '../../model';
import { AddMediaLayout } from './common/AddMedia';
import { MediaBlock } from './common/MediaBlock';

const styles: any = {
  card: css`
    height: 100%;
    overflow: visible;
  `,
  infoText: css`
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    bottom: 0;
  `,
};

const Spacer = () => (
  <Hidden smDown>
    <Box height="24px" width="100%" />
  </Hidden>
);

export const IndicatorVerificationLayout = (
  props: IndicatorVerificationPropsModel
) => {
  const { t } = useTranslation();
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* textarea 1 */}
      <Grid item xs={12} lg={12}>
        <IntentTexArea
          testattr="text-area-1"
          componentID="indVer1"
          value={props.keyOutcomes}
          setValue={props.setKeyOutcomes}
          tooltip={t('reports.form.cards.key_outcomes')}
          description={t('reports.form.cards.key_outcomes')}
        />
      </Grid>

      <Spacer />

      {/* ---------------------------------------------------------------------*/}
      {/* textarea 2 */}
      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-2"
          componentID="indVer2"
          value={props.monRepOutcomes}
          setValue={props.setMonRepOutcomes}
          tooltip={t('reports.form.cards.monitor')}
          description={t('reports.form.cards.monitor')}
          explanation={t('reports.form.cards.monitor_expl')}
        />
      </Grid>

      <Spacer />

      {/* ---------------------------------------------------------------------*/}
      {/* textarea 3 */}
      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-3"
          componentID="indVer3"
          value={props.inputsInvested}
          setValue={props.setInputsInvested}
          tooltip={t('reports.form.cards.inputs_invested')}
          description={t('reports.form.cards.inputs_invested')}
          explanation={t('reports.form.cards.inputs_invested_expl')}
        />
      </Grid>

      <Spacer />

      {/* ---------------------------------------------------------------------*/}
      {/* textarea 4 */}
      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-4"
          componentID="indVer4"
          value={props.activitiesUndertaken}
          setValue={props.setActivitiesUndertaken}
          tooltip={t('reports.form.cards.activities_undertaken')}
          description={t('reports.form.cards.activities_undertaken')}
        />
      </Grid>

      <Spacer />

      {/* ---------------------------------------------------------------------*/}
      {/* textarea 5 */}
      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-5"
          componentID="indVer5"
          value={props.projectgoalsSocialbenefits}
          setValue={props.setProjectgoalsSocialbenefits}
          tooltip={t('reports.form.cards.projectgoals_socialbenefits')}
          description={t('reports.form.cards.projectgoals_socialbenefits')}
        />
      </Grid>

      <Spacer />

      {/* ---------------------------------------------------------------------*/}
      {/* textarea 6 */}
      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-6"
          componentID="indVer6"
          value={props.importantFactors}
          setValue={props.setImportantFactors}
          tooltip={t('reports.form.cards.important_factors')}
          description={t('reports.form.cards.important_factors')}
        />
      </Grid>

      <Spacer />

      {/* ---------------------------------------------------------------------*/}
      {/* textarea 7 */}
      <Grid item xs={12} lg={12} css={isMobileWidth && styles.gridItem}>
        <IntentTexArea
          testattr="text-area-7"
          componentID="indVer7"
          value={props.orgsPartners}
          setValue={props.setOrgsPartners}
          tooltip={t('reports.form.cards.orgs_partners')}
          description={t('reports.form.cards.orgs_partners')}
        />
      </Grid>

      <Spacer />

      {/* ---------------------------------------------------------------------*/}
      {/* add media button 1 */}
      <Grid item xs={12} lg={12}>
        <ContainedButton
          testattr="media-button"
          text={t('reports.form.cards.media')}
          icon={<GetAppIcon />}
          onClick={() => props.setOpenMediaModal(true)}
        />
      </Grid>

      <Grid item xs={12} lg={12}>
        <MediaBlock
          items={props.media}
          addedMedia={props.mediaAdded}
          removeItem={props.removeMedia}
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* add media modal 1 */}
      <Modal open={props.openMediaModal} onClose={() => props.onDialogCancel()}>
        <div
          css={`
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <AddMediaLayout
            name={t('name')}
            items={props.media}
            onChange={props.setMedia}
            onSaveMedia={props.onSaveMedia}
            onClose={() => props.onDialogCancel()}
          />
        </div>
      </Modal>

      <Spacer />
    </React.Fragment>
  );
};
