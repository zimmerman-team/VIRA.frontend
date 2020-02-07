import { css } from 'styled-components/macro';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ProjectPalette } from 'app/theme';
import { Hidden } from '@material-ui/core';

export interface TitleParams {
  title: string;
  id?: string;
  date?: string;
  note?: string;
  url_note?: string;
  url?: string;
  description?: string;
}

const style: any[] = [
  // title style
  css`
    font-size: 48px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 25px;
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
  return (
    <React.Fragment>
      {/* ---------------------------- */}
      {/* title */}
      <Typography css={style[0]}>{props.title}</Typography>
      <Box height="15px" />
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
          <Typography css={style[2]}>{props.note}</Typography>
          <Box height="10px" />
        </React.Fragment>
      )}

      {/* ---------------------------- */}
      {/* url */}
      {props.url && (
        <Typography css={style[3]}>
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.url_note}
          </a>
        </Typography>
      )}
    </React.Fragment>
  );
};
