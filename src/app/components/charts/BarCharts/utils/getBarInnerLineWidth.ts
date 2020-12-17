/* eslint-disable no-restricted-globals */

interface AllDataModel {
  name: string;
  value1: number;
  value2: number;
  value3: number;
  value4?: number;
  value1Color: string;
  value2Color: string;
  value4Color: string;
  tooltip: Tooltip;
}

interface BarDataModel {
  id: string;
  value: number;
  index: number;
  indexValue: string;
  data: any;
}

interface Tooltip {
  title: string;
  items: Item[];
}

interface Item {
  label: string;
  value: any;
  percentage?: string;
}

export function getBarInnerLineWidth(
  allData: AllDataModel[],
  barData: BarDataModel,
  width: number,
  dataField: string
) {
  const value = barData.data[dataField];
  const lineValues = allData
    .map((item: any) => item.value3 || 0)
    .concat(allData.map((item: any) => item.value4 || 0));
  const maxValue = Math.max(...lineValues);
  /* todo: can be removed? */
  const res = !isNaN((value / maxValue) * width)
    ? (value / maxValue) * width
    : 0;
  return res;
}
