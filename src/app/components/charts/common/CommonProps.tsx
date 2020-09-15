import { BarSvgProps } from '@nivo/bar';
import { BarChartLeftAxis } from 'app/components/charts/common/axis/BarChartLeftAxis';
import { BarChartBottomAxis } from 'app/components/charts/common/axis/BarChartBottomAxis';
// import { CustomBarComponent } from 'app/components/charts/common/CustomBarComponent';

// @ts-ignore
export const CommonBarProps: BarSvgProps = {
  enableGridY: true,
  enableGridX: true,
  enableLabel: false,
  maxValue: 'auto',
  colors: ({ id, data }) => data[`${id}Color`],
  theme: {
    tooltip: {
      container: {
        width: 382,
        color: '#ffffff',
        background: '#242e42',
      },
    },
  },
};

export const CommonBarPropsHorizontal = {
  layout: 'horizontal',
  groupMode: 'stacked',
  padding: 0.4,
  margin: {
    top: 0,
    right: 16,
    bottom: 0,
    left: 255,
  },
  // @ts-ignore
  axisLeft: { renderTick: BarChartLeftAxis },
  // @ts-ignore
  axisBottom: { renderTick: BarChartBottomAxis },
};

export const CommonBarPropsVertical = {
  ...CommonBarProps,
  groupMode: 'grouped',
  innerPadding: 32,
  margin: {
    top: 0,
    right: 0,
    bottom: 60,
    left: 48,
  },

  layout: 'vertical',
  // @ts-ignore
  // axisLeft: { renderTick: BarChartLeftVerticalAxis },
  // @ts-ignore
  // axisBottom: { renderTick: BarChartBottomVerticalAxis },

  indexBy: 'name',
};
