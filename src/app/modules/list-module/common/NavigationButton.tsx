import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavItemParams } from 'app/modules/common/consts';

import 'styled-components/macro';

export const NavigationButton = (props: NavItemParams) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <NavLink
      to={props.path}
      activeStyle={{ borderBottom: '4px solid #25baa4' }}
      css={`
        && {
          text-decoration: none;
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
