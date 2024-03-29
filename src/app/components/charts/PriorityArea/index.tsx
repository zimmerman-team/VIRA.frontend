import React from 'react';
import get from 'lodash/get';
import max from 'lodash/max';
import find from 'lodash/find';
import maxBy from 'lodash/maxBy';
import { ResponsiveBar } from '@nivo/bar';
import { useMediaQuery } from '@material-ui/core';
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
  LegendDataPillars,
} from 'app/components/charts/common/LegendData';
import { BudgetTooltip, BudgetTooltipMobile } from './tooltips/Budget';
import {
  TargetGroupTooltip,
  TargetGroupTooltipMobile,
} from './tooltips/TargetGroup';
import { ReachedTooltip, ReachedTooltipMobile } from './tooltips/Reached';
import { DurationTooltip, DurationTooltipMobile } from './tooltips/Duration';

interface PriorityAreaContainerProps {
  data: any;
  keys: any;
  selectedBreakdown: any;
  setSelectedBreakdown: any;
  fullWidthLegends?: boolean;
}

export const breakdownOptions = [
  'None',
  'Target Group',
  'One Year & Multi Year',
  'People Reached',
  'SDGs',
];

function getLegendData(breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return LegendDataPillars;
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

function getTooltip(breakdown: string, isMobileWidth: boolean) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return isMobileWidth ? BudgetTooltipMobile : BudgetTooltip;
    case breakdownOptions[1]:
      return isMobileWidth ? TargetGroupTooltipMobile : TargetGroupTooltip;
    case breakdownOptions[2]:
      return isMobileWidth ? DurationTooltipMobile : DurationTooltip;
    case breakdownOptions[3]:
      return isMobileWidth ? ReachedTooltipMobile : ReachedTooltip;
    case breakdownOptions[4]:
      return isMobileWidth ? TargetGroupTooltipMobile : TargetGroupTooltip;
    default:
      return isMobileWidth ? BudgetTooltipMobile : BudgetTooltip;
  }
}

function checkIfNoData(data: any[], breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return find(data, (item: any) => item.contribution > 0);
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

  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  let config = PriorityAreaConfigBase;

  if (props.selectedBreakdown === breakdownOptions[2]) {
    config = {
      ...config,
      axisBottom: {
        ...config.axisBottom,
        tickValues: max([
          get(maxBy(props.data, 'count_One'), 'count_One'),
          get(maxBy(props.data, 'count_Multi'), 'count_Multi'),
        ]),
      },
    };
  }

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
      <ChartWrapper
        height={56 * get(props, 'data.length', 2)}
        selectedBreakdown={props.selectedBreakdown}
      >
        {!checkIfNoData(props.data, props.selectedBreakdown) ? (
          <NoData loading={loading} />
        ) : (
          <ResponsiveBar
            {...config}
            data={
              formatPriorityAreaData(
                props.selectedBreakdown,
                props.data
              ) as object[]
            }
            keys={getKeys(props.selectedBreakdown)}
            onClick={() => {
              getTooltip(props.selectedBreakdown, isMobileWidth);
            }}
            tooltip={getTooltip(props.selectedBreakdown, isMobileWidth)}
            theme={{
              ...PriorityAreaConfigBase.theme,
              tooltip: {
                ...PriorityAreaConfigBase.theme?.tooltip,
                container: {
                  ...PriorityAreaConfigBase.theme?.tooltip?.container,
                  padding: isMobileWidth ? '0' : '5px 9px',
                },
              },
            }}
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
          fullWidthLegends={props.fullWidthLegends}
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
