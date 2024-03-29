import { DefinedRange } from 'app/components/daterange/types';

import {
  startOfWeek,
  endOfWeek,
  addWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
} from 'date-fns';

const getDefaultRanges = (date: Date): DefinedRange[] => [
  /*  {
    label: 'Today',
    startDate: date,
    endDate: date,
  },
  {
    label: 'Yesterday',
    startDate: addDays(date, -1),
    endDate: addDays(date, -1),
  },*/
  {
    label: 'This Week',
    // data-testid:'this-week'
    startDate: startOfWeek(date),
    endDate: endOfWeek(date),
  },
  {
    label: 'Last Week',
    // data-testid: 'last-week'
    startDate: startOfWeek(addWeeks(date, -1)),
    endDate: endOfWeek(addWeeks(date, -1)),
  },
  /*  {
    label: 'Last 7 Days',
    startDate: addWeeks(date, -1),
    endDate: date,
  },*/
  {
    label: 'This Month',
    startDate: startOfMonth(date),
    endDate: endOfMonth(date),
  },
  {
    label: 'Last Month',
    startDate: startOfMonth(addMonths(date, -1)),
    endDate: endOfMonth(addMonths(date, -1)),
  },
];

export const defaultRanges = getDefaultRanges(new Date());
