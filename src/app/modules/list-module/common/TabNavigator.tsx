import Box from '@material-ui/core/Box';
import React from 'react';

import { NavItemParams } from 'app/modules/common/consts';
import { NavigationButton } from 'app/modules/list-module/common/NavigationButton';

export interface TabNavigatorParams {
  items: NavItemParams[];
  onTabChange?: Function;
  initialTabIndex?: number;
}

export function TabNavigator(props: TabNavigatorParams) {
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
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      {props.items.map(item => (
        <NavigationButton
          key={item.label}
          path={item.path}
          label={item.label}
        />
      ))}
    </Box>
  );
}
