import React from 'react';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { ButtonCellModuleModel } from 'app/components/datadisplay/Table/model';
import styled from 'styled-components';

const StyledButton = styled(ContainedButton)`
  padding-top: 3px !important;
  padding-bottom: 3px !important;
`;

export const ButtonCellModule = (props: ButtonCellModuleModel) => {
  return <StyledButton text={props.label} />;
};
