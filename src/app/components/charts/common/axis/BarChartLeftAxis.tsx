/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { ProjectPalette } from 'app/theme';
import { useTranslation } from 'react-i18next';
import { getTspanGroups } from 'app/components/charts/BarCharts/HorizontalBarChart/getTspanGroups';

interface BarChartLeftAxisProps {
  value: string;
  x: number;
  y: number;
}

export function getTranslationKey(value: string) {
  switch (value) {
    case 'Pillar 1: Social good':
      return 'reports.form.textfield.radio_pillar_one';
    case 'Pillar 1: Social Good Projects':
      return 'reports.form.textfield.radio_pillar_one';
    case 'Pillar 2: Cultural heritage':
      return 'reports.form.textfield.radio_pillar_two';
    case 'Pillar 2: Church & Organ restorations projects':
      return 'reports.form.textfield.radio_pillar_two';
    default:
      return value;
  }
}

export const BarChartLeftAxis = (props: BarChartLeftAxisProps) => {
  const { t } = useTranslation();
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
        {getTspanGroups(t(getTranslationKey(props.value)), 30)}
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
