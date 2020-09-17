/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components/macro';
import find from 'lodash/find';
import filter from 'lodash/filter';
import { ProjectPalette } from 'app/theme';
import { Box, InputBase } from '@material-ui/core';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { getInputGeneralStyle } from 'app/components/inputs/common/mock';
import { ExpandMore, Close } from '@material-ui/icons';
import {
  Theme,
  withStyles,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import { LabelValueModel } from 'app/modules/report/model';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';

export interface AutocompleteParams {
  description?: string;
  value: LabelValueModel | string[];
  setValue: Function;
  text?: string;
  values: any[];
  multiple?: boolean;
  testAttr?: string;
}

const Input = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
        color: ProjectPalette.text.primary,
      },
      backgroundColor: '#f0f3f7',
    },
    input: getInputGeneralStyle(theme),
    inputMultiline: {
      minHeight: '160px',
      lineHeight: '2rem',
      paddingBottom: '30px',
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: '100%',
    },
    listbox: {
      width: '100%',
      margin: 0,
      padding: 0,
      zIndex: 1,
      position: 'absolute',
      listStyle: 'none',
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
      maxHeight: 300,
      borderRadius: 2,
      boxShadow:
        '0 4px 14px -2px rgba(130, 136, 148, 0.28), 0 0 2px 0 rgba(130, 136, 148, 0.22)',
      '& li[data-focus="true"]': {
        cursor: 'pointer',
        color: ProjectPalette.common.white,
        backgroundColor: ProjectPalette.primary.main,
      },
      '& li:active': {
        color: ProjectPalette.common.white,
        backgroundColor: ProjectPalette.primary.main,
      },
    },
    listitem: {
      padding: 6,
      fontSize: 14,
      fontWeight: 'normal',
    },
  })
);

const Tag = styled(({ label, onDelete, ...props }) => (
  <div {...props}>
    <span>{label}</span>
    <Close onClick={onDelete} />
  </div>
))`
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`;

export const Autocomplete = (props: AutocompleteParams) => {
  const classes = useStyles();
  const {
    getRootProps,
    getTagProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    value: props.value,
    id: 'autocomplete-countries',
    multiple: props.multiple,
    options: props.values,
    disableCloseOnSelect: props.multiple,
    getOptionLabel: (option) => option.label,
  });

  return (
    <div
      {...getRootProps()}
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

      {props.multiple &&
        (props.value as string[]).map((option: string, index: number) => (
          <Tag
            label={option}
            {...getTagProps({ index })}
            onDelete={() =>
              props.setValue(filter(props.value, (v: string) => v !== option))
            }
          />
        ))}

      <Input
        fullWidth
        {...getInputProps()}
        placeholder="Type"
        endAdornment={
          <ExpandMore
            css={`
              margin-right: 10px;
            `}
          />
        }
      />
      {groupedOptions.length > 0 ? (
        <ul
          className={classes.listbox}
          {...getListboxProps()}
          css={`
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
          `}
        >
          {groupedOptions.map((option, index) => {
            const optionProps: any = getOptionProps({ option, index });
            const onClick = (e: any, o: any) => {
              let value = props.multiple ? props.value : o;
              if (props.multiple) {
                if (!find(value, (v: string) => v === o.label)) {
                  value = [...value, o.label];
                } else {
                  value = filter(value, (v: string) => v !== o.label);
                }
              }
              props.setValue(value);
              optionProps.onClick(e);
            };
            return (
              <li
                key={'funder-item-' + index}
                data-cy={'funder-item-' + index}
                {...optionProps}
                className={classes.listitem}
                onClick={(e: any) => onClick(e, option)}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
