import styled from 'styled-components';
import * as variables from '../../../../shared/style-variables';

export const WhatIDoItem = styled.div`
  width: calc(33.33% - 1px);
  height: 0;
  padding-bottom: 33.33%;
  background-color: #232424;
  color: #fff;
  font-size: 42px;
  font-weight: 300;
  line-height: 2.5em;
  text-transform: uppercase;
  word-spacing: 99999px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  @media (max-width: ${variables.screenM}) {
    width: 70%;
    padding-bottom: 70%;
    &:not(:last-of-type) {
      margin-bottom: 1px;
    }
  }
  @media (max-width: ${variables.screenXS}) {
    font-size: 32px;
    width: 90%;
  }
  
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;