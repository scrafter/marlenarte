import styled from 'styled-components';

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
  position: relative;
  
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;