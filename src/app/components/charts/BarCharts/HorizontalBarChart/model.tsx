// @ts-nocheck
import React from 'react';
import { ColorSchemeType } from 'app/components/charts/BarCharts/common/colorUtil';
import { ProjectPalette } from 'app/theme';

export type BarChartLegendModel = {
  label: string;
  selected: boolean;
};

export type HorizontalBarChartValueModel = {
  name: string;
  value1: number | null;
  value2?: number | null;
  value3?: number | null;
  value1Color: string;
  value2Color?: string;
  tooltip?: ChartTooltipItemModel;
};
export type HorizontalBarChartModel = {
  values: HorizontalBarChartValueModel[];
  colors?: ColorSchemeType;
  chartLegends?: BarChartLegendModel[];
  onChartLegendClick?: Function;
};

// todo: add BarSvgProps when axis/renderTick function declaration is included
export const barModel: any = {
  data: [],
  minValue: 0,
  keys: ['value1', 'value2'],
  indexBy: 'name',
  margin: { top: 10, right: 50, bottom: 50, left: 200 },
  padding: 0,
  groupedMode: 'stacked',
  layout: 'horizontal',
  axisRight: null,
  axisBottom: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'People',
    legendOffset: 32,
    legendPosition: 'middle',
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    renderTick: ({ textX, value, x, y }) => {
      return (
        <g transform={`translate(${x},${y})`}>
          <text
            style={{
              fontWeight: 400,
              fontFamily: 'Inter',
              fontSize: 14,
              dominantBaseline: 'auto',
            }}
            textAnchor="start"
            transform="translate(-200, -10)"
          >
            {value}
          </text>
          <line
            x1="0"
            x2="-200"
            y1="0"
            y2="0"
            style={{
              stroke: ProjectPalette.grey.A100,
              strokeWidth: 1,
            }}
          />
        </g>
      );
    },
  },
  labelSkipWidth: 9,
  labelSkipHeight: 17,
  legends: [],
  motionStiffness: 90,
  motionDamping: 15,
  colorBy: e => e.data[`${e.id}Color`],
  enableGridX: true,
  enableGridY: true,
  theme: {
    axis: {
      ticks: {
        text: {
          fontWeight: 500,
          fontFamily: 'Inter',
          fontSize: 12,
          dominantBaseline: 'auto',
        },
        line: {
          strokeWidth: 0,
        },
      },
    },
    legends: {
      text: {
        fontWeight: 500,
        fontFamily: 'Inter',
        fontSize: 12,
      },
    },
  },
  isInteractive: true,
};
