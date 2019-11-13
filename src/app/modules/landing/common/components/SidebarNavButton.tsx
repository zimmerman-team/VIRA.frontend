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
}
export function SidebarNavButton(props: SidebarNavButtonParams): JSX.Element {
  return (
    <ListItem button key={props.text}>
      <ListItemIcon
        css={`
          && {
            min-width: initial;
            margin-right: 13px;
          }
        `}
      >
        {props.index % 2 === 0 ? <IconDashBoard /> : <IconProjects />}
      </ListItemIcon>

      <ListItemText
        css={`
          span {
            color: white;
          }
        `}
        primary={props.text}
      />
    </ListItem>
  );
}
