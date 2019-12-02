import React from 'react';
import { storiesOf } from '@storybook/react';

import { OutlinedButton } from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|Buttons', module).add('Outlined - Enabled', () => (
  <>
    <Providers>
      <OutlinedButton onClick={() => console.log('click')} text="Button" />
    </Providers>
  </>
));

storiesOf('Inputs|Buttons', module).add('Outlined - Disabled', () => (
  <>
    <Providers>
      <OutlinedButton
        onClick={() => console.log('click')}
        text="Button"
        disabled
      />
    </Providers>
  </>
));
