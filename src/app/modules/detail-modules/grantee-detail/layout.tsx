import React from 'react';
import Grid from '@material-ui/core/Grid';
import TableModule from 'app/components/datadisplay/Table';
import { ContactsCard } from 'app/components/surfaces/Cards/ContactsCard';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { GranteeTitleMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { Description } from 'app/modules/common/components/DescriptionParams';
import { GranteeDescriptionMock } from 'app/modules/detail-modules/grantee-detail/mock';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { GranteeProjectListMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { GranteeContactCardMock } from 'app/modules/detail-modules/grantee-detail/mock';
import { GranteeBreadCrumbsMock } from 'app/modules/detail-modules/grantee-detail/mock';

export const GranteeDetailLayout = (props: any) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}
    <Grid item lg={12}>
      <BreadCrumbs {...props.breadcrumbs} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* title fragment */}
    <Grid item container lg={6} direction="column">
      <TitleFragment {...props.title} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* project description */}
    <Grid item xs={12} lg={12}>
      <Description {...props.description} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* outcome charts */}
    <Grid item xs={12} lg={6}>
      <Card>
        <CardHeader title="Key outcomes" />
        <CardContent>charts</CardContent>
      </Card>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* contact card */}
    <Grid item xs={12} lg={6}>
      <ContactsCard {...props.contact} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* projects */}
    <Grid item xs={12} lg={12}>
      <TableModule {...props.projectTable} />
    </Grid>
  </React.Fragment>
);
