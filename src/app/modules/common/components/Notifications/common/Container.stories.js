import React from 'react';
import { NotificationItem } from 'app/modules/common/components/Notifications/common/NotificationItem';
import Providers from 'app/Providers';
import { notifMock } from 'app/modules/common/components/Notifications/common/mock';

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
