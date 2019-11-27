import React from 'react';
import { NotificationItem, NotificationItemParams } from './NotificationItem';
import Providers from 'app/Providers';
import { notifMock } from './mock';

export default {
  component: NotificationItem,
  title: 'NotificationItem',
};

export const text = () => (
  <Providers>
    {notifMock.map(notificationItem => (
      <NotificationItem notificationItem />
    ))}
  </Providers>
);
