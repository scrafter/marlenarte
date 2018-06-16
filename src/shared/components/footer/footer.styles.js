import styled from 'styled-components';
import * as variables from '../../../shared/style-variables';

export const FooterStyled = styled.footer`
  background-color: rgba(0, 0, 0, 0.9);
  padding: 45px 50px 15px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 22px;
  font-weight: 300;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .right {
    text-align: right;
    @media (max-width: ${variables.screenS}) {
      margin-top: 15px;
      text-align: left;
    }
  }
  .signiture {
    width: 100%;
    font-size: 14px;
    text-align: center;
    margin-top: 75px;
    @media (max-width: ${variables.screenS}) {
      margin-top: 35px;
    }
    a { 
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      &:hover { text-decoration: underline; }
    }
  }
`;