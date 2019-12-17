import React from 'react';
import styled from 'styled-components';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import Grid from '@material-ui/core/Grid';

type BottomNavModel = {
  next: Function;
  back: Function;
};

const Container = styled.div`
  bottom: 0;
  width: 100%;
  display: flex;
  margin-top: 50px;
  position: sticky;
  padding: 20px 32px;
  flex-direction: row;
  background-color: #fafafa;
  justify-content: space-between;
`;

export const BottomNav = (props: BottomNavModel) => (
  <Grid item container lg={12} justify="space-between">
    <ContainedButton text="Back" onClick={props.back} />

    <ContainedButton text="Next" onClick={props.next} />
  </Grid>
);
