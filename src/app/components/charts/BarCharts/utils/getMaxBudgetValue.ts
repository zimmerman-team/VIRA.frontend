export function getMaxBudgetValue(data: any) {
  return Math.max(...data.map((a: any) => a.value3));
}
