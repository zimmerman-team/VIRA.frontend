import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import styled from 'styled-components/macro';
import get from 'lodash/get';
import { colorScheme } from 'app/components/charts/BarCharts/common/colorUtil';
import { useMediaQuery, Typography } from '@material-ui/core';
import {
  HorizontalBarChartModel,
  getBarModel,
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
import { useTranslation } from 'react-i18next';
import { MobileVerticalScroll } from 'app/components/layout/MobileVerticalScroll';

// TODO:
//  - Find a way to implement the colouring.
//  - Discuss with designer, implementation is not 1on1 with design

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
interface BarComponentPropsModel {
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
}
const BarComponent = (props: BarComponentPropsModel) => {
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
    showBudgetLine,
    showContribLine,
    ...fprops
  } = props;
  const width = getBarInnerLineWidth(
    allData,
    fprops.data,
    containerWidth - 286, // subtracted value should align with margin left + right in model.tsx
    'value3'
  );
  const contribLineWidth = getBarInnerLineWidth(
    allData,
    fprops.data,
    containerWidth - 286, // subtracted value should align with margin left + right in model.tsx
    'value4'
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
        <rect {...fprops} y={fprops.y - 2} fill={props.color} height="25px" />
      )}
      {showBudgetLine && (
        <React.Fragment>
          {/* budget line */}
          <line
            x1="0"
            x2={width}
            y1={props.y + 4}
            y2={props.y + 4}
            style={{
              strokeWidth: 2,
              stroke: ProjectPalette.secondary.main,
            }}
          />
          <line
            x1={width}
            x2={width}
            y1={props.y}
            y2={props.y + 8}
            style={{ strokeWidth: 2, stroke: ProjectPalette.secondary.main }}
          />
        </React.Fragment>
      )}
      {showContribLine && (
        <React.Fragment>
          {/* contribution line */}
          <line
            x1="0"
            x2={contribLineWidth}
            y1={props.y + 15}
            y2={props.y + 15}
            style={{
              strokeWidth: 2,
              stroke: ProjectPalette.chart.darkSkyBlue,
            }}
          />
          <line
            x1={contribLineWidth}
            x2={contribLineWidth}
            y1={props.y + 11}
            y2={props.y + 19}
            style={{ strokeWidth: 2, stroke: ProjectPalette.chart.darkSkyBlue }}
          />
        </React.Fragment>
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
  padding-left: 256px;
  flex-direction: row;
  justify-content: space-between;
  color: ${ProjectPalette.secondary.main};
`;

const TopAxisValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: #6f7173;
`;

const Legends = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  //align-self: flex-end;
  align-items: center;
`;

// https://nivo.rocks/bar/
export function HorizontalBarChart(props: HorizontalBarChartModel) {
  const { t } = useTranslation();
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
    find(props.chartLegends, { label: 'charts.barchart.target' }),
    'selected',
    true
  );
  const showBudgetLine = get(
    find(props.chartLegends, { label: 'charts.barchart.budget' }),
    'selected',
    true
  );
  const showContribLine = get(
    find(props.chartLegends, { label: 'charts.barchart.commitment' }),
    'selected',
    true
  );

  function renderBarchart() {
    const barModel: any = getBarModel(t);
    if (isMobileWidth) {
      barModel.axisBottom.tickValues = 3;
    }
    if (typeof props.values !== 'undefined' && props.values.length > 0) {
      return (
        <>
          {(showBudgetLine || showContribLine) && (
            <TopAxis>
              <TopAxisValue>0€</TopAxisValue>
              <TopAxisValue>{`${Math.round(maxBudgetVal)}€`}</TopAxisValue>
            </TopAxis>
          )}
          <div
            css={`
              width: 100%;
              height: ${props.values.length > 1 ? 350 : 100}px;
            `}
          >
            <BarChart
              {...barModel}
              data={props.values}
              barComponent={(bProps: any) => (
                <BarComponent
                  {...bProps}
                  showBar={showBar}
                  allData={props.values}
                  containerWidth={containerWidth}
                  showBudgetLine={showBudgetLine}
                  showContribLine={showContribLine}
                />
              )}
              colors={colorScheme(props.colors)}
              tooltip={(tProps: any) => (
                <ChartTooltip
                  {...tProps}
                  maxValue={props.maxValue}
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
          </div>

          {!isMobileWidth && props.chartLegends && (
            <Legends>
              {/* <DataDaterangePicker /> */}
              <div />
              <div
                css={`
                  display: flex;
                `}
              >
                {props.chartLegends.map(legend => (
                  <LegendControl
                    {...legend}
                    key={legend.label}
                    onClick={props.onChartLegendClick}
                  />
                ))}
              </div>
            </Legends>
          )}
        </>
      );
    }
    return <NoDataMessage>No data found</NoDataMessage>;
  }

  return (
    <React.Fragment>
      <MobileVerticalScroll>
        <ChartContainer
          ref={containerRef}
          css={`
            height: ${props.values.length > 1 ? '390px' : '150px'};
            @media (max-width: 600px) {
              width: 200vw;
            }
          `}
        >
          {renderBarchart()}
        </ChartContainer>
      </MobileVerticalScroll>
      {isMobileWidth && props.chartLegends && (
        <React.Fragment>
          <div
            css={`
              width: 100%;
              height: 16px;
            `}
          />
          <Legends>
            {props.chartLegends.map(legend => (
              <LegendControl
                {...legend}
                key={legend.label}
                onClick={props.onChartLegendClick}
              />
            ))}
          </Legends>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
