import React from 'react';
import { storiesOf } from '@storybook/react';
import { ChartTooltip } from './ChartTooltip';
import Providers from 'app/Providers';
// import { mockData } from './mock'

storiesOf('Charts|Bar Charts/Common/', module).add('Chart Tooltip', () => (
  <Providers>
    <ChartTooltip title="Chart" items={mock} />
  </Providers>
));

const mock = [
  {
    label: 'Activities',
    value: 66,
  },
  {
    label: 'Non Activities',
    value: 33,
  },
];
