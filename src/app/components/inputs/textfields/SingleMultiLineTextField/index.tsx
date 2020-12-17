// @ts-nocheck
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import { getInputGeneralStyle } from 'app/components/inputs/common/mock';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import { ProjectPalette } from 'app/theme';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export interface MultilineTextfieldParams extends InputBaseProps {
  id?: string;
  label?: string;
  bigLabel?: boolean;
  value?: string | number;
  defaultValue?: string;
  setValue?: Function;
  variant?: string;
  multiline?: boolean;
  placeholder?: string;
  type?: string;
  min?: number;
  testattr?: string;
  autoComplete?: string;
}

export const Input = withStyles((theme: Theme) =>
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

    //  TODO: change backgroundcolor when type=password
  })
)(InputBase);

// Typography not in sync with our theme file, therefore overriding it here.
export const BigInputLabel = styled(props => <Typography {...props} />)`
  && {
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 14px;
    color: ${ProjectPalette.text.primary};
  }
`;

// Doing this because we have two label versions for a input in the design.
function renderLabel(props) {
  if (!props.label) {
    return null;
  }

  if (props.bigLabel) {
    return <BigInputLabel variant="subtitle1">{props.label}</BigInputLabel>;
  }
  return (
    <InputLabel
      shrink
      htmlFor={props.id}
      css={`
        font-size: 14px;
      `}
    >
      {props.label}
    </InputLabel>
  );
}

export const SingleMultiLineTextField = (props: MultilineTextfieldParams) => {
  const { setValue, min, ...inputProps } = props;

  return (
    <FormControl fullWidth={props.fullWidth}>
      {renderLabel(props)}
      <Input
        data-cy={props.testattr}
        {...inputProps}
        inputProps={{ min }}
        placeholder={props.placeholder}
        onChange={e =>
          setValue(
            props.type === 'number'
              ? parseInt(e.target.value, 10)
              : e.target.value
          )
        }
      />
    </FormControl>
  );
};
