/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { getTspanGroups } from 'app/components/charts/BarCharts/HorizontalBarChart/getTspanGroups';
import { useTranslation } from 'react-i18next';
import {
  LegendDataPillars,
  LegendMultiyearPillars,
} from 'app/components/charts/common/LegendData';

interface BarChartLeftAxisProps {
  value: string;
  x: number;
  y: number;
}

function getTranslation(value: string) {
  const { t } = useTranslation();

  switch (value) {
    case 'Pillar 1: Social good':
      return t('reports.form.textfield.radio_pillar_one');
    case 'Pillar 2: Cultural heritage':
      return t('reports.form.textfield.radio_pillar_two');
    default:
      return t(value);
  }
}

export const BarChartLeftAxis = (props: BarChartLeftAxisProps) => {
  return (
    <g transform={`translate(${props.x},${props.y + 8})`}>
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
        {getTspanGroups(getTranslation(props.value), 30)}
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
