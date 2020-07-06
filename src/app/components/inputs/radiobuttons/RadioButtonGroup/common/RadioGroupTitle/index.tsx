/* core */
import React from 'react';
/* third-party */
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';

type Props = {
  title: string;
  tip?: string | React.ReactNode;
};

const GroupTitle = styled(props => <FormLabel {...props} />)`
  && {
    color: black;
    font-size: 12px;
    font-weight: normal;
  }
`;
