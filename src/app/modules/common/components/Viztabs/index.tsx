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
  Box,
  Hidden,
  useMediaQuery,
} from '@material-ui/core';
import { GeoMap } from 'app/components/charts/GeoMap';
import { BubbleChart } from 'app/components/charts/Bubble';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { HorizontalBarChartValueModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import {
  TabStyle,
  a11yProps,
  TabPanel,
} from 'app/modules/list-module/common/TabPanelProps';

type Props = {
  focus?: number;
  barChartData: any;
  barChartLegends: any;
  onBarChartLegendClick: any;
  bubbleChartData: any;
  selectedBubble: any;
  onBubbleSelect: any;
  geoMapData: any;
};

function getTitle(index: number): string {
  switch (index) {
    case 0:
      return 'Priority Area';
    case 1:
      return 'SDGs';
    case 2:
      return 'Map';
    default:
      return 'Priority Area';
  }
}

export function Viztabs(props: Props) {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');
  const [value, setValue] = React.useState(props.focus ? props.focus : 0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

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
            {getTitle(value)}
          </Typography>
        </Grid>

        <Hidden smUp>
          <Grid item xs={3} />
        </Hidden>

        <Grid container item xs={9} sm={5} lg={6} justify="flex-end">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            data-cy="tabs-container"
          >
            <Tab
              data-cy="prio-tab"
              css={TabStyle}
              label="Priority Area"
              {...a11yProps(0)}
            />
            <Tab
              data-cy="sdg-tab"
              css={TabStyle}
              label="SDGs"
              {...a11yProps(1)}
            />
            <Tab
              data-cy="map-tab"
              css={TabStyle}
              label="Map"
              {...a11yProps(2)}
            />
          </Tabs>
        </Grid>
      </Grid>

      {/* tab content */}
      <Grid item lg={12}>
        <TabPanel value={value} index={0} data-cy="prio-panel">
          {/* Priority Area horizontal bar chart */}
          <HorizontalBarChart
            colors={[
              ProjectPalette.primary.main,
              ...uniqBy(
                ((props.barChartData as unknown) as HorizontalBarChartValueModel[]) ||
                  [],
                'value2Color'
              ).map((item: any) => item.value2Color),
            ]}
            values={
              ((props.barChartData as unknown) as HorizontalBarChartValueModel[]) ||
              []
            }
            maxValue={Math.max(
              ...(
                ((props.barChartData as unknown) as HorizontalBarChartValueModel[]) ||
                []
              ).map((item: any) => item.value1 + item.value2)
            )}
            chartLegends={props.barChartLegends}
            onChartLegendClick={props.onBarChartLegendClick}
          />
        </TabPanel>

        <TabPanel value={value} index={1} data-cy="sdg-panel">
          {/* SDG bubble chart */}
          <BubbleChart
            data={props.bubbleChartData}
            selectedBubble={props.selectedBubble}
            setSelectedBubble={props.onBubbleSelect}
          />
        </TabPanel>

        <TabPanel value={value} index={2} data-cy="map-panel">
          {/* Geomap */}
          <GeoMap data={props.geoMapData} />
        </TabPanel>
      </Grid>
    </React.Fragment>
  );
}
