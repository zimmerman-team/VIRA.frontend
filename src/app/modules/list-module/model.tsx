export interface DataModel {
  _id: string;
  organisation_name: string;
  org_type?: OrgType;
  street: string;
  house_number: string;
  additional_house_number: string;
  postcode: string;
  place: string;
  country: string;
  telephone: string;
  email: string;
  website: string;
  __v: number;
}

export interface OrgType {
  _id: string;
  name: string;
}
export interface BaseTableReportDataModel {
  total_target_beneficiaries: number;
  target_beneficiaries: TargetBeneficiary[];
  total_target_beneficiaries_commited: number;
  media: string[];
  isDraft: boolean;
  _id: string;
  project: Project;
  title: string;
  location?: Location;
  place_name?: string;
  date: string;
  country: string;
  policy_priority: PolicyPriority;
  budget: number;
  key_outcomes: string;
  monitor_report_outcomes: string;
  key_implementation_challenges: string;
  other_project_outcomes: string;
  plans: string;
  other_comments: string;
  reportID: number;
  __v: number;
  unix_date: number;
  insContribution?: number;
}

export interface TargetBeneficiary {
  value: number;
  _id: string;
  name: string;
  __v: number;
}

export interface Project {
  _id: string;
  project_number: string;
  project_name: string;
  project_description: string;
  duration: string;
  start_date: string;
  end_date: string;
  total_amount: number;
  decision_date: string;
  decision: string;
  allocated_amount: number;
  released_amount: any;
  paid_amount?: number;
  organisation: string;
  category: string;
  __v: number;
  responsible_person?: string;
}

export interface Location {
  _id: string;
  long: number;
  lat: number;
  __v: number;
}

export interface PolicyPriority {
  _id: string;
  name: string;
  __v: number;
}
