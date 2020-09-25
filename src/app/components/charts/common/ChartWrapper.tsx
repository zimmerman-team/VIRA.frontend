import { ProjectPalette } from 'app/theme';
import React, { ReactNode } from 'react';
import 'styled-components/macro';
import { MobileVerticalScroll } from 'app/components/layout/MobileVerticalScroll';

interface BarChartWrapperProps {
  children?: ReactNode;
  height?: number;
  noSvgCss?: boolean;
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
