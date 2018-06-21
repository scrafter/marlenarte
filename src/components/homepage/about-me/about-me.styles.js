import styled from 'styled-components';
import * as variables from '../../../shared/style-variables';

export const AboutMeStyled = styled.section`
  padding: 75px 150px;
  @media (max-width: ${variables.screenMmax}) {
    padding: 75px 50px;
  }
  @media (max-width: ${variables.screenS}) {
    padding: 10px 20px 75px;
  }
  h2 {
    @media (max-width: ${variables.screenSmax}) {
      margin-bottom: 50px;
    }
  }
`;

export const AboutMeDescription = styled.p`
  font-size: 26px;
  line-height: 2.5em;
  color: #838383;
  font-weight: 300;
  text-align: justify;
  text-indent: 3em;
  position: relative;
  margin-bottom: 110px;
  @media (max-width: ${variables.screenSmax}) {
    line-height: 1.5em;
    font-size: 22px;
    text-indent: 3.5em;
    margin-bottom: 30px;
  }
  .mdi-icon {
    position: absolute;
    left: -50px;
    top: -60px;
    @media (max-width: ${variables.screenS}) {
      left: -30px;
    } 
  }
`;

export const WhatIDo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > div:last-of-type {
     line-height: 1.7em;
    @media (min-width: ${variables.screenM}) {
      margin: 2px auto 0;
    }
  }
  @media (max-width: ${variables.screenSmax}) {
    justify-content: center;
  }
`;