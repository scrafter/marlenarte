import styled from 'styled-components';
import img from '../../../assets/images/header-bg.png';
import imgMobile from '../../../assets/images/header-bg-mobile.jpg';
import * as variables from '../../../shared/style-variables';

export const HeaderStyled = styled.header`
  font-family: 'Poiret One', cursive;
  width: 100%;
  height: 500px;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
  background: url(${img}) no-repeat center;
  @media (max-width: ${variables.screenS}) {
    background: url(${imgMobile}) no-repeat center;
    background-size: 100%;
  }
`;

export const H1Styled = styled.h1`
  font-size: 72px;
  margin-bottom: 35px;
  color: #fff;
  font-style: italic;
  text-align: center;
`;

export const H3Styled = styled.h3`
  font-size: 36px;
  color: #fff;
  font-weight: 300;
  font-style: italic;
`;