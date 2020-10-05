import pullAt from 'lodash/pullAt';
import findIndex from 'lodash/findIndex';
import { BarSvgProps } from '@nivo/bar';
import { CommonBarProps } from 'app/components/charts/common/CommonProps';
import {
  BarChartLeftAxis,
  getTranslationKey,
} from 'app/components/charts/common/axis/BarChartLeftAxis';
import { BarChartBottomAxis } from 'app/components/charts/common/axis/BarChartBottomAxis';

const Pillar1Colors = ['#242E42', '#828894'];
const ChartKeys = ['Insinger Contribution'];

/* ------------------------------------------------------------ */
/* base */
interface ChartDataProps {
  name: string;
  Spent: number;
  SpentColor: string;
  'Not Spent': number;
  'Not SpentColor': string;
}

export function getKeys(selectedBreakdown: string) {
  switch (selectedBreakdown) {
    case 'None':
      return ChartKeys;
    case 'One Year & Multi Year':
      return ['Budget One Year', 'Budget Multi Year'];
    default:
      return ChartKeys;
  }
}

// @ts-ignore
export const PillarConfigBase: BarSvgProps = {
  ...CommonBarProps,
  margin: {
    top: 0,
    right: 16,
    bottom: 0,
    left: 255,
  },
  // @ts-ignore
  axisLeft: { renderTick: BarChartLeftAxis },
  // @ts-ignore
  axisBottom: { renderTick: BarChartBottomAxis },
  layout: 'horizontal',
  indexBy: 'name',
  keys: ChartKeys,
};

type pillarProps = {
  name: string;
  budget: number;
  spent: number;
  oneYear: number;
  multiYear: number;
  contribution: number;
};

// @ts-ignore
export function PillarMultiYearConfig(t: any): BarSvgProps {
  return {
    ...CommonBarProps,
    // @ts-ignore
    axisBottom: {
      format: (value: any) => t(getTranslationKey(value)),
    },
    margin: {
      top: 0,
      right: 0,
      bottom: 60,
      left: 48,
    },
    layout: 'vertical',
    groupMode: 'grouped',
    innerPadding: 32,
    indexBy: 'name',
    keys: ChartKeys,
  };
}

export function formatPillarData(
  data: pillarProps[],
  breakdown: string
): any[] {
  const chartData: any[] = [];

  const groupedData = data;

  groupedData.forEach((pillar: pillarProps, index: number) => {
    if (pillar.name === 'Pillar 1: Social Good Projects') {
      const fPillar1Index = findIndex(data, { name: 'Pillar 1: Social good' });
      if (fPillar1Index > -1) {
        groupedData[fPillar1Index].spent += pillar.spent;
        groupedData[fPillar1Index].budget += pillar.budget;
        groupedData[fPillar1Index].oneYear += pillar.oneYear;
        groupedData[fPillar1Index].multiYear += pillar.multiYear;
        groupedData[fPillar1Index].contribution += pillar.contribution;
        pullAt(groupedData, [index]);
      } else {
        groupedData[index].name = 'Pillar 1: Social Good Projects';
      }
    }
    if (pillar.name === 'Pillar 2: Church & Organ restorations projects') {
      const fPillar2Index = findIndex(data, {
        name: 'Pillar 2: Cultural heritage',
      });
      if (fPillar2Index > -1) {
        groupedData[fPillar2Index].spent += pillar.spent;
        groupedData[fPillar2Index].budget += pillar.budget;
        groupedData[fPillar2Index].oneYear += pillar.oneYear;
        groupedData[fPillar2Index].multiYear += pillar.multiYear;
        groupedData[fPillar2Index].multiYear += pillar.multiYear;
        groupedData[fPillar2Index].contribution += pillar.contribution;
        pullAt(groupedData, [index]);
      } else {
        groupedData[index].name = 'Pillar 2: Cultural heritage';
      }
    }
  });

  if (breakdown === 'None') {
    groupedData.forEach((pillar: pillarProps) => {
      chartData.push({
        name: pillar.name,
        Spent: pillar.spent,
        SpentColor: Pillar1Colors[0],
        'Not Spent': pillar.budget - pillar.spent,
        'Not SpentColor': Pillar1Colors[1],
        'Insinger Contribution': pillar.contribution,
        'Insinger ContributionColor': Pillar1Colors[0],
      });
    });
  } else if (breakdown === 'One Year & Multi Year') {
    groupedData.forEach((pillar: any) => {
      chartData.push({
        name: pillar.name,
        'Budget One Year': pillar.oneYear,
        'Budget One YearColor': Pillar1Colors[0],
        'Budget Multi Year': pillar.multiYear,
        'Budget Multi YearColor': Pillar1Colors[1],
      });
    });
  }

  return chartData;
}
