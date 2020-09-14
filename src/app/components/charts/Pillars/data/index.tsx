import { BarSvgProps } from '@nivo/bar';
import {
  CommonBarProps,
  CommonBarPropsHorizontal,
} from 'app/components/charts/common/CommonProps';

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
  ...CommonBarPropsHorizontal,
  indexBy: 'name',
  keys: ChartKeys,
};

type pillarProps = {
  name: string;
  budget: number;
  spent: number;
};

export function formatPillarData(data: pillarProps[]): ChartDataProps[] {
  const chartData: ChartDataProps[] = [];

  data.map((pillar: pillarProps) => {
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
