import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { get, find, uniqBy } from 'lodash';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { OutcomeCard } from 'app/modules/common/components/OutcomeCard';
import { Description } from 'app/modules/common/components/DescriptionParams';
import { ProjectOutcomeCardMock } from 'app/modules/detail-modules/project-detail/mock';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';
import TableModule from 'app/components/datadisplay/Table';
import { Hidden, Typography, useMediaQuery } from '@material-ui/core';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { Route } from 'react-router-dom';
import { HorizontalBarChart } from 'app/components/charts/BarCharts/HorizontalBarChart';
import { BubbleChart } from 'app/components/charts/Bubble';
import { TabNavMockViz } from 'app/modules/detail-modules/project-detail/model';
import { GeoMap } from 'app/components/charts/GeoMap';
import { NavItemParams } from 'app/modules/common/consts';
import { getNavTabItems } from 'app/modules/landing/utils/getNavTabItems';
import { bubbleMockData } from 'app/components/charts/Bubble/mock';
import { HorizontalBarChartValueModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import { ProjectPalette } from 'app/theme';

export const ProjectDetailLayout = (props: any) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item xs={12} lg={6}>
      <BreadCrumbs
        {...GranteeBreadCrumbsMock}
        previousLocations={[{ label: 'Projects', url: '/' }]}
        currentLocation={props.projectDetail.project}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* button: generate report */}
    <Hidden xsDown>
      <Grid item xs={12} lg={6} container justify="flex-end">
        <ContainedButton
          text="Generate Report"
          onClick={props.projectDetail.generateReport}
        />
      </Grid>
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item xs={12} lg={12}>
      <TitleFragment
        title={props.projectDetail.project}
        id={`project id: ${props.projectDetail.project_id}`}
        date="*earliest and latest activity start dates"
        url_note={props.projectDetail.organisation}
        url={props.projectDetail.website}
        stats={[
          {
            label: 'Total project amount',
            value: parseInt(props.projectDetail.total_amount || '', 10)
              .toLocaleString(undefined, {
                currency: 'EUR',
                currencyDisplay: 'symbol',
                style: 'currency',
              })
              .replace('.00', ''),
          },
          {
            label: 'Project duration',
            value: `${(props.projectDetail.start_date || '').replace(
              /-/g,
              '.'
            )} - ${(props.projectDetail.end_date || '').replace(/-/g, '.')}`,
          },
        ]}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* mobile button: generate report */}
    <Hidden smUp>
      <Grid item xs={12}>
        <ContainedButton
          text="Generate Report"
          onClick={props.projectDetail.generateReport}
        />
      </Grid>
    </Hidden>

    {/* ---------------------------------------------------------------------*/}
    {/* project description */}
    <Grid item xs={12} lg={6}>
      <Description {...props} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* charts */}
    <React.Fragment>
      <Grid container item>
        <Grid
          item
          xs={12}
          sm={9}
          css={`
            order: ${useMediaQuery('(max-width: 600px)') ? 1 : 0};
            margin-top: ${useMediaQuery('(max-width: 600px)') ? '28px' : 0};
          `}
        >
          <Typography variant="h4">
            {get(
              find(
                TabNavMockViz.items,
                (item: NavItemParams) =>
                  item.path.split('/')[2] === get(props.match.params, 'viz', '')
              ),
              'label',
              'Priority Area'
            )}
          </Typography>
        </Grid>

        <Hidden smUp>
          <Grid item xs={3} />
        </Hidden>

        <Grid item xs={9} sm={3}>
          <TabNavigator
            {...getNavTabItems(
              TabNavMockViz,
              get(props.match.params, 'code', '')
            )}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} lg={12}>
        <Route
          path={`/projects/${get(props.match.params, 'code', '')}/detail`}
          exact
        >
          <HorizontalBarChart
            colors={[
              ProjectPalette.primary.main,
              ...uniqBy(
                ((props.ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
                  [],
                'value2Color'
              ).map((item: any) => item.value2Color),
            ]}
            values={
              ((props.ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
              []
            }
            maxValue={Math.max(
              ...(
                ((props.ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
                []
              ).map((item: any) => item.value1 + item.value2)
            )}
            chartLegends={props.barChartLegends}
            onChartLegendClick={props.onBarChartLegendClick}
          />
        </Route>
        <Route
          path={`/projects/${get(
            props.match.params,
            'code',
            ''
          )}/detail/priority-area`}
          exact
        >
          <HorizontalBarChart
            colors={[
              ProjectPalette.primary.main,
              ...uniqBy(
                ((props.ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
                  [],
                'value2Color'
              ).map((item: any) => item.value2Color),
            ]}
            values={
              ((props.ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
              []
            }
            maxValue={Math.max(
              ...(
                ((props.ppVizData as unknown) as HorizontalBarChartValueModel[]) ||
                []
              ).map((item: any) => item.value1 + item.value2)
            )}
            chartLegends={props.barChartLegends}
            onChartLegendClick={props.onBarChartLegendClick}
          />
        </Route>
        <Route
          path={`/projects/${get(props.match.params, 'code', '')}/detail/sdgs`}
          exact
        >
          <BubbleChart
            data={{ ...bubbleMockData, children: props.SDGVizData }}
            selectedBubble={props.selectedSDG}
            setSelectedBubble={props.onBubbleSelect}
          />
        </Route>
        <Route
          path={`/projects/${get(props.match.params, 'code', '')}/detail/map`}
          exact
        >
          <GeoMap data={props.geoMapData} />
        </Route>
      </Grid>
    </React.Fragment>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome cards */}
    <Grid item container xs={12} md={12} lg={12}>
      <Grid item xs={12} lg={6}>
        <OutcomeCard {...ProjectOutcomeCardMock[0]} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <OutcomeCard {...ProjectOutcomeCardMock[1]} />
      </Grid>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* reports */}
    <Grid item xs={12} lg={12}>
      <TableModule {...props.reportTable} />
    </Grid>
  </React.Fragment>
);
