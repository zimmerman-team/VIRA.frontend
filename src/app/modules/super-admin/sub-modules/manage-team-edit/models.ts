import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';

export type ManageTeamEditLayoutModel = {
  breadcrumbs: BreadcrumbModel;
  table: TableModuleModel;
  editedTitle: String;
};
