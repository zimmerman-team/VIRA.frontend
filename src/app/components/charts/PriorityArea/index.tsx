import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import {
  formatPriorityAreaData,
  PriorityAreaConfigBase,
} from 'app/components/charts/PriorityArea/data';

interface PriorityAreaContainerProps {
  data: any;
  keys: any;
  breakdown: string[];
  setBreakdown: Function;
}

export const PriorityAreaContainer = (props: PriorityAreaContainerProps) => {
  console.log('data', props.data);
  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <BreakdownSelect />
      <ChartWrapper height={60 * 9}>
        {' '}
        // 60 is the height for 1 bar, there are 9 bars in this case
        <ResponsiveBar
          {...PriorityAreaConfigBase}
          data={formatPriorityAreaData(props.data)}
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
        {/*<LegendContainer items={LegendDataPillars} justify="flex-end" />*/}
      </div>
    </div>
  );
};
