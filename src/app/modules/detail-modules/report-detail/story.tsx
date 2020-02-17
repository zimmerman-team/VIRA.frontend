// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { ReportDetailModule } from './index';
import { Container, Grid } from '@material-ui/core';

const mock = {
  report: {
    id: '5e41867b9e26862e13f1855a',
    title: 'erer',
    date: '10.2.2020',
    location: {
      _id: '5e41867b9e26862e13f18559',
      long: 22.143042032695075,
      lat: 7.9893521640525975,
      __v: 0,
    },
    country: 'Central African Republic',
    total_target_beneficiaries: 1,
    place: 'Central African Republic',
    target_beneficiaries: [
      {
        value: 1,
        _id: '5e41867b9e26862e13f18554',
        name: 'Children/Young people',
        __v: 0,
      },
      {
        value: 0,
        _id: '5e41867b9e26862e13f18555',
        name: 'Elderly',
        __v: 0,
      },
      {
        value: 0,
        _id: '5e41867b9e26862e13f18556',
        name: 'Women',
        __v: 0,
      },
      {
        value: 0,
        _id: '5e41867b9e26862e13f18557',
        name: 'Refugees',
        __v: 0,
      },
      {
        value: 0,
        _id: '5e41867b9e26862e13f18558',
        name: 'Low income individuals',
        __v: 0,
      },
    ],
    project: {
      name: 'Herinrichting kind en gezinkamers',
      id: '2017168',
    },
    key_outcomes: 'ererer',
    monitor_report_outcomes: 'ererer',
    media: '[]',
    policy_priority: {
      _id: '5e4156a9f7c27f21f4a46980',
      name: 'Drug use',
      __v: 0,
    },
    key_implementation_challenges: 'rtrt',
    other_project_outcomes: 'rtrt',
    plans: 'trt',
    other_comments: 'sdsdsd',
    reportID: 1001,
    barChartData: [
      {
        name: 'Drug use',
        value1: 1,
        value2: 0,
        value3: 2333,
        value1Color: '#242e42',
        value2Color: '#05c985',
        tooltip: {
          title: 'Drug use',
          items: [
            {
              label: 'Target (100.00%)',
              value: 1,
              percentage: '100.00',
            },
            {
              label: 'Budget',
              value: '€2,333.00',
            },
          ],
        },
      },
    ],
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

export default { title: 'Report ' };

export const reportDetail = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <ReportDetailModule {...mock} />
      </Grid>
    </Container>
  </Providers>
);
