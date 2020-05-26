// @ts-nocheck
/* eslint-disable spaced-comment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { InPageNavigationModel } from 'app/components/navigation/InPageNavigation/model';
import { Grid } from '@material-ui/core';
import useLocation from 'react-use/lib/useLocation';
import get from 'lodash/get';

//TODO: Component too convoluted, should be refactored to work the same as the App Bar
const LocationLink = styled(props => <NavLink {...props} />)`
  && {
    font-family: Inter;
    font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
    font-weight: 600;
    line-height: 1.71;
    letter-spacing: 1.25px;
    /* todo: move to theme file */
    color: #6f7173;
    padding-right: 32px;
    margin-bottom: 20px;
    text-decoration: none;
    :hover {
      cursor: pointer;
      text-decoration: none;
    }

    &:last-child {
      padding: 0;
    }
  }
`;

const CurrentLocationLink = styled(props => <NavLink {...props} />)`
  && {
    font-family: Inter;
    font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
    font-weight: 600;
    line-height: 1.71;
    letter-spacing: 1.25px;
    color: ${ProjectPalette.text.primary};
    padding-right: 32px;
    margin-bottom: 20px;
    text-decoration: none;
    :hover {
      cursor: default;
      text-decoration: none;
    }

    &:last-child {
      padding: 0;
    }
  }
`;

const Underline = styled(props => <div {...props} />)`
  background-color: ${props =>
    props.show ? ProjectPalette.secondary.main : 'transparent'};
  height: 4px;
  margin-top: 8px;
`;

export function InPageNavigation(props: InPageNavigationModel) {
  const state = useLocation();

  return (
    <>
      {props.locations.map((lines, index) => {
        return (
          /* todo: serious layout flaw, needs to be fixed */
          <Grid container justify="flex-end" key={index}>
            {lines.items.map(location => {
              if (get(state, 'pathname', '').includes(location.url)) {
                return (
                  <CurrentLocationLink
                    fontSize={lines.fontSize}
                    variant="button"
                    key={location.label}
                    to={`/${location.url}`}
                  >
                    {location.label}
                    <Underline show="true" />
                  </CurrentLocationLink>
                );
              }
              return (
                <LocationLink
                  fontSize={lines.fontSize}
                  key={location.label}
                  to={`/${location.url}`}
                >
                  {location.label}
                  <Underline />
                </LocationLink>
              );
            })}
          </Grid>
        );
      })}
    </>
  );
}
