import React from 'react';
import { css } from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Box } from '@material-ui/core';
import { ProjectPalette } from 'app/theme';
import {
  SingleLineGridList,
  SingleLineGridListProps,
} from 'app/components/layout/GridList/singleLineGridList';
import { useTranslation } from 'react-i18next';

export interface OutcomeCardParams {
  title: string;
  description?: string;
  media?: SingleLineGridListProps;
}
const styles: any = {
  cardHeader: css`
    span {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.5;
      color: ${ProjectPalette.text.primary};
    }
  `,
  contentTypography: css`
    span {
      font-size: 14px;
      line-height: 1.71;
      letter-spacing: 0.25px;
      color: ${ProjectPalette.common.black};
    }
  `,
  card: css`
    && {
      box-shadow: none;
    }
  `,
};

export const OutcomeCard = (props: OutcomeCardParams) => {
  const { t, i18n } = useTranslation();
  return (
    <Grid item lg={12}>
      <Card css={props.media ? styles.card : null}>
        <CardHeader title={props.title} css={styles.cardHeader} />
        <CardContent>
          {props.description && (
            <Typography css={styles.contentTypography}>
              {t(props.description)}
            </Typography>
          )}
          {props.media && (
            <SingleLineGridList tileData={props.media.tileData} />
          )}
        </CardContent>
      </Card>
      <Box height="24px" width="100%" />
    </Grid>
  );
};
