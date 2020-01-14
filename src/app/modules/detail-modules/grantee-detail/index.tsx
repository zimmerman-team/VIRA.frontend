import { GranteeDetailLayout } from 'app/modules/detail-modules/grantee-detail/layout';
import { useParams } from 'react-router';
import { useTitle } from 'react-use';
import React, { useState } from 'react';
import { GranteeTitleMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { TitleParams } from 'app/modules/common/components/TitleParams';
import { useStoreActions } from 'app/state/store/hooks';
import { useStoreState } from 'app/state/store/hooks';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { mockData as mockDataBreadcrumbs } from 'app/components/navigation/Breadcrumbs/mock';
import get from 'lodash/get';
import { previousLocations } from 'app/components/navigation/Breadcrumbs/mock';
import { GranteeDescriptionMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { DescriptionParams } from 'app/modules/common/components/DescriptionParams';
import { ContactsCardModel } from 'app/components/surfaces/Cards/ContactsCard/model';
import { mockData as mockDataContactsCard } from 'app/components/surfaces/Cards/ContactsCard/mock';
import {
  getBaseTableForProject,
  formatTableDataForProject,
} from 'app/modules/list-module/utils';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { table9Data } from 'app/assets/data/insingerData';

export const GranteeDetailModule = (props: any) => {
  const granteeID: any = useParams();
  const grantee_id: any = granteeID.code;
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
  const granteeDetailData = useStoreState(actions => actions.orgDetail.data);

  const allProjectsAction = useStoreActions(
    actions => actions.allProjects.fetch
  );

  const ProjectsData = useStoreState(actions => actions.allProjects.data);

  React.useEffect(() => {
    granteeDetailAction({
      socketName: 'allOrg',
      values: { id: grantee_id },
    });

    if (granteeDetailData) {
      setGranteeTitle({
        title: get(granteeDetailData, 'data').organisation_name,
      });
      setBreadCrumb({
        currentLocation: get(granteeDetailData, 'data').organisation_name,
        previousLocations: previousLocations,
      });
      setDescription({
        project_description: get(granteeDetailData, 'data').organisation_name,
      });
      setContact({
        title: 'Contacts',
        email: get(granteeDetailData, 'data').email,
        phonenumber: '0000',
        ufo: '0000',
        address:
          get(granteeDetailData, 'data').place +
          ', ' +
          get(granteeDetailData, 'data').postcode +
          ', ' +
          get(granteeDetailData, 'data').country,
      });
    }
  }, []);

  React.useEffect(() => {
    if (granteeDetailData) {
      allProjectsAction({
        socketName: 'allProject',
        values: {
          organisation_name: get(granteeDetailData, 'data').organisation_name,
        },
      }).then(() => {
        if (ProjectsData) {
          setProjectTableData(
            formatTableDataForProject(get(ProjectsData, 'data'))
          );
          baseTableForProject.data = projectTableData;
        }
      });
    }
  }, [granteeDetailData]);

  return (
    <GranteeDetailLayout
      title={granteeTitle}
      breadcrumbs={breadCrumb}
      description={description}
      contact={contact}
      projectTable={baseTableForProject}
    />
  );
};
