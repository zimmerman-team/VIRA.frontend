import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { InPageNavigationModel } from 'app/components/navigation/InPageNavigation/model';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';

export type GranteeDetailModel = {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbModel;
  inpageNavigation: InPageNavigationModel;
  datatable: TableModuleModel;
};
