import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavItemParams } from 'app/modules/common/consts';

type TabNavigationModel = {
  tabs: NavItemParams[];
  onTabChange?: Function;
  initialTabIndex?: number;
};

export const TabNavigation = (props: TabNavigationModel) => {
  const [value, setValue] = React.useState(props.initialTabIndex || 0);
  React.useEffect(() => {
    if (props.initialTabIndex !== undefined) {
      setValue(props.initialTabIndex);
    }
  }, [props.initialTabIndex]);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    if (props.onTabChange) {
      props.onTabChange(newValue);
    } else {
      setValue(newValue);
    }
  };
  return (
    <Tabs value={value} onChange={handleChange} variant="fullWidth">
      {props.tabs.map(navItem => (
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
