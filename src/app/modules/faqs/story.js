import React from 'react';
import Providers from 'app/Providers';
import { mockData } from './mock';
import { Faqs } from './index';

export default {
  component: Faqs,
  title: 'Faqs Layout',
};

export const text = () => (
  <Providers>
    <Faqs faqItems={mockData.faqItems} title={mockData.title} />
  </Providers>
);
