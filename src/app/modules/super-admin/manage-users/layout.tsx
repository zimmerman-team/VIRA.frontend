import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ManageUsersLayoutModel } from 'app/modules/super-admin/manage-users/models';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { InPageNavigation } from 'app/components/navigation/InPageNavigation';
import { TeamUserCard } from 'app/components/surfaces/Cards/TeamUserCard';
import { HeaderFragment } from 'app/modules/super-admin/common/header';
import styled from 'styled-components/macro';
import { Pagination } from 'app/components/misc/TablePagination';

const GridContainer = styled(Grid)`
  && {
    margin: 0;
  }
`;

export const ManageUsersLayout = (props: ManageUsersLayoutModel) => {
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* breadcrumbs */}

      <BreadCrumbs {...props.breadcrumbs} />

      {/* ---------------------------------------------------------------------*/}
      {/* InPageNavigation fragment */}
      <InPageNavigation {...props.inPageNavigation} />

      {/* ---------------------------------------------------------------------*/}
      {/* Header */}
      <HeaderFragment title={props.title} />

      {/* ---------------------------------------------------------------------*/}
      {/* Cards */}
      <GridContainer container justify={'space-between'} spacing={3}>
        {props.teamCards.map((card, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <TeamUserCard {...card} />
          </Grid>
        ))}
      </GridContainer>

      {/* ---------------------------------------------------------------------*/}
      {/* Pagination */}
      <Grid container justify={'flex-end'}>
        <Pagination {...props.pagination} />
      </Grid>
    </React.Fragment>
  );
};
