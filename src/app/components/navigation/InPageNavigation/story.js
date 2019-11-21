import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { InPageNavigation } from './index';
import { mockData } from './mock';

storiesOf('Navigation|Signatory Navigation', module).add(
  'Signatory Navigation',
  () => (
    <Providers>
      <InPageNavigation
        locations={mockData.locations}
        activity={mockData.activity}
      />
    </Providers>
  )
);
