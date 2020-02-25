import React from 'react';
import { FaqsLayout } from './layout';
import { mockData } from './mock';

export default {
  title: 'modules | Faqs ',
};

export const desktopLayout = () => (
  <FaqsLayout title={mockData.title} faqItems={mockData.faqItems} />
);

export const mobileLayout = () => (
  <FaqsLayout title={mockData.title} faqItems={mockData.faqItems} />
);

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
