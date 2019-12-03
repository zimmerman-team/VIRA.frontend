// @ts-nocheck
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import { getInputGeneralStyle } from 'app/components/inputs/common/mock';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { ProjectPalette } from 'app/theme';

export interface Props extends InputBaseProps {
  id: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  setValue?: Function;
  variant?: string;
  multiline?: boolean;
  placeholder?: string;
}

const Label = styled(props => <InputLabel {...props} />)`
  & {
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: 0.25px;
    color: ${ProjectPalette.text.primary};
    transform: translate(0, 1.5px) scale(1);
  }
`;

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
  })
)(InputBase);

export const SingleMultiLineTextField = (props: Props) => {
  return (
    <FormControl fullWidth={props.fullWidth}>
      {props.label && (
        <Label shrink htmlFor={props.id}>
          {props.label}
        </Label>
      )}
      <Input
        {...props}
        placeholder={props.placeholder}
        onChange={e => props.setValue(e.target.value)}
      />
    </FormControl>
  );
};
