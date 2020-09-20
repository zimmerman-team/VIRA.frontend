import React from 'react';
import find from 'lodash/find';
import { ResponsiveBar } from '@nivo/bar';
import { useStoreState } from 'app/state/store/hooks';
import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import {
  formatPriorityAreaData,
  getKeys,
  PriorityAreaConfigBase,
} from 'app/components/charts/PriorityArea/data';
import { NoData } from 'app/components/charts/common/NoData';
import { LegendContainer } from 'app/components/charts/common/LegendContainer';
import {
  LegendDataSDGs,
  LegendDataReached,
  LegendDataDuration,
  LegendDataTargetGroups,
} from 'app/components/charts/common/LegendData';
import { BudgetTooltip } from './tooltips/Budget';
import { TargetGroupTooltip } from './tooltips/TargetGroup';
import { ReachedTooltip } from './tooltips/Reached';
import { DurationTooltip } from './tooltips/Duration';
import get from 'lodash/get';

interface PriorityAreaContainerProps {
  data: any;
  keys: any;
  selectedBreakdown: any;
  setSelectedBreakdown: any;
}

const breakdownOptions = [
  'None',
  'Target Group',
  'One Year & Multi Year',
  'People Reached',
  'SDGs',
];

function getLegendData(breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return [];
    case breakdownOptions[1]:
      return LegendDataTargetGroups;
    case breakdownOptions[2]:
      return LegendDataDuration;
    case breakdownOptions[3]:
      return LegendDataReached;
    case breakdownOptions[4]:
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
      return TargetGroupTooltip;
    case breakdownOptions[2]:
      return DurationTooltip;
    case breakdownOptions[3]:
      return ReachedTooltip;
    case breakdownOptions[4]:
      return TargetGroupTooltip;
    default:
      return BudgetTooltip;
  }
}

function checkIfNoData(data: any[], breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return find(data, (item: any) => item.budget > 0);
    case breakdownOptions[1]:
      return find(data, (item: any) =>
        find(item.children, (child: any) => child.value > 0)
      );
    case breakdownOptions[2]:
      return find(
        data,
        (item: any) => item.budget_One > 0 || item.budget_Multi > 0
      );
    case breakdownOptions[3]:
      return find(
        data,
        (item: any) => item.reached_Value > 0 || item.target_Value > 0
      );
    case breakdownOptions[4]:
      return find(data, (item: any) =>
        find(item.children, (child: any) => child.reached > 0)
      );
    default:
      return true;
  }
}

export const PriorityAreaContainer = (props: PriorityAreaContainerProps) => {
  const loading = useStoreState(
    (state) => state.getPriorityAreaBarChartData.loading
  );
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
      <ChartWrapper height={56 * get(props, 'data.length', 2)}>
        {!checkIfNoData(props.data, props.selectedBreakdown) ? (
          <NoData loading={loading} />
        ) : (
          <ResponsiveBar
            {...PriorityAreaConfigBase}
            data={
              formatPriorityAreaData(
                props.selectedBreakdown,
                props.data
              ) as object[]
            }
            keys={getKeys(props.selectedBreakdown)}
            tooltip={getTooltip(props.selectedBreakdown)}
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
        <LegendContainer
          justify={
            props.selectedBreakdown !== breakdownOptions[1] &&
            props.selectedBreakdown !== breakdownOptions[4]
              ? 'flex-end'
              : 'initial'
          }
          items={getLegendData(props.selectedBreakdown)}
        />
      </div>
    </div>
  );
};
