import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, IconButton, Box } from '@material-ui/core';
import { Add, Sort, Search } from '@material-ui/icons';
import styled from 'styled-components/macro';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { ProjectPalette } from 'app/theme';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 12px 12px 24px;
  margin-bottom: 19.5px;
`;

const Title = styled(Typography)`
  && {
    font-size: 1.4285714285714286rem;
  }
`;

const IconLabelButton = styled(ContainedButton)`
  && {
    margin-bottom: 12px;
    width: 100%;
    height: 50px;
    font-size: 1.1428571428571428rem;
    letter-spacing: 0.15px;
    svg {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
  }
`;

const ButtonIcon = styled(IconButton)`
  color: #a1aebd;
  :hover {
    color: ${ProjectPalette.secondary.light};
  }
`;

export type HeaderParams = {
  title: string;
};

export const HeaderFragment = (props: HeaderParams) => {
  return (
    <React.Fragment>
      <Header>
        <Title variant={'h6'}>{props.title}</Title>
        <Box>
          <ButtonIcon>
            <Search />
          </ButtonIcon>
          <ButtonIcon>
            <Sort />
          </ButtonIcon>
        </Box>
      </Header>
      <Grid item container lg={2}>
        <IconLabelButton text={'Add Team'} icon={<Add />} />
      </Grid>
    </React.Fragment>
  );
};
