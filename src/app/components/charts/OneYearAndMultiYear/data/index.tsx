import { BarSvgProps } from '@nivo/bar';
import {
  CommonBarProps,
  CommonBarPropsHorizontal,
} from 'app/components/charts/common/CommonProps';
import { ChartCountItemProps } from '../../common/ChartCount';

const OneYearAndMultiYear1Colors = ['#242E42', '#828894'];
const ChartKeys = ['count'];

/* ------------------------------------------------------------ */
/* base */
interface ChartDataProps {
  name: string;
  count: number;
  countColor: string;
}

// @ts-ignore
export const OneYearAndMultiYearConfigBase: BarSvgProps = {
  ...CommonBarProps,
  ...CommonBarPropsHorizontal,
  indexBy: 'name',
  keys: ChartKeys,
};

type OneYearAndMultiYearProps = {
  name: string;
  budget_Spent: number;
  budget_Total: number;
  count: number;
};

export function formatOneYearAndMultiYearData(
  data: OneYearAndMultiYearProps[]
): ChartDataProps[] {
  const chartData: ChartDataProps[] = [];

  data.map((OneYearAndMultiYear: OneYearAndMultiYearProps) => {
    chartData.push({
      name: OneYearAndMultiYear.name,
      count: OneYearAndMultiYear.count,
      countColor: OneYearAndMultiYear1Colors[0],
    });
  });

  return chartData;
}

export function formatCountData(
  data: OneYearAndMultiYearProps[]
): ChartCountItemProps[] {
  const countData: ChartCountItemProps[] = [
    {
      name: 'One Year \n',
      count: data[0].count.toString(),
    },
    {
      name: 'Multi Year \n',
      count: data[1].count.toString(),
    },
    {
      name: 'One year projects budget spent',
      count: data[0].budget_Spent.toString(),
    },
    {
      name: 'Multi year projects budget spent',
      count: data[1].budget_Spent.toString(),
    },
  ];

  return countData;
}

/* ------------------------------------------------------------ */
/* multiyear */
