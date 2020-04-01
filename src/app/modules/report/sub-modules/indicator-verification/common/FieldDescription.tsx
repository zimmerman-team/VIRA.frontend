import { Typography } from '@material-ui/core';
import React from 'react';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';

export interface FieldDescriptionParams {
  text: string;
}
export const FieldDescription = (props: FieldDescriptionParams) => {
  const { t, i18n } = useTranslation();

  return (
    <Typography
      variant="subtitle2"
      color="textPrimary"
      css={`
        line-height: 1.3 !important;
        font-size: 17.5px !important;
      `}
    >
      {t(props.text)}
    </Typography>
  );
};
