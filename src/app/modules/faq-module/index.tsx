import React from 'react';
import { FaqsLayout } from 'app/modules/faq-module/layout';
import { mockData } from 'app/modules/faq-module/mock';
import useTitle from 'react-use/lib/useTitle';
import { AppConfig } from 'app/data';

export function Faqs() {
  // set window title
  useTitle(`${AppConfig.appTitleLong} FAQ`);

  return <FaqsLayout {...mockData} />;
}
