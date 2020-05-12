import React from 'react';
import { css } from 'styled-components/macro';
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

  const ListeItemStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    /* if open; wide / if closed; narrow */
    width: ${props.open ? 'initial' : '54px'};

    &:hover {
      background-color: initial;
      opacity: 0.5;
    }
  `;

  const ListItemIconStyle = css`
    && {
      min-width: initial;
      margin-left: ${props.open ? '0' : '0'};
      margin-right: ${props.open ? '13px' : '0'};
    }
  `;

  const ListItemTextStyle = css`
    display: ${props.open ? 'flex' : 'none'};
    span {
      color: white;
      font-weight: ${isActive ? 'bold' : 300};
    }
  `;

  const NavLinkStyle = css`
    text-decoration: none;
  `;

  return (
    <NavLink to={props.path} exact css={NavLinkStyle}>
      <ListItem
        button
        data-cy={`sidebar-item-${props.index}`}
        key={props.text}
        css={ListeItemStyle}
      >
        <ListItemIcon css={ListItemIconStyle}>
          {props.icon || <IconDashBoard />}
        </ListItemIcon>

        <ListItemText css={ListItemTextStyle} primary={t(props.text)} />
      </ListItem>
    </NavLink>
  );
}

/* todo: do we need to use the withRouter? */
export const SidebarNavButton = withRouter(SidebarNavButtonF);
