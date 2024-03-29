import { css } from 'styled-components/macro';

export const styles: any = {
  card: css`
    height: 100%;
    display: flex;
    min-height: 154px;
    overflow: visible;
    flex-direction: column;
    justify-content: space-between;

    > div:first-of-type {
      > div {
        height: 61px;
      }
    }
  `,
  cardSecondary: css`
    //height: 100%;
    overflow: visible;
  `,
  input: css`
    [class*='-input'] {
      width: 90px;
    }
  `,
  infoText: css`
    bottom: 0;
    font-size: 12px;
    font-weight: 300;
  `,
  infoTextWithIcon: css`
    bottom: 0;
    display: flex;
    font-size: 12px;
    font-weight: 300;
    align-items: center;
    justify-content: space-between;
  `,
  blurBlock: css`
    opacity: 0.2;
    pointer-events: none;
  `,
  gridMobile: css`
    padding-top: 0 !important;
  `,
};
