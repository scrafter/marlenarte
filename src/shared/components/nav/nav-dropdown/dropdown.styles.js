import styled from 'styled-components';
import * as variables from '../../../style-variables';

export const DropdownStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  @media (min-width: ${variables.screenM}) {
    display: none;
  }
  .btn {
    background-color: #fff;
    border-radius: 0;
    display: flex;
    align-items: center;
  }
  .dropdown-menu {
    width: 102vw;
    left: 10px !important;
  }
  .dropdown-item {
    padding: 12px 24px;
    font-weight: 300;
    font-size: 24px;
  }
`;