import React from 'react';
import { FaqsLayout } from './layout';
import { mockData } from './mock';

export default {
  title: 'Faqs ',
};

export const layout = () => (
  <FaqsLayout title={mockData.title} faqItems={mockData.faqItems} />
);
