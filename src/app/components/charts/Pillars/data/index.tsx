import { BarSvgProps } from '@nivo/bar';
import {
  CommonBarProps,
  CommonBarPropsHorizontal,
} from 'app/components/charts/common/CommonProps';

const Pillar1Colors = ['#242E42', '#828894'];
const ChartKeys = ['Spent', 'Not Spent'];

/* ------------------------------------------------------------ */
/* base */
const ChartData = [
  {
    name: 'Pillar 2: Social Good',
    Spent: 5000,
    SpentColor: Pillar1Colors[0],
    'Not Spent': 500,
    'Not SpentColor': Pillar1Colors[1],
  },
  {
    name: 'Pillar 1: Church Restorations',
    Spent: 9000,
    SpentColor: Pillar1Colors[0],
    'Not Spent': 900,
    'Not SpentColor': Pillar1Colors[1],
  },
];

// @ts-ignore
export const PillarConfigBase: BarSvgProps = {
  ...CommonBarProps,
  ...CommonBarPropsHorizontal,
  data: ChartData, //Loose it up
  indexBy: 'name',
  keys: ChartKeys, //Loose it up
  maxValue: 15000,
};

/* ------------------------------------------------------------ */
/* multiyear */
