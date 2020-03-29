import React from 'react';
import 'styled-components/macro';
import { Grid, Typography, Box, Hidden } from '@material-ui/core';
import { ReportModuleRoutes } from 'app/modules/report/routes';
import { BottomNav } from 'app/modules/report/common/bottom-nav';
import { CreateReportLayoutModel } from 'app/modules/report/model';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { HorizontalStepper } from 'app/components/navigation/HorizontalStepper';
import { PageLoader } from '../common/page-loader';

export function CreateReportLayout(props: CreateReportLayoutModel) {
  return (
    <React.Fragment>
      {/* <Grid item container xs={12} lg={12} spacing={4}> */}
      {props.loading && <PageLoader />}
      {/* ---------------------------------------------------------------------*/}
      {/* breadcrumbs */}
      <Grid item lg={12}>
        <BreadCrumbs {...props.breadcrumbs} />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* title fragment */}
      <Grid item container lg={12} direction="column">
        <Typography
          css={`
            color: rgba(0, 0, 0, 0.85);
            font-size: 20px;
            font-weight: 500;
            line-height: 28px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e8e8e8;
          `}
        >
          Report
        </Typography>
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* title fragment */}
      <Grid item xs={12} lg={12} css={{ overflowX: 'scroll' }}>
        <HorizontalStepper
          steps={props.tabs}
          onStepChange={props.changeRoute}
          initialTabIndex={props.initialTabIndex}
        />
      </Grid>
      <Hidden smDown>
        <Box width="100%" height="40px" />
      </Hidden>

      <ReportModuleRoutes
        step2Enabled={props.step2Enabled}
        step3Enabled={props.step3Enabled}
        step4Enabled={props.step4Enabled}
        step5Enabled={props.step5Enabled}
        outcomesProps={props.outcomesProps}
        policyPrioritiesProps={props.policyPrioritiesProps}
        indicatorVerificationProps={props.indicatorVerificationProps}
        challengesPlansProps={props.challengesPlansProps}
      />

      <BottomNav
        submit={props.submit}
        saveDraft={props.saveDraft}
        next={props.onNextBtnClick}
        back={props.onBackBtnClick}
        showSubmitBtn={props.showSubmitBtn}
        nextDisabled={props.nextBtnDisabled}
        backDisabled={props.backBtnDisabled}
        showDraftSubmitBtn={props.showDraftSubmitBtn}
      />
      {/* </Grid> */}
    </React.Fragment>
  );
}
