import styled from 'styled-components';
import * as variables from '../../shared/style-variables';

export const HomepageStyled = styled.div`
  margin-top: 150px;
  @media (max-width: ${variables.screenSmax}) {
    margin-top: 75px;
  }
`;