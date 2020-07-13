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
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { HorizontalBarChartValueModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import {
  TabStyle,
  a11yProps,
  TabPanel,
} from 'app/modules/list-module/common/TabPanelProps';
import { getTitle } from 'app/modules/common/components/Viztabs/utils/getTitle';

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
          lg={6}
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
        </Grid>

        <Hidden smUp>
          <Grid item xs={3} />
        </Hidden>

        <Grid item xs={12} container justify="flex-end">
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
              data-cy="prio-tab"
              css={TabStyle}
              label={t('home.chart_nav.priority_area')}
              {...a11yProps(0)}
            />
            <Tab
              data-cy="sdg-tab"
              css={TabStyle}
              label={t('home.chart_nav.sdg')}
              {...a11yProps(1)}
            />
            <Tab
              data-cy="map-tab"
              css={TabStyle}
              label={t('home.chart_nav.map')}
              {...a11yProps(2)}
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
        <TabPanel value={props.value} index={0} data-cy="prio-panel">
          {/* Priority Area horizontal bar chart */}
          <HorizontalBarChart
            colors={[
              ProjectPalette.primary.main,
              ...uniqBy(
                ((props.barChartData as unknown) as HorizontalBarChartValueModel[]) ||
                  [],
                'value2Color'
              ).map((item: BarChartItemModel) => item.value2Color),
              ...uniqBy(
                ((props.barChartData as unknown) as HorizontalBarChartValueModel[]) ||
                  [],
                'value4Color'
              ).map((item: BarChartItemModel) => item.value4Color),
            ]}
            values={
              ((props.barChartData as unknown) as HorizontalBarChartValueModel[]) ||
              []
            }
            maxValue={Math.max(
              ...(
                ((props.barChartData as unknown) as HorizontalBarChartValueModel[]) ||
                []
              ).map((item: BarChartItemModel) => item.value1 + item.value2)
            )}
            chartLegends={props.barChartLegends}
            onChartLegendClick={props.onBarChartLegendClick}
          />
        </TabPanel>

        <TabPanel value={props.value} index={1} data-cy="sdg-panel">
          {/* SDG bubble chart */}
          <BubbleChart
            data={props.bubbleChartData}
            selectedBubble={props.selectedBubble}
            setSelectedBubble={props.onBubbleSelect}
          />
        </TabPanel>

        <TabPanel value={props.value} index={2} data-cy="map-panel">
          {/* Geomap */}
          <GeoMap data={props.geoMapData} />
        </TabPanel>
      </Grid>
    </React.Fragment>
  );
}
