import { BarSvgProps } from '@nivo/bar';
import {
  CommonBarProps,
  CommonBarPropsHorizontal,
} from 'app/components/charts/common/CommonProps';

const BarColor: string = '#242E42';
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

export function formatTargetGroupData(
  data: TargetGroupDataProps[]
): ChartDataProps[] {
  const chartData: ChartDataProps[] = [];

  data.map((TargetGroup: TargetGroupDataProps) => {
    chartData.push({
      name: TargetGroup.name,
      Budget: TargetGroup.budget,
      BudgetColor: BarColor,
    });
  });

  return chartData;
}

/* ------------------------------------------------------------ */
/* Target Group */

/* ------------------------------------------------------------ */
/* One Year & Multi Year */

/* ------------------------------------------------------------ */
/* People Reached */

/* ------------------------------------------------------------ */
/* SDG's */
