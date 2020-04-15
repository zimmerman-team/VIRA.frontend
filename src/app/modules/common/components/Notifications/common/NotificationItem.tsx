import 'styled-components/macro';
import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { ProjectPalette } from 'app/theme';
import { IconWarning } from 'app/modules/common/components/Notifications/common/icons/IconWarning';
import { useTranslation } from 'react-i18next';

export interface NotificationItemParams {
  notificationLabel: string;
  notificationDate: string;
  notificationType: string;
}

const BaseNotificationIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
`;

function setNotificationType(param: string) {
  switch (param) {
    case 'warning':
      return <IconWarning />;
    case 'information':
      return (
        <BaseNotificationIcon
          css={`
            background-color: #1f8efa;
          `}
        />
      );
    case 'system':
      return (
        <BaseNotificationIcon
          css={`
            background-color: #05c985;
          `}
        />
      );
  }
}

export const NotificationItem = (props: NotificationItemParams) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      css={`
        width: 272px;
        height: 52px;
        background-color: ${ProjectPalette.primary.main};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;

        &:hover {
          background-color: ${ProjectPalette.primary.dark};
        }
      `}
    >
      <div
        css={`
          width: 44px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        {setNotificationType(props.notificationType)}
      </div>
      <div
        css={`
          display: flex;
          flex-direction: column;
          align-content: flex-start;
        `}
      >
        <Typography
          color="textSecondary"
          variant="subtitle1"
          noWrap
          css={`
            && {
              width: 210px;
            }
          `}
        >
          {t(props.notificationLabel)}
        </Typography>
        <Typography variant="caption">{props.notificationDate}</Typography>
      </div>
    </div>
  );
};
