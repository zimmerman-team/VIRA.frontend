import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { AdminManageOverviewToolbar } from 'app/modules/super-admin/common/header';
import { TeamUserCard } from 'app/components/surfaces/Cards/TeamUserCard';
import { Pagination } from 'app/components/misc/TablePagination';
import { PageModuleModel } from 'app/modules/super-admin/sub-modules/manage-users-teams/models';
import { Add } from '@material-ui/icons';

import { useTranslation } from 'react-i18next';
import 'styled-components/macro';
import { AdminAddButton } from 'app/components/inputs/buttons/AdminAddButton';

export const AdminManageOverviewLayout = (props: PageModuleModel) => {
  const history = useHistory();
  const { t } = useTranslation();
  return (
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
        <Typography
          variant="h6"
          css={`
            && {
              font-size: 20px;
              font-weight: 600;
              line-height: 1.5;
              margin-left: 16px;
            }
          `}
        >
          {t(props.title)}
        </Typography>
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
        <AdminAddButton
          text={t(props.addBtnText)}
          icon={<Add />}
          onClick={() => {
            history.push(`${history.location.pathname}/add`);
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
};
