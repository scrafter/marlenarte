import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavStyled, StyledList, StyledListItem } from './nav.styles';

class Nav extends Component {

  render() {
    return (
      <NavStyled>
        <StyledList>
          <StyledListItem><FormattedMessage id="NAV.ABOUT_ME"/></StyledListItem>
          <StyledListItem><FormattedMessage id="NAV.PORTFOLIO"/></StyledListItem>
          <StyledListItem><FormattedMessage id="NAV.CONTACT"/></StyledListItem>
          <StyledListItem><FormattedMessage id="NAV.SOCIAL_MEDIA"/></StyledListItem>
        </StyledList>
      </NavStyled>
    );
  }
}

export default Nav;
