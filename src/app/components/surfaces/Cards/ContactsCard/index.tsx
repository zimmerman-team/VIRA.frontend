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
import { Email, Public, Phone } from '@material-ui/icons';
import Box from '@material-ui/core/Box';
import { ProjectPalette } from 'app/theme';

const StyledEmailIcon = styled(Email)`
  color: ${ProjectPalette.primary.main};
`;

const StyledGlobeIcon = styled(Public)`
  color: ${ProjectPalette.primary.main};
`;

const StyledPhoneIcon = styled(Phone)`
  color: ${ProjectPalette.primary.main};
`;

export function ContactsCard(props: ContactsCardModel) {
  return (
    <Card>
      <CardHeader title={props.title} />
      <CardContent>
        <Grid container direction="column" spacing={3}>
          <Grid container item xs={12} xl={12} direction="row">
            <StyledEmailIcon />
            <Box width="16px" />
            <Typography variant="body1">{props.email}</Typography>
          </Grid>

          {props.phonenumber && (
            <Grid container item xs={12} xl={12} direction="row">
              <StyledPhoneIcon />
              <Box width="16px" />
              <Typography variant="body1">{props.phonenumber}</Typography>
            </Grid>
          )}

          <Grid container item xs={12} xl={12} direction="row">
            <StyledGlobeIcon />
            <Box width="16px" />
            <Typography variant="body1">{props.address}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
