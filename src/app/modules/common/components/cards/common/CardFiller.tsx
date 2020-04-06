import 'styled-components/macro';
import React from 'react';
import { ProjectPalette } from 'app/theme';

export const CardFiller = () => (
  <div
    css={`
      width: 100%;
      height: 400px;
      background-color: ${ProjectPalette.grey.A200};
    `}

    /*css={`
      background-color: ${ProjectPalette.grey.A200};
      height: 100%;
      width: 100%;
    `}*/
  />
);
