import React from 'react';
import Page from 'app/modules/common/Page/index';
import { Box, Grid } from '@material-ui/core';
import { FaqsModel } from 'app/modules/faqs/model';
import { ExpansionPanel } from 'app/components/surfaces/ExpansionPanel';

export const FaqsLayout = (props: FaqsModel) => {
  return (
    <>
      <Page title={props.title}>
        <Grid container>
          <ExpansionPanel faqItems={props.faqItems} />
        </Grid>
      </Page>
      <Box height="40px" width="100%" />
    </>
  );
};
