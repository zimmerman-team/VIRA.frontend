/* eslint-disable no-param-reassign */
// @ts-nocheck
// global
import React from 'react';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

// absolute
import { BubbleChart } from 'app/components/charts/Bubble';
import { PillarContainer } from 'app/components/charts/Pillars';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { TargetGroupContainer } from 'app/components/charts/TargetGroup';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { PriorityAreaContainer } from 'app/components/charts/PriorityArea';
import { OneYearAndMultiYearContainer } from 'app/components/charts/OneYearAndMultiYear';

// direct
import 'styled-components/macro';

const Spacer = () => <div css="width: 100%;height: 50px;" />;

const getVizHeader = (title: string, description?: string) => {
  return (
    <React.Fragment>
      <h4
        css={`
          font-size: 20px;
          font-weight: 600;
          line-height: 1.5;
        `}
      >
        {title}
      </h4>
      {description && (
        <h6
          css={`
            font-size: 14px;
            margin-top: 4px;
          `}
        >
          {description}
        </h6>
      )}
      <div
        css="width: 100%;   margin-bottom: 10px;
        "
      />
    </React.Fragment>
  );
};

export function PDFreport(props: any) {
  const { t } = useTranslation();
  const interval = setInterval(() => {
    const container = document.getElementById('pdf-report-container');
    if (container) {
      const svgTextElements = container.getElementsByTagName('text');
      [...svgTextElements].forEach((textElement: any) => {
        textElement.style.fontFamily = 'Helvetica';
        textElement.setAttribute('font-family', 'Helvetica');
        textElement.replaceWith(textElement);
      });
      if ([...svgTextElements].length > 0) {
        clearInterval(interval);
      }
    }
  }, 1000);

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
            testattr="report-title"
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
        <Spacer />
        {getVizHeader(
          t('home.chart_nav.pillars'),
          t('home.chart_description.pillars')
        )}
        <PillarContainer
          data={
            props.selectedBreakdown === 'None'
              ? props.pillarData
              : props.pillarDataByDuration
          }
          durationData={props.pillarDataByDuration}
          selectedBreakdown={props.selectedBreakdown}
          setSelectedBreakdown={props.onBreakdownSelect}
        />
        <Spacer />
        {getVizHeader(
          t('home.chart_nav.priority_area'),
          t('home.chart_description.priority_area')
        )}
        <PriorityAreaContainer
          data={props.priorityAreaData}
          selectedBreakdown={props.selectedBreakdown}
          setSelectedBreakdown={props.onBreakdownSelect}
        />
      </div>
      <div id="page2" css="padding: 64px;">
        {getVizHeader(
          t('home.chart_nav.target_group'),
          t('home.chart_description.target_group')
        )}
        <TargetGroupContainer
          data={props.targetGroupData}
          selectedBreakdown={props.selectedBreakdown}
          setSelectedBreakdown={props.onBreakdownSelect}
        />
        <Spacer />
        {getVizHeader(
          t('home.chart_nav.one_year_and_multi_year'),
          t('home.chart_description.one_year_and_multi_year')
        )}
        <OneYearAndMultiYearContainer
          data={props.oneAndMultiYearData}
          selectedBreakdown={props.selectedBreakdown}
          setSelectedBreakdown={props.onBreakdownSelect}
        />
      </div>
      <div id="page3" css="padding: 64px;">
        {getVizHeader(t('home.chart_nav.sdg'))}
        <BubbleChart
          data={{
            ...bubbleMockData,
            children: props.report.bubbleChartData,
          }}
          selectedBubble={props.selectedSDG}
          setSelectedBubble={props.onBubbleSelect}
        />
        <Spacer />
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
        <Spacer />
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
      </div>
      <div id="page4" css="padding: 64px;">
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
        <Spacer />
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
        <Spacer />
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
        <Spacer />
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
        <Spacer />
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
      <div id="page5" css="padding: 64px;">
        <Grid
          key={props.cardData[7].title}
          data-cy={props.cardData[7].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[7].title)}
            description={props.cardData[7].description}
          />
        </Grid>
        <Spacer />
        <Grid
          key={props.cardData[8].title}
          data-cy={props.cardData[8].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[8].title)}
            description={props.cardData[8].description}
          />
        </Grid>
        <Spacer />
        <Grid
          key={props.cardData[9].title}
          data-cy={props.cardData[9].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[9].title)}
            description={props.cardData[9].description}
          />
        </Grid>
        <Spacer />
        <Grid
          key={props.cardData[10].title}
          data-cy={props.cardData[10].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[10].title)}
            description={props.cardData[10].description}
          />
        </Grid>
      </div>
      <div id="page6" css="padding: 64px;">
        <Grid
          key={props.cardData[11].title}
          data-cy={props.cardData[11].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[11].title)}
            description={props.cardData[11].description}
          />
        </Grid>
        <Spacer />
        <Grid
          key={props.cardData[12].title}
          data-cy={props.cardData[12].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[12].title)}
            description={props.cardData[12].description}
          />
        </Grid>
        <Spacer />
        <Grid
          key={props.cardData[13].title}
          data-cy={props.cardData[13].testID}
          item
          xs={12}
          lg={12}
        >
          <OutcomeCard
            title={t(props.cardData[13].title)}
            description={props.cardData[13].description}
          />
        </Grid>
      </div>
    </div>
  );
}
