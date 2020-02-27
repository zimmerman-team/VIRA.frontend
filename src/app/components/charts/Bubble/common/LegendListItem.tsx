import React from 'react';
import 'styled-components/macro';

export type LegendListItemProps = {
  name: string;
  loc: number;
  color: string;
};

export function LegendListItem(props: LegendListItemProps) {
  return (
    <li
      css={`
        display: flex;
        font-size: 14px;
        min-height: 24px;
        align-items: center;
        margin-bottom: 16px;
        opacity: ${props.loc === 0 ? 0.2 : 1};
      `}
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
        `}
      >
        {props.name}
      </div>
    </li>
  );
}
