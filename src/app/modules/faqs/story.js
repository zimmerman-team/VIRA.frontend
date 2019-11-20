import React from 'react';
import { storiesOf } from '@storybook/react';
import { FaqsLayout } from './layout';
import Providers from 'app/Providers';
import { mockData } from './mock';

storiesOf('Modules|Page', module).add('Page - Faqs', () => (
  <>
    <Providers>
      <FaqsLayout faqItems={mockData.faqItems} title={mockData.title} />
    </Providers>
  </>
));
