import React from 'react';
import styled from 'styled-components';
import { Card as MuiCard, Avatar, Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { UserProfileCardModel } from 'app/components/surfaces/Cards/UserProfileCard/model';
import { ContainedButton as BaseContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { OutlinedButton as BaseOutlinedButton } from 'app/components/inputs/buttons/OutlinedButton';
import { Link as MyLink } from 'react-router-dom';
import { ProjectPalette } from 'app/theme';

const Card = styled(props => <MuiCard {...props} />)`
  && {
    background-color: ${ProjectPalette.primary.main};
    box-shadow: none;
    width: 272px;
  }
`;

const Content = styled(props => <CardContent {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;

  && {
    // 24px - marginbottom(link)= 6px
    padding: 32px 51px 6px 51px;
  }
`;

const ProfilePic = styled(props => <Avatar {...props} />)`
  && {
    width: 70px;
    height: 70px;
    background-color: ${ProjectPalette.common.white};
    color: ${ProjectPalette.primary.main};
    margin-bottom: 16px;
  }
`;

const OutlinedButton = styled(props => <BaseOutlinedButton {...props} />)`
  && {
    width: 100%;
    height: 30px;
    margin-bottom: 8px;
    font-size: 12px;
  }
`;

const ContainedButton = styled(props => <BaseContainedButton {...props} />)`
  && {
    color: ${ProjectPalette.text.primary};
    background-color: ${ProjectPalette.common.white};
    height: 30px;
    width: 100%;
    margin-bottom: 31px;
    line-height: 0;
    font-size: 12px;
  }
`;

const UserNameTypography = styled(props => (
  <Typography {...props} variant="subtitle2" />
))`
  && {
    color: ${ProjectPalette.common.white};
    margin-bottom: 32px;
  }
`;

const Link = styled(props => <MyLink {...props} />)`
  && {
    text-decoration: none;
    text-transform: none;
    margin-bottom: 16.1px;
    > span {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const UserProfileCard = (props: UserProfileCardModel) => {
  return (
    <Card>
      <Content>
        {/*USER PROFILE PIC + USERNAME*/}
        {/*TODO: make own component*/}
        <>
          {props.imageSrc ? (
            <>
              <ProfilePic
                alt={`${props.firstName} ${props.lastName}`}
                src={props.imageSrc}
              />
            </>
          ) : (
            <ProfilePic>
              {createUserLabel(props.firstName, props.lastName)}
            </ProfilePic>
          )}

          <UserNameTypography>
            {props.firstName} {props.lastName}
          </UserNameTypography>
        </>

        {/* BUTTONS */}
        <OutlinedButton text={'Manage teams & users'} />
        <Link to={'/profile/manage-account'}>
          <OutlinedButton text={'Manage your account'} />
        </Link>
        <ContainedButton text={'Sign Out'} />

        {/* LINKS */}
        <Link to={'/privacy'}>
          <Typography variant="caption">Privacy Policy</Typography>
        </Link>
        <Link to={'/terms'}>
          <Typography variant="caption">Terms</Typography>
        </Link>
      </Content>
    </Card>
  );

  function createUserLabel(firstName: string, lastName: string): string {
    let userLabel: string = '';
    userLabel += firstName.charAt(0);
    userLabel += lastName.charAt(0);
    userLabel.toUpperCase();

    return userLabel;
  }
};
