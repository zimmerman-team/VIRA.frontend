import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ManageUsersLayoutModel } from 'app/modules/super-admin/manage-users/models';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { TeamUserCard } from 'app/components/surfaces/Cards/TeamUserCard';
import { HeaderFragment } from 'app/modules/super-admin/common/header';
import styled from 'styled-components/macro';
import { Pagination } from 'app/components/misc/TablePagination';
import { TabNavigator } from 'app/modules/list-module/common/TabNavigator';
import { TabNavMock } from 'app/modules/list-module/mock';

export const ManageUsersLayout = (props: ManageUsersLayoutModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* breadcrumbs */}

    <Grid item lg={12}>
      <BreadCrumbs {...props.breadcrumbs} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* InPageNavigation fragment */}
    {/*<InPageNavigation {...props.inPageNavigation} />*/}

    {/* using this element as an helper */}
    <Grid item lg={9} />

    {/* ------------------------------------------------------------------ */}
    {/* projects table navigation */}
    <Grid item lg={3}>
      <TabNavigator {...TabNavMock} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* Header */}
    <Grid item container lg={12} direction="column">
      <HeaderFragment title={props.title} />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* Cards */}

    {props.teamCards.map((card, index) => (
      <Grid item xs={12} lg={4} key={index}>
        <TeamUserCard {...card} />
      </Grid>
    ))}

    {/* ---------------------------------------------------------------------*/}
    {/* Pagination */}
    <Grid item lg={12} container justify={'flex-end'}>
      <Pagination {...props.pagination} />
    </Grid>
  </React.Fragment>
);
