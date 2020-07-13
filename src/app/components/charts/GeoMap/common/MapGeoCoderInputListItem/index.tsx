import React from 'react';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';

export const MapGeoCoderInputListItem = (props: any) => {
  console.log('props', props);
  return (
    <div
      css={`
        width: 100%;
        display: flex;
        font-size: 12px;
        padding: 6px 2px;
        &:hover {
          cursor: pointer;
          color: ${ProjectPalette.common.white};
          background-color: ${ProjectPalette.primary.main};
        }
      `}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
