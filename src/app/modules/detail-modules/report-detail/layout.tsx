// @ts-nocheck
// global
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Hidden } from '@material-ui/core';

// absolute
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';

// direct
import 'styled-components/macro';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Viztabs } from 'app/modules/common/components/Viztabs';

export const ReportDetailLayout = (props: any) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* breadcrumbs */}
      <Grid item xs={12} lg={12}>
        <BreadCrumbs
          currentLocation={props.report.title}
          previousLocations={[{ label: 'Reports', url: '/list/2' }]}
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* button: generate report */}
      <Hidden xsDown>
        <Grid lg={12} container justify="flex-end">
          <ContainedButton
            text={t('reports.detail.editReportBtn')}
            onClick={props.editReport}
          />
        </Grid>
      </Hidden>

      {/* ---------------------------------------------------------------------*/}
      {/* title fragment */}
      <Grid item xs={12} lg={12}>
        <TitleFragment
          showMoreThanTitle
          note={props.report.date}
          title={props.report.title}
          id={`Report ID: ${props.report.reportID}`}
          url={`/projects/${props.report.project.id}`}
          url_note={`${props.report.project.name}`}
          stats={[
            {
              label: t('reports.detail.stats.targetBeneficiaries'),
              value: props.report.total_target_beneficiaries,
            },
            {
              label: t('reports.detail.stats.budget'),
              value: parseInt(props.report.budget || '', 10)
                .toLocaleString(undefined, {
                  currency: 'EUR',
                  currencyDisplay: 'symbol',
                  style: 'currency',
                })
                .replace('.00', ''),
            },
          ]}
        />
      </Grid>

      <div
        css={`
          width: 100%;
          height: 32px;
        `}
      />

      {/* ---------------------------------------------------------------------*/}
      {/* button: generate report */}
      <Hidden smUp>
        <Grid container xs={12}>
          <ContainedButton text="Edit Report" onClick={props.editReport} />
        </Grid>
      </Hidden>

      {/* ---------------------------------------------------------------------*/}
      {/* charts */}
      <Viztabs
        barChartData={props.report.barChartData}
        barChartLegends={props.barChartLegends}
        onBarChartLegendClick={props.onBarChartLegendClick}
        bubbleChartData={{
          ...bubbleMockData,
          children: props.report.bubbleChartData,
        }}
        selectedBubble={props.selectedSDG}
        onBubbleSelect={props.onBubbleSelect}
        geoMapData={props.report.mapData}
      />

      {/* ---------------------------------------------------------------------*/}
      {/* cards */}
      {/* todo: optimise */}
      <Grid data-cy="outcomes-card" item lg={12}>
        <OutcomeCard
          title={t('reports.detail.cards.key_outcomes')}
          description={props.report.key_outcomes}
        />
      </Grid>
      <Grid data-cy="monitor-card" item lg={12}>
        <OutcomeCard
          title={t('reports.detail.cards.monitor')}
          description={props.report.monitor_report_outcomes}
        />
      </Grid>
      {props.report.media.length > 0 && (
        <Grid data-cy="media-card" item lg={12}>
          <OutcomeCard
            title={t('reports.detail.cards.media')}
            media={{ tileData: props.report.media }}
          />
        </Grid>
      )}
      <Grid data-cy="challenges-card" item lg={12}>
        <OutcomeCard
          title={t('reports.detail.cards.key_implementation_challenges')}
          description={props.report.key_implementation_challenges}
        />
      </Grid>
      <Grid data-cy="observations-card" item lg={12}>
        <OutcomeCard
          title={t('reports.detail.cards.other_project')}
          description={props.report.other_project_outcomes}
        />
      </Grid>
      <Grid data-cy="future-plans-card" item lg={12}>
        <OutcomeCard
          title={t('reports.detail.cards.future_plans')}
          description={props.report.plans}
        />
      </Grid>
      <Grid data-cy="other-comments-card" item lg={12}>
        <OutcomeCard
          title={t('reports.detail.cards.other_comments')}
          description={props.report.other_comments}
        />
      </Grid>
    </React.Fragment>
  );
};
