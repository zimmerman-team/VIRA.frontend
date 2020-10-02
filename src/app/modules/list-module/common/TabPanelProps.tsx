import { Box, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { css } from 'styled-components/macro';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabStyle = css`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.71;
  letter-spacing: 1.25px;
  background-color: white;
  text-transform: capitalize;
  //max-width: 140px;
  margin-left: 24px;
`;

export function tabStyle(index: number) {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return css`
    font-size: 14px;
    font-weight: 600;
    line-height: 1.71;
    letter-spacing: 1.25px;
    background-color: white;
    text-transform: capitalize;
    max-width: 140px;
    margin-left: ${index === 0 && isMobileWidth ? '0px' : '24px'};
  `;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // css={`
      //   overflow-x: scroll;
      // `}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: 0, width: '100%' }} p={3}>
          {children}
        </Box>
      )}
    </Typography>
  );
}
export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
