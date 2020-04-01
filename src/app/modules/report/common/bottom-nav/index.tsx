/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronLeft } from '@material-ui/icons';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
import { useMediaQuery, Box, Grid } from '@material-ui/core';

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

const mobileBackStyle: any = css`
  max-width: 48px;
  min-width: 48px;
  max-height: 48px;
  min-height: 48px;
`;

const mobileButton: any = css`
  && {
    max-height: 48px;
    min-height: 48px;
  }
`;

const gridItem: any = css`
  && {
    display: flex;
  }
`;

export function BottomNav(props: BottomNavModel) {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');

  return (
    <Grid container item xs={12} lg={12} justify="space-between" wrap="nowrap">
      <Grid item xs={3}>
        <ContainedButton
          text={isMobileWidth ? '' : 'Back'}
          icon={isMobileWidth && <ChevronLeft />}
          onClick={props.back}
          disabled={props.backDisabled}
          css={isMobileWidth && mobileBackStyle}
        />
      </Grid>
      <Grid item xs={9} justify="flex-end" css={gridItem}>
        {props.showDraftSubmitBtn && (
          <React.Fragment>
            <ContainedButton
              text="Save as Draft"
              onClick={props.saveDraft}
              css={isMobileWidth && mobileButton}
            />
            <Box width={`${isMobileWidth ? '8px' : '24px'}`} />
          </React.Fragment>
        )}
        {props.showSubmitBtn ? (
          <ContainedButton
            text="Submit"
            onClick={props.submit}
            css={isMobileWidth && mobileButton}
          />
        ) : (
          <ContainedButton
            text="Next"
            onClick={props.next}
            disabled={props.nextDisabled}
            css={isMobileWidth && mobileButton}
          />
        )}
      </Grid>
    </Grid>
  );
}
