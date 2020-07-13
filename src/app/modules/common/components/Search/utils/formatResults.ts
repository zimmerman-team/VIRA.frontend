import sortBy from 'lodash/sortBy';
import {
  ResultsModel,
  ProjectModel,
  OrganisationModel,
  ReportModel,
} from 'app/modules/common/components/Search/model';

// export interface ResultsModel {
//   projects: string[];
//   organisations: string[];
//   reports: string[];
// }

// export interface ProjectModel {
//   _id: string;
//   project_number: string;
//   project_name: string;
//   project_description: string;
//   duration: string;
//   start_date: string;
//   end_date: string;
//   total_amount: number;
//   decision_date: string;
//   decision: string;
//   allocated_amount: number;
//   released_amount: any;
//   paid_amount: number;
//   organisation: string;
//   category: string;
//   __v: number;
// }
//
//
// export interface OrganisationModel {
//   _id?: string;
//   organisation_name?: string;
//   org_type?: any;
//   street?: string;
//   house_number?: string;
//   additional_house_number?: string;
//   postcode?: string;
//   place?: string;
//   country?: string;
//   telephone?: string;
//   email?: string;
//   website?: string;
//   __v?: number;
// }
//
//
// export interface ReportModel {
//   total_target_beneficiaries?: number;
//   target_beneficiaries?: string[];
//   total_target_beneficiaries_commited?: number;
//   media?: any[];
//   isDraft?: boolean;
//   _id?: string;
//   project?: string;
//   title?: string;
//   location?: string;
//   date?: string;
//   country?: string;
//   policy_priority?: string;
//   budget?: number;
//   key_outcomes?: string;
//   monitor_report_outcomes?: string;
//   key_implementation_challenges?: string;
//   other_project_outcomes?: string;
//   plans?: string;
//   other_comments?: string;
//   reportID?: number;
//   __v?: number;
// }

export function formatResults(data: ResultsModel) {
  const results = {
    projects: [],
    grantees: [],
    reports: [],
    all: [],
  };

  // todo: add type interface ProjectModel, getting error TS2345
  data.projects.forEach((project: any) => {
    results.projects.push({
      title: project.project_name,
      link: `/projects/${project.project_number}`,
    } as never);
  });

  // todo: add type interface OrganisationModel, getting error TS2345
  data.organisations.forEach((organisation: any) => {
    results.grantees.push({
      title: organisation.organisation_name,
      link: `/grantee/${organisation._id}/detail`,
    } as never);
  });

  // todo: add type interface ReportModel, getting error TS2345
  data.reports.forEach((report: any) => {
    results.reports.push({
      title: report.title,
      /* todo: if possible remove underscore dangle from id property */
      link: `/reports/${report._id}`,
    } as never);
  });

  results.all = results.projects.concat(
    results.grantees.concat(results.reports)
  );

  results.projects = sortBy(results.projects, 'title');
  results.grantees = sortBy(results.grantees, 'title');
  results.reports = sortBy(results.reports, 'title');
  results.all = sortBy(results.all, 'title');

  return results;
}
