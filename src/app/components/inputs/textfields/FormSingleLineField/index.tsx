import styled from 'styled-components';
import { SingleMultiLineTextField } from '../SingleMultiLineTextField';

export const FormSingleLineField = styled(SingleMultiLineTextField)`
  && {
    margin-bottom: 45px;
    @media (max-width: 768px) {
      color: black;
    }
  }
`;
