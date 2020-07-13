import React from 'react';

export interface ResultsModel {
  projects: string[];
  organisations: string[];
  reports: string[];
}

export interface ProjectModel {
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
  paid_amount: number;
  organisation: string;
  category: string;
  __v: number;
}

export interface OrganisationModel {
  _id?: string;
  organisation_name?: string;
  org_type?: any;
  street?: string;
  house_number?: string;
  additional_house_number?: string;
  postcode?: string;
  place?: string;
  country?: string;
  telephone?: string;
  email?: string;
  website?: string;
  __v?: number;
}

export interface ReportModel {
  total_target_beneficiaries?: number;
  target_beneficiaries?: string[];
  total_target_beneficiaries_commited?: number;
  media?: any[];
  isDraft?: boolean;
  _id?: string;
  project?: string;
  title?: string;
  location?: string;
  date?: string;
  country?: string;
  policy_priority?: string;
  budget?: number;
  key_outcomes?: string;
  monitor_report_outcomes?: string;
  key_implementation_challenges?: string;
  other_project_outcomes?: string;
  plans?: string;
  other_comments?: string;
  reportID?: number;
  __v?: number;
}
