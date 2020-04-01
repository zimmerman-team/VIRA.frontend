import 'styled-components/macro';
import React from 'react';
import { BaseCard } from 'app/modules/common/components/cards/common/BaseCard';
import { BaseCardParams } from 'app/modules/common/components/cards/common/BaseCard';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

export interface ContactCardParams extends BaseCardParams {
  name?: string;
  email?: string;
  phonenumber?: string[];
  street?: string;
  postcode?: string;
  city?: string;
  country?: string;
}
export const ContactCard = (props: ContactCardParams) => {
  const { t, i18n } = useTranslation();
  return (
    <BaseCard title={props.title}>
      <React.Fragment>
        <Typography variant="body1">{props.name}</Typography>
        <Typography variant="body1">{props.email}</Typography>
        <Typography variant="body1">{props.phonenumber}</Typography>
        <Typography variant="body1">{props.street}</Typography>
        <Typography variant="body1">{props.postcode}</Typography>
        <Typography variant="body1">{props.city}</Typography>
        <Typography variant="body1">{props.country}</Typography>
      </React.Fragment>
    </BaseCard>
  );
};
