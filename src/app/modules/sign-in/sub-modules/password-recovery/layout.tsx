import React from 'react';
import Grid from '@material-ui/core/Grid';
import { PasswordRecoveryLayoutModel } from 'app/modules/sign-in/sub-modules/password-recovery/models';
import { FormSingleLineField } from 'app/components/inputs/textfields/FormSingleLineField';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import { GroupImage } from 'app/assets/images/group';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const PasswordRecoveryLayout = (props: PasswordRecoveryLayoutModel) => {
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
            <Typography
              variant="h3"
              css={`
                && {
                  margin-bottom: 41px;
                }
              `}
            >
              Recover password
            </Typography>
            <FormSingleLineField
              css={`
                width: 392px;
              `}
              label="Your email"
              id="recovery-email"
              value={props.email}
              placeholder="email@email.com"
              data-testid="login-email"
            />
            <Grid item xs={3}>
              <ContainedButton
                text="Send"
                onClick={() => console.log('click!')}
                data-testid="login-button"
              />
            </Grid>
          </Form>
        </Container>
      </Grid>
    </Grid>
  );
};
