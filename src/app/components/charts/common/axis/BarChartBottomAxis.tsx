/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

interface BarChartBottomAxisProps {
  textBaseLine:
    | 'alphabetic'
    | 'hanging'
    | 'ideographic'
    | 'mathematical'
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'inherit'
    | undefined;
  textAnchor: string | undefined;
  value: string;
  x: number;
  y: number;
}

export const BarChartBottomAxis = (props: BarChartBottomAxisProps) => {
  return (
    <g transform={`translate(${props.x},${props.y})`}>
      <text
        style={{
          fontWeight: 400,
          fontFamily: 'Inter',
          fontSize: 14,
          dominantBaseline: 'auto',
        }}
        textAnchor={props.textAnchor}
      >
        {props.value}
      </text>
    </g>
  );
};
