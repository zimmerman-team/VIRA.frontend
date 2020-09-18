import React from 'react';
import { useTranslation } from 'react-i18next';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';
import { listitemcss, labelcss, inputcss } from './listitemcss';

type PercentageDropdownItemProps = {
  label: string;
  value: number;
  code?: number;
  tooltip?: string;
  labelValue: string;
  disabled?: boolean;
  onWeightChange: Function;
  testid?: string;
};

export function PercentageDropdownItem(props: PercentageDropdownItemProps) {
  const { t } = useTranslation();

  return (
    <li css={listitemcss} data-cy="dropdown-item-container">
      <div css={labelcss}>
        {t(props.label)}
        {props.tooltip && <Tooltip tip={props.tooltip} />}
      </div>
      <div css={inputcss}>
        <input
          data-cy={props.testid}
          min={0}
          max={100}
          type="number"
          value={props.value}
          disabled={props.disabled}
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
