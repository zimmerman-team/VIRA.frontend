import { BarSvgProps } from '@nivo/bar';
import {
  CommonBarProps,
  CommonBarPropsHorizontal,
} from 'app/components/charts/common/CommonProps';
import { ChartCountItemProps } from '../../common/ChartCount';
import { formatPriorityAreaTargetGroupData } from '../../PriorityArea/data';
import { formatPriorityAreaPeopleReachedData } from '../../TargetGroup/data';

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

export function getKeys(selectedBreakdown: string) {
  switch (selectedBreakdown) {
    case 'None':
      return ChartKeys;
    case 'Target Group':
      return [
        'Children & youth (up to +/- 30 years)',
        'The Elderly (65+)',
        'Women & Girls',
        'Refugees',
        'People with lower income',
        'Homeless people',
        'People with disabilities',
      ];
    case 'People Reached':
      return ['People Reached', 'People Targeted'];
    default:
      return ChartKeys;
  }
}

type OneYearAndMultiYearProps = {
  name: string;
  budget_Spent: number;
  budget_Total: number;
  count: number;
};

export function formatOneYearAndMultiYearDataBudget(
  data: OneYearAndMultiYearProps[]
): ChartDataProps[] {
  const chartData: ChartDataProps[] = [];

  data.forEach((OneYearAndMultiYear: OneYearAndMultiYearProps) => {
    chartData.push({
      name: OneYearAndMultiYear.name,
      count: OneYearAndMultiYear.count,
      countColor: OneYearAndMultiYear1Colors[0],
    });
  });

  return chartData;
}

export function formatOneYearAndMultiYearPeopleReachedData(data: any[]): any[] {
  const chartData: any[] = [];
  const colors = ['#242E42', '#828894'];

  data.forEach((item: any) => {
    chartData.push({
      name: item.name,
      'People Reached': item.reached,
      'People ReachedColor': colors[0],
      // do this calculation so we show the bars as percentages
      'People Targeted':
        item.targeted - item.reached > 0 ? item.targeted - item.reached : 0,
      'People TargetedColor': colors[1],
    });
  });

  return chartData;
}

export function formatCountData(
  data: OneYearAndMultiYearProps[]
): ChartCountItemProps[] {
  const countData: ChartCountItemProps[] = [
    {
      name: 'Number of One Year projects',
      count: data[0].count.toString(),
    },
    {
      name: 'Number of Multi Year projects',
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

export function formatOneYearAndMultiYearData(
  selectedBreakdown: string,
  data: any
) {
  let formattedData = {};

  switch (selectedBreakdown) {
    case 'None':
      formattedData = formatOneYearAndMultiYearDataBudget(data);
      break;
    case 'Target Group':
      formattedData = formatPriorityAreaTargetGroupData(data);
      break;
    case 'People Reached':
      formattedData = formatOneYearAndMultiYearPeopleReachedData(data);
      break;
    default:
      formattedData = formatOneYearAndMultiYearDataBudget(data);
  }
  return formattedData;
}
