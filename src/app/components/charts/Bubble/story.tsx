// @ts-nocheck
/* eslint-disable */
import React from 'react';
import { useState } from '@storybook/addons';
import { BubbleChart } from '.';
import { bubbleMockData } from './mock';

export default { title: 'modules | Bubble ' };

export const desktopLayout = () => {
  const [selectedSDG, setSelectedSDG] = useState('');
  return (
    <div style={{ width: '100%' }}>
      <BubbleChart
        data={bubbleMockData}
        selectedBubble={selectedSDG}
        setSelectedBubble={setSelectedSDG}
      />
    </div>
  );
};

export const mobileLayout = () => {
  const [selectedSDG, setSelectedSDG] = useState('');
  return (
    <div style={{ width: '100%' }}>
      <BubbleChart
        data={bubbleMockData}
        selectedBubble={selectedSDG}
        setSelectedBubble={setSelectedSDG}
      />
    </div>
  );
};

mobileLayout.story = {
  parameters: {
    viewport: { defaultViewport: 'mobileGeneral' },
  },
};
