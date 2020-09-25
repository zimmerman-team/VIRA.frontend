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
          width: calc(100vw - 16px);
          overflow-x: auto;
        }
      `}
    >
      {props.children}
    </div>
  );
}
