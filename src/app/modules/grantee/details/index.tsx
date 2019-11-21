import React from 'react';
import { GranteeDetailLayout } from 'app/modules/grantee/details/layout';
import { mockData } from 'app/modules/grantee/details/mock';

export function GranteeDetail() {
  return (
    <GranteeDetailLayout
      breadcrumbs={mockData.breadcrumbs}
      datatable={mockData.datatable}
      inpageNavigation={mockData.inpageNavigation}
    />
  );
}
