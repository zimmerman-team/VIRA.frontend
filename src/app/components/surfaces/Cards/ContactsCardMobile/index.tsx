import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import { ContactsCardModel } from 'app/components/surfaces/Cards/ContactsCard/model';
import { Typography, Grid } from '@material-ui/core';
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

export function ContactsCardMobile(props: ContactsCardModel) {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12}>
        <div
          css={`
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
          `}
        >
          {props.title}
        </div>
      </Grid>

      <Box width="100%" height="20px" />
      <Grid container item xs={12} xl={12} direction="row">
        <StyledEmailIcon />
        <Box width="18px" />
        <Typography variant="body1">{props.email}</Typography>
      </Grid>

      <Box width="100%" height="20px" />
      {/* hide the phone number element when no phone number is present */}
      {props.phonenumber && (
        <React.Fragment>
          <Grid container item xs={12} xl={12} direction="row">
            <StyledPhoneIcon />
            <Box width="18px" />
            <Typography variant="body1">{props.phonenumber}</Typography>
          </Grid>
          <Box width="100%" height="20px" />
        </React.Fragment>
      )}

      <Grid container item xs={12} xl={12} direction="row">
        <StyledGlobeIcon />
        <Box width="18px" />
        <Typography variant="body1">{props.address}</Typography>
      </Grid>
    </React.Fragment>
  );
}
