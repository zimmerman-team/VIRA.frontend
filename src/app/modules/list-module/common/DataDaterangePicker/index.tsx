import 'date-fns';
import React from 'react';

import MomentUtils from '@date-io/moment';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface DataDaterangePickerProps {
  startDate?: MaterialUiPickersDate | null;
  endDate?: MaterialUiPickersDate | null;
  onStartDateSelect: (
    date: MaterialUiPickersDate,
    value?: string | null | undefined
  ) => void;
  onEndDateSelect: (
    date: MaterialUiPickersDate,
    value?: string | null | undefined
  ) => void;
}
export const DataDaterangePicker = (props: DataDaterangePickerProps) => {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
      `}
    >
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <div
          css={`
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <KeyboardDatePicker
            format="DD/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            css={`
              && {
                margin-top: 8px !important;
                margin-right: 20px;
              }
            `}
            value={props.startDate}
            onChange={props.onStartDateSelect}
            KeyboardButtonProps={{
              'aria-label': 'change start date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            css={`
              && {
                margin-top: 8px !important;
              }
            `}
            id="date-picker-dialog"
            format="DD/MM/yyyy"
            value={props.endDate}
            onChange={props.onEndDateSelect}
            KeyboardButtonProps={{
              'aria-label': 'change end date',
            }}
          />
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
};
