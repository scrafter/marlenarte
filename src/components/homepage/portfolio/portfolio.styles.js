import styled from 'styled-components';
import * as variables from '../../../shared/style-variables';

export const PortfolioStyled = styled.section`
  padding: 75px 150px 150px;
  
  @media (max-width: ${variables.screenSmax}) {
    padding: 0 20px 50px;
  }
  
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  h1 {
    margin-bottom: 150px;
    @media (max-width: ${variables.screenSmax}) {
      margin-bottom: 80px;
    }
  }
`;