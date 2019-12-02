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

const BaseOutlinedButton = styled(props => <Button {...props} />)`
  && {
    box-shadow: none;
    color: ${ProjectPalette.common.white};
    background-color: ${ProjectPalette.primary.main};
    border: 1px solid ${ProjectPalette.common.white};
  }

  & [class*='MuiButton-label'] {
    color: rgba(255, 255, 255, 0.6);
    min-width: 102px;
    text-transform: none;
    line-height: 1;
  }

  svg {
    margin-right: 5px;
  }
`;

export const OutlinedButton = (props: Props) => {
  const { text, disabled, ...other } = props;

  return (
    <BaseOutlinedButton
      variant="outlined"
      color="primary"
      disabled={disabled}
      disableRipple
      {...other}
    >
      <>
        {props.icon && props.icon}
        {text}
      </>
    </BaseOutlinedButton>
  );
};
