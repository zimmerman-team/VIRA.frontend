/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { getTspanGroups } from 'app/components/charts/BarCharts/HorizontalBarChart/getTspanGroups';
import { useTranslation } from 'react-i18next';

interface BarChartLeftAxisProps {
  value: string;
  x: number;
  y: number;
}

export const BarChartLeftAxis = (props: BarChartLeftAxisProps) => {
  const { t, i18n } = useTranslation();

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
        transform="translate(-256, -10)"
      >
        {getTspanGroups(t(props.value), 30)}
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
};
