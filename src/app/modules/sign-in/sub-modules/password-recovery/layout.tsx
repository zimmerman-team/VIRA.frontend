import React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { BaseLayout } from 'app/modules/sign-in/common/BaseLayout';
import { Typography, Grid, Box, useMediaQuery } from '@material-ui/core';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { FormSingleLineField } from 'app/components/inputs/textfields/FormSingleLineField';
import { PasswordRecoveryLayoutModel } from 'app/modules/sign-in/sub-modules/password-recovery/models';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PasswordRecoveryLayout = (props: PasswordRecoveryLayoutModel) => {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <Grid item xs={12} lg={12}>
        <Typography variant="h3">
          {t('landing.recover_password.title')}
        </Typography>
        <Box width="100%" height="16px" />
      </Grid>

      <Grid item xs={12} lg={12}>
        <FormSingleLineField
          fullWidth
          label={t('landing.recover_password.email')}
          id="recovery-email"
          value={props.email}
          setValue={props.setEmail}
          placeholder="email@email.com"
          data-cy="login-email"
        />
      </Grid>

      <Grid
        container
        item
        xs={12}
        lg={12}
        css={`
          justify-content: flex-start;
          @media (max-width: 768px) {
            justify-content: center;
          }
        `}
      >
        <Grid
          item
          xs={12}
          css={`
            text-align: ${isMobileWidth ? 'center' : 'left'};
          `}
        >
          <ContainedButton
            css={`
              width: 132px;
            `}
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
      </Grid>
    </BaseLayout>
  );
};
