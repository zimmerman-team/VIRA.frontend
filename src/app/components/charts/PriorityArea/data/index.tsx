import { BarSvgProps } from '@nivo/bar';
import {
  CommonBarProps,
  CommonBarPropsHorizontal,
} from 'app/components/charts/common/CommonProps';
import get from 'lodash/get';
import find from 'lodash/find';

/* ------------------------------------------------------------ */
/* Common */

// @ts-ignore
export const PriorityAreaConfigBase: BarSvgProps = {
  ...CommonBarProps,
  ...CommonBarPropsHorizontal,
  indexBy: 'name',
};

export function formatPriorityAreaData(selectedBreakdown: string, data: any) {
  let formattedData = {};

  switch (selectedBreakdown) {
    case 'None':
      formattedData = formatPriorityAreaDataNone(data);
      break;
    case 'Target Group':
      formattedData = formatPriorityAreaTargetGroupData(data);
      break;
    case 'One Year & Multi Year':
      formattedData = formatPriorityAreaOneMultiYearData(data);
      break;
    case 'People Reached':
      formattedData = formatPriorityAreaPeopleReachedData(data);
      break;
    case 'SDGs':
      formattedData = formatPriorityAreaSDGsData(data);
      break;
    default:
      formattedData = formatPriorityAreaDataNone(data);
  }
  return formattedData;
}

export function getKeys(selectedBreakdown: string) {
  switch (selectedBreakdown) {
    case 'None':
      return ['Budget'];
    case 'Target Group':
      return [
        'Children & youth (up to +/- 30 years)',
        'The Elderly (65+)',
        'Women & Girls',
        'Refugees',
        'People with lower income',
        'Homeless people',
        'People with disabilities',
      ];
    case 'One Year & Multi Year':
      return ['Budget One Year', 'Budget Multi Year'];
    case 'People Reached':
      return ['People Reached', 'People Targeted'];
    case 'SDGs':
      return [
        'No poverty',
        'Clean water and sanitation',
        'Good health and well-being',
        'Gender equality',
        'Quality education',
      ];
    default:
      return ['Budget'];
  }
}

/* ------------------------------------------------------------ */
/* None */
interface ChartDataPropsNone {
  name: string;
  Budget: number;
  BudgetColor: string;
}

type priorityAreaDataProps = {
  name: string;
  budget: number;
  contribution: number;
  reached: number;
  target: number;
  children?: childProps[];
};

type childProps = {
  name: string;
  value: number;
  color: string;
};

const BarColor = '#242E42';

function formatPriorityAreaDataNone(
  data: priorityAreaDataProps[]
): ChartDataPropsNone[] {
  const chartData: ChartDataPropsNone[] = [];

  data.forEach((priorityArea: priorityAreaDataProps) => {
    chartData.push({
      name: priorityArea.name,
      Budget: priorityArea.budget,
      BudgetColor: BarColor,
    });
  });

  return chartData;
}

/* ------------------------------------------------------------ */
/* Target Group */

interface ChartDataPropsTargetGroup {
  name: string;
  'The Elderly (65+)': number;
  'The Elderly (65+)Color': string;
  'Women & Girls': number;
  'Women & GirlsColor': string;
  Refugees: number;
  RefugeesColor: string;
  'People with lower income': number;
  'People with lower incomeColor': string;
  'Homeless people': number;
  'Homeless peopleColor': string;
  'People with disabilities': number;
  'People with disabilitiesColor': string;
}

// Finds a child in the data(array) by it's name, by default returns the reached property.
// Returns either a number or string based on the getElement prop.
export function findChild(
  data: any,
  name: string,
  getElement: string = 'reached'
): string | number {
  return get(
    find(data.children, (child: any) => child.name === name),
    getElement,
    getElement === 'reached' || getElement === 'value' ? 0 : ''
  );
}

export function formatPriorityAreaTargetGroupData(
  data: priorityAreaDataProps[]
): ChartDataPropsTargetGroup[] {
  const chartData: ChartDataPropsTargetGroup[] = [];

  data.forEach((priorityArea: priorityAreaDataProps) => {
    // TODO: rewrite this logic, children[] is not consistent, check lodash/find
    chartData.push({
      name: priorityArea.name,
      'The Elderly (65+)': findChild(
        priorityArea,
        'The Elderly (65+)',
        'value'
      ),
      'The Elderly (65+)Color': findChild(
        priorityArea,
        'The Elderly (65+)',
        'color'
      ),
      'Women & Girls': findChild(priorityArea, 'Women & Girls', 'value'),
      'Women & GirlsColor': findChild(priorityArea, 'Women & Girls', 'color'),
      Refugees: findChild(priorityArea, 'Refugees', 'value'),
      RefugeesColor: findChild(priorityArea, 'Refugees', 'color'),
      'People with lower income': findChild(
        priorityArea,
        'People with lower income',
        'value'
      ),
      'People with lower incomeColor': findChild(
        priorityArea,
        'People with lower income',
        'color'
      ),
      'Homeless people': findChild(priorityArea, 'Homeless people', 'value'),
      'Homeless peopleColor': findChild(
        priorityArea,
        'Homeless people',
        'color'
      ),
      'People with disabilities': findChild(
        priorityArea,
        'People with disabilities',
        'value'
      ),
      'People with disabilitiesColor': findChild(
        priorityArea,
        'People with disabilities',
        'color'
      ),
    } as ChartDataPropsTargetGroup);
  });
  return chartData;
}

