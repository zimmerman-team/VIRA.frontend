export function getBarInnerLineWidth(allData: any, barData: any, width: any) {
  const value = barData.data.value3;
  const maxValue = Math.max(...allData.map((a: any) => a.value3));
  return (value / maxValue) * width;
}
