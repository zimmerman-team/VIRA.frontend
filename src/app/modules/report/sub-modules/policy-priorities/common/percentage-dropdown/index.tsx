/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import get from 'lodash/get';
import find from 'lodash/find';
import sumBy from 'lodash/sumBy';
import filter from 'lodash/filter';
import cloneDeep from 'lodash/cloneDeep';
import { Box } from '@material-ui/core';
import findIndex from 'lodash/findIndex';
import { useTranslation } from 'react-i18next';
import { ExpandMore } from '@material-ui/icons';
import { LabelWeightModel } from 'app/modules/report/model';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { PolicyPriorityProps } from 'app/modules/report/sub-modules/policy-priorities/mock';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';
import { PercentageDropdownItem } from 'app/modules/report/sub-modules/policy-priorities/common/percentage-dropdown-item';
import {
  inputcss,
  inputlistcss,
  listboxcss,
  listcss,
  totalcss,
  buttoncss,
} from 'app/modules/report/sub-modules/policy-priorities/common/percentage-dropdown/inputcss';

export interface PercentageDropdownProps {
  text?: string;
  setValue: Function;
  description?: string;
  value: LabelWeightModel[];
  listItemTooltipPath?: string;
  values: PolicyPriorityProps[];
  testid?: string;
}

export const PercentageDropdown = (props: PercentageDropdownProps) => {
  const { t } = useTranslation();
  const [openList, setOpenList] = React.useState(false);
  const [selections, setSelections] = React.useState(cloneDeep(props.value));
  const [total, setTotal] = React.useState(
    sumBy(selections, (s: any) => (isNaN(s.weight) ? 0 : s.weight))
  );

  React.useEffect(() => {
    setSelections(cloneDeep(props.value));
  }, [props.value]);

  React.useEffect(
    () =>
      setTotal(sumBy(selections, (s: any) => (isNaN(s.weight) ? 0 : s.weight))),
    [selections]
  );

  function onWeightChange(label: string, value: number, code?: number) {
    let newSelections = [...selections];
    const fIndex = findIndex(selections, { label });
    let fIndexWeight = get(selections, `[${fIndex}].weight`, 0);
    fIndexWeight = isNaN(fIndexWeight) ? 0 : fIndexWeight;
    const availableWeight =
      100 -
      sumBy(selections, (s: any) => (isNaN(s.weight) ? 0 : s.weight)) +
      fIndexWeight;
    if (isNaN(value)) {
      if (fIndex > -1) {
        newSelections[fIndex].weight = value;
      } else {
        newSelections.push({
          label,
          weight: value,
          code,
        });
      }
    } else if (value < availableWeight || value === availableWeight) {
      if (value < 1) {
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
    }
    setSelections(newSelections);
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

      {/* ------------------------------------------ */}
      {/* Opens the dropdown list, shows selected items with their values */}
      <div
        css={inputcss(props.value.length > 0)}
        onClick={() => setOpenList(!openList)}
        data-cy={props.testid}
      >
        <div>
          <ul css={inputlistcss}>
            {/* todo: please rename "v" to something more descriptive */}
            {props.value.map((v: LabelWeightModel) => (
              <li key={v.label}>
                <div>{t(v.label)}</div>
                <div>{v.weight}%</div>
              </li>
            ))}
          </ul>
        </div>
        {props.value.length === 0 && <ExpandMore />}
      </div>
      {/* ------------------------------------------ */}
      {/* Actual dropdown list with items */}
      {openList && (
        <div css={listboxcss}>
          <ul css={listcss}>
            {props.values.map((option: PolicyPriorityProps, index) => {
              const fItem = find(selections, { label: option.label });
              return (
                <PercentageDropdownItem
                  key={'dropdown-item-' + index}
                  testid={'dropdown-item-' + index}
                  code={option.code}
                  label={option.label}
                  labelValue={option.value}
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
          <div css={totalcss(total)}>
            <PercentageDropdownItem
              disabled
              label="Total"
              value={total}
              labelValue="Total"
              onWeightChange={() => {}}
            />
          </div>
          <div
            css={`
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
            `}
          >
            <div
              data-cy="dropdown-close-button"
              css={buttoncss('#D8D8D8')}
              onClick={() => setOpenList(false)}
            >
              Close
            </div>
            <div
              data-cy="dropdown-apply-button"
              css={buttoncss('#30C2B0')}
              onClick={() => {
                setOpenList(false);
                props.setValue(
                  filter(selections, (s: any) => !isNaN(s.weight))
                );
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
