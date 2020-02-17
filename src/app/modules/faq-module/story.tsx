import React from 'react';
import Providers from 'app/Providers';
import { mockData } from './mock';
import { FaqsLayout } from './layout';

export default {
  title: 'Faqs ',
};

export const layout = () => (
  <Providers>
    <FaqsLayout title={mockData.title} faqItems={mockData.faqItems} />
  </Providers>
);
