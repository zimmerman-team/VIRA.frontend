import 'styled-components/macro';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ProjectPalette } from 'app/theme';

export interface DescriptionParams {
  description: string;
}
export const Description = (props: DescriptionParams) => {
  return (
    <Typography
      css={`
        && {
          line-height: 1.71;
          letter-spacing: 0.25px;
          color: ${ProjectPalette.common.black};
        }
      `}
    >
      {props.description}
    </Typography>
  );
};
