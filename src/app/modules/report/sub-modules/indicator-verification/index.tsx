import React from 'react';
import { css } from 'styled-components/macro';
import GetAppIcon from '@material-ui/icons/GetApp';
import {
  Grid,
  Box,
  Modal,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { IntentTexArea } from './common/IntentTextArea';
import { IndicatorVerificationPropsModel } from '../../model';
import { AddMediaLayout } from './common/AddMedia';
import { MediaBlock } from './common/MediaBlock';
import { useTranslation } from 'react-i18next';

const styles: any = {
  card: css`
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

export const IndicatorVerificationLayout = (
  props: IndicatorVerificationPropsModel
) => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* textarea 1 */}
      <Grid item xs={12} lg={12}>
        <Card css={styles.card}>
          <CardContent css={styles.cardContent}>
            <IntentTexArea
              componentID="indVer1"
              value={props.keyOutcomes}
              setValue={props.setKeyOutcomes}
              tooltip={t(
                'Please describe the key outcomes the project aims to achieve'
              )}
              description={t(
                'Please describe the key outcomes the project aims to achieve'
              )}
            />
          </CardContent>
        </Card>
      </Grid>

      <Box height="84px" width="100%" />

      {/* ---------------------------------------------------------------------*/}
      {/* textarea 1 */}
      <Grid item xs={12} lg={12}>
        <Card css={styles.card}>
          <CardContent css={styles.cardContent}>
            <IntentTexArea
              componentID="indVer2"
              value={props.monRepOutcomes}
              setValue={props.setMonRepOutcomes}
              tooltip={t(
                'Please tell us how you intend to monitor and report on the outcomes listed above'
              )}
              description={t(
                'Please tell us how you intend to monitor and report on the outcomes listed above'
              )}
            />
            <Typography variant="body2" color="secondary" css={styles.infoText}>
              {t(
                'If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information.'
              )}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Box height="72px" width="100%" />
      {/* ---------------------------------------------------------------------*/}
      {/* add media button 1 */}
      <Grid item xs={12} lg={12}>
        <ContainedButton
          text={t('Add media (Optional)')}
          icon={<GetAppIcon />}
          onClick={() => props.setOpenMediaModal(true)}
        />
      </Grid>

      <Grid item xs={12} lg={12}>
        <MediaBlock items={props.media} removeItem={props.removeMedia} />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* add media modal 1 */}
      <Modal
        open={props.openMediaModal}
        onClose={() => props.setOpenMediaModal(false)}
      >
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
            onClose={() => props.setOpenMediaModal(false)}
          />
        </div>
      </Modal>

      <Box width="100%" height="40px" />
    </React.Fragment>
  );
};
