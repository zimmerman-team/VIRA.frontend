import React from 'react';
import 'styled-components/macro';

const Control = (props: { symbol: string; onClick: Function }) => (
  <div
    onClick={() => props.onClick()}
    css={`
      width: 32px;
      height: 32px;
      display: flex;
      color: #b9b9b9;
      font-size: 20px;
      user-select: none;
      margin-bottom: 5px;
      border-radius: 2px;
      align-items: center;
      justify-content: center;
      border: 1px solid #b9b9b9;

      &:hover {
        color: #000;
        cursor: pointer;
        border-color: #000;
      }
    `}
  >
    {props.symbol}
  </div>
);

export const MapControls = (props: { zoomIn: Function; zoomOut: Function }) => {
  return (
    <div
      css={`
        right: 5px;
        bottom: 30px;
        z-index: 1000;
        display: flex;
        position: absolute;
        flex-direction: column;
      `}
    >
      <Control symbol="+" onClick={props.zoomIn} />
      <Control symbol="-" onClick={props.zoomOut} />
    </div>
  );
};
