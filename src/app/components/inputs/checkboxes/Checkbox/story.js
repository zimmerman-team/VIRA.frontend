import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './index';
import Providers from 'app/Providers';

storiesOf('Inputs|Checkboxes/', module).add('Checkbox', () => (
  <Providers>
    <Checkbox />
  </Providers>
));
