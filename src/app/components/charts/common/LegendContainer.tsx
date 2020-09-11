import React from 'react';
import {
  LegendItemProps,
  LegendItem,
} from 'app/components/graphs/common/LegendItem';

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
        outline: 1px solid red;
      `}
    >
      {props.items.map((item: LegendItemProps) => (
        <LegendItem
          key={item.legendName}
          legendColor={item.legendColor}
          legendName={item.legendName}
        />
      ))}
    </ul>
  );
};
