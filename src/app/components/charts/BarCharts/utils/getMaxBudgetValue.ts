import React from 'react';
import { HorizontalBarChartValueModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';

//
// interface DataModel {
//   name: string;
//   value1?: number;
//   value2?: number;
//   value3?: number;
//   value4?: number;
//   value1Color?: string;
//   value2Color?: string;
//   value3Color?: string;
//   value4Color?: string;
//   tooltip?: Tooltip;
// }
//
// interface Tooltip {
//   title: string;
//   items: Item[];
// }
//
// interface Item {
//   label: string;
//   value: any;
//   percentage?: string;
// }

export function getMaxBudgetValue(data: HorizontalBarChartValueModel[]) {
  return Math.max(...data.map((a: any) => a.value3));
}
