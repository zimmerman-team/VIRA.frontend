import React from 'react';
import { PillarCountContainer } from 'app/components/charts/Pillars/info';
import { ResponsiveBar } from '@nivo/bar';

import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import { LegendContainer } from 'app/components/charts/common/LegendContainer';
import { LegendDataPillars } from 'app/components/charts/common/LegendData';
import {
  formatPillarData,
  PillarConfigBase,
} from 'app/components/charts/Pillars/data';

interface PillarContainerProps {
  data: any;
  keys: any;
}

export const PillarContainer = (props: PillarContainerProps) => {
  console.log(props.data);
  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <PillarCountContainer />
      <ChartWrapper height={200}>
        <ResponsiveBar
          {...PillarConfigBase}
          data={formatPillarData(props.data)}
        />
      </ChartWrapper>
      <div
        css={`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
        `}
      >
        <LegendContainer items={LegendDataPillars} justify="flex-end" />
      </div>
    </div>
  );
};
