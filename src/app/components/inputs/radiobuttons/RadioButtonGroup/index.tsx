/* core */
import React from 'react';
/* third-party */
import styled from 'styled-components/macro';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
/* project component */
import { RadioGroupItem } from 'app/components/inputs/radiobuttons/RadioButtonGroup/common/RadioGroupItem';
import { BigInputLabel } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { useTranslation } from 'react-i18next';

export type ItemModel = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type RadioButtonsGroupModel = {
  title?: string;
  tip?: string;
  items: ItemModel[];
  onChange?: Function;
  groupID?: string;
  value?: string;
};

const CustomFormControl = styled((props) => <FormControl {...props} />)`
  width: 100%;
  > div {
    width: 100%;
    > label {
      width: 100%;
      font-weight: normal;
      margin-bottom: 9px;
    }
  }
`;

export const RadioButtonsGroup = (props: RadioButtonsGroupModel) => {
  const { t } = useTranslation();
  return (
    <>
      <CustomFormControl component="fieldset">
        {props.title && <BigInputLabel>{t(props.title)}</BigInputLabel>}
        <RadioGroup value={props.value} defaultValue={props.items[0].value}>
          {props.items.map((item) => (
            <RadioGroupItem
              data-cy={item.value}
              disabled={item.disabled}
              key={item.value}
              value={item.value}
              onChange={props.onChange}
              label={'Pillar 1: ' + t(item.label)}
            />
          ))}
        </RadioGroup>
      </CustomFormControl>
    </>
  );
};
