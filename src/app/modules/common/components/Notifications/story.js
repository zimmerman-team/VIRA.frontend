import React from 'react';
import { NotificationContainer } from 'app/modules/common/components/Notifications/index';
import Providers from 'app/Providers';
import { notifMock } from 'app/modules/common/components/Notifications/common/mock';

export default {
  component: NotificationContainer,
  title: 'NotificationContainer',
};

export const text = () => (
  <Providers>
    <NotificationContainer notificationItems={notifMock} />
  </Providers>
);
