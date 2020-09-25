import React from 'react';
import { ProjectPalette } from 'app/theme';
import styled, { css } from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';

type Props = {
  size?: string;
  label?: string;
  tip?: string;
  adjust?: boolean;
};

const BaseButton = styled((props) => <Button {...props} />)`
  && {
    margin-left: 9px;
    background-color: ${ProjectPalette.primary.main};
    border-radius: 50%;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    min-width: initial;
    min-height: initial;
    box-shadow: initial;
    & [class*='MuiButton-label'] {
      font-size: 9px;
      text-transform: initial;
      line-height: 1;
    }
    &:hover {
      background-color: ${ProjectPalette.primary.main};
    }
  }
`;

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    padding: 10,
    fontSize: 12,
    boxShadow: theme.shadows[1],
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: theme.palette.common.white,
  },
}))(Tooltip);

const AdjustedStyling = css`
  display: flex;
  position: relative;
  justify-content: flex-end;
  margin-right: 21px;
  top: 10px;
`;

/* span is here for a reason https://github.com/atomiks/tippy.js-react */
export const TooltipButton = (props: Props) => {
  return (
    <LightTooltip
      title={
        <span style={{ whiteSpace: 'pre-wrap' }}>
          {props.tip ? props.tip : 'empty tooltip'}
        </span>
      }
      placement="top-end"
    >
      <span css={props.adjust ? AdjustedStyling : ''}>
        <BaseButton
          {...props}
          size={props.size}
          variant="contained"
          color="primary"
        >
          i
        </BaseButton>
      </span>
    </LightTooltip>
  );
};
