import styled from 'styled-components';
import * as variables from '../../../shared/style-variables';

export const AboutMeStyled = styled.section`
  padding: 75px 150px;
  @media (max-width: ${variables.screenMmax}) {
    padding: 75px 50px;
  }
  @media (max-width: ${variables.screenS}) {
    padding: 75px 20px;
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
  @media (max-width: ${variables.screenM}) {
    flex-wrap: wrap;
  }
`;