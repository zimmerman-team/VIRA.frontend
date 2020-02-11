import { Typography } from '@material-ui/core';
import React from 'react';
import 'styled-components/macro';

export interface FieldDescriptionParams {
  text: string;
}
export const FieldDescription = (props: FieldDescriptionParams) => (
  <Typography
    variant="subtitle2"
    color="textPrimary"
    css={`
      line-height: 1.3 !important;
    `}
  >
    {props.text}
  </Typography>
);
