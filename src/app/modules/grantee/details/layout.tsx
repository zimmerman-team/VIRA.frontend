import React from 'react';
import Page from 'app/modules/common/Page/index';
import { Box, Container, Grid } from '@material-ui/core';
import { GranteeDetailModel } from 'app/modules/grantee/details/model';
import TableModule from 'app/components/datadisplay/Table';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { ContactsCard } from 'app/components/surfaces/Cards/ContactsCard';

export const GranteeDetailLayout = (props: GranteeDetailModel) => {
  return (
    <>
      <Page
        title={props.title}
        subtitle={props.subtitle}
        breadcrumbs={props.breadcrumbs}
      >
        <Grid container direction="row" spacing={3}>
          <Grid item xs={6}>
            <ContactsCard
              title={props.contactsCard.title}
              email={props.contactsCard.email}
              phonenumber={props.contactsCard.phonenumber}
              ufo={props.contactsCard.ufo}
              address={props.contactsCard.address}
            />
          </Grid>
          <Grid item xs={6}>
            <ContactsCard
              title={props.contactsCard.title}
              email={props.contactsCard.email}
              phonenumber={props.contactsCard.phonenumber}
              ufo={props.contactsCard.ufo}
              address={props.contactsCard.address}
            />
          </Grid>
          <Box width="100%" height="24px" />
        </Grid>

        <Grid container>
          <InPageNavigation
            locations={props.inpageNavigation.locations}
            activity={props.inpageNavigation.activity}
          />
          <Box height="32px" width="100%" />
          <Grid item xs={12}>
            <TableModule
              title={props.datatable.title}
              data={props.datatable.data}
              columns={props.datatable.columns}
              options={props.datatable.options}
            />
          </Grid>
        </Grid>
      </Page>
      <Box height="40px" width="100%" />
    </>
  );
};
