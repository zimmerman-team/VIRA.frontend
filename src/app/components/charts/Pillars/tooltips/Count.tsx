import React from 'react';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

const row = css`
  display: flex;
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CountTooltip = (props: any) => {
  console.log(props);
  const { t } = useTranslation();
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
      <div css={row}>
        <div>One Year Projects count</div>
        <div>{props.data['Budget One Year']}</div>
      </div>
      <div css={row}>
        <div>Multi Year Projects count</div>
        <div>{props.data['Budget Multi Year']}</div>
      </div>
    </div>
  );
};
