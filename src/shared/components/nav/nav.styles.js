import styled from 'styled-components';
import * as variables from '../../style-variables';

export const NavStyled = styled.nav`
  background-color: #fff;
  height: 150px;
  display: flex;
  justify-content: center;
  transition: all 0.3s linear;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  &.sticky {
    height: 75px;
    box-shadow: 0 5px 7px -4px rgba(0,0,0,0.29);
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledListItem = styled.li`
  font-size: 24px;
  font-weight: 300;
  margin: 0 25px;
  
  a {
    color: #000;
    text-decoration: none;
    transition: all 0.3s linear;
    
    &:hover {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;