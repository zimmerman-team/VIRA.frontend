import React from 'react';
import { storiesOf } from '@storybook/react';

import { SingleMultiLineTextField } from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|TextFields', module).add('Login Username', () => (
  <div style={{ background: '#fff' }}>
    <Providers>
      <SingleMultiLineTextField
        setValue={() => console.log('value set')}
        label="sample"
        value="Username"
        id="login-username"
      />
    </Providers>
  </div>
));
