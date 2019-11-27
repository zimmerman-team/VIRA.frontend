import React from 'react';
import { storiesOf } from '@storybook/react';

import { SignIn } from '.';
import Providers from 'app/Providers';

storiesOf('Modules|Sign in', module).add('layout', () => (
  <div style={{ width: '100%', height: '100%' }}>
    <Providers>
      <SignIn />
    </Providers>
  </div>
));
