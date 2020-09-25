import React from 'react';
import get from 'lodash/get';
import max from 'lodash/max';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import { ResponsiveBar } from '@nivo/bar';
import { useStoreState } from 'app/state/store/hooks';
import { PillarCountContainer } from 'app/components/charts/Pillars/info';

import { NoData } from 'app/components/charts/common/NoData';
import { ChartWrapper } from 'app/components/charts/common/ChartWrapper';
import { LegendContainer } from 'app/components/charts/common/LegendContainer';
import {
  LegendDataPillars,
  LegendMultiyearPillars,
} from 'app/components/charts/common/LegendData';
import {
  formatPillarData,
  getKeys,
  PillarConfigBase,
  PillarMultiYearConfig,
} from 'app/components/charts/Pillars/data';
import BreakdownSelect from 'app/components/inputs/breakdown/BreakdownSelect';
import { BudgetTooltip, BudgetTooltipMobile } from './tooltips/Budget';
import { CountTooltip, CountTooltipMobile } from './tooltips/Count';
import { useMediaQuery } from '@material-ui/core';

interface PillarContainerProps {
  data: any;
  keys: any;
  durationData: any;
  selectedBreakdown: string;
  setSelectedBreakdown: Function;
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

function getTooltip(breakdown: string, isMobileWidth: boolean) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return isMobileWidth ? BudgetTooltipMobile : BudgetTooltip;
    case breakdownOptions[1]:
      return isMobileWidth ? CountTooltipMobile : CountTooltip;
    default:
      return isMobileWidth ? BudgetTooltipMobile : BudgetTooltip;
  }
}

function checkIfNoData(data: any[], breakdown: string) {
  switch (breakdown) {
    case breakdownOptions[0]:
      return find(data, (item: any) => item.budget > 0);
    case breakdownOptions[1]:
      return find(data, (item: any) => item.oneYear > 0 || item.multiYear > 0);
    default:
      return true;
  }
}

export const PillarContainer = (props: PillarContainerProps) => {
  const loading = useStoreState(
    (state) =>
      state.getPillarDataByBudget.loading ||
      state.getPillarDataByDuration.loading
  );
  const data =
    props.selectedBreakdown === breakdownOptions[1]
      ? props.durationData
      : props.data;
  const config =
    props.selectedBreakdown === breakdownOptions[1]
      ? PillarMultiYearConfig
      : PillarConfigBase;
  const chartHeight =
    props.selectedBreakdown === breakdownOptions[1]
      ? 350
      : 60 * get(props.data, 'length', 1);
  const x: number =
    max(
      (!isEmpty(data) ? data : []).map((d: any) =>
        d.oneYear > d.multiYear ? d.oneYear : d.multiYear
      )
    ) || 1;
  const maxValue: number | 'auto' | undefined =
    props.selectedBreakdown === breakdownOptions[0] ? 'auto' : x * 2;

  const isMobileWidth = useMediaQuery('(max-width: 600px)');

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
      <ChartWrapper
        height={chartHeight}
        noSvgCss={props.selectedBreakdown === breakdownOptions[1]}
      >
        {!checkIfNoData(data, props.selectedBreakdown) ? (
          <NoData loading={loading} />
        ) : (
          <ResponsiveBar
            {...config}
            maxValue={maxValue}
            keys={getKeys(props.selectedBreakdown)}
            onClick={() => {
              getTooltip(props.selectedBreakdown, isMobileWidth);
            }}
            tooltip={getTooltip(props.selectedBreakdown, isMobileWidth)}
            data={formatPillarData(
              !isEmpty(data) ? data : [],
              props.selectedBreakdown
            )}
            theme={{
              ...config.theme,
              tooltip: {
                ...config.theme?.tooltip,
                container: {
                  ...config.theme?.tooltip?.container,
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
          justify="flex-end"
          items={getLegendData(props.selectedBreakdown)}
        />
      </div>
    </div>
  );
};
