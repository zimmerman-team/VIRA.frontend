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

export interface NewDataItemModel {
  _id: string;
  title: string;
  description: string;
  dateCreated: string;
}

export interface AllDataItemModel {
  blocked: boolean;
  created_at: string;
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  identities: Identity[];
  name: string;
  nickname: string;
  picture: string;
  updated_at: string;
  user_id: string;
  user_metadata: UserMetadata;
  last_password_reset: string;
  last_login: string;
  last_ip: string;
  logins_count: number;
  app_metadata: AppMetadata;
}

export interface Identity {
  user_id: string;
  provider: string;
  connection: string;
  isSocial: boolean;
}

export interface UserMetadata {
  firstName: string;
  lastName: string;
}

export interface AppMetadata {
  authorization: Authorization;
}

export interface Authorization {
  groups: string[];
  roles: string[];
}
