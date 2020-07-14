/* eslint-disable no-restricted-globals */

export function getBarInnerLineWidth(
  allData: any,
  barData: any,
  width: any,
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
