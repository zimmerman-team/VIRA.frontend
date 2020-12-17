import { ProjectPalette } from 'app/theme';
import { css } from 'styled-components/macro';

export const inputcss = (hasSelections: boolean) => css`
  width: 100%;
  display: flex;
  cursor: pointer;
  background: #f0f3f7;
  flex-direction: row;
  align-items: center;
  padding: 5px 0 5px 10px;
  justify-content: space-between;
  height: ${hasSelections ? 'fit-content' : '48px'};

  > div {
    width: 100%;
  }
  > svg {
    margin-right: 10px;
  }
`;
export const inputlistcss = css`
  margin: 0;
  width: 100%;
  list-style: none;
  overflow-y: auto;
  padding: 5px 10px;
  max-height: 100px;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 50%;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${ProjectPalette.grey[400]};
  }

  > li {
    width: 100%;
    padding: 6px;
    display: flex;
    font-size: 14px;
    align-items: center;
    flex-direction: row;
    font-weight: normal;
    justify-content: space-between;
  }
`;
export const listboxcss = css`
  margin: 0;
  padding: 0;
  z-index: 1;
  width: 100%;
  background: #fff;
  position: absolute;
  border-radius: 2px;
  box-shadow: 0 4px 14px -2px rgba(130, 136, 148, 0.28),
    0 0 2px 0 rgba(130, 136, 148, 0.22);
`;
export const listcss = css`
  width: 100%;
  list-style: none;
  overflow-y: auto;
  padding: 5px 10px;
  max-height: 300px;
  margin: 0 0 10px 0;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 50%;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${ProjectPalette.grey[400]};
  }
`;

export const totalcss = (value: number) => css`
  width: 100%;
  display: flex;
  background: #f0f3f7;
  flex-direction: row;
  align-items: center;
  padding: 5px 16px 5px 10px;
  justify-content: space-between;

  > li {
    background: #f0f3f7;
    > div:nth-child(2) {
      ${value === 100 && 'color: #fff;'}
      background: ${value === 100 ? '#30C2B0' : '#fff'};

      > input {
        ${value === 100 && 'color: #fff;'}
        background: ${value === 100 ? '#30C2B0' : '#fff'};
      }
    }
  }
`;

export const buttoncss = (bgcolor: string) => css`
  width: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  padding: 15px 0;
  font-weight: 600;
  text-align: center;
  background: ${bgcolor};
`;
