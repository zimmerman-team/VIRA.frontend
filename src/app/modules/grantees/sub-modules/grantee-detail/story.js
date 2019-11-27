import React from 'react';
import Providers from 'app/Providers';
import { granteeDetailMock } from 'src/app/modules/grantees/sub-modules/grantee-detail/mock';
import { GranteeDetail } from 'src/app/modules/grantees/sub-modules/grantee-detail/index';

export default {
  component: GranteeDetail,
  title: 'GranteeDetail Layout',
};

export const text = () => (
  <Providers>
    <GranteeDetail />
  </Providers>
);
