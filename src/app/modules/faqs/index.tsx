import React from 'react';
import { FaqsLayout } from 'app/modules/faqs/layout';
import { mockData } from 'app/modules/faqs/mock';
// import useTitle from 'react-use/lib/useTitle';

// useTitle(`Project - Faq`);
export function Faqs() {
  return <FaqsLayout faqItems={mockData.faqItems} title={mockData.title} />;
}
