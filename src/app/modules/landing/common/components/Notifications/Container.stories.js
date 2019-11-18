import React from 'react';
import { NotificationContainer } from './';
import Providers from 'app/Providers';
import { notifMock } from './common/mock';

export default {
  component: NotificationContainer,
  title: 'NotificationContainer',
};

export const text = () => (
  <Providers>
    <NotificationContainer notificationItems={notifMock} />
  </Providers>
);
