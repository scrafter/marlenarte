import React, { Component } from 'react';
import { H1Styled, H3Styled, HeaderStyled } from './header.styles';

export default class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <H1Styled>Marlena Misiewicz</H1Styled>
        <H3Styled>Artystka</H3Styled>
      </HeaderStyled>
    );
  }
}