import styled from 'styled-components';
import img from '../../../assets/images/header-bg.png';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 500px;
  background-size: cover;
  background: url(${img}) center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
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
  font-style: italic;
`;