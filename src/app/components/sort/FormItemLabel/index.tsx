import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type Props = {
  label?: string;
  value?: string;
  control: JSX.Element;
};

/* todo: specify the spacing globally */

const BaseComponent = styled(props => <FormControlLabel {...props} />)`
  && {
    margin-right: 0;
    & [class*='MuiFormControlLabel-label'] {
      font-size: 14px;
      font-weight: normal;
      padding-left: 8px;
    }
  }
`;

export const FormItemLabel = (props: Props) => {
  return <BaseComponent {...props} />;
};
