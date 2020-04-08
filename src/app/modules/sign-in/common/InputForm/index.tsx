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
import { useTranslation } from 'react-i18next';

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
  const { t, i18n } = useTranslation();

  return (
    <Form>
      <Typography data-cy="sign-in-title" variant="h3">
        {t('landing.sign_in.title')}
      </Typography>
      <Box height="41px" />
      <FormSingleLineField
        fullWidth
        label={t('landing.sign_in.email')}
        id="login-email"
        value={props.email}
        setValue={props.setEmail}
        data-cy="login-email"
      />
      <PasswordTextField
        fullWidth
        label={t('landing.sign_in.password')}
        id="login-password"
        value={props.password}
        showPass={props.showPass}
        setValue={props.setPassword}
        setShowPass={props.setShowPass}
        data-cy="login-password"
      />
      <Link to="/recover-password">{t('landing.sign_in.forgot_password')}</Link>
      <Grid item xs={3}>
        <ContainedButton
          text={t('landing.sign_in.button')}
          data-cy="login-button"
          onClick={() => props.signInAction()}
          disabled={props.email === '' || props.password === ''}
        />
      </Grid>
    </Form>
  );
};
