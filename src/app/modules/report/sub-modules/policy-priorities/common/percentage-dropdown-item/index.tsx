import React from 'react';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';

type PercentageDropdownItemProps = {
  label: string;
  value: number;
  code?: number;
  tooltip?: string;
  labelValue: string;
  onWeightChange: Function;
};

const listitemcss = css`
  width: 100%;
  padding: 6px;
  margin: 5px 0;
  display: flex;
  font-size: 14px;
  align-items: center;
  flex-direction: row;
  font-weight: normal;
  justify-content: space-between;
`;

const labelcss = css`
  display: flex;
  align-items: center;
  width: calc(100% - 80px);
`;

const inputcss = css`
  width: 50px;
  padding: 2px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #f0f3f7;

  > input {
    margin: 0;
    width: 35px;
    outline: none;
    border-style: none;
    background: #f0f3f7;
  }

  > div {
    color: #d8d8d8;
    font-size: 12px;
  }
`;

export function PercentageDropdownItem(props: PercentageDropdownItemProps) {
  const { t } = useTranslation();
  function handleFocus(event: any) {
    event.target.select();
  }

  return (
    <li css={listitemcss} data-cy={'dropdown-item-container'}>
      <div css={labelcss}>
        {t(props.label)}
        {props.tooltip && <Tooltip tip={props.tooltip} />}
      </div>
      <div css={inputcss}>
        <input
          data-cy={'percentage-dropdown-item-input'}
          min={0}
          max={100}
          type="number"
          value={props.value}
          onFocus={handleFocus}
          onChange={(e: any) =>
            props.onWeightChange(
              props.label,
              parseInt(e.target.value, 10),
              props.code
            )
          }
        />
        <div>%</div>
      </div>
    </li>
  );
}
