import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { ManageTeamEditLayoutModel } from 'app/modules/super-admin/sub-modules/manage-team-edit/models';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import 'styled-components/macro';
import TableModule from 'app/components/datadisplay/Table';
import { PageLoader } from 'app/modules/common/page-loader';
import { useTranslation } from 'react-i18next';
import { AdminSaveButton } from 'app/components/inputs/buttons/AdminSaveButton';

export const ManageTeamEditLayout = (props: ManageTeamEditLayoutModel) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* Loader */}
      {props.loading && <PageLoader />}
      {/* ---------------------------------------------------------------------*/}
      {/* Breadcrumbs */}
      <Grid item lg={12}>
        <BreadCrumbs {...props.breadcrumbs} />
      </Grid>

      <Box width="100%" height="10px" />

      {/* ---------------------------------------------------------------------*/}
      {/* form */}
      <Grid item container xs={12} lg={12} direction="column">
        <SingleMultiLineTextField
          bigLabel
          id="Edit Title"
          value={props.title}
          label={t(
            `user_management.team.${
              props.mode === 'edit' ? 'edit' : 'add'
            }_title`
          )}
          setValue={props.setTitle}
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* table */}
      <Grid
        item
        lg={12}
        xs={12}
        css={`
          overflow: hidden;
        `}
      >
        {/* todo: currently it's overflowing. thereby messing up the layout; we need to fix this */}
        <TableModule
          {...props.table}
          cssVariant="teamEditVariant"
          title="user_management.team.table_title"
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* button */}
      <Grid
        item
        container
        xs={12}
        lg={12}
        xl={12}
        css={`
          justify-content: flex-end;
          @media (max-width: 768px) {
            justify-content: flex-end;
          }
        `}
      >
        <Grid item xs={6} lg={2} xl={2}>
          <AdminSaveButton
            text={t('user_management.general.save_btn')}
            onClick={props.submit}
            disabled={!props.submitEnabled}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
