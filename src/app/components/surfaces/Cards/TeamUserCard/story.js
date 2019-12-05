import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { TeamUserCard } from './index';
import { mockData } from './mock';
import 'styled-components/macro';

storiesOf('Surfaces|TeamUserCard', module).add('Teams & User Card', () => (
  <Providers>
    <div
      css={`
        width: 363px;
      `}
    >
      <TeamUserCard
        title={mockData.title}
        description={mockData.description}
        dateCreated={mockData.dateCreated}
      />
    </div>
  </Providers>
));
