import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import { getInputGeneralStyle } from 'app/components/inputs/common/mock';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';

export interface Props extends InputBaseProps {
  id: string;
  label: string;
  value?: string;
  defaultValue?: string;
  setValue: Function;
  variant?: string;
  multiline?: boolean;
}

const Input = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
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
      <InputLabel shrink htmlFor={props.id}>
        {props.label}
      </InputLabel>
      <Input {...props} onChange={e => props.setValue(e.target.value)} />
    </FormControl>
  );
};
