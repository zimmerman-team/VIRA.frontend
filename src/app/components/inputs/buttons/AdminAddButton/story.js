import React from 'react';
import { storiesOf } from '@storybook/react';

import { ContainedButton } from '.';
import Providers from 'app/Providers';

storiesOf('Inputs|Buttons', module).add('Contained - Enabled', () => (
  <>
    <Providers>
      <ContainedButton onClick={() => console.log('click')} text="Button" />
    </Providers>
  </>
));

storiesOf('Inputs|Buttons', module).add('Contained - Disabled', () => (
  <>
    <Providers>
      <ContainedButton
        onClick={() => console.log('click')}
        text="Button"
        disabled
      />
    </Providers>
  </>
));
