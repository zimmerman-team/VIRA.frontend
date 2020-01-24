import React from 'react';
import 'styled-components/macro';

type Props = {
  label: string;
  selected: boolean;
  onClick?: Function;
};

export function LegendControl(props: Props) {
  return (
    <div
      onClick={() => props.onClick && props.onClick(props.label)}
      css={`
        font-size: 14px;
        cursor: pointer;
        margin-right: 12px;
        font-weight: ${props.selected ? 'bold' : 'normal'};
      `}
    >
      {props.label}
    </div>
  );
}
