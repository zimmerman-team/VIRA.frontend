import React from 'react';
import { GranteeDetailLayout } from 'app/modules/grantee/details/layout';
import { mockData } from 'app/modules/grantee/mock';

export function GranteeDetail() {
  return (
    <GranteeDetailLayout
      datatable={mockData.datatable}
      inpageNavigation={mockData.inpageNavigation}
    />
  );
}
