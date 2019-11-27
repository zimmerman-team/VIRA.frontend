import React from 'react';
import { GranteeLayout } from 'app/modules/grantees/layout';
import { mockData } from 'app/modules/grantees/mock';

export function Grantee() {
  return (
    <GranteeLayout
      datatable={mockData.datatable}
      inpageNavigation={mockData.inpageNavigation}
    />
  );
}
