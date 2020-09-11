import React from 'react';
import { BarSvgProps } from '@nivo/bar';
import { CustomBarComponent } from 'app/components/graphs/common/CustomBarComponent';
import { BarChartLeftAxis } from 'app/components/graphs/common/BarChartLeftAxis';
import { BarChartBottomAxis } from 'app/components/graphs/common/BarChartBottomAxis';

export const CommonBarProps: BarSvgProps = {
  margin: {
    top: 0,
    right: 0,
    bottom: 60,
    left: 255,
  },
  enableGridY: true,
  enableGridX: false,
  /*theme: {
    grid: {
      line: {
        stroke: "pink",
        strokeWidth: 2,
        strokeDasharray: "4 4",
      },
    },
  },*/

  // @ts-ignore
  axisLeft: { renderTick: BarChartLeftAxis },
  // @ts-ignore
  axisBottom: { renderTick: BarChartBottomAxis },
  enableLabel: false,
  padding: 0.4,
  groupMode: 'stacked',
  colors: ({ id, data }) => data[`${id}Color`],
};

export const CommonBarPropsHorizontal = {
  layout: 'horizontal',
  barComponent: CustomBarComponent,
};
