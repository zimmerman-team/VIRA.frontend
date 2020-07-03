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
  projectsTableConfig,
  addTeamMemberTableConfig,
} from './mock';
import { getBaseTableForGrantee } from 'app/modules/list-module/utils/getBaseTableForGrantee';
import { getBaseTableForProject } from 'app/modules/list-module/utils/getBaseTableForProject';
export default { title: 'Components ' };

const projectTableConfig = getBaseTableForProject();
const projectData = [
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
projectTableConfig.data = projectData;

export const LandingProjectTable = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item>
          <Table {...projectTableConfig} />
        </Grid>
      </Grid>
    </Container>
  </Providers>
);

const granteeTableConfig = getBaseTableForGrantee();
const granteeData = [
  [
    'Alpha Nederland',
    'Stichting',
    'Driebergen-Rijsenburg',
    'Nederland',
    'info@alphanederland.org',
    'www.alphanederland.org',
  ],
  [
    'Alpha Nederland',
    'Stichting',
    'Driebergen-Rijsenburg',
    'Nederland',
    'info@alphanederland.org',
    'www.alphanederland.org',
  ],
];
granteeTableConfig.data = granteeData;

export const GranteeProjectTable = () => (
  <Providers>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item>
          <Table {...granteeTableConfig} />
        </Grid>
      </Grid>
    </Container>
  </Providers>
);
