import 'styled-components/macro';

import React from 'react';
import {
  NotificationItem,
  NotificationItemParams,
} from './common/NotificationItem';

interface NotificationContainerParams {
  notificationItems: NotificationItemParams[];
}

export const NotificationContainer = (props: NotificationContainerParams) => {
  return (
    <div>
      {props.notificationItems.map(item => (
        <NotificationItem
          notificationLabel={item.notificationLabel}
          notificationDate={item.notificationDate}
          notificationType={item.notificationType}
        />
      ))}
    </div>
  );
};
