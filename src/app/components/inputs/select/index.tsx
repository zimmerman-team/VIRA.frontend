import React from 'react';
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import MuiSelect from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { SelectItemModel } from 'app/components/inputs/select/model';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

export function Select(props: any) {
  const classes = useStyles();
  const inputLabel = React.useRef<HTMLLabelElement>(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth);
  }, []);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="select-outlined-label">
        {props.title}
      </InputLabel>
      <MuiSelect
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
      </MuiSelect>
    </FormControl>
  );
}
