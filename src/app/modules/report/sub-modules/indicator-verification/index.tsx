import 'styled-components/macro';
import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Grid, Box, Modal, Hidden } from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { IntentTexArea } from './common/IntentTextArea';
import { IndicatorVerificationPropsModel } from '../../model';
import { AddMediaLayout } from './common/AddMedia';

export const IndicatorVerificationLayout = (
  props: IndicatorVerificationPropsModel
) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* textarea 1 */}
    <Grid item xs={12} lg={12}>
      <IntentTexArea
        componentID="indVer1"
        value={props.keyOutcomes}
        setValue={props.setKeyOutcomes}
        tooltip="Please describe the key outcomes the project aims to achieve"
        description="Please describe the key outcomes the project aims to achieve"
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* only show on mobile 1 */}
    <Hidden mdUp>
      <Box height="40px" />
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* textarea 1 */}
    <Grid item xs={12} lg={12}>
      <IntentTexArea
        componentID="indVer2"
        value={props.monRepOutcomes}
        setValue={props.setMonRepOutcomes}
        tooltip="Please tell us how you intend to monitor and report on the outcomes listed above"
        description="Please tell us how you intend to monitor and report on the outcomes listed above"
        explanation="If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information"
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* add media button 1 */}
    <Grid item xs={12} lg={12}>
      <ContainedButton
        text="Add media (Optional)"
        icon={<GetAppIcon />}
        onClick={() => props.setOpenMediaModal(true)}
      />
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
          name="name"
          items={props.media}
          onChange={props.setMedia}
          onSaveMedia={props.onSaveMedia}
          onClose={() => props.setOpenMediaModal(false)}
        />
      </div>
    </Modal>

    <Box width="100%" height="24px" />
  </React.Fragment>
);
