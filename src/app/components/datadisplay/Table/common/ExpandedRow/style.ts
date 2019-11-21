import styled from 'styled-components';
import { Typography, ProjectPalette } from 'app/theme';

interface RowContainerModel {
  hover?: boolean;
}

export const RowContainer = styled.tr`
  cursor: ${(props: RowContainerModel) =>
    props.hover ? 'pointer' : 'initial'};
  background-color: ${ProjectPalette.common.white};
  border-bottom: 3px solid rgba(224, 224, 224, 0.4);
  &:hover {
    background-color: ${(props: RowContainerModel) =>
      props.hover ? ProjectPalette.action.hover : ProjectPalette.common.white};
  }
`;

export const LinkContainer = styled.div`
  margin: 15px 0 15px 64px;
  width: fit-content;
`;

export const CellItem = styled.div`
  padding: 14px 40px 14px 23px;
  font-family: ${Typography.fontFamily};
  font-size: ${Typography.fontSize};
  line-height: 1.71;
  letter-spacing: 0.25px;
`;
