import React, { useState } from 'react';
import get from 'lodash/get';
import { useTitle } from 'react-use';
import { useParams } from 'react-router-dom';
import { ReportDetailLayout } from 'app/modules/detail-modules/report-detail/layout';
import { ProjectModel } from 'app/modules/detail-modules/project-detail/model';
import { projectMock } from 'app/modules/detail-modules/project-detail/model';
import { useStoreActions } from 'app/state/store/hooks';
import { useStoreState } from 'app/state/store/hooks';
import { ReportModel } from 'app/modules/detail-modules/project-detail/model';

export const ReportDetailModule = () => {
  // @ts-ignore
  const report_obj: any = useParams();
  const report_id: any = report_obj.code;
  //const projectDetail: ProjectModel = projectMock;
  const [reportDetails, setreportDetails] = useState();

  const reportDetailAction = useStoreActions(
    actions => actions.reportDetail.fetch
  );
  const reportDetailData = useStoreState(actions => actions.reportDetail.data);

  //related project

  const [projectDetails, setprojectDetails] = useState();

  const projectDetailAction = useStoreActions(
    actions => actions.projectDetail.fetch
  );
  const projectDetailData = useStoreState(
    actions => actions.projectDetail.data
  );

  //related grantee(organisation)
  const [granteeDetails, setgranteeDetails] = useState();

  const granteeDetailAction = useStoreActions(
    actions => actions.orgDetail.fetch
  );
  const granteeDetailData = useStoreState(actions => actions.orgDetail.data);

  React.useEffect(() => {
    reportDetailAction({
      socketName: 'allReport',
      values: { report_id },
    });
  }, [report_id]);

  React.useEffect(() => {
    if (reportDetailData) {
      const reportDetailRecord: any = get(reportDetailData, 'data', null);
      if (reportDetailRecord) {
        setreportDetails({
          id: reportDetailRecord[0]._id,
          title: reportDetailRecord[0].title,
          date: reportDetailRecord[0].date,
          location: reportDetailRecord[0].location,
          country: reportDetailRecord[0].country,
          total_target_beneficiaries:
            reportDetailRecord[0].total_target_beneficiaries,
          target_beneficiaries: reportDetailRecord[0].target_beneficiaries,
          project: reportDetailRecord[0].project,
          key_outcomes: reportDetailRecord[0].key_outcomes,
          monitor_report_outcomes:
            reportDetailRecord[0].monitor_report_outcomes,
          media: reportDetailRecord[0].media,
          policy_priorities: reportDetailRecord[0].policy_priorities,
          key_implementation_challenges:
            reportDetailRecord[0].key_implementation_challenges,
          other_project_outcomes: reportDetailRecord[0].other_project_outcomes,
          plans: reportDetailRecord[0].plans,
          other_comments: reportDetailRecord[0].other_comments,
        });
      }
    }
  }, [reportDetailData]);

  React.useEffect(() => {
    if (reportDetails) {
      console.log('hello');
      const id = reportDetails.project;
      projectDetailAction({
        socketName: 'oneProject',
        values: { id },
      });
      const projectDetailRecord = get(projectDetailData, 'data', []);
      if (projectDetailRecord) {
        setprojectDetails({
          project_id: projectDetailRecord.project_number,
          project: projectDetailRecord.project_name,
          project_description: projectDetailRecord.project_description,
          category: projectDetailRecord.category,
          duration: projectDetailRecord.duration,
          start_date: projectDetailRecord.start_date,
          end_date: projectDetailRecord.end_date,
          total_amount: projectDetailRecord.total_amount,
          decision_date: projectDetailRecord.decision_date,
          decision: projectDetailRecord.decision,
          allocated_amount: projectDetailRecord.allocated_amount,
          released_amount: projectDetailRecord.released_amount,
          paid_amount: projectDetailRecord.paid_amount,
          organisation: projectDetailRecord.organisation,
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
        });
      }
    }
  }, [reportDetails]);

  React.useEffect(() => {
    if (projectDetails) {
      let id = '';
      if (projectDetails.organisation) {
        id = projectDetails.organisation._id;
      }
      granteeDetailAction({
        socketName: 'oneOrg',
        values: { id },
      });
      const granteeDetailRecord = get(granteeDetailData, 'data', []);
      if (granteeDetailRecord) {
        setgranteeDetails({
          place: granteeDetailRecord.place,
          postcode: granteeDetailRecord.postcode,
          country: granteeDetailRecord.country,
        });
      }
    }
  }, [projectDetails]);

  return (
    <ReportDetailLayout
      report={reportDetails}
      project={projectDetails}
      grantee={granteeDetails}
    />
  );
};
