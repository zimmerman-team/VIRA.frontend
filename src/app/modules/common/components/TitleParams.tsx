import { css } from 'styled-components/macro';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Hidden } from '@material-ui/core';
import { ProjectPalette } from 'app/theme';
import { StatItemDivider } from 'app/modules/landing/common/stats/StatItemDivider';
import { StatItem } from 'app/modules/common/components/StatItem';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';

export interface TitleParams {
  title: string;
  showMoreThanTitle?: boolean;
  id?: string;
  date?: string;
  note?: string;
  url_note?: string;
  url?: string;
  description?: string;
  testattr?: string;
  stats?: { label: string; value: string }[];
  editReport?: void;
  showEditBtn?: boolean;
}

const style: any[] = [
  // title style
  css`
    font-size: 34px;
    font-weight: 700;
    letter-spacing: 0.25px;
    line-height: normal;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 1.3;
    }
  `,
  // id style
  css`
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 2px;
    color: ${ProjectPalette.common.black};
  `,
  // note style

  css`
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 2px;
    color: ${ProjectPalette.common.black};
  `,
  // url style
  css`
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: 2px;
    a {
      text-decoration: none;
      color: ${ProjectPalette.secondary.main};
    }
  `,
];

export const TitleFragment = (props: TitleParams) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/* ---------------------------- */}
      {/* title */}
      <Typography data-cy={props.testattr} css={style[0]}>
        {t(props.title)}
      </Typography>
      <Box height="15px" />
      {props.showMoreThanTitle && (
        <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={12} lg={7}>
            {/* ---------------------------- */}
            {/* id */}
            {props.id && (
              <React.Fragment>
                <Typography css={style[1]}>{props.id}</Typography>
                <Box height="10px" />
              </React.Fragment>
            )}

            {/* ---------------------------- */}
            {/* note */}
            {props.note && (
              <React.Fragment>
                <Typography css={style[2]}>{t(props.note)}</Typography>
                <Box height="10px" />
              </React.Fragment>
            )}

            {/* ---------------------------- */}
            {/* url */}
            {props.url && (
              <Typography css={style[3]}>
                <Link to={props.url}>{props.url_note}</Link>
              </Typography>
            )}
          </Grid>
          <Hidden lgUp>
            <div
              css={`
                width: 100%;
                height: 24px;
              `}
            />
          </Hidden>

          {/* ---------------------------------------------------------------------*/}
          {/* button: generate report */}
          {props.showEditBtn && (
            <Hidden smUp>
              <Grid container item xs={12}>
                <ContainedButton
                  text="Edit Report"
                  onClick={props.editReport}
                />
              </Grid>
              <Box width="100%" height="25px" />
            </Hidden>
          )}

          {/* ---------------------------------------------------------------------*/}
          {/* stat fragment */}
          {props.stats && (
            <Grid
              item
              container
              xs={12}
              md={5}
              justify="flex-end"
              wrap="nowrap"
            >
              {(props.stats || []).map((stat: any, index: number) => (
                <React.Fragment key={stat.label}>
                  <StatItem label={stat.label} value={stat.value} />
                  {index < (props.stats || []).length - 1 && (
                    <StatItemDivider />
                  )}
                </React.Fragment>
              ))}
            </Grid>
          )}
        </Grid>
      )}
    </React.Fragment>
  );
};
