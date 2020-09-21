import React from 'react';
import {
  LegendItemProps,
  LegendItem,
} from 'app/components/charts/common/LegendItem';

export interface LegendContainerProps {
  items: LegendItemProps[];
  justify?: string;
  fullWidthLegends?: boolean;
}

export const LegendContainer = (props: LegendContainerProps) => {
  return (
    <ul
      css={`
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        width: ${props.fullWidthLegends ? '100%' : '500px'};
        justify-content: ${props.justify ? props.justify : 'initial'};
        ${!props.fullWidthLegends ? 'overflow-y: auto;max-height: 150px;' : ''}
      `}
    >
      {props.items.map((item: LegendItemProps, index) => (
        <LegendItem
          key={item.legendName}
          index={index}
          legendColor={item.legendColor}
          legendName={item.legendName}
        />
      ))}
    </ul>
  );
};
