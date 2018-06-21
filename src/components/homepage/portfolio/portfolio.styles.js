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
  .tabs {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 40px;
    @media (max-width: ${variables.screenXS}) {
      flex-direction: column;
    }
  }
  button {
    border: 0;
    background-color: #fff;
    color: #ccc;
    font-size: 24px;
    font-weight: 300;
    transition: 0.3s all linear;
    cursor: pointer;
    &:not(:last-of-type) {
      margin-right: 20px;
      @media (max-width: ${variables.screenXS}) {
        margin-right: 0;
      }
    }
    &.active { color: #000; }
    &:active,
    &:focus {
      outline: none;
    }
    &:hover {
      color: #000;
    }
  }
  h1 {
    margin-bottom: 100px;
    @media (max-width: ${variables.screenSmax}) {
      margin-bottom: 80px;
    }
  }
`;