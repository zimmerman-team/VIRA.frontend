import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TeamUserCard } from 'app/components/surfaces/Cards/TeamUserCard';
import { HeaderFragment } from 'app/modules/super-admin/common/header';
import { Pagination } from 'app/components/misc/TablePagination';
import { PageModuleModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';

export const PageModel = (props: PageModuleModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* Header */}
    <Grid item container lg={12} direction="column">
      <HeaderFragment
        title={props.title}
        buttonLabel={`Add ${props.title.slice(0, props.title.length - 1)}`}
      />
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
