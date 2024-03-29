/* eslint-disable no-underscore-dangle */
import {
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { TeamUserCardModel } from 'app/components/surfaces/Cards/TeamUserCard/model';
import { ProjectPalette } from 'app/theme';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';

const Description = styled(Typography)`
  && {
    margin-top: 16px;
    margin-bottom: 40px;
    line-height: 1.71;
    letter-spacing: 0.25px;
    overflow-wrap: break-word;

    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    //line-height: 1.71;
    //letter-spacing: 0.25px;
  }
`;

const BottomContainer = styled(Container)`
  && {
    padding: 0;
    position: absolute;
    bottom: 16px;
    left: 16px;
    width: calc(100% - 24px);
  }
`;

const CardContainer = styled(Card)`
  && {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border-radius: 2px;
    //padding-top: 16px;
    //padding-right: 24px;
    //padding-left: 24px;
    //padding-bottom: 24px;
    //padding: 16px 16px 24px 24px;
    height: 214px;
    padding: 16px;
    border: 1px solid transparent;
    position: relative;

    &:hover {
      border-color: ${ProjectPalette.secondary.light};

      button {
        color: ${ProjectPalette.secondary.light};
      }
    }
  }
`;

const Header = styled(Typography)`
  && {
    font-weight: 500;
    letter-spacing: 0.25px;

    font-size: 16px;
    //font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    //letter-spacing: 0.25px;
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

    //font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    //letter-spacing: 0.42px;

    color: ${ProjectPalette.text.secondary};
  }
`;

export function TeamUserCard(props: TeamUserCardModel) {
  const history = useHistory();
  const { t } = useTranslation();

  const editUser = () =>
    history.push(`/super-admin/${props.urlParam}/edit/${props._id}`);

  return (
    <CardContainer data-cy="card-container" onClick={editUser}>
      <Header data-cy="card-header" variant="body1">
        {props.title}
      </Header>
      <Description data-cy="card-description" variant="subtitle1">
        {props.description.indexOf('Created by') > -1
          ? `${t(
              'user_management.general.created_by'
            )}${props.description.replace('Created by', '')}`
          : props.description}
      </Description>
      <BottomContainer>
        <Grid container justify="space-between" alignItems="flex-end">
          <Grid item>
            <Caption variant="caption">
              {t('user_management.general.created')}: {props.dateCreated}
            </Caption>
          </Grid>
          <Grid item>
            <ButtonIcon
              onClick={(e: any) => {
                e.stopPropagation();
                editUser();
              }}
            >
              <Edit />
            </ButtonIcon>
            <ButtonIcon
              data-cy={`delete-${props.title}`}
              onClick={(e: any) => {
                e.stopPropagation();
                if (props.deleteUser) {
                  props.deleteUser(props._id);
                }
              }}
            >
              <Delete />
            </ButtonIcon>
          </Grid>
        </Grid>
      </BottomContainer>
    </CardContainer>
  );
}
