import React from 'react';
import filter from 'lodash/filter';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import {
  ProgressBar,
  ProgressBarContainer,
} from 'app/components/charts/BarCharts/common/ChartTooltip';

const row = css`
  display: flex;
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TargetGroupTooltip = (props: any) => {
  const { t } = useTranslation();
  console.log(props);
  const itemKeys = filter(
    Object.keys(props.data),
    (key: string) =>
      key.indexOf('Color') === -1 && key !== 'name' && props.data[key] > 0
  );
  let total = 0;
  itemKeys.forEach(function (key: string) {
    total += props.data[key];
  });
  return (
    <div
      css={`
        width: 100%;
        padding: 6px;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={`
          ${row}
          font-size: 16px;
          font-weight: 600;
        `}
      >
        {t(props.data.name)}
      </div>
      <hr
        css={`
          width: 100%;
          border-radius: 2px;
          border-color: rgba(255, 255, 255, 0.16);
        `}
      />
      {itemKeys.map((key: string) => {
        const percentage = (props.data[key] * 100) / total;
        return (
          <div key={key} css="padding: 5px 0;">
            <div css={row}>
              <div>{key}</div>
              <div>{props.data[key]}</div>
            </div>
            <ProgressBarContainer>
              <ProgressBar
                css={`
                  width: ${percentage > 100 ? 100 : percentage}%;
                `}
              />
            </ProgressBarContainer>
          </div>
        );
      })}
    </div>
  );
};
