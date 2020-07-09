import 'date-fns';
import React from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// import {css} from 'styled-components/macro'

export const DataDaterangePicker = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
      `}
    >
      {/*<span>Filter by date:</span>*/}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div
          css={`
            display: flex;
            //width: 50%;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            // label="From:"
            css={`
              && {
                margin-top: 8px !important;
                margin-right: 20px;
              }
            `}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
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
            // label="To:"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
};

// export const DataDaterangePicker = () => {
//   return (
//     <div>
//       <p>This will be a daterangepicker one day</p>
//     </div>
//   );
// };
