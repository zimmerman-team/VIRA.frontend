/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';

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
  return (
    <li
      css={`
        display: flex;
        font-size: 14px;
        min-height: 24px;
        align-items: center;
        margin-bottom: 16px;
        opacity: ${props.opacity || 1};
        cursor: ${!props.opacity ? 'pointer' : 'default'};
      `}
      onClick={() =>
        props.onClick && !props.opacity && props.onClick(props.name)
      }
    >
      <div
        css={`
          width: 8px;
          height: 8px;
          margin-right: 10px;
          border-radius: 50%;
          background-color: ${props.color};
        `}
      />
      <div
        css={`
          max-width: calc(100% - 18px);
          font-weight: ${props.active ? 'bold' : 'normal'};
        `}
      >
        {t(props.name)}
      </div>
    </li>
  );
}
