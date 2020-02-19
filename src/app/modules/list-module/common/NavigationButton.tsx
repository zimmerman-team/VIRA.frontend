/* eslint-disable @typescript-eslint/no-unused-vars */
import 'styled-components/macro';
import React from 'react';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { NavItemParams } from 'app/modules/common/consts';
export const NavigationButton = (props: NavItemParams) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <NavLink
      to={props.path}
      activeStyle={{
        borderBottom: '4px solid #25baa4',
      }}
      css={`
        && {
          text-decoration: none;
          opacity: ${props.disabled ? 0.6 : 1};
          pointer-events: ${props.disabled ? 'none' : 'all'};
          margin-left: ${props.spacing ? props.spacing : 0}px;
        }
      `}
    >
      <Box
        // width={md ? '135px' : '235px'}
        height="30px"
        bgcolor="grey"
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        fontStyle="normal"
        lineHeight="1.5"
        letterSpacing="1.25px"
        textAlign="center"
        color="black"
      >
        {props.label}
      </Box>
    </NavLink>
  );
};
