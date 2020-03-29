/* eslint-disable @typescript-eslint/no-unused-vars */
import Grid from '@material-ui/core/Grid';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import React from 'react';
import styled from 'styled-components/macro';

type BottomNavModel = {
  next: Function;
  back: Function;
  submit: Function;
  saveDraft: Function;
  nextDisabled: boolean;
  backDisabled: boolean;
  showSubmitBtn: boolean;
  showDraftSubmitBtn: boolean;
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
  <Grid container item xs={12} lg={12} justify="space-between">
    <Grid item>
      <ContainedButton
        text="Back"
        onClick={props.back}
        disabled={props.backDisabled}
      />
    </Grid>
    <Grid item>
      <div>
        {props.showDraftSubmitBtn && (
          <React.Fragment>
            <ContainedButton text="Save as Draft" onClick={props.saveDraft} />
            <div
              css={`
                width: 24px;
                display: inline-flex;
              `}
            />
          </React.Fragment>
        )}
        {props.showSubmitBtn ? (
          <ContainedButton text="Submit" onClick={props.submit} />
        ) : (
          <ContainedButton
            text="Next"
            onClick={props.next}
            disabled={props.nextDisabled}
          />
        )}
      </div>
    </Grid>
  </Grid>
);
