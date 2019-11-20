import 'styled-components/macro';

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { IconDashBoard } from '../icons/IconDashBoard';
import { IconProjects } from '../icons/IconProjects';
import { ListItemText } from '@material-ui/core';

interface SidebarNavButtonParams {
  text: string;
  index: number;
  open: boolean;
}
export function SidebarNavButton(props: SidebarNavButtonParams): JSX.Element {
  return (
    <ListItem
      button
      key={props.text}
      css={`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 44px;
        width: ${props.open ? '256px' : '54px'};
      `}
    >
      <ListItemIcon
        css={`
          && {
            //display: flex;
            //align-items: center;
            //justify-content: center;
            min-width: initial;
            // width: ${props.open ? 'initial' : '54px'};
            //margin-right: 13px;
            margin-left: ${props.open ? '0' : '0'};
            margin-right: ${props.open ? '13px' : '0'};
          }
        `}
      >
        {props.index % 2 === 0 ? <IconDashBoard /> : <IconProjects />}
      </ListItemIcon>

      <ListItemText
        css={`
          display: ${props.open ? 'flex' : 'none'};

          span {
            color: white;
          }
        `}
        primary={props.text}
      />
    </ListItem>
  );
}
