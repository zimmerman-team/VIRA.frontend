/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck

import React from 'react';
import { SubmittedLayout } from './index';

export default { title: 'modules | Report ' };

export const submitReport = () => <SubmittedLayout />;

const test = {
  report: {
    id: '5e4285c69e26862e13f18562',
    title: 'lorem ipsum dolor simet ',
    date: '11.2.2020',
    location: {
      _id: '5e4285c69e26862e13f18561',
      long: 17.186065927856664,
      lat: 14.154334455925895,
      __v: 0,
    },
    country: 'Chad',
    total_target_beneficiaries: 2,
    place: 'Chad',
    target_beneficiaries: [
      {
        value: 2,
        _id: '5e4285c69e26862e13f1855c',
        name: 'Children/Young people',
        __v: 0,
      },
      {
        value: 0,
        _id: '5e4285c69e26862e13f1855d',
        name: 'Elderly',
        __v: 0,
      },
      {
        value: 0,
        _id: '5e4285c69e26862e13f1855e',
        name: 'Women',
        __v: 0,
      },
      {
        value: 0,
        _id: '5e4285c69e26862e13f1855f',
        name: 'Refugees',
        __v: 0,
      },
      {
        value: 0,
        _id: '5e4285c69e26862e13f18560',
        name: 'Low income individuals',
        __v: 0,
      },
    ],
    project: {
      name: 'Herinrichting kind en gezinkamers',
      id: '2017168',
    },
    key_outcomes: 'Lorem ipsum dolor simet',
    monitor_report_outcomes: 'Lorem ipsum dolor simet',
    media: '[]',
    policy_priority: {
      _id: '5e4285c69e26862e13f1855b',
      name: 'The Elderly',
      __v: 0,
    },
    key_implementation_challenges: 'Lorem ipsum dolor simet',
    other_project_outcomes: 'Lorem ipsum dolor simet',
    plans: 'Lorem ipsum dolor simet',
    other_comments: 'Lorem ipsum dolor simet',
    reportID: 1002,
    barChartData: '[{…}]',
  },
  barChartLegends: [
    {
      label: 'Target',
      selected: true,
    },
    {
      label: 'Budget',
      selected: true,
    },
  ],
  onBarChartLegendClick: 'onBarChartLegendClick',
};
