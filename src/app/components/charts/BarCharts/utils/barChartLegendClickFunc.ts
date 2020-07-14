import findIndex from 'lodash/findIndex';

interface BarChartLegendModel {
  label: string;
  selected: boolean;
}

export function barChartLegendClickFunc(
  legend: string,
  barChartLegends: BarChartLegendModel[],
  setFunction: Function
) {
  const prevBarChartLegends = [...barChartLegends];
  const legendIndex = findIndex(prevBarChartLegends, { label: legend });
  if (legendIndex !== -1) {
    prevBarChartLegends[legendIndex].selected = !prevBarChartLegends[
      legendIndex
    ].selected;
    setFunction(prevBarChartLegends);
  }
}
