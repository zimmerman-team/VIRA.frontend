import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FaqsModel } from 'app/modules/faq-module/model';
import { ExpansionPanel } from 'app/components/surfaces/ExpansionPanel';
import { TitleFragment } from 'app/modules/common/components/TitleParams';

export const FaqsLayout = (props: FaqsModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container xs={12} lg={12}>
      <TitleFragment title="FAQ" />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* FAQ's fragment */}
    <Grid item xs={12} lg={12}>
      <ExpansionPanel faqItems={props.faqItems} />
    </Grid>
  </React.Fragment>
);
