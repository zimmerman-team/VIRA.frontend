// @ts-nocheck
import React from 'react';
import { ColorSchemeType } from 'app/components/charts/BarCharts/common/colorUtil';
import { ProjectPalette } from 'app/theme';

export type BarChartLegendModel = {
  label: string;
  selected: boolean;
};

export type HorizontalBarChartValueModel = {
  name: string;
  value1?: number;
  value2?: number;
  value3?: number;
  value4?: number; // Insinger Contribution
  value1Color?: string;
  value2Color?: string;
  value4Color?: string;
  tooltip?: ChartTooltipItemModel;
};
export type HorizontalBarChartModel = {
  maxValue?: number;
  values: HorizontalBarChartValueModel[];
  colors?: ColorSchemeType;
  chartLegends?: BarChartLegendModel[];
  onChartLegendClick?: Function;
};

// todo: add BarSvgProps when<Box height={'62px'} width={'1px'} /> axis/renderTick function declaration is included
export const getBarModel = (t) => ({
  data: [],
  minValue: 0,
  keys: ['value1', 'value2'],
  indexBy: 'name',
  margin: { top: 10, right: 30, bottom: 50, left: 256 },
  padding: 0,
  groupedMode: 'stacked',
  layout: 'horizontal',
  axisRight: null,
  axisBottom: {
    tickSize: 0,
    tickPadding: 5,
    tickRotation: 0,
    legendOffset: 32,
    legendPosition: 'middle',
  },
  axisLeft: {
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    renderTick: ({ textX, value, x, y }) => {
      return (
        <g transform={`translate(${x},${y})`}>
          <text
            style={{
              fontWeight: 400,
              fontFamily: 'Inter',
              fontSize: 14,
              dominantBaseline: 'auto',
            }}
            textAnchor="start"
            transform="translate(-256, -10)"
          >
            {/* {getTspanGroups(t(value), 30)} */}
            {value}
          </text>
          <line
            x1="0"
            x2="-256"
            y1="0"
            y2="0"
            style={{
              stroke: ProjectPalette.grey.A100,
              strokeWidth: 1,
            }}
          />
        </g>
      );
    },
  },
  labelSkipWidth: 9,
  labelSkipHeight: 17,
  legends: [],
  motionStiffness: 90,
  motionDamping: 15,
  colorBy: (e) => e.data[`${e.id}Color`],
  enableGridX: true,
  enableGridY: true,
  theme: {
    axis: {
      ticks: {
        text: {
          fontWeight: 500,
          fontFamily: 'Inter',
          fontSize: 14,
          color: '#6f7173',
          fill: '#6f7173',
          dominantBaseline: 'auto',
        },
        line: {
          strokeWidth: 0,
        },
      },
    },
    legends: {
      text: {
        fontWeight: 500,
        fontFamily: 'Inter',
        fontSize: 11,
      },
    },
  },
  isInteractive: true,
});

// // https://github.com/plouc/nivo/issues/353
// // function is used for multiline text
// const getTspanGroups = (value: string, maxLineLength: number, maxLines = 3) => {
//   const words = value.split(' ');

//   type linesAcc = {
//     lines: string[];
//     currLine: string;
//   };

//   // reduces the words into lines of maxLineLength
//   const assembleLines: linesAcc = words.reduce(
//     (acc: linesAcc, word: string) => {
//       // if the current line isn't empty and the word + current line is larger than the allowed line size, create a new line and update current line
//       const shouldWrap: boolean =
//         (word + acc.currLine).length > maxLineLength && acc.currLine !== '';
//       if (shouldWrap) {
//         return {
//           lines: acc.lines.concat([acc.currLine]),
//           currLine: word,
//         };
//       }
//       // otherwise add the word to the current line
//       return {
//         ...acc,
//         currLine: acc.currLine + ' ' + word,
//       };
//     },
//     { lines: [], currLine: '' }
//   );

//   // add the ending state of current line (the last line) to lines
//   const allLines = assembleLines.lines.concat([assembleLines.currLine]);

//   // for now, only take first 2 lines due to tick spacing and possible overflow
//   const lines = allLines.slice(0, maxLines);
//   const children: JSX.Element[] = [];
//   let dy = 5;

//   lines.forEach((lineText, i) => {
//     if (lines.length > 1 && i === 0) {
//       dy = -10;
//     }
//     children.push(
//       <tspan x={0} dy={dy} key={i}>
//         {
//           // if on the second line, and that line's length is within 3 of the max length, add ellipsis
//           2 === i && allLines.length > 2
//             ? lineText.slice(0, maxLineLength - 3) + '...'
//             : lineText
//         }
//       </tspan>
//     );
//     // increment dy to render next line text below
//     if (lines.length > 1 && i === 0) {
//       dy += 25;
//     }
//   });

//   return children;
// };
