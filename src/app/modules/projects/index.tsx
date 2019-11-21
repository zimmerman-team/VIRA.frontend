import 'styled-components/macro';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// const CustomTab =

interface NavItemParams {
  label: string;
  path: string;
}

const navItemMock: NavItemParams[] = [
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Grantee',
    path: '/projects/grantee',
  },
  {
    label: 'Grantee',
    path: '/projects/grantee',
  },
];

const CenteredTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      // indicatorColor="secondary"
      // textColor="primary"
      variant="fullWidth"
    >
      {navItemMock.map(navItem => (
        <Tab label={navItem.label} disableFocusRipple disableRipple />
      ))}
    </Tabs>
  );
};

export const ProjectsModule = () => {
  return (
    <React.Fragment>
      {/* ------------------------------------------------------------------ */}
      {/* projects table navigation */}

      <Grid item lg={6}>
        <CenteredTabs />
      </Grid>
      {/* ------------------------------------------------------------------ */}
      {/* projects table */}
      <Grid item lg={12}>
        empty
      </Grid>
    </React.Fragment>
  );
};
