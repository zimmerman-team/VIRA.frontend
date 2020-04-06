// @ts-nocheck
/* base */
import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import 'styled-components/macro';

/* components */
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { LayoutModel } from 'app/modules/sign-in/models';
import { PasswordTextField } from 'app/components/inputs/textfields/PasswordTextField';
import { FormSingleLineField } from 'app/components/inputs/textfields/FormSingleLineField';
import { Grid, Typography, Box } from '@material-ui/core/';

const Link = styled(RouteLink)`
  color: #d7d8d9;
  font-size: 12px;
  margin: 5px 0 45px 0;
  text-decoration: none;

  &:hover {
    color: rgba(0, 0, 0, 0.87);
  }
`;

const Form = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const InputForm = (props: LayoutModel) => {
  return (
    <Form>
      <Typography variant="h3" data-cy="sign-in-title">
        Sign in
      </Typography>
      <Box height="41px" />
      <FormSingleLineField
        fullWidth
        label="Email"
        id="login-email"
        value={props.email}
        setValue={props.setEmail}
        data-cy="login-email"
      />
      <PasswordTextField
        fullWidth
        label="Password"
        id="login-password"
        value={props.password}
        showPass={props.showPass}
        setValue={props.setPassword}
        setShowPass={props.setShowPass}
        data-cy="login-password"
      />
      <Link to="/recover-password">Forgot password</Link>
      <Grid item xs={3}>
        <ContainedButton
          text="Sign in"
          data-cy="login-button"
          onClick={() => props.signInAction()}
          disabled={props.email === '' || props.password === ''}
        />
      </Grid>
    </Form>
  );
};
