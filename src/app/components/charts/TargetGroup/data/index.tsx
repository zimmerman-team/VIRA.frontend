import { BarSvgProps } from '@nivo/bar';
import {
  CommonBarProps,
  CommonBarPropsHorizontal,
} from 'app/components/charts/common/CommonProps';
import {
  ChartDataPropsPeopleReached,
  formatPriorityAreaSDGsData,
} from '../../PriorityArea/data';

const BarColor = '#242E42';
const ChartKeys: string[] = ['Budget'];

/* ------------------------------------------------------------ */
/* None */
interface ChartDataProps {
  name: string;
  Budget: number;
  BudgetColor: string;
}

// @ts-ignore
export const TargetGroupConfigBase: BarSvgProps = {
  ...CommonBarProps,
  ...CommonBarPropsHorizontal,
  indexBy: 'name',
  keys: ChartKeys,
};

type TargetGroupDataProps = {
  name: string;
  budget: number;
  contribution: number;
  reached: number;
  target: number;
};

/* ------------------------------------------------------------ */
/* Target Group */

export function formatTargetGroupDataBudget(
  data: TargetGroupDataProps[]
): ChartDataProps[] {
  const chartData: ChartDataProps[] = [];

  data.forEach((TargetGroup: TargetGroupDataProps) => {
    chartData.push({
      name: TargetGroup.name,
      Budget: TargetGroup.budget,
      BudgetColor: BarColor,
    });
  });

  return chartData;
}

/* ------------------------------------------------------------ */
/* People Reached */

export interface PriorityAreaPopleReachedProps {
  budget: number;
  contribution: number;
  name: string;
  reached: number;
  target: number;
}

export function formatPriorityAreaPeopleReachedData(
  data: PriorityAreaPopleReachedProps[]
): ChartDataPropsPeopleReached[] {
  const chartData: ChartDataPropsPeopleReached[] = [];
  const colors = ['#242E42', '#828894'];

  data.forEach((priorityArea: PriorityAreaPopleReachedProps) => {
    chartData.push({
      name: priorityArea.name,
      'People Reached': priorityArea.reached,
      'People ReachedColor': colors[0],
      'People Targeted': priorityArea.target,
      'People TargetedColor': colors[1],
    });
  });

  return chartData;
}

/* ------------------------------------------------------------ */
/* SDG's */

/* ------------------------------------------------------------ */
/* Generic */

export function formatTargetGroupData(selectedBreakdown: string, data: any) {
  let formattedData = {};

  switch (selectedBreakdown) {
    case 'None':
      formattedData = formatTargetGroupDataBudget(data);
      break;
    case 'People Reached':
      formattedData = formatPriorityAreaPeopleReachedData(data);
      break;
    case 'SDGs':
      formattedData = formatPriorityAreaSDGsData(data);
      break;
    default:
      formattedData = formatTargetGroupDataBudget(data);
  }
  return formattedData;
}
