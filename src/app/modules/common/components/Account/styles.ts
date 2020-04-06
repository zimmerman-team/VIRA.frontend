import styled from 'styled-components';
import { ProjectPalette } from 'app/theme';
import { Link as RouteLink } from 'react-router-dom';
import React from 'react';
import { Typography } from '@material-ui/core';
import { white } from 'material-ui/styles/colors';

export const Container = styled.div`
  width: 272px;
  //height: 400px;
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

    a {
      cursor: pointer;
      color: ${ProjectPalette.primary.main};
    }
  }

  a {
    &:hover {
      cursor: pointer;
      color: ${ProjectPalette.primary.main};
    }
  }
`;

export const ButtonPrimary = styled.div`
  width: 170px;
  height: 30px;
  display: flex;
  font-size: 12px;
  border-radius: 2px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  background: ${ProjectPalette.common.white};
  border: 1px solid ${ProjectPalette.common.white};
  color: ${ProjectPalette.text.primary};

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.8);

    a {
      cursor: pointer;
    }
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const Username = styled(Typography)`
  text-align: center;
  line-height: 1.33;
  letter-spacing: 0.42px;
`;

export const Link = styled(RouteLink)`
  font-size: 12px;
  text-decoration: none;
  font-weight: normal;
  color: ${ProjectPalette.primary.contrastText};

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`;
