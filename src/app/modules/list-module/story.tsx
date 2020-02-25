// @ts-nocheck

import React from 'react';
import { ListModule } from '.';
import { TabNavMock } from './mock';

export default { title: 'modules | List ' };

export const listModule = () => <ListModule tabNav={TabNavMock} />;
