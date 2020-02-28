import React from 'react';
import 'styled-components/macro';
import { LegendListItem, LegendListItemProps } from './LegendListItem';

export type LegendListProps = {
  items: { name: string; loc: number; color: string }[];
  activeBubble: string;
};

export function LegendList(props: LegendListProps) {
  return (
    <ul
      css={`
        margin: 0;
        padding: 0;
        height: 565px;
        overflow-y: scroll;
        ::-webkit-scrollbar {
          width: 7px;
          background-color: #d8d8d8;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #242e42;
          -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
        }
      `}
    >
      {props.items.map((item: LegendListItemProps) => (
        <LegendListItem
          key={item.name}
          name={item.name}
          loc={item.loc}
          color={item.color}
          active={props.activeBubble === item.name}
        />
      ))}
    </ul>
  );
}
