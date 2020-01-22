/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import get from 'lodash/get';
import { useTitle } from 'react-use';
import { useParams } from 'react-router-dom';
import { ProjectDetailLayout } from 'app/modules/detail-modules/project-detail/layout';
import {
  projectMock,
  ProjectModel,
} from 'app/modules/detail-modules/project-detail/model';

import { useStoreState, useStoreActions } from 'app/state/store/hooks';

export const ProjectDetailModule = (props: any) => {
  useTitle('M&E - Reports');

  const projectNumber: any = useParams();
  const project_number: any = projectNumber.code;
  const projectDetail: ProjectModel = projectMock;
  const [projectDetails, setprojectDetails] = useState(projectDetail);

  const projectDetailAction = useStoreActions(
    actions => actions.projectDetail.fetch
  );
  const projectDetailData = useStoreState(
    actions => actions.projectDetail.data
  );

  React.useEffect(() => {
    projectDetailAction({
      socketName: 'allProject',
      values: { project_number },
    });
  }, [project_number]);

  React.useEffect(() => {
    if (projectDetailData) {
      const projectDetailRecord: any = get(projectDetailData, 'data', null);
      if (projectDetailRecord) {
        setprojectDetails({
          project_id: projectDetailRecord[0].project_number,
          project: projectDetailRecord[0].project_name,
          project_description: projectDetailRecord[0].project_description,
          category: projectDetailRecord[0].category.name,
          duration: projectDetailRecord[0].duration,
          start_date: projectDetailRecord[0].start_date,
          end_date: projectDetailRecord[0].end_date,
          total_amount: projectDetailRecord[0].total_amount,
          decision_date: projectDetailRecord[0].decision_date,
          decision: projectDetailRecord[0].decision,
          allocated_amount: projectDetailRecord[0].allocated_amount,
          released_amount: projectDetailRecord[0].released_amount,
          paid_amount: projectDetailRecord[0].paid_amount,
          organisation: projectDetailRecord[0].organisation.name,
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
  }, [projectDetailData]);

  return <ProjectDetailLayout {...projectDetails} />;
};
