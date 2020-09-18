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
        overflow-y: auto;
        max-height: 150px;
        justify-content: ${props.justify ? props.justify : 'initial'};

        @media (max-width: 600px) {
          overflow-y: unset;
          max-height: 100%;
          width: 100%;
          margin-bottom: 16px;
          justify-content: flex-end;
          margin-right: -20px;
        }
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
