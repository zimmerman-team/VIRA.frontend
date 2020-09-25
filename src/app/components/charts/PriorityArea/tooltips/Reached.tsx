import React from 'react';
import { css } from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import {
  ProgressBar,
  ProgressBarContainer,
} from 'app/components/charts/BarCharts/common/ChartTooltip';
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

export const ReachedTooltip = (props: any) => {
  const { t } = useTranslation();
  const percentage =
    (props.data['People Reached'] * 100) /
    (props.data['People Reached'] + props.data['People Targeted']);
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
      <div css="padding: 5px 0;">
        <div css={row}>
          <div>{t('People Reached')}</div>
          <div>{props.data['People Reached']}</div>
        </div>
        <ProgressBarContainer>
          <ProgressBar
            css={`
              width: ${percentage > 100 ? 100 : percentage}%;
            `}
          />
        </ProgressBarContainer>
      </div>
    </div>
  );
};

export const ReachedTooltipMobile = (props: any) => {
  const { t } = useTranslation();

  const percentage =
    (props.data['People Reached'] * 100) /
    (props.data['People Reached'] + props.data['People Targeted']);

  return (
    <XsContainer>
      <ClickAwayListener onClickAway={() => {}}>
        <Tooltip>
          <TooltipHeader>
            <div> </div>
            {t(props.data.name)}
          </TooltipHeader>
          <line></line>
          <TooltipContent>
            <Row>
              <div>{t('People Reached')}</div>
              <div>{props.data['People Reached']}</div>
            </Row>
            <ProgressBarContainer>
              <ProgressBar
                css={`
                  width: ${percentage > 100 ? 100 : percentage}%;
                `}
              />
            </ProgressBarContainer>
          </TooltipContent>
        </Tooltip>
      </ClickAwayListener>
    </XsContainer>
  );
};
