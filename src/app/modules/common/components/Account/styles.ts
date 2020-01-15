import styled from 'styled-components';
import { ProjectPalette } from 'app/theme';
import { Link as RouteLink } from 'react-router-dom';

export const Container = styled.div`
  width: 272px;
  height: 369px;
  display: flex;
  color: #ffffff;
  padding: 32px 51px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${ProjectPalette.primary.main};
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  border-radius: 50%;
  margin-bottom: 17px;
  align-items: center;
  background: #ffffff;
  justify-content: center;
  color: ${ProjectPalette.primary.main};
`;

export const Button = styled.div`
  width: 170px;
  height: 30px;
  display: flex;
  font-size: 12px;
  border-radius: 2px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid #ffffff;
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    cursor: pointer;
    background: #ffffff;
    color: ${ProjectPalette.primary.main};
  }
`;

export const Link = styled(RouteLink)`
  font-size: 12px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: #ffffff;
    cursor: pointer;
  }
`;
