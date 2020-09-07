/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import sumBy from 'lodash/sumBy';
import filter from 'lodash/filter';
import { Box } from '@material-ui/core';
import findIndex from 'lodash/findIndex';
import { ProjectPalette } from 'app/theme';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { ExpandMore } from '@material-ui/icons';
import { LabelWeightModel } from 'app/modules/report/model';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { PolicyPriorityProps } from 'app/modules/report/sub-modules/policy-priorities/mock';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';
import { PercentageDropdownItem } from 'app/modules/report/sub-modules/policy-priorities/common/percentage-dropdown-item';

export interface PercentageDropdownProps {
  text?: string;
  setValue: Function;
  description?: string;
  value: LabelWeightModel[];
  listItemTooltipPath?: string;
  values: PolicyPriorityProps[];
}

const inputcss = (hasSelections: boolean) => css`
  width: 100%;
  display: flex;
  cursor: pointer;
  background: #f0f3f7;
  flex-direction: row;
  align-items: center;
  padding: 5px 0 5px 10px;
  justify-content: space-between;
  height: ${hasSelections ? 'fit-content' : '48px'};

  > div {
    width: 100%;
  }
  > svg {
    margin-right: 10px;
  }
`;

const inputlistcss = css`
  margin: 0;
  width: 100%;
  list-style: none;
  overflow-y: auto;
  padding: 5px 10px;
  max-height: 100px;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 50%;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${ProjectPalette.grey[400]};
  }

  > li {
    width: 100%;
    padding: 6px;
    display: flex;
    font-size: 14px;
    align-items: center;
    flex-direction: row;
    font-weight: normal;
    justify-content: space-between;
  }
`;

const listboxcss = css`
  margin: 0;
  padding: 0;
  z-index: 1;
  width: 100%;
  background: #fff;
  position: absolute;
  border-radius: 2px;
  box-shadow: 0 4px 14px -2px rgba(130, 136, 148, 0.28),
    0 0 2px 0 rgba(130, 136, 148, 0.22);
`;

const listcss = css`
  width: 100%;
  list-style: none;
  overflow-y: auto;
  padding: 5px 10px;
  max-height: 300px;
  margin: 0 0 10px 0;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 50%;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${ProjectPalette.grey[400]};
  }
`;

const buttoncss = (bgcolor: string) => css`
  width: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 15px 0;
  font-weight: 600;
  text-align: center;
  background: ${bgcolor};
`;

export const PercentageDropdown = (props: PercentageDropdownProps) => {
  const { t } = useTranslation();
  const [openList, setOpenList] = React.useState(false);
  const [selections, setSelections] = React.useState(props.value);

  React.useEffect(() => {
    if (openList) {
      setSelections(props.value);
    }
  }, [openList]);

  function onWeightChange(label: string, value: number, code?: number) {
    let newSelections = [...selections];
    const fIndex = findIndex(selections, { label });
    const availableWeight =
      100 -
      sumBy(selections, 'weight') +
      get(selections, `[${fIndex}].weight`, 0);
    if (
      !isNaN(value) &&
      (value < availableWeight || value === availableWeight)
    ) {
      if (value === 0) {
        newSelections = filter(
          newSelections,
          (s: LabelWeightModel) => s.label !== label
        );
      } else if (fIndex > -1) {
        newSelections[fIndex].weight = value;
      } else {
        newSelections.push({
          label,
          weight: value,
          code,
        });
      }
      setSelections(newSelections);
    }
  }

  return (
    // <ClickAwayListener onClickAway={() => setOpenList(false)}>
    <div
      css={`
        width: 100%;
        position: relative;
      `}
    >
      {props.description && (
        <>
          <FieldDescription text={props.description} />
          <Box width="100%" height="20px" />
        </>
      )}

      <div
        css={inputcss(props.value.length > 0)}
        onClick={() => setOpenList(!openList)}
      >
        <div>
          <ul css={inputlistcss}>
            {props.value.map((v: LabelWeightModel) => (
              <li>
                <div>{v.label}</div>
                <div>{v.weight}%</div>
              </li>
            ))}
          </ul>
        </div>
        {props.value.length === 0 && <ExpandMore />}
      </div>

      {openList && (
        <div css={listboxcss}>
          <ul css={listcss}>
            {props.values.map((option: PolicyPriorityProps) => {
              const fItem = find(selections, { label: option.label });
              return (
                <PercentageDropdownItem
                  key={option.label}
                  code={option.code}
                  label={option.label}
                  value={get(fItem, 'weight', 0)}
                  onWeightChange={onWeightChange}
                  tooltip={
                    props.listItemTooltipPath
                      ? t(`${props.listItemTooltipPath}.${option.code}`)
                      : undefined
                  }
                />
              );
            })}
          </ul>
          <div
            css={`
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
            `}
          >
            <div css={buttoncss('#D8D8D8')} onClick={() => setOpenList(false)}>
              Close
            </div>
            <div
              css={buttoncss('#30C2B0')}
              onClick={() => {
                setOpenList(false);
                props.setValue(selections);
              }}
            >
              Apply
            </div>
          </div>
        </div>
      )}
    </div>
    // </ClickAwayListener>
  );
};
