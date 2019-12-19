// @ts-nocheck
/* base */
import React from 'react';
import styled from 'styled-components';

/* components */
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { LayoutModel } from 'app/modules/sign-in/models';
import { FormPasswordField } from 'app/components/inputs/textfields/FormPasswordField';
import { FormSingleLineField } from 'app/components/inputs/textfields/FormSingleLineField';
import { Grid, Typography, Box } from '@material-ui/core/';

const Container = styled.div`
  && {
    top: 0;
    left: 0;
    height: 100vh;
    display: flex;
    min-width: 500px;
    overflow-y: auto;
    position: absolute;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }
`;

const Form = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Header = styled(Typography)`
  && {
    margin-bottom: 45px;
  }
`;

export const InputForm = (props: LayoutModel) => {
  return (
    <Form>
      <Typography variant="h3">Sign in</Typography>
      <Box height="41px" />
      <FormSingleLineField
        fullWidth
        label="Email"
        id="login-email"
        value={props.email}
        setValue={props.setEmail}
        data-testid="login-email"
      />
      <FormPasswordField
        fullWidth
        label="Password"
        id="login-password"
        value={props.password}
        showPass={props.showPass}
        setValue={props.setPassword}
        setShowPass={props.setShowPass}
        data-testid="login-password"
      />
      <Grid item xs={3}>
        <ContainedButton
          text="Sign in"
          data-testid="login-button"
          onClick={() => props.signInAction()}
          disabled={props.email === '' || props.password === ''}
        />
      </Grid>
    </Form>
  );
};
