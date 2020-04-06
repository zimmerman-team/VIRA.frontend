import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { LinkCellModuleModel } from 'app/components/datadisplay/Table/model';
import { TextStyle, ProjectPalette } from 'app/theme';
import css from 'styled-components/macro';

const CustomLink = styled(props => <Link {...props} />)`
  font-family: ${TextStyle.fontFamily};
  font-size: ${TextStyle.fontSize};
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: ${ProjectPalette.secondary.main};
  text-decoration: none;
`;

const ExtCustomLink = styled.a`
  font-family: ${TextStyle.fontFamily};
  font-size: ${TextStyle.fontSize};
  line-height: 1.71;
  letter-spacing: 0.25px;
  font-weight: normal !important;
  color: ${ProjectPalette.secondary.main};
  text-decoration: none;
`;

export const LinkCellModule = (props: LinkCellModuleModel) => {
  return <CustomLink to={props.link}>{props.value}</CustomLink>;
};

//Checks if the link contains a protocol. If not, it adds it.
function addProtocol(link: string) {
  const protocolHttp = 'http://';
  const protocolHttps = 'https://';

  if (
    link?.indexOf(protocolHttp) === -1 &&
    link?.indexOf(protocolHttps) === -1
  ) {
    return protocolHttps + link;
  }

  return link;
}

export const ExternalLinkCellModule = (props: LinkCellModuleModel) => {
  return (
    <ExtCustomLink href={addProtocol(props.link)} target="_blank">
      {props.value}
    </ExtCustomLink>
  );
};
