import React from 'react';
import 'styled-components/macro';
import { ProjectPalette } from 'app/theme';
import IconSearch from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

type Props = {
  value: string;
  setValue: Function;
};

const StyledInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      fontSize: 14,
      color: ProjectPalette.common.white,
    },
  })
)(InputBase);

export const SearchField = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <div
      css={`
        width: 100%;
        height: 36px;
        display: flex;
        padding-left: 24px;
        padding-right: 12px;
        align-items: center;
        justify-content: space-between;
        background-color: ${ProjectPalette.primary.light};
      `}
    >
      <StyledInput
        autoFocus
        fullWidth
        value={props.value}
        placeholder={t('search.placeholder')}
        onChange={e => props.setValue(e.target.value)}
      />
      <IconSearch
        css={`
          color: white;
        `}
      />
    </div>
  );
};
