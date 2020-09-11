import React from 'react';

export interface LegendItemProps {
  legendColor?: string;
  legendName?: string;
  index?: number;
}

export const LegendItem = (props: LegendItemProps) => {
  return (
    <li
      css={`
        display: flex;
        align-items: center;
        margin-top: 18px;
        margin-right: ${props.index === 1 ? 0 : 20}px;
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
        {props.legendName}
      </span>
    </li>
  );
};
