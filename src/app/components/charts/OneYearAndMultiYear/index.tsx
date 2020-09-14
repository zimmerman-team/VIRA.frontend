import React from 'react';
import { OneYearAndMultiYearCountContainer } from 'app/components/charts/OneYearAndMultiYear/info';
import { ResponsiveBar } from '@nivo/bar';

import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import {
  formatCountData,
  formatOneYearAndMultiYearData,
  OneYearAndMultiYearConfigBase,
} from 'app/components/charts/OneYearAndMultiYear/data';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import { ChartCountContainer } from '../common/ChartCount';

interface OneYearAndMultiYearContainerProps {
  data: any;
  keys: any;
  breakdown: string[];
  setBreakdown: Function;
}

export const OneYearAndMultiYearContainer = (
  props: OneYearAndMultiYearContainerProps
) => {
  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <ChartCountContainer items={formatCountData(props.data)} />
      {/* <BreakdownSelect /> */}
      <ChartWrapper height={60 * props.data.length}>
        <ResponsiveBar
          {...OneYearAndMultiYearConfigBase}
          data={formatOneYearAndMultiYearData(props.data)}
        />
      </ChartWrapper>
      {/* <div
        css={`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
        `}
      >
        <LegendContainer items={LegendDataOneYearAndMultiYears} justify="flex-end" />
      </div> */}
    </div>
  );
};
