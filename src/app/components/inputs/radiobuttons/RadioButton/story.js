import React from 'react';
import Providers from 'app/Providers';
import { storiesOf } from '@storybook/react';
import { RadioButton } from './index';

export default {
  component: RadioButton,
  title: 'Radio buttons',
};

storiesOf('Inputs|Radiobuttons/', module).add('Radio Button', () => (
  <Providers>
    <RadioButton label="HALLO" />
  </Providers>
));
