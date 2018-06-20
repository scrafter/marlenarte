import styled from 'styled-components';
import * as variables from '../../../../shared/style-variables';

export const PortfolioItemStyled = styled.div`
  width: calc(50% - 50px);
  margin-bottom: 90px;
  position: relative;
  cursor: pointer;
  @media (max-width: ${variables.screenMmax}) {
    width: 100%;
    margin-bottom: 50px;
  }
  @media (max-width: ${variables.screenSmax}) {
    margin-bottom: 25px;
  }
  
  .photo-box {
    margin-bottom: 30px;
    width: 100%;
    padding-bottom: 100%;
    background-size: cover;
    background-position: center;
  }
  
  p {
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 300;
    color: #000;
    line-height: 1.5em;
  }
`;