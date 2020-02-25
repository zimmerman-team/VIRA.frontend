import React from 'react';
import { FaqsLayout } from './layout';
import { mockData } from './mock';

export default {
  title: 'modules | Faqs ',
};

export const faqLayout = () => (
  <FaqsLayout title={mockData.title} faqItems={mockData.faqItems} />
);
