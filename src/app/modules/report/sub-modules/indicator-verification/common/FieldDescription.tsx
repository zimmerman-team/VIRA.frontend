import { Typography } from '@material-ui/core';
import React from 'react';

export interface FieldDescriptionParams {
  text: string;
}
export const FieldDescription = (props: FieldDescriptionParams) => (
  <Typography variant="subtitle2" color="textPrimary">
    {props.text}
  </Typography>
);
