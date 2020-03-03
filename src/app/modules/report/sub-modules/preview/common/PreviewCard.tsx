import React from 'react';
import { css } from 'styled-components/macro';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { TooltipButton as Tooltip } from 'app/components/datadisplay/Tooltip';
import { FieldDescription } from 'app/modules/report/sub-modules/indicator-verification/common/FieldDescription';

type Props = {
  title: string;
  tooltip?: string;
  explanation?: string;
  content: string | string[] | number;
};

const styles: any = {
  card: css`
    width: 100%;
    height: 100%;
    min-height: 152px;
    padding: 12px !important;
  `,
  header: css`
    display: flex;
    align-items: center;
  `,
  cardContent: css`
    font-size: 14px;
    padding: 0px !important;
  `,
  infoText: css`
    bottom: 0;
  `,
  spacer: css`
    width: 100%;
    height: 28px;
  `,
};

export const PreviewCard = (props: Props) => (
  <Card css={styles.card}>
    <div css={styles.header}>
      <FieldDescription text={props.title} />
      {props.tooltip && <Tooltip tip={props.tooltip} />}
    </div>
    <div css={styles.spacer} />
    <CardContent css={styles.cardContent}>
      {typeof props.content === 'string' ||
      typeof props.content === 'number' ? (
        props.content
      ) : (
        <Grid container spacing={2}>
          {props.content.map((item: string) => (
            <Grid item key={item} xs={12} lg={6}>
              {item}
            </Grid>
          ))}
        </Grid>
      )}
      <div css={styles.spacer} />
      <Typography variant="body2" color="secondary" css={styles.infoText}>
        {props.explanation}
      </Typography>
    </CardContent>
  </Card>
);
