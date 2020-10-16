import React from 'react';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {
  Row,
  Tooltip,
  TooltipContent,
  TooltipHeader,
  XsContainer,
} from 'app/components/charts/Pillars/tooltips/styles';
import CloseIcon from '@material-ui/icons/Close';

const row = css`
  display: flex;
  padding: 5px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BudgetTooltip = (props: any) => {
  const { t } = useTranslation();
  const name = props.data.name.indexOf('1') ? 'pillar1' : 'pillar2';
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
        {t(name)}
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
  const name = props.data.name.indexOf('1') ? 'pillar1' : 'pillar2';
  return (
    <XsContainer>
      <ClickAwayListener onClickAway={() => {}}>
        <Tooltip>
          <TooltipHeader>
            <div> </div>
            {t(name)}
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
