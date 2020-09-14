import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { getKeys } from 'app/components/charts/PriorityArea/data';
import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import {
  formatTargetGroupData,
  TargetGroupConfigBase,
} from 'app/components/charts/TargetGroup/data';
import { LegendContainer } from '../common/LegendContainer';
import { LegendDataSDGs, LegendDataReached } from '../common/LegendData';
import { BudgetTooltip } from '../PriorityArea/tooltips/Budget';
import { ReachedTooltip } from '../PriorityArea/tooltips/Reached';
import { TargetGroupTooltip } from '../PriorityArea/tooltips/TargetGroup';

interface TargetGroupContainerProps {
  data: any;
  keys: any;
  selectedBreakdown: any;
  setSelectedBreakdown: any;
}

const breakdownOptions = ['None', 'People Reached', 'SDGs'];

function getLegendData(breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return [];
    case breakdownOptions[1]:
      return LegendDataReached;
    case breakdownOptions[2]:
      return LegendDataSDGs;
    default:
      return [];
  }
}

function getTooltip(breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return BudgetTooltip;
    case breakdownOptions[1]:
      return ReachedTooltip;
    case breakdownOptions[2]:
      return TargetGroupTooltip;
    default:
      return BudgetTooltip;
  }
}

export const TargetGroupContainer = (props: TargetGroupContainerProps) => {
  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <BreakdownSelect
        breakdownOptions={breakdownOptions}
        selectedBreakdown={props.selectedBreakdown}
        setSelectedBreakdown={props.setSelectedBreakdown}
      />
      <ChartWrapper height={56 * props.data.length}>
        <ResponsiveBar
          {...TargetGroupConfigBase}
          data={
            formatTargetGroupData(
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
        </div>{' '}
      </div>
    </div>
  );
};
