import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import { ContactsCardModel } from 'app/components/surfaces/Cards/ContactsCard/model';
import {
  CardHeader,
  Card,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import { Email } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import { ProjectPalette } from 'app/theme';

const StyledEmailIcon = styled(Email)`
  color: ${ProjectPalette.primary.main};
`;

export function ContactsCard(props: ContactsCardModel) {
  return (
    <Card>
      <CardHeader title={props.title} />
      <CardContent>
        <Grid container direction="column" spacing={3}>
          <Grid container item direction="row">
            <StyledEmailIcon />
            <Box width="16px" />
            <Typography variant="body1">{props.email}</Typography>
          </Grid>

          <Grid container item direction="row">
            <StyledEmailIcon />
            <Box width="16px" />
            <Typography variant="body1">{props.phonenumber}</Typography>
          </Grid>

          <Grid container item direction="row">
            <StyledEmailIcon />
            <Box width="16px" />
            <Typography variant="body1">{props.ufo}</Typography>
          </Grid>

          <Grid container item direction="row">
            <StyledEmailIcon />
            <Box width="16px" />
            <Typography variant="body1">{props.address}</Typography>
          </Grid>

          <Grid
            item
            css={`
              align-self: flex-end;
            `}
          >
            <Box
              width="144px"
              height="72px"
              bgcolor="#000000"
              alignSelf="flex-end"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
