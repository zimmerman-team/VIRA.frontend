import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { LinkCellModuleModel } from 'app/components/datadisplay/Table/model';
import { TextStyle, ProjectPalette } from 'app/theme';

const CustomLink = styled(props => <Link {...props} />)`
  font-family: ${TextStyle.fontFamily};
  font-size: ${TextStyle.fontSize};
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: ${ProjectPalette.secondary.main};
`;

const ExtCustomLink = styled.a`
  font-family: ${TextStyle.fontFamily};
  font-size: ${TextStyle.fontSize};
  line-height: 1.71;
  letter-spacing: 0.25px;
  color: ${ProjectPalette.secondary.main};
`;

const LinkCellModule = (props: LinkCellModuleModel) => {
  if (props.extLink) {
    return (
      <ExtCustomLink
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.value}
      </ExtCustomLink>
    );
  }
  return <CustomLink to={props.link}>{props.value}</CustomLink>;
};

export default LinkCellModule;
