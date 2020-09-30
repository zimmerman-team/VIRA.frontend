import { ProjectPalette } from 'app/theme';
import React, { ReactNode } from 'react';
import 'styled-components/macro';
import { MobileVerticalScroll } from 'app/components/layout/MobileVerticalScroll';
import { breakdownOptions } from 'app/components/charts/PriorityArea';

interface BarChartWrapperProps {
  children?: ReactNode;
  height?: number;
  noSvgCss?: boolean;
  selectedBreakdown?: string;
}

export const ChartWrapper = (props: BarChartWrapperProps) => {
  // const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <MobileVerticalScroll>
      <div
        css={`
          width: 100%;
          height: ${`${props.height}px`};
          margin-bottom: 20px;
          display: flex;
          flex-direction: ${props.selectedBreakdown === breakdownOptions[2]
            ? 'column'
            : 'row'};
          &:first-child {
            margin-top: 20px;
          }

          @media (max-width: 600px) {
            width: 1200px;
          }

          ${!props.noSvgCss &&
          `svg {
            > g {
              > g:nth-of-type(2) {
                transform: translate(0px, 8px);
              }
              > g:last-of-type {
                > g {
                  > rect {
                    height: 24px;
                  }
                }
              }
            }
          }`}
        `}
      >
        {props.children}
      </div>
    </MobileVerticalScroll>
  );
};
