export const projectsMock: StatItemParams[] = [
  {
    amount: 104,
    type: 'Projects',
  },
  {
    amount: 5,
    type: 'New Reports',
  },
  {
    amount: 140,
    type: 'Total Reports',
  },
];

export interface StatItemParams {
  amount: number;
  type: string;
}
