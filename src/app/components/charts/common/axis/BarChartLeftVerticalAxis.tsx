/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { getTspanGroups } from 'app/components/charts/BarCharts/HorizontalBarChart/getTspanGroups';
import { useTranslation } from 'react-i18next';

interface BarChartLeftVerticalAxisProps {
  value: string;
  x: number;
  y: number;
}

export const BarChartLeftVerticalAxis = (
  props: BarChartLeftVerticalAxisProps
) => {
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
        transform="translate(-50, -5)"
      >
        {getTspanGroups(t(props.value.toString()), 30)}
      </text>
      <line
        x1="0"
        x2="0"
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
