import React, { Component } from 'react';
import { H1Styled, H3Styled, HeaderStyled } from './header.styles';
import { FormattedMessage } from 'react-intl';

export default class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <H1Styled>Marlena Misiewicz</H1Styled>
        <H3Styled>
          <FormattedMessage id="HEADER.ARTIST"/>
        </H3Styled>
      </HeaderStyled>
    );
  }
}