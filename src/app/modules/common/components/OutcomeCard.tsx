import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Box } from '@material-ui/core';
import { css } from 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import {
  SingleLineGridList,
  SingleLineGridListProps,
} from 'app/components/layout/GridList/singleLineGridList';

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
  return (
    <Grid item lg={12}>
      <Card css={props.media ? styles.card : null}>
        <CardHeader title={props.title} css={styles.cardHeader} />
        <CardContent>
          {props.description && (
            <Typography css={styles.contentTypography}>
              {props.description}
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
