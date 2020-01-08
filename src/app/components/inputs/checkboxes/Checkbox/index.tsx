/* external */
import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import BaseCheckbox from '@material-ui/core/Checkbox';
import SvgIcon from '@material-ui/core/SvgIcon';

/* project */
import IconCheckboxUnchecked from 'app/assets/icons/IconCheckboxUnchecked';
import { ProjectPalette } from 'app/theme';

type Props = {
  size?: string;
  label?: string;
  color?: string;
  value?: any;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

// If you want to customize the icons used for the checked/unchecked state
// import the component you want to use and wrap it with <SvgIcon>

const Unnchecked = (
  <SvgIcon>
    <IconCheckboxUnchecked color={ProjectPalette.grey['900']} />
  </SvgIcon>
);

export const Checkbox = styled(props => (
  <BaseCheckbox
    {...props}
    disableRipple
    icon={Unnchecked}
    // in case you want to customize the checked state use the
    // checkIcon property and pass it a component like {ComponentName}
    // and not like {<ComponentName/>}
    color="secondary"
  />
))`
  && {
    & [class*='MuiSvgIcon-root'] {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
