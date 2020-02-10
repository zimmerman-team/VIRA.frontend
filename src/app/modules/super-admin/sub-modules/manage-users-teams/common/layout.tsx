import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { AdminManageOverviewToolbar } from 'app/modules/super-admin/common/header';
import { TeamUserCard } from 'app/components/surfaces/Cards/TeamUserCard';
import { Pagination } from 'app/components/misc/TablePagination';
import { PageModuleModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';
import { Add } from '@material-ui/icons';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';

import { css } from 'styled-components/macro';
export const AdminManageOverviewLayout = (props: PageModuleModel) => (
  <React.Fragment>
    {/* ---------------------------------------------------------------------*/}
    {/* Header */}
    <Grid
      item
      xs={12}
      lg={6}
      css={`
        display: flex;
        align-items: center;
      `}
    >
      <Typography variant="h6">{props.title}</Typography>
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* Tool bar */}
    <Grid item xs={12} lg={6}>
      <AdminManageOverviewToolbar
        sortOptions={props.sortOptions}
        onSortChange={props.onSortChange}
        searchValue={props.searchValue}
        onSearchChange={props.onSearchChange}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* button: add team / user */}

    <Grid item xs={12} lg={12}>
      <ContainedButton
        text={`Add ${props.title.slice(0, props.title.length - 1)}`}
        icon={<Add />}
        onClick={() => {
          props.history.push(`${props.location.pathname}/add`);
        }}
      />
    </Grid>

    {/* ---------------------------------------------------------------------*/}
    {/* Cards */}
    {props.teamCards.map((card, index) => (
      <Grid item xs={12} lg={4} key={card._id}>
        <TeamUserCard
          {...card}
          urlParam={props.urlParam}
          deleteUser={props.deleteUser}
        />
      </Grid>
    ))}

    {/* ---------------------------------------------------------------------*/}
    {/* Pagination */}
    <Grid item lg={12} container justify="flex-end">
      <Pagination {...props.pagination} />
    </Grid>
  </React.Fragment>
);