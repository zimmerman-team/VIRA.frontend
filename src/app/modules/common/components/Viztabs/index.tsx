// @ts-nocheck
import React from 'react';
import 'styled-components/macro';
import uniqBy from 'lodash/uniqBy';
import { ProjectPalette } from 'app/theme';
import {
  Grid,
  Tabs,
  Tab,
  Typography,
  Hidden,
  useMediaQuery,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { GeoMap } from 'app/components/charts/GeoMap';
import { BubbleChart } from 'app/components/charts/Bubble';
import {
  TabStyle,
  a11yProps,
  TabPanel,
} from 'app/modules/list-module/common/TabPanelProps';
import {
  getTitle,
  getTitleDesc,
} from 'app/modules/common/components/Viztabs/utils/getTitle';
import { PillarContainer } from 'app/components/charts/Pillars';
import { PriorityAreaContainer } from 'app/components/charts/PriorityArea';
import { TargetGroupContainer } from 'app/components/charts/TargetGroup';
import { OneYearAndMultiYearContainer } from 'app/components/charts/OneYearAndMultiYear';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';

type PropsModel = {
  value: number;
  onTabClick: any;
  focus?: number;
  barChartData: any;
  barChartLegends: any;
  onBarChartLegendClick: any;
  bubbleChartData: any;
  selectedBubble: any;
  onBubbleSelect: any;
  geoMapData: any;
  pillarData: any;
  priorityAreaData: any;
  targetGroupData: any;
  oneAndMultiYearData: any;
  selectedBreakdown: any;
  onBreakdownSelect: any;
};

export function Viztabs(props: PropsModel) {
  const { t } = useTranslation();
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <React.Fragment>
      {/* tab navigation */}
      <Grid container item>
        <Grid
          item
          xs={12}
          sm={4}
          lg={5}
          css={`
            order: ${isMobileWidth ? 1 : 0};
            margin-top: ${isMobileWidth ? '28px' : 0};
          `}
        >
          <Typography
            data-cy="viz-tabs-title"
            variant="h4"
            css={`
              font-size: 20px;
              font-weight: 600;
              line-height: 1.5;
            `}
          >
            {t(getTitle(props.value))}
          </Typography>
          <Typography
            data-cy="viz-tabs-title-desc"
            variant="subtitle1"
            css={`
              font-size: 14px;
              margin-top: 4px;
            `}
          >
            {t(getTitleDesc(props.value))}
          </Typography>
        </Grid>

        <Hidden smUp>
          <Grid item xs={3} />
        </Hidden>

        <Grid item xs={7} container justify="flex-end">
          <Tabs
            value={props.value}
            onChange={props.onTabClick}
            aria-label="simple tabs example"
            data-cy="tabs-container"
            css={`
              width: 100%;
              [class*='MuiTabs-flexContainer'] {
                justify-content: flex-end;
              }
            `}
          >
            <Tab
              data-cy="pillars-tab"
              css={TabStyle}
              label={t('home.chart_nav.pillars')}
              {...a11yProps(0)}
            />
            <Tab
              data-cy="prio-tab"
              css={TabStyle}
              label={t('home.chart_nav.priority_area')}
              {...a11yProps(1)}
            />
            <Tab
              data-cy="target-group-tab"
              css={TabStyle}
              label={t('home.chart_nav.target_group')}
              {...a11yProps(2)}
            />
            <Tab
              data-cy="multi-year-tab"
              css={TabStyle}
              label={t('home.chart_nav.one_year_and_multi_year')}
              {...a11yProps(3)}
            />
            <Tab
              data-cy="sdg-tab"
              css={TabStyle}
              label={t('home.chart_nav.sdg')}
              {...a11yProps(4)}
            />
            <Tab
              data-cy="map-tab"
              css={TabStyle}
              label={t('home.chart_nav.map')}
              {...a11yProps(5)}
            />
          </Tabs>
        </Grid>
      </Grid>

      {/* tab content */}
      <Grid
        item
        lg={12}
        css={`
          width: 100%;
        `}
      >
        <TabPanel value={props.value} index={0} data-cy="pillars-panel">
          <PillarContainer data={props.pillarData} />
        </TabPanel>

        <TabPanel value={props.value} index={1} data-cy="prio-panel">
          {/* Priority Area horizontal bar chart */}
          <PriorityAreaContainer
            data={props.priorityAreaData}
            selectedBreakdown={props.selectedBreakdown}
            setSelectedBreakdown={props.onBreakdownSelect}
          />
        </TabPanel>

        <TabPanel value={props.value} index={2} data-cy="target-group-panel">
          <TargetGroupContainer data={props.targetGroupData} />
        </TabPanel>

        <TabPanel value={props.value} index={3} data-cy="multi-year-panel">
          <OneYearAndMultiYearContainer data={props.oneAndMultiYearData} />
        </TabPanel>

        <TabPanel value={props.value} index={4} data-cy="sdg-panel">
          {/* SDG bubble chart */}
          <BubbleChart
            data={props.bubbleChartData}
            selectedBubble={props.selectedBubble}
            setSelectedBubble={props.onBubbleSelect}
          />
        </TabPanel>

        <TabPanel value={props.value} index={5} data-cy="map-panel">
          {/* Geomap */}
          <GeoMap data={props.geoMapData} />
        </TabPanel>
      </Grid>
    </React.Fragment>
  );
}
