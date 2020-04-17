export function getBarInnerLineWidth(
  allData: any,
  barData: any,
  width: any,
  dataField: string
) {
  const value = barData.data[dataField];
  const maxValue = Math.max(
    ...allData.map((a: any) => a.value3),
    ...allData.map((a: any) => a.value4)
  );
  return (value / maxValue) * width;
}
