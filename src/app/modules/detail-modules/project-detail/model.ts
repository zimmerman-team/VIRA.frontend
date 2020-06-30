// @ts-nocheck
import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

export interface ProjectModel {
  project_id: string;
  project: string;
  project_description: string;
  category: string;
  duration: string;
  start_date: string;
  end_date: string;
  total_amount: string;
  total_insinger_contribution: number;
  decision_date: string;
  decision: string;
  allocated_amount: string;
  released_amount: string;
  paid_amount: string;
  organisation: string;
  place: string;
  country: string;
  responsible_person_email: string;
  organisation_link: string;
  generateReport: Function;
}

export interface ReportModel {
  id: string;
  title: string;
  date: string;
  location: string;
  country: string;
  total_target_beneficiaries: number;
  target_beneficiaries: string[];
  project: string;
  key_outcomes: string;
  monitor_report_outcomes: string;
  media: string;
  policy_priorities: string[];
  key_implementation_challenges: string;
  other_project_outcomes: string;
  plans: string;
  other_comments: string;
}

export const projectMock: ProjectModel = {
  project_id: '2019084',
  project: 'Restyling, verbouwing en verduurzaming kerk Voorthuizen',
  project_description:
    'Restyling, verbouwing en verduurzaming Nederlands Gereformeerde kerk, Hoofdstraat 202 te Voorthuizen',
  category: 'restauraties',
  duration: 'Eenjarig',
  start_date: '25-3-2019',
  end_date: '31-5-2019',
  total_amount: '245410',
  decision_date: '30-9-2019',
  decision: 'Toekenning',
  total_insinger_contribution: 0,
  allocated_amount: '15000',
  released_amount: '',
  paid_amount: '',
  organisation: 'NGK De Ontmoeting',
  place: 'Voorthuizen',
  country: 'Nederland',
  organisation_link: '',
  responsible_person_email: '',
  generateReport: () => {},
};

export const navItemMockViz: NavItemParams[] = [
  {
    label: 'Priority Area',
    path: '/projects/-/detail/priority-area',
  },
  {
    label: 'SDGs',
    path: '/projects/-/detail/sdgs',
  },
  {
    label: 'Map',
    path: '/projects/-/detail/map',
  },
];

export const TabNavMockViz: TabNavigatorParams = {
  items: navItemMockViz,
};
