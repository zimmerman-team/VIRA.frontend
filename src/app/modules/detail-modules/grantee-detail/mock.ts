import { mockDataVar8 as mockDatatable } from 'app/components/datadisplay/Table/mock';
import { mockData as mockDataBreadcrumbs } from 'app/components/navigation/Breadcrumbs/mock';
import { mockData as mockDataContactsCard } from 'app/components/surfaces/Cards/ContactsCard/mock';
import { TitleParams } from 'app/modules/common/components/TitleParams';
import { DescriptionParams } from 'app/modules/common/components/DescriptionParams';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import { ContactsCardModel } from 'app/components/surfaces/Cards/ContactsCard/model';
import { BreadcrumbModel } from 'app/components/navigation/Breadcrumbs/model';
import { NavItemParams } from 'app/modules/common/consts';
import { TabNavigatorParams } from 'app/modules/list-module/common/TabNavigator';

export const GranteeBreadCrumbsMock: BreadcrumbModel = mockDataBreadcrumbs;

export const GranteeTitleMock: TitleParams = {
  title: 'Grantee Name',
};

export const GranteeDescriptionMock: DescriptionParams = {
  project_description:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
};

export const GranteeContactCardMock: ContactsCardModel = mockDataContactsCard;

export const GranteeProjectListMock: TableModuleModel = mockDatatable;

export const navItemMockViz: NavItemParams[] = [
  {
    label: 'Projects',
    path: '/grantee/-/detail/projects',
  },
  {
    label: 'Reports',
    path: '/grantee/-/detail/reports',
  },
];

export const TabNavMockViz: TabNavigatorParams = {
  items: navItemMockViz,
};
