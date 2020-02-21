// @ts-nocheck
import React from 'react';
import { css } from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import { ProjectPalette } from 'app/theme';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
} from '@material-ui/core';

export type SingleLineGridListProps = {
  tileData: TileData[];
};

type TileData = {
  img: string;
  altTitle: string;
};

const styles: any = {
  container: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    //overflow: hidden;
  `,
  gridList: css`
    && {
      flex-wrap: nowrap;
      transform: translateZ(0);
      margin: 0 !important;
    }
  `,
  gridListTile: css`
    && {
      height: 153px !important;
      width: 257px !important;
      padding: 0 !important;
      margin-right: 8px;
    }
  `,
};

export const SingleLineGridList = (props: SingleLineGridListProps) => {
  return (
    <div css={styles.container}>
      <GridList cellHeight={153} css={styles.gridList}>
        {props.tileData.map(tile => (
          <GridListTile key={tile.img} css={styles.gridListTile}>
            <img src={tile.img} alt={tile.altTitle} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
