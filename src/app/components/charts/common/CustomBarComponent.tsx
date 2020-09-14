import React from 'react';
import { BarItemProps } from '@nivo/bar';

export const CustomBarComponent = (props: BarItemProps) => {
  console.log(props);
  const handleTooltip = (e: any) => props.showTooltip(props.tooltip, e);
  const handleMouseEnter = (e: any) => {
    // @ts-ignore
    // props.onMouseEnter(props.data, e);
    props.onMouseEnter();
    props.showTooltip(props.tooltip, e);
  };
  const handleMouseLeave = (e: any) => {
    // @ts-ignore
    // props.onMouseLeave(props.data, e);
    props.onMouseLeave();
    props.hideTooltip();
  };
  return (
    <rect
      onMouseMove={handleTooltip}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
