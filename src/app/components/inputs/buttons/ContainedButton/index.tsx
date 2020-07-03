// @ts-nocheck
import React from 'react';
import { css } from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import { ProjectPalette } from 'app/theme';

interface Props {
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: any;
  testAttr?: string;
}

const BaseContainedButtonStyle = css`
  padding: 12px 15px !important;
  box-shadow: none !important;
  border-radius: 2px !important;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: ${ProjectPalette.secondary.light} !important;
  }

  svg {
    margin-right: 5px;
  }

  & [class*='MuiButton-label'] {
    min-width: 102px;
    text-transform: none;
  }
`;

export const ContainedButton = (props: Props) => {
  const { text, disabled, ...other } = props;

  return (
    <Button
      data-cy={props.testAttr ? props.testAttr : 'contained-button'}
      css={BaseContainedButtonStyle}
      variant="contained"
      color="secondary"
      disabled={disabled}
      disableRipple
      {...other}
    >
      <>
        {props.icon && props.icon}
        {text}
      </>
    </Button>
  );
};
