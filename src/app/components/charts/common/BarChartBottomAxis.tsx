/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { getTspanGroups } from 'app/components/charts/BarCharts/HorizontalBarChart/getTspanGroups';
import { useTranslation } from 'react-i18next';

interface BarChartBottomAxisProps {
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
        textAnchor="start"
        // transform="translate(0, -10)"
      >
        {props.value}
      </text>
    </g>
  );
};
