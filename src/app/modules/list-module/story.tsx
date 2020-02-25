// @ts-nocheck

import React from 'react';
import { ListModule } from '.';
import { TabNavMock } from './mock';

export default { title: 'List ' };

export const layout = () => <ListModule tabNav={TabNavMock} />;
