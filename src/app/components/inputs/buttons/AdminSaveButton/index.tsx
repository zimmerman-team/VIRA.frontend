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
  testattr?: string;
}

const BaseContainedButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none !important;

  width: 100%;
  height: 50px;
  border-radius: 2px;
  background-color: #25baa4;

  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    background-color: ${ProjectPalette.secondary.light} !important;
  }

  svg {
    width: 1.1em !important;
    height: 1.1em !important;
    margin-right: 24px;
  }

  & [class*='MuiButton-label'] {
    min-width: 102px;
    text-transform: none;
  }
`;

export const AdminSaveButton = (props: Props) => {
  const { text, disabled, ...other } = props;

  return (
    <Button
      data-cy={props.testattr ? props.testattr : 'contained-button'}
      css={BaseContainedButtonStyle}
      variant="contained"
      color="secondary"
      disabled={disabled}
      disableRipple
      {...other}
    >
      <div>{text}</div>
    </Button>
  );
};
