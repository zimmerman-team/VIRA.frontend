// @ts-nocheck
// global
import React from 'react';
import uniqBy from 'lodash/uniqBy';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// absolute
import { GeoMap } from 'app/components/charts/GeoMap';
import { BubbleChart } from 'app/components/charts/Bubble';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { HorizontalBarChartValueModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';

// direct
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';

export function PDFreport(props: any) {
  const { t } = useTranslation();

  return (
    <div
      id="pdf-report-container"
      css={`
        z-index: 2;
        width: 100%;
        top: -3000px;
        position: absolute;
        visibility: hidden;
      `}
    >
      <div id="page1" css="padding: 64px;">
        <Grid item xs={12} lg={12}>
          <TitleFragment
            showMoreThanTitle
            showEditBtn={false}
            note={props.report.date}
            title={props.report.title}
            id={`Report ID: ${props.report.reportID}`}
            url={`/projects/${props.report.project.id}`}
            url_note={`${props.report.project.name}`}
            editReport={props.editReport}
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

        <div css="width: 100%;height: 200px;" />

        <h4
          css={`
            font-size: 20px;
            font-weight: 600;
            line-height: 1.5;
            margin-bottom: 10px;
          `}
        >
          {t('home.chart_nav.priority_area')}
        </h4>
        <HorizontalBarChart
          colors={[
            ProjectPalette.primary.main,
            ...uniqBy(
              ((props.report
                .barChartData as unknown) as HorizontalBarChartValueModel[]) ||
                [],
              'value2Color'
            ).map((item: any) => item.value2Color),
            ...uniqBy(
              ((props.report
                .barChartData as unknown) as HorizontalBarChartValueModel[]) ||
                [],
              'value4Color'
            ).map((item: any) => item.value4Color),
          ]}
          values={
            ((props.report
              .barChartData as unknown) as HorizontalBarChartValueModel[]) || []
          }
          maxValue={Math.max(
            ...(
              ((props.report
                .barChartData as unknown) as HorizontalBarChartValueModel[]) ||
              []
            ).map((item: any) => item.value1 + item.value2)
          )}
          chartLegends={props.barChartLegends}
          onChartLegendClick={props.onBarChartLegendClick}
        />

        <div css="width: 100%;height: 200px;" />

        <h4
          css={`
            font-size: 20px;
            font-weight: 600;
            line-height: 1.5;
            margin-bottom: 10px;
          `}
        >
          {t('home.chart_nav.sdg')}
        </h4>
        <BubbleChart
          data={{
            ...bubbleMockData,
            children: props.report.bubbleChartData,
          }}
          selectedBubble={props.selectedSDG}
          setSelectedBubble={props.onBubbleSelect}
        />
      </div>
      <div id="page2" css="padding: 64px;">
        <Grid
          key={props.cardData[0].title}
          data-cy={props.cardData[0].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[0].title)}
            description={props.cardData[0].description}
          />
        </Grid>

        <div css="width: 100%;height: 200px;" />

        <Grid
          key={props.cardData[1].title}
          data-cy={props.cardData[1].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[1].title)}
            description={props.cardData[1].description}
          />
        </Grid>

        <div css="width: 100%;height: 200px;" />

        {props.report.media.length > 0 && (
          <Grid
            key={props.cardData[2].title}
            data-cy={props.cardData[2].testID}
            item
            xs={12}
            lg={12}
          >
            <OutcomeCard
              title={t(props.cardData[2].title)}
              media={{ tileData: props.report.media }}
            />
          </Grid>
        )}

        <div css="width: 100%;height: 100px;" />

        <Grid
          key={props.cardData[3].title}
          data-cy={props.cardData[3].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[3].title)}
            description={props.cardData[3].description}
          />
        </Grid>
      </div>
      <div id="page3" css="padding: 64px;">
        <Grid
          key={props.cardData[4].title}
          data-cy={props.cardData[4].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[4].title)}
            description={props.cardData[4].description}
          />
        </Grid>
        <div css="width: 100%;height: 100px;" />
        <Grid
          key={props.cardData[5].title}
          data-cy={props.cardData[5].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[5].title)}
            description={props.cardData[5].description}
          />
        </Grid>
        <div css="width: 100%;height: 100px;" />
        <Grid
          key={props.cardData[6].title}
          data-cy={props.cardData[6].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[6].title)}
            description={props.cardData[6].description}
          />
        </Grid>
      </div>
    </div>
  );
}
