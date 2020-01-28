export interface ProjectModel {
  project_id: string;
  project: string;
  project_description: string;
  category: string;
  duration: string;
  start_date: string;
  end_date: string;
  total_amount: string;
  decision_date: string;
  decision: string;
  allocated_amount: string;
  released_amount: string;
  paid_amount: string;
  organisation: string;
  org_type: string;
  street: string;
  house_number: string;
  additional_house_number: string;
  postcode: string;
  place: string;
  country: string;
  telephone: string;
  organisation_email: string;
  website: string;
  family_name: string;
  initial: string;
  insertion: string;
  title: string;
  email: string;
  login_email: string;
  sex: string;
  role: string;
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
  allocated_amount: '15000',
  released_amount: '',
  paid_amount: '',
  organisation: 'NGK De Ontmoeting',
  org_type: '',
  street: 'Postbus',
  house_number: '193',
  additional_house_number: '',
  postcode: '3780 BD',
  place: 'Voorthuizen',
  country: 'Nederland',
  telephone: '',
  organisation_email: 'penningmeester@ngkdeontmoeting.nl',
  website: 'https://www.ngkdeontmoeting.nl',
  family_name: 'Reijersen',
  initial: 'Albert',
  insertion: '',
  title: '',
  email: 'penningmeester@ngkdeontmoeting.nl',
  login_email: 'penningmeester@ngkdeontmoeting.nl',
  sex: 'male',
  role: 'voorzitter kerkenraad',
};
