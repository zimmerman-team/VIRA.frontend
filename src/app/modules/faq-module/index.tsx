import React from 'react';
import { FaqsLayout } from 'app/modules/faq-module/layout';
import { mockData } from 'app/modules/faq-module/mock';
import useTitle from 'react-use/lib/useTitle';

export function Faqs() {
  useTitle(`M&E - FAQ`);
  return <FaqsLayout {...mockData} />;
}
