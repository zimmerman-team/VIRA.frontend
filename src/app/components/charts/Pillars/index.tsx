import React from 'react';
import get from 'lodash/get';
import { PillarCountContainer } from 'app/components/charts/Pillars/info';
import { ResponsiveBar } from '@nivo/bar';

import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import { LegendContainer } from 'app/components/charts/common/LegendContainer';
import {
  LegendDataPillars,
  LegendMultiyearPillars,
} from 'app/components/charts/common/LegendData';
import {
  formatPillarData,
  PillarConfigBase,
  PillarMultiYearConfig,
} from 'app/components/charts/Pillars/data';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import { BudgetTooltip } from './tooltips/Budget';
import { ReachedTooltip } from 'app/components/charts/PriorityArea/tooltips/Reached';
import { TargetGroupTooltip } from 'app/components/charts/PriorityArea/tooltips/TargetGroup';

interface PillarContainerProps {
  data: any;
  keys: any;
  breakdown: string[];
  setBreakdown: Function;
  selectedBreakdown: any;
  setSelectedBreakdown: any;
}

const breakdownOptions = ['None', 'One Year & Multi Year'];

function getLegendData(breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return LegendDataPillars;
    case breakdownOptions[1]:
      return LegendMultiyearPillars;

    default:
      return [];
  }
}

function getTooltip(breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return BudgetTooltip;
    case breakdownOptions[1]:
      return BudgetTooltip;
    default:
      return BudgetTooltip;
  }
}

export const PillarContainer = (props: PillarContainerProps) => {
  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <PillarCountContainer data={props.data} />
      <BreakdownSelect
        breakdownOptions={breakdownOptions}
        selectedBreakdown={props.selectedBreakdown}
        setSelectedBreakdown={props.setSelectedBreakdown}
      />
      <ChartWrapper height={60 * get(props.data, 'length', 0)}>
        {props.selectedBreakdown == breakdownOptions[0] && (
          <ResponsiveBar
            {...PillarConfigBase}
            data={formatPillarData(props.data || [])}
            tooltip={BudgetTooltip}
          />
        )}
        {props.selectedBreakdown == breakdownOptions[1] && (
          <ResponsiveBar
            {...PillarMultiYearConfig}
            data={formatPillarData(props.data || [])}
            tooltip={BudgetTooltip}
          />
        )}
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
