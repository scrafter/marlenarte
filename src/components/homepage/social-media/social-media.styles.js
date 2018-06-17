import styled from 'styled-components';
import * as variables from '../../../shared/style-variables';

export const SocialMediaStyled = styled.section`
  padding: 150px 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${variables.screenL}) {
    padding: 150px 50px;
  }
  @media (max-width: ${variables.screenSmax}) {
    padding: 70px 15px;
  }
  h1 {
    margin-bottom: 150px;
    @media (max-width: ${variables.screenSmax}) {
      margin-bottom: 85px;
    }
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
    @media (max-width: ${variables.screenS}) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .mdi-icon {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;