/* ------------------------------------------------------------ */
/* One Year & Multi Year */

interface PriorityAreaOneAndMultiYearProps {
  budget: number;
  budget_Multi: number;
  budget_One: number;
  contribution_Multi: number;
  contribution_One: number;
  name: string;
  reached_Multi: number;
  reached_One: number;
  target_Multi: number;
  target_One: number;
}

// TODO: design vs data is unclear, showing only budget for now.
interface ChartDataPropsOneMultiYear {
  name: string;
  'Budget One Year': number;
  'Budget One YearColor': string;
  'Budget Multi Year': number;
  'Budget Multi YearColor': string;
}

export function formatPriorityAreaOneMultiYearData(
  data: PriorityAreaOneAndMultiYearProps[]
): ChartDataPropsOneMultiYear[] {
  const chartData: ChartDataPropsOneMultiYear[] = [];
  const colors = ['#242E42', '#828894'];

  data.forEach((priorityArea: PriorityAreaOneAndMultiYearProps) => {
    chartData.push({
      name: priorityArea.name,
      'Budget One Year': get(priorityArea, 'budget_One', 0),
      'Budget One YearColor': colors[0],
      'Budget Multi Year': get(priorityArea, 'budget_Multi', 0),
      'Budget Multi YearColor': colors[1],
    });
  });

  return chartData;
}

/* ------------------------------------------------------------ */
/* People Reached */

export interface PriorityAreaPopleReachedProps {
  budget: number;
  contribution: number;
  name: string;
  reached_Value: number;
  target_Value: number;
}

export interface ChartDataPropsPeopleReached {
  name: string;
  'People Reached': number;
  'People ReachedColor': string;
  'People Targeted': number;
  'People TargetedColor': string;
}

export function formatPriorityAreaPeopleReachedData(
  data: PriorityAreaPopleReachedProps[]
): ChartDataPropsPeopleReached[] {
  const chartData: ChartDataPropsPeopleReached[] = [];
  const colors = ['#242E42', '#828894'];

  data.forEach((priorityArea: PriorityAreaPopleReachedProps) => {
    chartData.push({
      name: priorityArea.name,
      'People Reached': priorityArea.reached_Value,
      'People ReachedColor': colors[0],
      // do this calculation so we show the bars as percentages
      'People Targeted':
        priorityArea.target_Value - priorityArea.reached_Value > 0
          ? priorityArea.target_Value - priorityArea.reached_Value
          : 0,
      'People TargetedColor': colors[1],
    });
  });

  return chartData;
}

/* ------------------------------------------------------------ */
/* SDG's */

export interface PriorityAreaSDGsProps {
  name: string;
  budget: number;
  children: ChildSDG;
  contribution: number;
  reached: number;
  target: number;
}

export interface ChildSDG {
  name: string;
  budget: number;
  contribution: number;
  target: number;
  reached: number;
  color: string;
}

// TODO: Unclear from data vs design which data to use.
export interface ChartDataPropsSDGs {
  name: string;
  'No poverty': number;
  'No povertyColor': string;
  'Clean water and sanitation': number;
  'Clean water and sanitationColor': string;
  'Good health and well-being': number;
  'Good health and well-beingColor': string;
  'Gender equality': number;
  'Gender equalityColor': string;
  'Quality education': number;
  'Quality educationColor': string;
}

export function formatPriorityAreaSDGsData(
  data: PriorityAreaSDGsProps[]
): ChartDataPropsSDGs[] {
  const chartData: ChartDataPropsSDGs[] = [];
  if (data != null) {
    data.forEach((priorityArea: PriorityAreaSDGsProps) => {
      chartData.push({
        name: priorityArea.name,
        'No poverty': get(priorityArea, 'children[0].reached', 0),
        'No povertyColor': get(priorityArea, 'children[0].color', ''),
        'Clean water and sanitation': get(
          priorityArea,
          'children[1].reached',
          0
        ),
        'Clean water and sanitationColor': get(
          priorityArea,
          'children[1].color',
          ''
        ),
        'Good health and well-being': get(
          priorityArea,
          'children[2].reached',
          0
        ),
        'Good health and well-beingColor': get(
          priorityArea,
          'children[2].color',
          ''
        ),
        'Gender equality': get(priorityArea, 'children[3].reached', 0),
        'Gender equalityColor': get(priorityArea, 'children[3].color', ''),
        'Quality education': get(priorityArea, 'children[4].color', 0),
        'Quality educationColor': get(priorityArea, 'children[4].color', ''),
      });
    });
  }
  return chartData;
}
