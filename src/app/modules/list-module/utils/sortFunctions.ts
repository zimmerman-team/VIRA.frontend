//@ts-nocheck
export const sortOnDate = (obj1: any, obj2: any, order: any) => {
  const dayMonthYear1 = obj1.data.split('-');
  const dayMonthYear2 = obj2.data.split('-');

  const date: Date = new Date(
    dayMonthYear1[2],
    dayMonthYear1[1] - 1,
    dayMonthYear1[0]
  );
  const comparison: Date = new Date(
    dayMonthYear2[2],
    dayMonthYear2[1] - 1,
    dayMonthYear2[0]
  );
  return (date - comparison) * (order === 'asc' ? 1 : -1);
};

export const sortOnMoney = (obj1: any, obj2: any, order: any) => {
  // Removes everything after the .
  // Removes all characters that are not numbers
  const number = obj1.data.split('.')[0].replace(/\D/g, '');
  const comparison = obj2.data.split('.')[0].replace(/\D/g, '');

  return (number - comparison) * (order === 'asc' ? 1 : -1);
};
