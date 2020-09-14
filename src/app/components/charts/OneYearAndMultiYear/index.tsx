import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import {
  getKeys,
  formatCountData,
  formatOneYearAndMultiYearData,
  OneYearAndMultiYearConfigBase,
} from 'app/components/charts/OneYearAndMultiYear/data';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import { ChartCountContainer } from '../common/ChartCount';
import { LegendContainer } from '../common/LegendContainer';
import {
  LegendDataReached,
  LegendDataTargetGroups,
} from '../common/LegendData';
import { CountTooltip } from './tooltips/Count';
import { ReachedTooltip } from '../PriorityArea/tooltips/Reached';
import { TargetGroupTooltip } from '../PriorityArea/tooltips/TargetGroup';

interface OneYearAndMultiYearContainerProps {
  data: any;
  keys: any;
  selectedBreakdown: string;
  setSelectedBreakdown: Function;
}

const breakdownOptions = ['None', 'People Reached', 'Target Group'];

function getLegendData(breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return [];
    case breakdownOptions[1]:
      return LegendDataReached;
    case breakdownOptions[2]:
      return LegendDataTargetGroups;
    default:
      return [];
  }
}

function getTooltip(breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return CountTooltip;
    case breakdownOptions[1]:
      return ReachedTooltip;
    case breakdownOptions[2]:
      return TargetGroupTooltip;
    default:
      return CountTooltip;
  }
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
      <BreakdownSelect
        breakdownOptions={breakdownOptions}
        selectedBreakdown={props.selectedBreakdown}
        setSelectedBreakdown={props.setSelectedBreakdown}
      />
      <ChartWrapper height={60 * props.data.length}>
        <ResponsiveBar
          {...OneYearAndMultiYearConfigBase}
          data={
            formatOneYearAndMultiYearData(
              props.selectedBreakdown,
              props.data
            ) as object[]
          }
          keys={getKeys(props.selectedBreakdown)}
          tooltip={getTooltip(props.selectedBreakdown)}
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
        <LegendContainer
          justify={
            props.selectedBreakdown !== breakdownOptions[2]
              ? 'flex-end'
              : 'initial'
          }
          items={getLegendData(props.selectedBreakdown)}
        />
      </div>
    </div>
  );
};
