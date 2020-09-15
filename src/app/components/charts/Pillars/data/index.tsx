import { BarSvgProps } from '@nivo/bar';
import { CommonBarProps } from 'app/components/charts/common/CommonProps';
import { BarChartLeftAxis } from 'app/components/charts/common/axis/BarChartLeftAxis';
import { BarChartBottomAxis } from 'app/components/charts/common/axis/BarChartBottomAxis';

const Pillar1Colors = ['#242E42', '#828894'];
const ChartKeys = ['Spent', 'Not Spent'];

/* ------------------------------------------------------------ */
/* base */
interface ChartDataProps {
  name: string;
  Spent: number;
  SpentColor: string;
  'Not Spent': number;
  'Not SpentColor': string;
}

// @ts-ignore
export const PillarConfigBase: BarSvgProps = {
  ...CommonBarProps,
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
  layout: 'horizontal',
  indexBy: 'name',
  keys: ChartKeys,
};

type pillarProps = {
  name: string;
  budget: number;
  spent: number;
};

// @ts-ignore
export const PillarMultiYearConfig: BarSvgProps = {
  ...CommonBarProps,
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
  // @ts-ignore

  groupMode: 'grouped',
  innerPadding: 32,
  // data: PillarMultiYearData,
  indexBy: 'name',
  keys: ChartKeys,
  maxValue: 15000,
};

export function formatPillarData(data: pillarProps[]): ChartDataProps[] {
  const chartData: ChartDataProps[] = [];

  data.forEach((pillar: pillarProps) => {
    chartData.push({
      name: pillar.name,
      Spent: pillar.spent,
      SpentColor: Pillar1Colors[0],
      'Not Spent': pillar.budget - pillar.spent,
      'Not SpentColor': Pillar1Colors[1],
    });
  });

  return chartData;
}

/* ------------------------------------------------------------ */
/* multiyear */
