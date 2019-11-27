import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProjectDetailLayout } from './';
import Providers from 'app/Providers';
import { MainContent } from 'app/modules/global/components/MainContent';

storiesOf('Modules|Project Detail/', module).add(
  'Project Detail Layout',
  () => (
    <Providers>
      <MainContent>
        <ProjectDetailLayout />
      </MainContent>
    </Providers>
  )
);
