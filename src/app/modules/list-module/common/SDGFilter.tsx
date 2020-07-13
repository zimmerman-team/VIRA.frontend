import React from 'react';
import get from 'lodash/get';
import { useStoreState } from 'app/state/store/hooks';

import { getBaseTableForReport } from 'app/modules/list-module/utils/getBaseTableForReport';
import { getBaseTableForGrantee } from 'app/modules/list-module/utils/getBaseTableForGrantee';
import { getBaseTableForProject } from 'app/modules/list-module/utils/getBaseTableForProject';
import { formatTableDataForReport } from 'app/modules/list-module/utils/formatTableDataForReport';
import { formatTableDataForGrantee } from 'app/modules/list-module/utils/formatTableDataForGrantee';
import { formatTableDataForProject } from 'app/modules/list-module/utils/formatTableDataForProject';
import {
  getGranteesBySDG,
  getProjectsBySDG,
  getReportsBySDG,
} from 'app/modules/list-module/common/TableDataBySDG';

interface SDGFilterProps {
  selectedSDG: string;
  setBaseTableForReport: Function;
  setBaseTableForProject: Function;
  setBaseTableForGrantee: Function;
}

export function SDGFilter(props: SDGFilterProps) {
  // redux state
  const allProjectsData = useStoreState(state => state.allProjects.data);
  const allOrganisationsData = useStoreState(
    state => state.allOrganisations.data
  );
  const allReportsData = useStoreState(state => state.allReports.data);

  // Format the projects on componentDidUpdate when allProjectsData change
  React.useEffect(() => {
    let sdgProjectData = allProjectsData;
    if (props.selectedSDG !== '' && props.selectedSDG !== undefined) {
      const sdgReportsData = getReportsBySDG(props.selectedSDG, allReportsData);
      sdgProjectData = getProjectsBySDG(allProjectsData, sdgReportsData);
    }
    props.setBaseTableForProject({
      ...getBaseTableForProject(),
      data: formatTableDataForProject(get(sdgProjectData, 'data', [])),
    });
  }, [props.selectedSDG]);

  // Format the grantees on componentDidUpdate when allOrganisationsData change
  React.useEffect(() => {
    let sdgOrgranisationData = allOrganisationsData;
    if (props.selectedSDG !== '' && props.selectedSDG !== undefined) {
      const sdgReportsData = getReportsBySDG(props.selectedSDG, allReportsData);
      const sdgProjectData = getProjectsBySDG(allProjectsData, sdgReportsData);
      sdgOrgranisationData = getGranteesBySDG(
        allOrganisationsData,
        sdgProjectData
      );
    }
    props.setBaseTableForGrantee({
      ...getBaseTableForGrantee(),
      data: formatTableDataForGrantee(get(sdgOrgranisationData, 'data', [])),
    });
  }, [props.selectedSDG]);

  // Format the reports on componentDidUpdate when allReportsData change
  React.useEffect(() => {
    let sdgReportsData = allReportsData;
    if (props.selectedSDG !== '' && props.selectedSDG !== undefined) {
      sdgReportsData = getReportsBySDG(props.selectedSDG, allReportsData);
    }
    props.setBaseTableForReport({
      ...getBaseTableForReport(get(sdgReportsData, 'data', [])),
      data: formatTableDataForReport(get(sdgReportsData, 'data', [])),
    });
  }, [props.selectedSDG]);

  return null;
}
