import React from 'react';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import {
  Row,
  Tooltip,
  TooltipContent,
  TooltipHeader,
  XsContainer,
} from 'app/components/charts/Pillars/tooltips/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CloseIcon from '@material-ui/icons/Close';

const row = css`
  display: flex;
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CountTooltip = (props: any) => {
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
        <div>{t('One Year Projects count')}</div>
        <div>{props.data['Budget One Year']}</div>
      </div>
      <div css={row}>
        <div>{t('Multi Year Projects count')}</div>
        <div>{props.data['Budget Multi Year']}</div>
      </div>
    </div>
  );
};

export const CountTooltipMobile = (props: any) => {
  const { t } = useTranslation();
  return (
    <XsContainer>
      <ClickAwayListener onClickAway={() => {}}>
        <Tooltip>
          <TooltipHeader>
            <div> </div>
            {t(props.data.name)}
          </TooltipHeader>
          <TooltipContent>
            <Row>
              <div>{t('One Year Projects count')}</div>
              <div>{props.data['Budget One Year']}</div>
            </Row>
            <Row>
              <div>{t('Multi Year Projects count')}</div>
              <div>{props.data['Budget Multi Year']}</div>
            </Row>
          </TooltipContent>
        </Tooltip>
      </ClickAwayListener>
    </XsContainer>
  );
};
