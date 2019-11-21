export const projectsMock: StatItemParams[] = [
  {
    amount: 104,
    type: 'projects',
  },
  {
    amount: 5,
    type: 'new reports',
  },
  {
    amount: 140,
    type: 'total reports',
  },
];
export interface StatItemParams {
  amount: number;
  type: string;
}
