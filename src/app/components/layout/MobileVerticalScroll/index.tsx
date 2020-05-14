import React from 'react';
import { ProjectPalette } from 'app/theme';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

export function MobileVerticalScroll(props: Props) {
  return (
    <div
      css={`
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
      `}
    >
      {props.children}
    </div>
  );
}
