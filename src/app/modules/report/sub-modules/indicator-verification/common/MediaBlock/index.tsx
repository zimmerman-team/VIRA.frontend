import React from 'react';
import get from 'lodash/get';
import Badge from '@material-ui/core/Badge';
import { css } from 'styled-components/macro';
import CloseIcon from '@material-ui/icons/Close';
import { MediaModel } from 'app/modules/report/model';
import { getMediaIcon } from './utils';

type MediaBlockProps = {
  items: MediaModel;
  removeItem: Function;
};

const styles: any = {
  container: css`
    display: flex;
    flex-direction: row;
  `,
  itemContainer: css`
    margin-right: 32px;
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

export const MediaBlock = (props: MediaBlockProps) => {
  return (
    <div css={styles.container}>
      {['picture', 'video', 'document'].map((type: any) => {
        return get(props.items, type, []).map((item: any) => {
          return (
            <div css={styles.itemContainer}>
              <Badge
                key={`${item.name}-${item.size}`}
                badgeContent={
                  <CloseIcon
                    fontSize="small"
                    css={`
                      cursor: pointer;
                    `}
                    onClick={() => props.removeItem(item.name, type)}
                  />
                }
              >
                <div css={styles.item}>
                  {getMediaIcon(type)}
                  <div css={styles.itemLabel}>{item.name}</div>
                </div>
              </Badge>
            </div>
          );
        });
      })}
    </div>
  );
};
