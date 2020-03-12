import { Box, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { css } from 'styled-components/macro';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

export const TabStyle = css`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.71;
  letter-spacing: 1.25px;
  background-color: white;
  text-transform: capitalize;
  max-width: 140px;
`;

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
export function a11yProps(index: any) {
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
