import React, { ReactNode } from 'react';
import { css } from 'styled-components';

interface BarChartWrapperProps {
  children?: ReactNode;
  height?: number;
}

export const ChartWrapper = (props: BarChartWrapperProps) => {
  return (
    <div
      css={`
        width: 100%;
        height: ${`${props.height}px`};
        outline: 1px solid #1ea7fd;
        margin-bottom: 20px;
        display: flex;

        &:first-child {
          margin-top: 20px;
        }
      `}
    >
      {props.children}
    </div>
  );
};
