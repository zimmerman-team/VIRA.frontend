import 'styled-components/macro';
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import styled from 'styled-components';
import get from 'lodash/get';
import { colorScheme } from 'app/components/charts/BarCharts/common/colorUtil';
import { useMediaQuery, Typography } from '@material-ui/core';
import {
  HorizontalBarChartModel,
  barModel,
  BarChartLegendModel,
} from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import { ProjectPalette } from 'app/theme';
import { useWindowSize } from 'react-use';
import { getBarInnerLineWidth } from 'app/components/charts/BarCharts/utils/getBarInnerLineWidth';
import {
  ChartTooltip,
  ChartTooltipItemModel,
} from 'app/components/charts/BarCharts/common/ChartTooltip';
import { getMaxBudgetValue } from 'app/components/charts/BarCharts/utils/getMaxBudgetValue';
import { LegendControl } from 'app/components/charts/BarCharts/common/LegendControl';
import find from 'lodash/find';
import filter from 'lodash/filter';

// TODO:
//  - Find a way to implement the colouring.
//  - Discuss with designer, implementation is not 1on1 with design

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const BarComponent = (props: {
  [x: string]: any;
  color?: any;
  y?: any;
  data?: any;
  borderRadius?: any;
  borderWidth?: any;
  enableLabel?: any;
  labelSkipWidth?: any;
  labelSkipHeight?: any;
  showTooltip?: any;
  hideTooltip?: any;
  getTooltipLabel?: any;
  tooltipFormat?: any;
  shouldRenderLabel?: any;
  labelColor?: any;
  borderColor?: any;
  allData?: any;
  containerWidth?: any;
  showBar?: boolean;
  showLine?: boolean;
}) => {
  const {
    borderRadius,
    borderWidth,
    enableLabel,
    labelSkipWidth,
    labelSkipHeight,
    showTooltip,
    hideTooltip,
    getTooltipLabel,
    tooltipFormat,
    shouldRenderLabel,
    labelColor,
    borderColor,
    allData,
    containerWidth,
    tooltip,
    showBar,
    showLine,
    ...fprops
  } = props;
  const width = getBarInnerLineWidth(
    allData,
    fprops.data,
    containerWidth - 170
  );
  return (
    <g
      {...fprops}
      onMouseEnter={(e: any) => {
        fprops.onMouseEnter();
        showTooltip(tooltip(fprops.data.data.tooltip), e);
      }}
      onMouseLeave={(e: any) => {
        fprops.onMouseLeave();
        hideTooltip(tooltip(fprops.data.data.tooltip), e);
      }}
    >
      {showBar && (
        <rect {...fprops} y={fprops.y + 10} fill={props.color} height="25px" />
      )}
      {showLine && (
        <>
          <line
            x1="0"
            x2={width}
            y1={props.y + 22}
            y2={props.y + 22}
            style={{
              strokeWidth: 2,
              stroke: ProjectPalette.secondary.main,
            }}
          />
          <line
            x1={width}
            x2={width}
            y1={props.y + 15}
            y2={props.y + 29}
            style={{ strokeWidth: 2, stroke: ProjectPalette.secondary.main }}
          />
        </>
      )}
    </g>
  );
};

const BarChart = styled(props => <ResponsiveBar {...props} />)``;

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoDataMessage = styled(props => <Typography variant="h6" {...props} />)`
  && {
    font-size: 1rem;
    font-family: Inter;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.2px;
  }
`;

const TopAxis = styled.div`
  width: 100%;
  display: flex;
  padding-left: 140px;
  flex-direction: row;
  justify-content: space-between;
  color: ${ProjectPalette.secondary.main};
`;

const Legends = styled.div`
  display: flex;
  align-self: flex-end;
`;

// https://nivo.rocks/bar/
export function HorizontalBarChart(props: HorizontalBarChartModel) {
  const [containerWidth, setContainerWidth] = React.useState(0);
  const containerRef: any = React.useRef();
  const [maxBudgetVal, setMaxBudgetVal] = React.useState(0);
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  React.useLayoutEffect(() => {
    if (containerRef) {
      setContainerWidth(get(containerRef, 'current.offsetWidth', 0));
    }
  }, [useWindowSize().width]);

  React.useEffect(() => {
    setMaxBudgetVal(getMaxBudgetValue(props.values));
  }, [props.values]);

  const showBar = get(
    find(props.chartLegends, { label: 'Target' }),
    'selected',
    true
  );
  const showLine = get(
    find(props.chartLegends, { label: 'Budget' }),
    'selected',
    true
  );

  if (isMobileWidth) {
    barModel.axisBottom.tickValues = 3;
  }

  function renderBarchart() {
    if (typeof props.values !== 'undefined' && props.values.length > 0) {
      // console.log(props.maxValue);
      return (
        <>
          {showLine && (
            <TopAxis>
              <div>0€</div>
              <div>{maxBudgetVal}€</div>
            </TopAxis>
          )}
          <BarChart
            {...barModel}
            data={props.values}
            barComponent={(bProps: any) => (
              <BarComponent
                {...bProps}
                showBar={showBar}
                showLine={showLine}
                allData={props.values}
                containerWidth={containerWidth}
              />
            )}
            colors={colorScheme(props.colors)}
            tooltip={(tProps: any) => (
              <ChartTooltip
                {...tProps}
                items={filter(tProps.items, (item: ChartTooltipItemModel) => {
                  const foundLegend = find(
                    props.chartLegends,
                    (c: BarChartLegendModel) =>
                      (item.label as string).indexOf(c.label) > -1
                  );
                  return foundLegend ? foundLegend.selected : true;
                })}
              />
            )}
            maxValue={props.maxValue || 'auto'}
            axisBottom={showBar ? barModel.axisBottom : null}
          />
          {props.chartLegends && (
            <Legends>
              {props.chartLegends.map(legend => (
                <LegendControl
                  {...legend}
                  key={legend.label}
                  onClick={props.onChartLegendClick}
                />
              ))}
            </Legends>
          )}
        </>
      );
    }
    return <NoDataMessage>No data found</NoDataMessage>;
  }
  return (
    <ChartContainer
      ref={containerRef}
      css={`
        height: ${props.values.length > 1
          ? `${props.values.length * 80}px`
          : '100px'};
      `}
    >
      {renderBarchart()}
    </ChartContainer>
  );
}
