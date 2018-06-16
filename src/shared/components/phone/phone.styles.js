import styled from 'styled-components';
import * as variables from '../../style-variables';

export const PhoneStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: #2ecc71;
  position: fixed;
  bottom: 10px;
  right: 10px;
  box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
  @media (min-width: ${variables.screenM}) {
    display: none;
  }
`;