import React from 'react';
import {
  Grid,
  createStyles,
  WithStyles,
  Theme,
  withStyles,
} from '@material-ui/core';
import { differenceInCalendarMonths } from 'date-fns';

import Month from 'app/components/daterange/components/Month';
import DefinedRanges from 'app/components/daterange/components/DefinedRanges';
import {
  DateRange,
  DefinedRange,
  Setter,
  NavigationAction,
} from 'app/components/daterange/types';
import { MARKERS } from 'app/components/daterange';

const styles = (theme: Theme) =>
  createStyles({
    header: {
      padding: '20px 70px',
    },
    headerItem: {
      flex: 1,
      textAlign: 'center',
    },
    divider: {
      borderLeft: `1px solid ${theme.palette.action.hover}`,
      marginBottom: 20,
    },
  });

interface MenuProps extends WithStyles<typeof styles> {
  dateRange: DateRange;
  ranges: DefinedRange[];
  minDate: Date;
  maxDate: Date;
  firstMonth: Date;
  secondMonth: Date;
  setFirstMonth: Setter<Date>;
  setSecondMonth: Setter<Date>;
  setDateRange: Setter<DateRange>;
  helpers: {
    inHoverRange: (day: Date) => boolean;
  };
  handlers: {
    onDayClick: (day: Date) => void;
    onDayHover: (day: Date) => void;
    onMonthNavigate: (marker: symbol, action: NavigationAction) => void;
  };
}

const Menu = (props: MenuProps) => {
  const {
    classes,
    ranges,
    dateRange,
    minDate,
    maxDate,
    firstMonth,
    setFirstMonth,
    secondMonth,
    setSecondMonth,
    setDateRange,
    helpers,
    handlers,
  } = props;
  const { startDate, endDate } = dateRange;
  const canNavigateCloser =
    differenceInCalendarMonths(secondMonth, firstMonth) >= 2;
  const commonProps = { dateRange, minDate, maxDate, helpers, handlers };

  return (
    <Grid container direction="row" wrap="nowrap">
      <Grid item lg={10}>
        {/*<Grid container className={classes.header} alignItems="center">
          <Grid item className={classes.headerItem}>
            <Typography variant="subtitle1">
              {startDate ? format(startDate, 'MMMM DD, YYYY') : 'Start Date'}
            </Typography>
          </Grid>
          <Grid item className={classes.headerItem}>
            <ArrowRightAlt color="action" />
          </Grid>
          <Grid item className={classes.headerItem}>
            <Typography variant="subtitle1">
              {endDate ? format(endDate, 'MMMM DD, YYYY') : 'End Date'}
            </Typography>
          </Grid>
        </Grid>

        <Divider />*/}

        <Grid container direction="row" justify="center" wrap="nowrap">
          <Month
            {...commonProps}
            value={firstMonth}
            setValue={setFirstMonth}
            navState={[true, canNavigateCloser]}
            marker={MARKERS.FIRST_MONTH}
          />
          <div className={classes.divider} />
          <Month
            {...commonProps}
            value={secondMonth}
            setValue={setSecondMonth}
            navState={[canNavigateCloser, true]}
            marker={MARKERS.SECOND_MONTH}
          />
        </Grid>
      </Grid>

      <div className={classes.divider} />

      <Grid item lg={2}>
        <DefinedRanges
          selectedRange={dateRange}
          ranges={ranges}
          setRange={setDateRange}
        />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Menu);
