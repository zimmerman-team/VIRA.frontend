import React from 'react';
import Providers from 'app/Providers';
import { granteeDetailMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { GranteeDetail } from 'app/modules/detail-modules/grantee-detail/index';

export default {
  component: GranteeDetail,
  title: 'GranteeDetail Layout',
};

export const text = () => (
  <Providers>
    <GranteeDetail />
  </Providers>
);
