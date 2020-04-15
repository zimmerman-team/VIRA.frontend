import { TeamUserCardModel } from 'app/components/surfaces/Cards/TeamUserCard/model';
import { PaginationModel } from 'app/components/misc/TablePagination';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { RouteComponentProps } from 'react-router-dom';
import { DialogProps } from 'app/components/surfaces/Dialog/model';

export type SortOptionsModel = {
  label: string;
  value: string;
};

export type PageModuleModel = RouteComponentProps & {
  title: string;
  teamCards: TeamUserCardModel[];
  pagination: PaginationModel;
  urlParam?: string;
  searchValue?: string;
  onSearchChange?: Function;
  sortOptions?: SortOptionsModel[];
  onSortChange?: Function;
  deleteUser?: Function;
  addBtnText: string;
};

export type ManageUsersTeamsLayoutModel = {
  breadcrumbs: BreadcrumbModel;
  tabNavigator: TabNavigatorParams;
  pageModule: PageModuleModel;
  loading?: boolean;
  teamPageModule: PageModuleModel;
  dialogProps: DialogProps;
};
