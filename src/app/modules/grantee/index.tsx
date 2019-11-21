import React from 'react';
import { GranteeLayout } from 'app/modules/grantee/layout';
import { mockData } from 'app/modules/grantee/mock';

export function Grantee() {
  return (
    <GranteeLayout
      datatable={mockData.datatable}
      inpageNavigation={mockData.inpageNavigation}
    />
  );
}
