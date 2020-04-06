import React from 'react';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconChecked from 'app/assets/icons/IconChecked';
import IconUnchecked from 'app/assets/icons/IconUnchecked';
import { ProjectPalette } from 'app/theme';

type Props = {
  size?: string;
  label?: string;
};

const Unnchecked = (
  <SvgIcon>
    <IconUnchecked color={ProjectPalette.grey.A700} />
  </SvgIcon>
);

const Checked = (
  <SvgIcon>
    <IconChecked color={ProjectPalette.secondary.light} />
  </SvgIcon>
);

export const RadioButton = styled(props => (
  <Radio
    {...props}
    disableRipple
    icon={Unnchecked}
    checkedIcon={Checked}
    color="primary"
  />
))`
  && {
    & [class*='MuiIconButton-label'] {
      height: 20px;
      width: 20px;
    }

    & [class*='MuiSvgIcon-root'] {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
