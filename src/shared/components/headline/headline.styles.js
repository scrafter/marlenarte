import styled from 'styled-components';

export const Headline = styled.h1`
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  position: relative;
  margin-bottom: 100px;
  
  &:after {
    content: "";
    height: 2px;
    width: 40px;
    background-color: #000;
    position: absolute;
    bottom: -40px;
    left: 50%;
    margin-left: -20px;
  }
`;

export const HeadlineWhite = styled(Headline)`
  color: #fff;
  &:after { display: none; }
`;