import React from 'react';
import get from 'lodash/get';
import { PillarCountContainer } from 'app/components/charts/Pillars/info';
import { ResponsiveBar } from '@nivo/bar';

import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import { LegendContainer } from 'app/components/charts/common/LegendContainer';
import { LegendDataPillars } from 'app/components/charts/common/LegendData';
import {
  formatPillarData,
  PillarConfigBase,
} from 'app/components/charts/Pillars/data';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import { BudgetTooltip } from './tooltips/Budget';

interface PillarContainerProps {
  data: any;
  keys: any;
  breakdown: string[];
  setBreakdown: Function;
}

export const PillarContainer = (props: PillarContainerProps) => {
  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <PillarCountContainer data={props.data} />
      {/* <BreakdownSelect /> */}
      <ChartWrapper height={60 * get(props.data, 'length', 0)}>
        <ResponsiveBar
          {...PillarConfigBase}
          data={formatPillarData(props.data || [])}
          tooltip={BudgetTooltip}
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
