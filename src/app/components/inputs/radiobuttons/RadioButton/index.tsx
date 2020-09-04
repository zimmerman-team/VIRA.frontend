import React from 'react';
import { ProjectPalette } from 'app/theme';
import Radio from '@material-ui/core/Radio';
import styled from 'styled-components/macro';
import SvgIcon from '@material-ui/core/SvgIcon';
// import IconChecked from 'app/assets/icons/IconChecked';
// import IconUnchecked from 'app/assets/icons/IconUnchecked';

type Props = {
  size?: string;
  label?: string;
};

// const Unnchecked = (
//   <SvgIcon>
//     <IconUnchecked color={ProjectPalette.grey.A700} />
//   </SvgIcon>
// );

// const Checked = (
//   <SvgIcon>
//     <IconChecked color={ProjectPalette.secondary.light} />
//   </SvgIcon>
// );

export const RadioButton = styled((props) => (
  <Radio
    {...props}
    disableRipple
    color="primary"
    // icon={Unnchecked}
    // checkedIcon={Checked}
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
