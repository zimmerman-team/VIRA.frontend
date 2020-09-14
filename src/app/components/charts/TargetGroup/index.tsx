import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import {
  formatTargetGroupData,
  TargetGroupConfigBase,
} from 'app/components/charts/TargetGroup/data';

interface TargetGroupContainerProps {
  data: any;
  keys: any;
  breakdown: string[];
  setBreakdown: Function;
}

export const TargetGroupContainer = (props: TargetGroupContainerProps) => {
  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <ChartWrapper height={56 * props.data.length}>
        <ResponsiveBar
          {...TargetGroupConfigBase}
          data={formatTargetGroupData(props.data)}
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
        {/* <LegendContainer items={LegendDataPillars} justify="flex-end" /> */}
      </div>
    </div>
  );
};
