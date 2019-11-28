// @ts-nocheck
import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { ProjectPalette } from 'app/theme';

type Props = {
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: any;
};

const BaseContainedButton = styled(props => <Button {...props} />)`
  padding: 12px 15px !important;
  box-shadow: none !important;
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
    <BaseContainedButton
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
    </BaseContainedButton>
  );
};
