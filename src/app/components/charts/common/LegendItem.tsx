import React from 'react';

export interface LegendItemProps {
  legendColor?: string;
  legendName?: string;
}

export const LegendItem = (props: LegendItemProps) => (
  <li
    css={`
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      margin-right: 20px;
      flex-shrink: 0;
      outline: 1px solid #1ea7fd;
    `}
  >
    <div
      css={`
        height: 17px;
        width: 17px;
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
      {props.legendName}
    </span>
  </li>
);
