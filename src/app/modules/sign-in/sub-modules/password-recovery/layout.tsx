import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PasswordRecoveryLayoutModel } from 'app/modules/sign-in/sub-modules/password-recovery/models';
import { FormSingleLineField } from 'app/components/inputs/textfields/FormSingleLineField';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Container, Typography, Box } from '@material-ui/core';
import styled from 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { GroupImage } from 'app/assets/images/group';
import { useTranslation } from 'react-i18next';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PasswordRecoveryLayout = (props: PasswordRecoveryLayoutModel) => {
  const { t, i18n } = useTranslation();

  return (
    <Grid
      container
      css={`
        height: 100vh;
      `}
    >
      {/*Left side*/}
      <Grid
        item
        xs={6}
        css={`
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${ProjectPalette.primary.main};
        `}
      >
        <GroupImage />
      </Grid>

      {/*Right side*/}
      <Grid
        item
        xs={6}
        css={`
          align-self: center;
        `}
      >
        <Container maxWidth="sm">
          <Form>
            <Typography variant="h3">
              {t('landing.recover_password.title')}
            </Typography>
            <Box height="41px" />
            <FormSingleLineField
              css={`
                width: 392px;
              `}
              label={t('landing.recover_password.email')}
              id="recovery-email"
              value={props.email}
              setValue={props.setEmail}
              placeholder="email@email.com"
              data-cy="login-email"
            />
            <Grid item xs={3}>
              <ContainedButton
                text={t('landing.recover_password.button')}
                onClick={props.onSubmit}
                data-cy="recovery-button"
                disabled={!props.submitEnabled}
              />
            </Grid>
            <Box height="10px" />
            <Typography data-cy="feedback-message" variant="subtitle2">
              {props.message}
            </Typography>
          </Form>
        </Container>
      </Grid>
    </Grid>
  );
};
