import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import FormControl from '@material-ui/core/FormControl';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import { getInputGeneralStyle } from 'app/components/inputs/common/mock';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';

export interface Props extends InputBaseProps {
  id: string;
  label: string;
  value: string;
  showPass: boolean;
  setValue: Function;
  setShowPass: Function;
}

export const Input = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: getInputGeneralStyle(theme),
  })
)(InputBase);

export const PasswordTextField = (props: Props) => {
  const { value, showPass, setShowPass, setValue, ...otherProps } = props;
  return (
    <FormControl fullWidth={props.fullWidth}>
      <InputLabel shrink htmlFor={props.id}>
        {props.label}
      </InputLabel>
      <Input
        {...otherProps}
        type={props.showPass ? 'text' : 'password'}
        value={value}
        onChange={e => setValue(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              disabled={value === ''}
              onClick={e => setShowPass(!showPass)}
              aria-label="Toggle password visibility"
            >
              {showPass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
