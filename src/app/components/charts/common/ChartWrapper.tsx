import { ProjectPalette } from 'app/theme';
import React, { ReactNode } from 'react';
import { css } from 'styled-components';

interface BarChartWrapperProps {
  children?: ReactNode;
  height?: number;
}

export const ChartWrapper = (props: BarChartWrapperProps) => {
  // const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
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
          max-width: calc(100vw - 32px);
          overflow-x: auto;
          ::-webkit-scrollbar {
            height: 16px;
            border-radius: 10px;
          }

          ::-webkit-scrollbar-track {
            background: ${ProjectPalette.primary.light};
          }

          ::-webkit-scrollbar-thumb {
            background: ${ProjectPalette.grey[500]};
          }
        }

        svg {
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
        }
      `}
    >
      {props.children}
    </div>
  );
};
