import React from 'react';
import { storiesOf } from '@storybook/react';
import Providers from 'app/Providers';
import { ContactsCard } from './index';
import { mockData } from './mock';

storiesOf('Surfaces|ContactsCard', module).add('ContactsCard', () => (
  <Providers>
    <ContactsCard
      title={mockData.title}
      email={mockData.email}
      phonenumber={mockData.phonenumber}
      ufo={mockData.ufo}
      address={mockData.address}
    />
  </Providers>
));
