import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PasswordRecoveryLayoutModel } from 'app/modules/sign-in/sub-modules/password-recovery/models';
import { FormSingleLineField } from 'app/components/inputs/textfields/FormSingleLineField';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Typography, Box, Hidden, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { SignInDecoDesktop } from 'app/modules/sign-in/common/SignInDecoDesktop';
import { SignInDeco } from 'app/modules/sign-in/common/SignInDeco';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PasswordRecoveryLayout = (props: PasswordRecoveryLayoutModel) => {
  const isMobileWidth = useMediaQuery('(max-width: 600px)');
  const { t } = useTranslation();

  return (
    <Grid
      container
      css={`
        padding: ${isMobileWidth && '0 36px'};
        overflow: hidden;
        height: 100vh;
      `}
    >
      <Hidden smDown>
        <Grid container justify="flex-end" item sm={6} lg={6} md={6}>
          <div
            css={`
              z-index: 10;
              position: absolute;
            `}
          >
            <SignInDecoDesktop />
          </div>

          <div
            css={`
              left: -50vw;
              top: 0;
              position: absolute;
              width: 100vw;
              height: 100%;
              background-color: #242e42;
            `}
          />
        </Grid>
      </Hidden>

      <Hidden mdUp>
        <div
          css={`
            z-index: 10;
            top: 10px;
            left: 0;
            position: absolute;
          `}
        >
          <SignInDeco />
        </div>
      </Hidden>

      {/* Right side */}
      <Grid
        item
        xs={12}
        sm={12}
        lg={6}
        md={6}
        container
        css={`
          justify-content: center;
          align-items: center;
        `}
      >
        <Grid
          item
          xs={12}
          md={10}
          lg={8}
          container
          spacing={2}
          alignItems="flex-start"
          alignContent="flex-start"
        >
          <Grid item xs={12} lg={12}>
            <Typography variant="h3" css={``}>
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
        </Grid>
      </Grid>
    </Grid>
  );
};
