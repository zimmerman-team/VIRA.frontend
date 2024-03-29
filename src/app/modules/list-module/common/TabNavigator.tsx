/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { NavigationButton } from 'app/modules/list-module/common/NavigationButton';
import Box from '@material-ui/core/Box';

import { NavItemParams } from 'app/modules/common/consts';

export interface TabNavigatorParams {
  /* todo: can we simplify or fragment what's happening here? */
  map(arg0: (tab: any) => JSX.Element): React.ReactNode;
  items: NavItemParams[];
  onTabChange?: Function;
  initialTabIndex?: number;
}

export function TabNavigator(props: TabNavigatorParams) {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      {props.items.map((item) => (
        <NavigationButton
          key={item.label}
          path={item.path}
          label={item.label}
          disabled={item.disabled}
          testid={item.label}
        />
      ))}
    </Box>
  );
}
