import React from 'react';
import { BarItemProps } from '@nivo/bar';

export const CustomBarComponent = (props: BarItemProps) => (
  <rect
    x={props.x}
    y={props.y - 10}
    rx={0}
    ry={0}
    width={props.width}
    height="25"
    fill={props.color}
  />
);
