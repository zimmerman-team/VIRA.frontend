// @ts-nocheck

import React from 'react';
import Providers from 'app/Providers';
import { Container, Grid } from '@material-ui/core';
import LandingLayout from 'app/modules/landing/index';
import Table from './index';
import {
  mockDataVar1,
  mockDataVar2,
  mockDataVar3,
  mockDataVar4,
  mockDataVar5,
  mockDataVar6,
  mockDataVar7,
  mockDataVar8,
  mockDataVar9,
} from './mock';
import { getBaseTableForProject } from 'app/modules/list-module/utils';
export default { title: 'Components ' };

const projectTableConfig = getBaseTableForProject();
const data = [
  [
    1123123,
    '11-6-2018',
    'Toekenning',
    'Ondersteuning kerkelijke huisvesting',
    null,
    'Christian Family International',
  ],
  [
    1123123,
    '11-6-2018',
    'Toekenning',
    'Ondersteuning kerkelijke huisvesting',
    null,
    'Christian Family International',
  ],
];
projectTableConfig.data = data;

export const LandingProjectTable = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Table {...projectTableConfig} />
      </Grid>
    </Container>
  </Providers>
);
