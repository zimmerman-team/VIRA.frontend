// @ts-nocheck

import React from 'react';
import { GranteeDetailLayout } from './layout';
import { GranteeDetailModule } from '.';
import { propsMock } from './mock';

export default { title: 'modules | Grantee Detail ' };

export const desktopLayout = () => (
  <GranteeDetailModule storyProps={propsMock} />
);
// export const desktopLayout = () => <GranteeDetailLayout {...propsMock} />;

export const mobileLayout = () => <GranteeDetailLayout {...propsMock} />;

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
