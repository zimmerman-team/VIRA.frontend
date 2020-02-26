import { addDecorator, addParameters } from '@storybook/react';
import React from 'react';
import { StoryWrapper } from '../src/app/utils/StoryWrapper';
import { withTaffy } from '@degjs/storybook-addon-taffy';
import StorybookVRhythm from 'storybook-vrhythm';

// addDecorator(StorybookVRhythm);

// addParameters({
//   vrhythm: {
//     color: 'rgba(178,86,18,0.5)',
//     lineHeight: '16px',
//     offset: 0,
//   },
// });

const customViewports = {
  desktopSmall: {
    name: 'Desktop Small',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },

  desktopGeneral: {
    name: 'Desktop General',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },

  desktopLarge: {
    name: 'Desktop Large',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },

  mobileGeneral: {
    name: 'Mobile General',
    styles: {
      width: '360px',
      height: '640px',
    },
  },

  tabletGeneral: {
    name: 'Tablet General',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};

addDecorator(storyFn => <StoryWrapper>{storyFn()}</StoryWrapper>);

addParameters({
  viewport: {
    viewports: customViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'desktopGeneral',
  },
});
