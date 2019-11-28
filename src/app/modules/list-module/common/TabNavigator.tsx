import React from 'react';
import { NavigationButton } from 'app/modules/list-module/common/NavigationButton';
import Box from '@material-ui/core/Box';

import { NavItemParams } from 'app/modules/common/consts';

export interface TabNavigatorParams {
  items: NavItemParams[];
}

export function TabNavigator(props: TabNavigatorParams) {
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
