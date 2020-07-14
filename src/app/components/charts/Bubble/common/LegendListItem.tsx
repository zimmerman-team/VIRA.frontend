/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { hexToRgb } from 'app/utils/hexToRgb';

export type LegendListItemProps = {
  name: string;
  loc: number;
  color: string;
  opacity?: number;
  active?: boolean;
  onClick?: Function;
};

export function LegendListItem(props: LegendListItemProps) {
  const { t } = useTranslation();
  const hasData = !props.opacity || props.opacity === 1;
  const rgbColor = hexToRgb(props.color);
  return (
    <li
      css={`
        display: flex;
        font-size: 14px;
        min-height: 24px;
        align-items: center;
        margin-bottom: 16px;
        cursor: ${hasData ? 'pointer' : 'default'};
      `}
      onClick={() => props.onClick && hasData && props.onClick(props.name)}
    >
      <div
        css={`
          width: 8px;
          height: 8px;
          margin-right: 10px;
          border-radius: 50%;
          background-color: ${hasData
            ? props.color
            : `rgba(${rgbColor?.r}, ${rgbColor?.g}, ${
                rgbColor?.b
              }, ${props.opacity || 1})`};
        `}
      />
      <div
        css={`
          max-width: calc(100% - 18px);
          font-weight: ${props.active ? 'bold' : 'normal'};
          ${!hasData && `color: rgba(0, 0, 0, ${props.opacity});`}
        `}
      >
        {t(props.name)}
      </div>
    </li>
  );
}
