import { BarSvgProps } from '@nivo/bar';
import { BarChartLeftAxis } from 'app/components/charts/common/BarChartLeftAxis';
import { BarChartBottomAxis } from 'app/components/charts/common/BarChartBottomAxis';
// import { CustomBarComponent } from 'app/components/charts/common/CustomBarComponent';

export const CommonBarProps: BarSvgProps = {
  margin: {
    top: 0,
    right: 16,
    bottom: 0,
    left: 255,
  },
  enableGridY: true,
  enableGridX: true,
  // @ts-ignore
  axisLeft: { renderTick: BarChartLeftAxis },
  // @ts-ignore
  axisBottom: { renderTick: BarChartBottomAxis },
  enableLabel: false,
  padding: 0.4,
  groupMode: 'stacked',
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
  // barComponent: CustomBarComponent,
};
