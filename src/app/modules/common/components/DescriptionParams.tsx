import 'styled-components/macro';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ProjectPalette } from 'app/theme';
import { useTranslation } from 'react-i18next';

export interface DescriptionParams {
  project_description: string;
}
export const Description = (props: DescriptionParams) => {
  const { t, i18n } = useTranslation();
  return (
    <Typography
      css={`
        && {
          line-height: 1.71;
          letter-spacing: 0.25px;
          font-weight: 400;
          color: ${ProjectPalette.common.black};
        }
      `}
    >
      {t(props.project_description)}
    </Typography>
  );
};
