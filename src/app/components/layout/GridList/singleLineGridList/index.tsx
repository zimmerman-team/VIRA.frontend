import React from 'react';
import { css } from 'styled-components/macro';
import { GridList, GridListTile } from '@material-ui/core';
import { getMediaIcon } from 'app/modules/report/sub-modules/indicator-verification/common/MediaBlock/utils';
import { ProjectPalette } from 'app/theme';

export type SingleLineGridListProps = {
  tileData: TileData[];
};

export type TileData = {
  name: string;
  type: string;
  url: string;
};

const styles: any = {
  gridList: css`
    && {
      width: 100%;
      display: flex;
      max-width: 100%;
      flex-direction: row;
      margin: 0 !important;
      overflow-x: auto !important;
      flex-wrap: nowrap !important;
    }
  `,
  gridListTile: css`
    && {
      display: flex;
      margin-right: 8px;
      padding: 0 !important;
      width: 130px !important;
      justify-content: center;
      &:hover {
        cursor: pointer;
        color: ${ProjectPalette.secondary.main};
      }
    }
  `,
  item: css`
    display: flex;
    max-width: 82px;
    flex-direction: column;
  `,
  itemLabel: css`
    width: 100%;
    margin-top: 10px;
    text-align: center;
  `,
};

export const SingleLineGridList = (props: SingleLineGridListProps) => {
  return (
    <GridList cellHeight={153} css={styles.gridList}>
      {props.tileData.map(tile => (
        <GridListTile
          key={tile.name}
          css={styles.gridListTile}
          onClick={() => window.open(tile.url, '_blank')}
        >
          <div css={styles.item}>
            {getMediaIcon(tile.type)}
            <div css={styles.itemLabel}>{tile.name}</div>
          </div>
        </GridListTile>
      ))}
    </GridList>
  );
};
