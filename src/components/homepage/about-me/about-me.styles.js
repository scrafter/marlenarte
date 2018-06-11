import styled from 'styled-components';

export const AboutMeStyled = styled.section`
  padding: 75px 150px;
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
  
  &:before {
    content: '"';
    font-size: 270px;
    font-weight: 300;
    color: #000;
    position: absolute;
    left: -90px;
    top: 50px;
  }
`;

export const WhatIDo = styled.div`
  display: flex;
  justify-content: space-between;
`;