/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { Box, InputBase } from '@material-ui/core';
import useAutocomplete from '@material-ui/lab/useAutocomplete';
import { getInputGeneralStyle } from 'app/components/inputs/common/mock';
import { ExpandMore } from '@material-ui/icons';
import {
  Theme,
  withStyles,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';

export interface AutocompleteParams {
  description?: string;
  value: { label: string; value: string };
  setValue: Function;
  text?: string;
  values: any[];
}

const Input = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
        color: ProjectPalette.text.primary,
      },
    },
    input: getInputGeneralStyle(theme),
    inputMultiline: {
      minHeight: '160px',
      lineHeight: '2rem',
      paddingBottom: '30px',
    },
    inputLabel: {
      root: {},
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
      position: 'relative',
      listStyle: 'none',
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
      maxHeight: 300,
      border: '1px solid rgba(0,0,0,.25)',
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
      padding: 5,
    },
  })
);

export const Autocomplete = (props: AutocompleteParams) => {
  const classes = useStyles();
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    value: props.value,
    id: 'autocomplete-countries',
    options: props.values,
    getOptionLabel: option => option.label,
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

      <Input
        fullWidth
        {...getInputProps()}
        placeholder="Type"
        endAdornment={<ExpandMore />}
      />
      {groupedOptions.length > 0 ? (
        <ul className={classes.listbox} {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const optionProps: any = getOptionProps({ option, index });
            const onClick = (e: any) => {
              props.setValue(option);
              optionProps.onClick(e);
            };
            return (
              <li
                {...optionProps}
                onClick={onClick}
                className={classes.listitem}
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
