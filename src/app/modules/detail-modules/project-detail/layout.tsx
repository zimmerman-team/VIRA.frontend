// @ts-nocheck
import 'styled-components/macro';
import React from 'react';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { Description } from 'app/modules/common/components/DescriptionParams';
import { ProjectOutcomeCardMock } from 'app/modules/detail-modules/project-detail/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import TableModule from 'app/components/datadisplay/Table';
import { Grid, Hidden } from '@material-ui/core';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { Viztabs } from 'app/modules/common/components/Viztabs';
import { useTranslation } from 'react-i18next';

export const ProjectDetailLayout = (props: any) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* breadcrumbs */}
      <Grid item xs={12} lg={6}>
        <BreadCrumbs
          {...GranteeBreadCrumbsMock}
          previousLocations={[{ label: 'Projects', url: '/list' }]}
          currentLocation={props.projectDetail.project}
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* button: generate report */}
      <Hidden xsDown>
        <Grid item xs={12} lg={6} container justify="flex-end">
          <ContainedButton
            text={t('projects.detail.generateReportBtn')}
            onClick={props.projectDetail.generateReport}
          />
        </Grid>
      </Hidden>

      {/* ---------------------------------------------------------------------*/}
      {/* title fragment */}
      <Grid item xs={12} lg={12}>
        <TitleFragment
          showMoreThanTitle
          testAttr="project-title"
          title={props.projectDetail.project}
          id={`${t('project id:')} ${props.projectDetail.project_id}`}
          date={t('*earliest and latest activity start dates')}
          url_note={props.projectDetail.organisation}
          url={props.projectDetail.website}
          stats={[
            {
              label: t('projects.detail.stats.total_budget'),
              value: parseInt(props.projectDetail.total_amount || '', 10)
                .toLocaleString(undefined, {
                  currency: 'EUR',
                  currencyDisplay: 'symbol',
                  style: 'currency',
                })
                .replace('.00', ''),
            },
            {
              label: t('projects.detail.stats.duration'),
              value: `${(props.projectDetail.start_date || '').replace(
                /-/g,
                '.'
              )} - ${(props.projectDetail.end_date || '').replace(/-/g, '.')}`,
            },
          ]}
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* project description */}
      <Grid item xs={12} lg={6}>
        <Description {...props} />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* charts */}
      <Viztabs
        barChartData={props.ppVizData}
        barChartLegends={props.barChartLegends}
        onBarChartLegendClick={props.onBarChartLegendClick}
        bubbleChartData={{ ...bubbleMockData, children: props.SDGVizData }}
        selectedBubble={props.selectedSDG}
        onBubbleSelect={props.onBubbleSelect}
        geoMapData={props.geoMapData}
      />

      {/* ---------------------------------------------------------------------*/}
      {/* reports */}
      <Grid data-cy="reports-table" item xs={12} lg={12}>
        <TableModule {...props.reportTable} />
      </Grid>
    </React.Fragment>
  );
};
