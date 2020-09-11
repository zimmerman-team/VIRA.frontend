import React from 'react';
import {
  LegendItemProps,
  LegendItem,
} from 'app/components/charts/common/LegendItem';

export interface LegendContainerProps {
  items: LegendItemProps[];
  justify?: string;
}

export const LegendContainer = (props: LegendContainerProps) => {
  return (
    <ul
      css={`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        width: 500px;
        flex-wrap: wrap;
        justify-content: ${props.justify ? props.justify : 'initial'};
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
