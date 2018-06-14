import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavStyled, StyledList, StyledListItem } from './nav.styles';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { scrolled: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ scrolled: window.scrollY >  150});
  }

  render() {
    return (
      <NavStyled className={this.state.scrolled ? 'sticky' : ''}>
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
