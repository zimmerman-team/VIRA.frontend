import { GranteeDetailModel } from 'app/modules/grantee/details/model';
import { mockDataVar3 as mockDatatable } from 'app/components/datadisplay/Table/mock';
import { mockData as mockDataInpageNav } from 'app/components/navigation/InPageNavigation/mock';
import { mockData as mockDataBreadcrumbs } from 'app/components/navigation/Breadcrumbs/mock';

export const mockData: GranteeDetailModel = {
  breadcrumbs: mockDataBreadcrumbs,
  datatable: mockDatatable,
  inpageNavigation: mockDataInpageNav,
};
