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

export const sdgNames: string[] = [
  'No poverty',
  'Zero hunger',
  'Good health and well-being',
  'Quality education',
  'Gender equality',
  'Clean water and sanitation',
  'Affordable and clean energy',
  'Decent work and economic growth',
  'Industry, Innovation and Infrastructure',
  'Reduced inequialities',
  'Sustainable cities and communities',
  'Responsible consumption and production',
  'Climate action',
  'Life below water',
  'Life on land',
  'Peace, Justice and strong institutions',
  'Partnerships for the goals',
];

export function getKeys(selectedBreakdown: string) {
  switch (selectedBreakdown) {
    case 'None':
      return ['Budget'];
    case 'People Reached':
      return ['People Reached', 'People Targeted'];
    case 'SDGs':
      return sdgNames;
    default:
      return ['Budget'];
  }
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

  if (data != null) {
    data.forEach((TargetGroup: TargetGroupDataProps) => {
      chartData.push({
        name: TargetGroup.name,
        Budget: TargetGroup.budget,
        BudgetColor: BarColor,
      });
    });
  }

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

  if (data != null) {
    data.forEach((targetGroup: PriorityAreaPopleReachedProps) => {
      chartData.push({
        name: targetGroup.name,
        'People Reached': targetGroup.reached,
        'People ReachedColor': colors[0],
        'People Targeted':
          targetGroup.target - targetGroup.reached > 0
            ? targetGroup.target - targetGroup.reached
            : 0,
        'People TargetedColor': colors[1],
      });
    });
  }

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
