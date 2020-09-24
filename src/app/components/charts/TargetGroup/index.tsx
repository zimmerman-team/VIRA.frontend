import React from 'react';
import find from 'lodash/find';
import { ResponsiveBar } from '@nivo/bar';
import { useStoreState } from 'app/state/store/hooks';
import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import {
  getKeys,
  formatTargetGroupData,
  TargetGroupConfigBase,
} from 'app/components/charts/TargetGroup/data';
import {
  LegendDataSDGs,
  LegendDataReached,
} from 'app/components/charts/common/LegendData';
import { NoData } from 'app/components/charts/common/NoData';
import { LegendContainer } from 'app/components/charts/common/LegendContainer';
import {
  BudgetTooltip,
  BudgetTooltipMobile,
} from 'app/components/charts/PriorityArea/tooltips/Budget';
import {
  ReachedTooltip,
  ReachedTooltipMobile,
} from 'app/components/charts/PriorityArea/tooltips/Reached';
import {
  TargetGroupTooltip,
  TargetGroupTooltipMobile,
} from 'app/components/charts/PriorityArea/tooltips/TargetGroup';
import get from 'lodash/get';
import { useMediaQuery } from '@material-ui/core';

interface TargetGroupContainerProps {
  data: any;
  keys: any;
  selectedBreakdown: any;
  setSelectedBreakdown: any;
  fullWidthLegends?: boolean;
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

function getTooltip(breakdown: string, isMobileWidth: boolean) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return isMobileWidth ? BudgetTooltipMobile : BudgetTooltip;
    case breakdownOptions[1]:
      return isMobileWidth ? ReachedTooltipMobile : ReachedTooltip;
    case breakdownOptions[2]:
      return isMobileWidth ? TargetGroupTooltipMobile : TargetGroupTooltip;
    default:
      return isMobileWidth ? BudgetTooltipMobile : BudgetTooltip;
  }
}

function checkIfNoData(data: any[], breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return find(data, (item: any) => item.budget > 0);
    case breakdownOptions[1]:
      return find(data, (item: any) => item.reached > 0 || item.target > 0);
    case breakdownOptions[2]:
      return find(data, (item: any) =>
        find(item.children, (child: any) => child.reached > 0)
      );
    default:
      return true;
  }
}

export const TargetGroupContainer = (props: TargetGroupContainerProps) => {
  const loading = useStoreState(
    (state) => state.getTargetGroupBarChartData.loading
  );
  const chartData = formatTargetGroupData(props.selectedBreakdown, props.data);
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

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
            {...TargetGroupConfigBase}
            data={chartData as object[]}
            keys={getKeys(props.selectedBreakdown)}
            onClick={() => {
              getTooltip(props.selectedBreakdown, isMobileWidth);
            }}
            tooltip={getTooltip(props.selectedBreakdown, isMobileWidth)}
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
            fullWidthLegends={props.fullWidthLegends}
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
