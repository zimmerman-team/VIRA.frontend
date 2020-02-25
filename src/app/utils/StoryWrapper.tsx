// @ts-nocheck

import React, { ReactChild } from 'react';
import Providers from 'app/Providers';
import { PageWrapper } from 'app/modules/common/components/PageWrapper';

interface StoryWrapperParams {
  // component: JSX.Element;
  children: ReactChild;
}

export const StoryWrapper = (props: StoryWrapperParams) => (
  <Providers>
    <PageWrapper>{props.children}</PageWrapper>
  </Providers>
);
