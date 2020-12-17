import { css } from 'styled-components/macro';

export const listitemcss = css`
  width: 100%;
  padding: 6px;
  margin: 5px 0;
  display: flex;
  font-size: 14px;
  align-items: center;
  flex-direction: row;
  font-weight: normal;
  justify-content: space-between;
`;
export const labelcss = css`
  display: flex;
  align-items: center;
  width: calc(100% - 80px);
`;
export const inputcss = css`
  width: 50px;
  padding: 2px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #f0f3f7;

  > input {
    margin: 0;
    width: 35px;
    outline: none;
    border-style: none;
    background: #f0f3f7;
  }

  > div {
    color: #d8d8d8;
    font-size: 12px;
  }
`;
