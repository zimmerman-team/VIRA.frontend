import React from 'react';
import { FaqsLayout } from 'app/modules/faqs/layout';
import { mockData } from 'app/modules/faqs/mock';
import useTitle from 'react-use/lib/useTitle';

export function Faqs() {
  useTitle(`M&E - FAQ`);
  return <FaqsLayout {...mockData} />;
}
