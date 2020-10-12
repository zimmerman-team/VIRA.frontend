import React from 'react';
import { theme } from 'app/theme';
import { Popup } from 'react-map-gl';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import {
  ProgressBar,
  ProgressBarContainer,
} from 'app/components/charts/BarCharts/common/ChartTooltip';

type PopupProps = {
  name: string;
  value: number;
  target: number;
  reached: number;
  project?: string;
  latitude: number;
  longitude: number;
  contribution: number;
  organisation?: string;
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

  const percentage = (props.reached * 100) / props.target;

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
        {props.project && (
          <div css={row}>
            <div>{t('Project title')}</div>
            <div
              css={`
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: calc(370px - 100px);
              `}
            >
              {props.project}
            </div>
          </div>
        )}
        {props.organisation && (
          <div css={row}>
            <div>{t('Organisation')}</div>
            <div>{props.organisation}</div>
          </div>
        )}
        <div css={row}>
          <div>{t('Budget')}</div>
          <div>€{props.value}</div>
        </div>
        <div css={row}>
          <div>{t('Contribution')}</div>
          <div>€{props.contribution}</div>
        </div>
        <div css={row}>
          <div>{t('People Reached')}</div>
          <div>{props.reached}</div>
        </div>
        <ProgressBarContainer>
          <ProgressBar
            css={`
              width: ${percentage > 100 ? 100 : percentage}%;
            `}
          />
        </ProgressBarContainer>
      </div>
    </Popup>
  );
};
