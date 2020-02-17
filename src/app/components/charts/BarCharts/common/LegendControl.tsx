/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import 'styled-components/macro';
import { Checkbox } from 'app/components/inputs/checkboxes/Checkbox';

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
        display: flex;
        font-size: 14px;
        cursor: pointer;
        margin-right: 12px;
        align-items: center;
      `}
    >
      <Checkbox checked={props.selected} /> {props.label}
    </div>
  );
}
