import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { InPageNavigationModel } from 'app/components/navigation/InPageNavigation/model';
import { TeamUserCardModel } from 'app/components/surfaces/Cards/TeamUserCard/model';
import { PaginationModel } from 'app/components/misc/TablePagination';

export type ManageUsersLayoutModel = {
  title: string;
  breadcrumbs: BreadcrumbModel;
  inPageNavigation: InPageNavigationModel;
  teamCards: TeamUserCardModel[];
  pagination: PaginationModel;
};
