import React from 'react';
import 'styled-components/macro';
import { IconDashBoard } from 'app/modules/common/icons/IconDashBoard';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface SidebarNavButtonParams extends RouteComponentProps {
  text: string;
  index: number;
  open: boolean;
  path: string;
  icon?: React.ReactElement;
}

function isNavLinkActive(props: any) {
  if (props.location.pathname === props.path) {
    return true;
  }
  if (props.path === '/') {
    return (
      props.location.pathname
        .replace(/\//g, ' ')
        .indexOf(props.text.toLowerCase()) > -1
    );
  }
  return false;
}

function SidebarNavButtonF(props: SidebarNavButtonParams): JSX.Element {
  const [isActive, setIsActive] = React.useState(false);
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    setIsActive(isNavLinkActive(props));
  }, [props.location.pathname]);

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
          {props.icon || <IconDashBoard />}
        </ListItemIcon>

        <ListItemText
          css={`
            display: ${props.open ? 'flex' : 'none'};
            span {
              color: white;
              font-weight: ${isActive ? 'bold' : 300};
            }
          `}
          primary={t(props.text)}
        />
      </ListItem>
    </NavLink>
  );
}

export const SidebarNavButton = withRouter(SidebarNavButtonF);
