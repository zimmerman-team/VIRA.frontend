import styled from 'styled-components/macro';
import { Typography } from '@material-ui/core';

export const TooltipContent = styled.div`
  display: flex;
  padding: 0.5rem;
  font-size: 12px;
  flex-direction: column;

  span {
    margin-left: 33px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
`;

export const Tooltip = styled.div`
  color: #fff;
  font-size: 0.75rem;
  padding: 0.75rem;
  min-width: 150px;
  box-shadow: 4px 4px 3px rgba(26, 26, 26, 0.38);
  background-color: #242e42;
  width: 250px;
`;

export const TooltipHeader = styled(Typography)`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  color: #fff;

  > svg {
    height: 24px !important;
  }
`;

export const Circle = styled.div`
  width: 9px;
  height: 9px;
  margin-right: 9px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const XsContainer = styled.div`
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  z-index: 1101;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);

  * {
    z-index: 1010;
  }
`;
