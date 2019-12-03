import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import { TeamUserCardModel } from 'app/components/surfaces/Cards/TeamUserCard/model';
import {
  Card,
  Container,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { ProjectPalette } from 'app/theme';

const Description = styled(Typography)`
  && {
    margin-top: 16px;
    margin-bottom: 40px;
    line-height: 1.71;
    letter-spacing: 0.25px;
  }
`;

const BottomContainer = styled(Container)`
  && {
    padding: 0;
  }
`;
/* todo: sort this in the theme file */
const CardContainer = styled(Card)`
  && {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    padding: 16px 16px 24px 24px;
  }
`;

const Header = styled(Typography)`
  && {
    font-weight: 500;
    letter-spacing: 0.25px;
    color: ${ProjectPalette.common.black};
  }
`;

const ButtonIcon = styled(IconButton)`
  && {
    padding: 8px;
    color: rgba(207, 220, 230, 0.3);
    :hover {
      color: ${ProjectPalette.secondary.light};
    }
  }
`;

const Caption = styled(Typography)`
  && {
    font-size: 12px;
    letter-spacing: 0.42px;
    color: ${ProjectPalette.text.secondary};
  }
`;

export function TeamUserCard(props: TeamUserCardModel) {
  return (
    <CardContainer>
      <Header variant="body1">{props.title}</Header>
      <Description variant={'subtitle1'}>{props.description}</Description>
      <BottomContainer>
        <Grid container justify="space-between" alignItems="flex-end">
          <Grid item>
            <Caption variant={'caption'}>Created: {props.dateCreated}</Caption>
          </Grid>
          <Grid item>
            <ButtonIcon>
              <Edit />
            </ButtonIcon>
            <ButtonIcon>
              <Delete />
            </ButtonIcon>
          </Grid>
        </Grid>
      </BottomContainer>
    </CardContainer>
  );
}
