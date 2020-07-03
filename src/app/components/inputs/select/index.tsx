// @ts-nocheck
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';
import { SelectItemModel } from 'app/components/inputs/select/model';
import React from 'react';
import InputBase from '@material-ui/core/InputBase';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { css } from 'styled-components/macro';

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    icon: {
      outline: '1px solid red',
    },
    iconFilled: {
      outline: '1px solid red',
      color: 'green',
    },
    input: {
      borderRadius: 2,
      position: 'relative',
      backgroundColor: '#F0F3F7',
      width: '338px',
      //
      // fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),

      '&:focus': {
        borderRadius: 2,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150,
    },
  })
);

export function TeamSelect(props: any) {
  const classes = useStyles();
  // const inputLabel = React.useRef<HTMLLabelElement>(null);
  // const [labelWidth, setLabelWidth] = React.useState(150);
  /*  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);*/

  // @ts-ignore
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      {/*<InputLabel
        ref={inputLabel}
        id="select-outlined-label"
        css={`
          outline: 1px solid red;
        `}
      >
        {props.title}
      </InputLabel>*/}
      <div
        css={`
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          margin-bottom: 15px;
        `}
      >
        Select team
      </div>
      <Select
        id="select-outlined"
        // labelWidth={labelWidth}
        input={<BootstrapInput />}
        onChange={props.onChange}
        value={props.selectedItem}
        labelId="select-outlined-label"
        variant="filled"
        IconComponent={ExpandMoreIcon}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {props.items.map((item: SelectItemModel) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
