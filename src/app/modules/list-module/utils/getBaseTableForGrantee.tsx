import {
  LinkCellModule,
  ExternalLinkCellModule,
} from 'app/components/datadisplay/Table/common/LinkCell';
import { TableModuleModel } from 'app/components/datadisplay/Table/model';
import React from 'react';
import i18n from 'app/languages';
import { GranteeListMock } from 'app/mock/lists/GranteeListMock';

export const getBaseTableForGrantee = (): TableModuleModel => {
  const tableConfig = GranteeListMock;

  tableConfig.columns = [
    {
      name: i18n.t('grantees.overview.table.name'),
      options: {
        sortDirection: 'asc',
        filter: true,
        filterType: 'dropdown',
        customBodyRender: (value, tableMeta, updateValue) => {
          if (value) {
            const temp_value = value.split(' && ');
            value = temp_value[0];
            updateValue = temp_value[1];
          }
          return (
            <LinkCellModule
              link={`/grantee/${updateValue}/detail`}
              value={value}
            />
          );
        },
        customFilterListRender: updateValue =>
          `${i18n.t('grantees.overview.table.name')}: ${updateValue}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.type'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.type')}: ${value}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.place'),
      options: {
        filter: true,
        filterType: 'dropdown',
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.place')}: ${value}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.country'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.country')}: ${value}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.email'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <ExternalLinkCellModule extLink link={value} value={value} />;
        },
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.email')}: ${value}`,
      },
    },
    {
      name: i18n.t('grantees.overview.table.website'),
      options: {
        filter: true,
        filterType: 'checkbox',
        customBodyRender: (value, tableMeta, updateValue) => {
          return <ExternalLinkCellModule extLink link={value} value={value} />;
        },
        customFilterListRender: value =>
          `${i18n.t('grantees.overview.table.website')}: ${value}`,
      },
    },
  ];

  return tableConfig;
};
