/* eslint-disable no-underscore-dangle */
import React from 'react';
import useTitle from 'react-use/lib/useTitle';
import { PageModuleModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';
import { AdminManageOverviewLayout } from 'app/modules/super-admin/sub-modules/manage-users-teams/common/layout';
import { useTranslation } from 'react-i18next';

export function AdminManageOverviewModule(props: PageModuleModel) {
  const { t } = useTranslation();
  useTitle(
    `${t('breadcrumbs.manage')} ${t(
      `user_management.general.${props.urlParam?.split('-')[1]}`
    )}`
  );

  return <AdminManageOverviewLayout {...props} />;
}
