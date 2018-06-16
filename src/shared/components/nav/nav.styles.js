import styled from 'styled-components';
import * as variables from '../../style-variables';

export const NavStyled = styled.nav`
  background-color: #fff;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: ${variables.screenSmax}) {
    height: 75px;
  }
  &.sticky {
    height: 75px;
    box-shadow: 0 5px 7px -4px rgba(0,0,0,0.29);
  }
  .language-switch {
    height: 30px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 20px;
    margin-top: -15px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${variables.screenSmax}) {
    display: none;
  }
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