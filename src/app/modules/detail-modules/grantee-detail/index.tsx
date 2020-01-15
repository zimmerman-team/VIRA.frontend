import React, { useState } from 'react';
import { useTitle } from 'react-use';
import { useParams } from 'react-router-dom';
import { GranteeDetailLayout } from 'app/modules/detail-modules/grantee-detail/layout';
import {
  GranteeTitleMock,
  GranteeDescriptionMock,
} from 'app/modules/detail-modules/grantee-detail/mock';
import { TitleParams } from 'app/modules/common/components/TitleParams';
import { useStoreActions, useStoreState } from 'app/state/store/hooks';

import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import {
  mockData as mockDataBreadcrumbs,
  previousLocations,
} from 'app/components/navigation/Breadcrumbs/mock';
import get from 'lodash/get';

import { DescriptionParams } from 'app/modules/common/components/DescriptionParams';
import { ContactsCardModel } from 'app/components/surfaces/Cards/ContactsCard/model';
import { mockData as mockDataContactsCard } from 'app/components/surfaces/Cards/ContactsCard/mock';
import {
  getBaseTableForProject,
  formatTableDataForProject,
} from 'app/modules/list-module/utils';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

export function GranteeDetailModule(props: any) {
  const params: any = useParams();
  const granteeID: any = params.code;
  useTitle('M&E - Reports');
  const granteeTitleMock: TitleParams = GranteeTitleMock;
  const breadcrumbsMock: BreadcrumbModel = mockDataBreadcrumbs;
  const descriptionMock: DescriptionParams = GranteeDescriptionMock;
  const contactMock: ContactsCardModel = mockDataContactsCard;
  const baseTableForProject: TableModuleModel = getBaseTableForProject();

  const [granteeTitle, setGranteeTitle] = useState(granteeTitleMock);
  const [breadCrumb, setBreadCrumb] = useState(breadcrumbsMock);
  const [description, setDescription] = useState(descriptionMock);
  const [contact, setContact] = useState(contactMock);
  const [projectTableData, setProjectTableData] = useState([[]]);

  const granteeDetailAction = useStoreActions(
    actions => actions.orgDetail.fetch
  );
  const granteeDetailClearAction = useStoreActions(
    actions => actions.orgDetail.clear
  );
  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );
  const allProjectsClearAction = useStoreActions(
    actions => actions.allProjects.clear
  );
  const granteeDetailData = useStoreState(state => state.orgDetail.data);
  const ProjectsData = useStoreState(state => state.allProjects.data);
  const loading = useStoreState(
    state => state.orgDetail.loading || state.allProjects.loading
  );

  React.useEffect(() => {
    granteeDetailAction({
      socketName: 'allOrg',
      values: { id: granteeID },
    });
    return () => {
      // allProjectsClearAction();
      granteeDetailClearAction();
    };
  }, []);

  React.useEffect(() => {
    granteeDetailAction({
      socketName: 'allOrg',
      values: { id: granteeID },
    });
  }, [granteeID]);

  React.useEffect(() => {
    if (granteeDetailData) {
      setGranteeTitle({
        title: get(granteeDetailData, 'data').organisation_name,
      });
      setBreadCrumb({
        currentLocation: get(granteeDetailData, 'data').organisation_name,
        previousLocations,
      });
      setDescription({
        project_description: get(granteeDetailData, 'data').organisation_name,
      });
      setContact({
        title: 'Contacts',
        email: get(granteeDetailData, 'data').email,
        phonenumber: '0000',
        ufo: '0000',
        address: `${get(granteeDetailData, 'data').place}, ${
          get(granteeDetailData, 'data').postcode
        }, ${get(granteeDetailData, 'data').country}`,
      });
    }
  }, [granteeDetailData]);

  React.useEffect(() => {
    if (ProjectsData) {
      setProjectTableData(formatTableDataForProject(get(ProjectsData, 'data')));
    }
  }, [ProjectsData]);

  React.useEffect(() => {
    baseTableForProject.data = projectTableData;
  }, [projectTableData]);

  React.useEffect(() => {
    if (granteeDetailData) {
      allProjectsAction({
        socketName: 'allProject',
        values: {
          organisation_name: get(granteeDetailData, 'data').organisation_name,
        },
      });
    }
  }, [granteeDetailData]);

  return (
    <GranteeDetailLayout
      loading={loading}
      title={granteeTitle}
      breadcrumbs={breadCrumb}
      description={description}
      contact={contact}
      projectTable={baseTableForProject}
    />
  );
}
