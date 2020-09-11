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
export const PriorityAreaConfigBase: BarSvgProps = {
  ...CommonBarProps,
  ...CommonBarPropsHorizontal,
  indexBy: 'name',
  keys: ChartKeys,
};

type priorityAreaDataProps = {
  name: string;
  budget: number;
  contribution: number;
  reached: number;
  target: number;
};

export function formatPriorityAreaData(
  data: priorityAreaDataProps[]
): ChartDataProps[] {
  const chartData: ChartDataProps[] = [];

  data.map((priorityArea: priorityAreaDataProps) => {
    chartData.push({
      name: priorityArea.name,
      Budget: priorityArea.budget,
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
