import React from 'react';
import find from 'lodash/find';
import { ResponsiveBar } from '@nivo/bar';
import { useStoreState } from 'app/state/store/hooks';

import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import {
  getKeys,
  formatCountData,
  formatOneYearAndMultiYearData,
  OneYearAndMultiYearConfigBase,
} from 'app/components/charts/OneYearAndMultiYear/data';
import { NoData } from 'app/components/charts/common/NoData';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import { ChartCountContainer } from '../common/ChartCount';
import { LegendContainer } from '../common/LegendContainer';
import {
  LegendDataReached,
  LegendDataTargetGroups,
} from '../common/LegendData';
import { CountTooltip, CountTooltipMobile } from './tooltips/Count';
import {
  ReachedTooltip,
  ReachedTooltipMobile,
} from '../PriorityArea/tooltips/Reached';
import {
  TargetGroupTooltip,
  TargetGroupTooltipMobile,
} from '../PriorityArea/tooltips/TargetGroup';
import get from 'lodash/get';
import { useMediaQuery } from '@material-ui/core';

interface OneYearAndMultiYearContainerProps {
  data: any;
  keys: any;
  selectedBreakdown: string;
  setSelectedBreakdown: Function;
  fullWidthLegends?: boolean;
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

function getTooltip(breakdown: string, isMobileWidth: Boolean) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return isMobileWidth ? CountTooltipMobile : CountTooltip;
    case breakdownOptions[1]:
      return isMobileWidth ? ReachedTooltipMobile : ReachedTooltip;
    case breakdownOptions[2]:
      return isMobileWidth ? TargetGroupTooltipMobile : TargetGroupTooltip;
    default:
      return isMobileWidth ? CountTooltipMobile : CountTooltip;
  }
}

function checkIfNoData(data: any[], breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return find(data, (item: any) => item.count > 0);
    case breakdownOptions[1]:
      return find(data, (item: any) => item.reached > 0 || item.target > 0);
    case breakdownOptions[2]:
      return find(data, (item: any) =>
        find(item.children, (child: any) => child.value > 0)
      );
    default:
      return true;
  }
}

export const OneYearAndMultiYearContainer = (
  props: OneYearAndMultiYearContainerProps
) => {
  const loading = useStoreState(
    (state) => state.getOneMultiYearBarChartData.loading
  );
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

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
      <ChartWrapper height={60 * get(props, 'data.length', 2)}>
        {!checkIfNoData(props.data, props.selectedBreakdown) ? (
          <NoData loading={loading} />
        ) : (
          <ResponsiveBar
            {...OneYearAndMultiYearConfigBase}
            data={
              formatOneYearAndMultiYearData(
                props.selectedBreakdown,
                props.data
              ) as object[]
            }
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
        <LegendContainer
          fullWidthLegends={props.fullWidthLegends}
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
