export interface PolicyPriorityProps {
  label: string;
  value: string;
}
export const policyPriorities: PolicyPriorityProps[] = [
  { label: 'charts.items.refugees', value: 'Refugees' },
  { label: 'charts.items.drug_use', value: 'Drug use' },
  { label: 'charts.items.elderly', value: 'The Elderly' },
  { label: 'charts.items.prostitution', value: 'Prostitution' },
  {
    label: 'charts.items.poverty',
    value: 'Poverty reduction with a focus on youth and children',
  },
  { label: 'charts.items.homelessness', value: 'Homelessness' },
  {
    label: 'charts.items.prisoner',
    value: 'Prisoner rehabilitation / reintegration',
  },
];

export interface FunderProps {
  label: string;
  value: string;
}

export const funderList: FunderProps[] = [
  {
    label: 'funder one',
    value: 'funder one',
  },
  {
    label: 'funder two',
    value: 'funder two',
  },
  {
    label: 'funder three',
    value: 'funder three',
  },
  {
    label: 'funder four',
    value: 'funder four',
  },
];
