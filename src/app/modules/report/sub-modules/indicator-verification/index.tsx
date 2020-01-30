import 'styled-components/macro';
import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Grid, Box, Modal } from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { IntentTexArea } from './common/IntentTextArea';
import { PolicyPriorityOptions } from './common/PriorityOption';
import { IndicatorVerificationPropsModel } from '../../model';
import { AddMediaLayout } from './common/AddMedia';

export const IndicatorVerificationLayout = (
  props: IndicatorVerificationPropsModel
) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* textareas */}
    <Grid item container lg={12} alignItems="center">
      <IntentTexArea
        componentID="indVer1"
        value={props.keyOutcomes}
        setValue={props.setKeyOutcomes}
        tooltip="Please describe the key outcomes the project aims to achieve"
        description="Please describe the key outcomes the project aims to achieve"
      />
    </Grid>

    <Grid item container lg={12} alignItems="center">
      <IntentTexArea
        componentID="indVer2"
        value={props.monRepOutcomes}
        setValue={props.setMonRepOutcomes}
        tooltip="Please tell us how you intend to monitor and report on the outcomes listed above"
        description="Please tell us how you intend to monitor and report on the outcomes listed above"
        explanation="If you have baseline data (the data you track progress against) and a means of verification (how you intend to obtain the data and from which sources) please also provide that information"
      />
    </Grid>

    <Grid item lg={2}>
      <ContainedButton
        text="Add media (Optional)"
        icon={<GetAppIcon />}
        onClick={() => props.setOpenMediaModal(true)}
      />
    </Grid>

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
    {/* ---------------------------------------------------------------------*/}
    {/* options */}
    <Grid item lg={12}>
      <PolicyPriorityOptions
        options={props.policyPriorities}
        onChange={props.setPolicyPriorities}
        // explanation="For each priority selected, the relevant SDGs appear and can be selected based on our mapping"
        description="Finally, please select which ones of these Insinger Foundation policy priorities the project aims to support."
      />
    </Grid>
  </React.Fragment>
);
