/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SelectItemModel } from 'app/components/inputs/select/model';
import React from 'react';
import { css } from 'styled-components/macro';

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
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(150);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel
        ref={inputLabel}
        id="select-outlined-label"
        css={`
          outline: 1px solid red;
        `}
      >
        {props.title}
      </InputLabel>
      <Select
        id="select-outlined"
        labelWidth={labelWidth}
        onChange={props.onChange}
        value={props.selectedItem}
        labelId="select-outlined-label"
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
