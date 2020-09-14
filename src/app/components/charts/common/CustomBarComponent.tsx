import React from 'react';
import { BarItemProps } from '@nivo/bar';

export const CustomBarComponent = (props: BarItemProps) => {
  return (
    <rect
      x={props.x}
      y={props.y - 9} // -9 here has to be variable, depends on the number of bars
      rx={0}
      ry={0}
      width={props.width}
      height="24"
      fill={props.color}
    />
  );
};
