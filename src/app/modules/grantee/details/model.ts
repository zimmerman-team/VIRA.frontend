import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { InPageNavigationModel } from 'app/components/navigation/InPageNavigation/model';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { ContactsCardModel } from 'app/components/surfaces/Cards/ContactsCard/model';

export type GranteeDetailModel = {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbModel;
  contactsCard: ContactsCardModel;
  inpageNavigation: InPageNavigationModel;
  datatable: TableModuleModel;
};
