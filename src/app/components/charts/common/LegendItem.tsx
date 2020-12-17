import React from 'react';
import { useTranslation } from 'react-i18next';

export interface LegendItemProps {
  legendColor?: string;
  legendName?: string;
  index?: number;
}

export const LegendItem = (props: LegendItemProps) => {
  const { t } = useTranslation();
  return (
    <li
      css={`
        display: flex;
        align-items: center;
        margin-top: 18px;
        margin-right: ${20}px;
        flex-shrink: 0;
      `}
    >
      <div
        css={`
          height: 18px;
          width: 18px;
          border-radius: 3px;
          background-color: ${props.legendColor};
          margin: 0;
          margin-right: 8px;
          flex-shrink: 0;
        `}
      />
      <span
        css={`
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 400;
        `}
      >
        {t(props.legendName || '')}
      </span>
    </li>
  );
};
