import React from 'react';
import { theme } from 'app/theme';
import { Popup } from 'react-map-gl';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

type PopupProps = {
  name: string;
  value: number;
  latitude: number;
  longitude: number;
};

const row = css`
  display: flex;
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MapPopup = (props: PopupProps) => {
  const { t } = useTranslation();

  return (
    <Popup
      tipSize={0}
      dynamicPosition
      offsetTop={-10}
      closeButton={false}
      latitude={props.latitude}
      longitude={props.longitude}
    >
      <div
        css={`
          color: #fff;
          padding: 6px;
          width: 382px;
          display: flex;
          flex-direction: column;
          background: ${theme.palette.primary.main};
        `}
      >
        <div
          css={`
            ${row}
            font-size: 16px;
            font-weight: 600;
          `}
        >
          {t(props.name)}
        </div>
        <hr
          css={`
            width: 100%;
            border-radius: 2px;
            border-color: rgba(255, 255, 255, 0.16);
          `}
        />
        <div css={row}>
          <div>{t('Budget')}</div>
          <div>€{props.value}</div>
        </div>
      </div>
    </Popup>
  );
};
