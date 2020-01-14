import React from 'react';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { TeamUserCard } from 'app/components/surfaces/Cards/TeamUserCard';
import { HeaderFragment } from 'app/modules/super-admin/common/header';
import { Pagination } from 'app/components/misc/TablePagination';
import { PageModuleModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';

function PageModelF(props: PageModuleModel) {
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* Header */}
      <Grid item container lg={12} direction="column">
        <HeaderFragment
          title={props.title}
          buttonLabel={`Add ${props.title.slice(0, props.title.length - 1)}`}
          buttonClick={() => {
            props.history.push(`${props.location.pathname}/add`);
          }}
          sortOptions={props.sortOptions}
          onSortChange={props.onSortChange}
          searchValue={props.searchValue}
          onSearchChange={props.onSearchChange}
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* Cards */}
      {props.teamCards.map((card, index) => (
        <Grid item xs={12} lg={4} key={index}>
          <TeamUserCard {...card} urlParam={props.urlParam} />
        </Grid>
      ))}

      {/* ---------------------------------------------------------------------*/}
      {/* Pagination */}
      <Grid item lg={12} container justify="flex-end">
        <Pagination {...props.pagination} />
      </Grid>
    </React.Fragment>
  );
}

export const PageModel = withRouter(PageModelF);
