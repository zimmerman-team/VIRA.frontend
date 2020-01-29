/* eslint-disable @typescript-eslint/no-unused-vars */
import Grid from '@material-ui/core/Grid';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import React from 'react';
import styled from 'styled-components';

type BottomNavModel = {
  next: Function;
  back: Function;
  submit: Function;
  nextDisabled: boolean;
  backDisabled: boolean;
  showSubmitBtn: boolean;
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
    <ContainedButton
      text="Back"
      onClick={props.back}
      disabled={props.backDisabled}
    />
    {props.showSubmitBtn ? (
      <ContainedButton text="Submit" onClick={props.submit} />
    ) : (
      <ContainedButton
        text="Next"
        onClick={props.next}
        disabled={props.nextDisabled}
      />
    )}
  </Grid>
);
