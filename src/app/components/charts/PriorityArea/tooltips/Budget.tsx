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

const row = css`
  display: flex;
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BudgetTooltip = (props: any) => {
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
        <div>{t('Contribution')}</div>
        <div>
          {props.data['Insinger Contribution']
            .toLocaleString(undefined, {
              currency: 'EUR',
              currencyDisplay: 'symbol',
              style: 'currency',
            })
            .replace('.00', '')}
        </div>
      </div>
    </div>
  );
};

export const BudgetTooltipMobile = (props: any) => {
  const { t } = useTranslation();
  return (
    <XsContainer>
      <ClickAwayListener onClickAway={() => {}}>
        <Tooltip>
          <TooltipHeader>
            <div> </div>
            {t(props.data.name)}
          </TooltipHeader>
          <line />
          <TooltipContent>
            <Row>
              <div>{t('Contribution')}</div>
              <div>
                {props.data['Insinger Contribution']
                  .toLocaleString(undefined, {
                    currency: 'EUR',
                    currencyDisplay: 'symbol',
                    style: 'currency',
                  })
                  .replace('.00', '')}
              </div>
            </Row>
          </TooltipContent>
        </Tooltip>
      </ClickAwayListener>
    </XsContainer>
  );
};
