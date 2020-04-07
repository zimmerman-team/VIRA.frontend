import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BreadCrumbs } from 'app/components/navigation/Breadcrumbs';
import { SingleMultiLineTextField } from 'app/components/inputs/textfields/SingleMultiLineTextField';
import { ContainedButton } from 'app/components/inputs/buttons/ContainedButton';
import { Box, Typography } from '@material-ui/core';
import { ManageAccountModel } from 'app/modules/super-admin/sub-modules/manage-account/model';
import 'styled-components/macro';
import { useTranslation } from 'react-i18next';

export const ManageAccount = (props: ManageAccountModel) => {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* breadcrumbs */}
      <Grid item lg={12}>
        <BreadCrumbs
          currentLocation={props.breadcrumbs.currentLocation}
          previousLocations={props.breadcrumbs.previousLocations}
        />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* title fragment */}
      <Grid item container lg={6} direction="column">
        <Box width={'13px'} height={'13px'} />
        <Typography variant={'h6'}>{t(props.title)}</Typography>
        <Box width={'21px'} height={'21px'} />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* form */}
      <Grid item container xs={12} lg={12} direction={'column'}>
        <SingleMultiLineTextField
          id={'First Name'}
          label={t('First Name')}
          bigLabel
        />
        <Box width="100%" height="32px" />

        <SingleMultiLineTextField
          id={'Last Name'}
          label={t('Last Name')}
          bigLabel
        />
        <Box width="100%" height="32px" />

        <SingleMultiLineTextField id={'Email'} label={t('Email')} bigLabel />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* button */}
      <Grid item container xs={12} lg={12} justify={'flex-end'}>
        <ContainedButton
          text={t('Save')}
          onClick={() => console.log(props)}
          css={{ position: 'absolute', bottom: 32 }}
          disabled={
            props.form.firstName === '' ||
            props.form.lastName === '' ||
            props.form.email === ''
          }
        />
      </Grid>
    </React.Fragment>
  );
};
