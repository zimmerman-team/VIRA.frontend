import 'styled-components/macro';

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { IconDashBoard } from 'app/modules/common/icons/IconDashBoard';
import { IconProjects } from 'app/modules/common/icons/IconProjects';
import { ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

interface SidebarNavButtonParams {
  text: string;
  index: number;
  open: boolean;
  path: string;
}
export function SidebarNavButton(props: SidebarNavButtonParams): JSX.Element {
  return (
    <NavLink
      to={props.path}
      exact
      data-testid={props.text}
      css={`
        text-decoration: none;
      `}
    >
      <ListItem
        button
        key={props.text}
        css={`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 44px;
          width: ${props.open ? '255px' : '54px'};
        `}
      >
        <ListItemIcon
          css={`
            && {
              min-width: initial;
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
    </NavLink>
  );
}
