/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import 'styled-components/macro';
import { Checkbox } from 'app/components/inputs/checkboxes/Checkbox';
import { useTranslation } from 'react-i18next';

type Props = {
  label: string;
  selected: boolean;
  onClick?: Function;
};

export function LegendControl(props: Props) {
  const { t } = useTranslation();
  return (
    <div
      onClick={() => props.onClick && props.onClick(props.label)}
      css={`
        display: flex;
        font-size: 14px;
        cursor: pointer;
        margin-right: 12px;
        font-weight: bold;
        line-height: 1.71;
        letter-spacing: 0.25px;
        align-items: center;
      `}
    >
      <Checkbox checked={props.selected} /> {t(`${props.label}`)}
    </div>
  );
}
