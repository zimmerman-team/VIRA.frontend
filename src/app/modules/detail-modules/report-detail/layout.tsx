// @ts-nocheck
// global
import React from 'react';
import get from 'lodash/get';
import { useTranslation } from 'react-i18next';
import { Grid, Hidden } from '@material-ui/core';
import { useStoreState } from 'app/state/store/hooks';

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
  const showEditBtn = useStoreState(
    state =>
      get(state.userDetails.data, 'role', '') === 'Administrator' ||
      get(state.userDetails.data, 'role', '') === 'Manager'
  );

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const cardData = [
    {
      testID: 'outcomes-card',
      title: 'reports.detail.cards.key_outcomes',
      description: props.report.key_outcomes,
    },
    {
      testID: 'monitor-card',
      title: 'reports.detail.cards.monitor',
      description: props.report.monitor_report_outcomes,
    },
    {
      testID: 'media-card',
      title: 'reports.detail.cards.media',
      media: props.report.media,
    },

    {
      testID: 'challenges-card',
      title: 'reports.detail.cards.key_implementation_challenges',
      description: props.report.key_implementation_challenges,
    },
    {
      testID: 'observations-card',
      title: 'reports.detail.cards.other_project',
      description: props.report.other_project_outcomes,
    },
    {
      testID: 'future-plans-card',
      title: 'reports.detail.cards.future_plans',
      description: props.report.plans,
    },
    {
      testID: 'other-comments-card',
      title: 'reports.detail.cards.other_comments',
      description: props.report.other_comments,
    },
  ];

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
      {showEditBtn && (
        <Hidden xsDown>
          <Grid item lg={12} container justify="flex-end">
            <ContainedButton
              text={t('reports.detail.editReportBtn')}
              onClick={props.editReport}
            />
          </Grid>
        </Hidden>
      )}

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
          editReport={props.editReport}
          showEditBtn={showEditBtn}
          testAttr="report-title"
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
      <Hidden smDown>
        <div
          css={`
            width: 100%;
            height: 32px;
          `}
        />
      </Hidden>

      {/* ---------------------------------------------------------------------*/}
      {/* charts */}
      <Viztabs
        value={value}
        onTabClick={handleChange}
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

      {cardData.map(card =>
        card.media ? (
          card.media.length > 0 && (
            <Grid key={card.title} data-cy={card.testID} item xs={12} lg={12}>
              <OutcomeCard
                title={t(card.title)}
                media={{ tileData: props.report.media }}
              />
            </Grid>
          )
        ) : (
          <Grid key={card.title} data-cy={card.testID} item xs={12} lg={12}>
            <OutcomeCard title={t(card.title)} description={card.description} />
          </Grid>
        )
      )}
    </React.Fragment>
  );
};
