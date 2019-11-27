import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavItemParams } from 'app/modules/global/consts';

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
export const TabNavigation = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} variant="fullWidth">
      {navItemMock.map(navItem => (
        <Tab
          label={navItem.label}
          disableFocusRipple
          disableRipple
          key={navItem.label}
        />
      ))}
    </Tabs>
  );
};
