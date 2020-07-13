/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* base */
import React from 'react';
import { ProjectPalette } from 'app/theme';
import styled from 'styled-components/macro';

/* consts */
const maxSize = 50;
const Value = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const ClusterElement = (props: any) => {
  console.log(props);
  const clusterValue = props.cluster.properties.point_count;
  return (
    <div
      style={{ cursor: 'pointer' }}
      onClick={() => props.onClick(props.zoom, props.longitude, props.latitude)}
    >
      <div
        role="button"
        css={`
          width: ${clusterValue * 15 < maxSize ? clusterValue * 15 : maxSize}px;
          height: ${clusterValue * 15 < maxSize
            ? clusterValue * 15
            : maxSize}px;
          border-radius: 50%;
          background: ${ProjectPalette.common.white};
          border: 5.5px solid ${ProjectPalette.secondary.main};
        `}
      />
      <Value>{clusterValue}</Value>
    </div>
  );
};
