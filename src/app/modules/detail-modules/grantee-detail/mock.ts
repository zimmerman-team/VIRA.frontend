// @ts-nocheck

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
import { HorizontalBarChartModel } from 'app/components/charts/BarCharts/HorizontalBarChart/model';
import { getBaseTableForProject } from 'app/modules/list-module/utils';

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

export interface GranteeParams {
  match?: any;
  breadcrumbs: BreadcrumbModel;
  title: TitleParams;
  description: DescriptionParams;
  contact: ContactsCardModel;
  mockData: HorizontalBarChartModel;
  barChartLegends: any;
  onBarChartLegendClick?: any;
  ppVizData: any;
  SDGVizData: any;
  selectedSDG: string;
  onBubbleSelect: Function;
  geoMapData: any;
  projectParams: any;
}

export const propsMock = {
  loading: false,
  title: {
    title: 'Organisation Name',
  },
  breadcrumbs: {
    currentLocation: 'Org B',
    previousLocations: [
      {
        label: 'Grantees',
        url: '/',
      },
    ],
  },
  description: {
    project_description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.',
  },
  contact: {
    title: 'Contacts',
    email: 'email@orgb.com',
    phonenumber: '0000',
    ufo: '0000',
    address: 'Amersfoort, 3826 EM, Nederland',
  },
  projectTable: getBaseTableForProject(),
};
