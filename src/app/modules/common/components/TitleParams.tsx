import 'styled-components/macro';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ProjectPalette } from 'app/theme';

export interface TitleParams {
  title: string;
  id?: string;
  date?: string;
  note?: string;
  url_note?: string;
  url?: string;
  description?: string;
}
export const TitleFragment = (props: TitleParams) => {
  return (
    <React.Fragment>
      {/* ---------------------------- */}
      {/* title */}
      <Typography
        css={`
          && {
            font-size: 48px;
            font-weight: 500;
          }
        `}
      >
        {props.title}
      </Typography>
      <Box height="10px" />

      {/* ---------------------------- */}
      {/* id */}
      {props.id && (
        <React.Fragment>
          <Typography
            css={`
              && {
                font-size: 12px;
                line-height: 1.33;
                letter-spacing: 2px;
                color: ${ProjectPalette.common.black};
              }
            `}
          >
            {props.id}
          </Typography>
          <Box height="10px" />
        </React.Fragment>
      )}

      {/* ---------------------------- */}
      {/* note */}
      {props.note && (
        <React.Fragment>
          <Typography
            css={`
              && {
                font-size: 12px;
                line-height: 1.33;
                letter-spacing: 2px;
                color: ${ProjectPalette.common.black};
              }
            `}
          >
            {props.note}
          </Typography>
          <Box height="10px" />
        </React.Fragment>
      )}

      {/* ---------------------------- */}
      {/* url */}
      {props.url && (
        <Typography
          css={`
            && {
              font-size: 12px;
              line-height: 1.33;
              letter-spacing: 2px;

              a {
                text-decoration: none;
                color: ${ProjectPalette.secondary.main};
              }
            }
          `}
        >
          <a href={props.url} target="_blank">
            {props.url_note}
          </a>
        </Typography>
      )}
    </React.Fragment>
  );
};
