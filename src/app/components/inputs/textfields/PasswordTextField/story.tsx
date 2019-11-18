import React from 'react';
import { storiesOf } from '@storybook/react';

import { PasswordTextField } from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|TextFields', module).add('Login Password', () => (
  <div style={{ background: '#fff' }}>
    <Providers>
      <PasswordTextField value="Password" id="login-password" />
    </Providers>
  </div>
));
