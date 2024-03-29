import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { TitleFragment } from 'app/modules/common/components/TitleParams';
import { css } from 'styled-components/macro';
import { Box } from '@material-ui/core';
import {
  privacyDescriptionMock,
  PrivacyModuleItemsMock,
} from 'app/modules/privacy/mock';
import { useTranslation } from 'react-i18next';

/* todo: this module is a it convoluted, let's refactor asap */
const style: any = {
  description: css`
    line-height: 1.5;
    font-size: 20px;
  `,
  paragraphTitle: css`
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-bottom: 24px;
  `,
  paragraphBody: css`
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.5px;
    color: #1b1b1b;
  `,
};
export const PrivacyModule = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      {/* ---------------------------------------------------------------------*/}
      {/* title fragment */}
      <Grid data-cy="privacy-page-title" item container xs={12} lg={12}>
        <TitleFragment title="Insinger Stichting Privacy Verklaring" />
      </Grid>

      {/* ---------------------------------------------------------------------*/}
      {/* content */}
      <Grid data-cy="privacy-page-description" item xs={12} lg={12}>
        <Typography css={style.description}>
          {t(privacyDescriptionMock)}
        </Typography>
        <Box height="32px" width="100%" />
      </Grid>
      {PrivacyModuleItemsMock.map((privacyItem, index) => (
        <Grid item xs={12} lg={12}>
          <Typography
            data-cy={`privacy-item-${index}-title`}
            css={style.paragraphTitle}
          >
            {`${index + 1}. ${t(privacyItem.title)}`}
          </Typography>
          <Typography
            data-cy={`privacy-item-${index}-description`}
            css={style.paragraphBody}
          >
            {t(privacyItem.description)}
          </Typography>
          {privacyItem.listItems &&
            privacyItem.listItems.map((lItem: any) => (
              <>
                <Typography css={style.paragraphBody}>
                  {t(lItem.description)}
                </Typography>
                <ul>
                  {lItem.items.map((item: string) => (
                    <li>
                      <Typography css={style.paragraphBody}>
                        {t(item)}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </>
            ))}
        </Grid>
      ))}
    </React.Fragment>
  );
};
