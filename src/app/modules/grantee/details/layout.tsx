import React from 'react';
import Page from 'app/modules/common/Page/index';
import { Box, Container, Grid } from '@material-ui/core';
import { GranteeDetailModel } from 'app/modules/grantee/details/model';
import TableModule from 'app/components/datadisplay/Table';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';

export const GranteeDetailLayout = (props: GranteeDetailModel) => {
  return (
    <>
      <Page>
        <Grid container>
          <BreadCrumbs
            currentLocation={props.breadcrumbs.currentLocation}
            previousLocations={props.breadcrumbs.previousLocations}
          />
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
