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

export function getKeys(selectedBreakdown: string) {
  switch (selectedBreakdown) {
    case 'None':
      return ChartKeys;
    case 'One Year & Multi Year':
      return ['Budget One Year', 'Budget Multi Year'];
    default:
      return ChartKeys;
  }
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
  groupMode: 'grouped',
  innerPadding: 32,
  indexBy: 'name',
  keys: ChartKeys,
};

export function formatPillarData(
  data: pillarProps[],
  breakdown: string
): any[] {
  const chartData: any[] = [];

  if (breakdown === 'None') {
    data.forEach((pillar: pillarProps) => {
      chartData.push({
        name: pillar.name,
        Spent: pillar.spent,
        SpentColor: Pillar1Colors[0],
        'Not Spent': pillar.budget - pillar.spent,
        'Not SpentColor': Pillar1Colors[1],
      });
    });
  } else if (breakdown === 'One Year & Multi Year') {
    data.forEach((pillar: any) => {
      chartData.push({
        name: pillar.name,
        'Budget One Year': pillar.oneYear,
        'Budget One YearColor': Pillar1Colors[0],
        'Budget Multi Year': pillar.multiYear,
        'Budget Multi YearColor': Pillar1Colors[1],
      });
    });
  }

  return chartData;
}
