import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 0.6);
  padding: 15px 90px 11px;
  font-size: 36px;
  border: none;
  font-weight: 300;
  float: right;
  cursor: pointer;
  transition: all 0.3s linear;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;