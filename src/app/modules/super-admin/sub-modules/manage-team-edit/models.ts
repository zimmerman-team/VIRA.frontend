import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { RouteComponentProps } from 'react-router-dom';

export type ManageEditAddTeamModel = RouteComponentProps & {
  breadcrumbs: BreadcrumbModel;
  table: TableModuleModel;
  mode: string;
};

export type ManageTeamEditLayoutModel = {
  breadcrumbs: BreadcrumbModel;
  table: TableModuleModel;
  title: string;
  setTitle: Function;
  loading: boolean;
  submit: Function;
  submitEnabled: boolean;
};
