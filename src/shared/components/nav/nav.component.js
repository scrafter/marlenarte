import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavStyled, StyledList, StyledListItem } from './nav.styles';
import NavDropdown from './nav-dropdown/dropdown.component';
import propTypes from 'prop-types';

export default class Nav extends Component {
  flags = {
    pl: 'gb',
    en: 'pl',
  };

  static propTypes = {
    language: propTypes.string.isRequired,
    onLanguageChange: propTypes.func.isRequired,
  };

  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrolled: false,
    };
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
        <div className={'language-switch flag-icon flag-icon-' + this.flags[this.props.language]}
            onClick={this.props.onLanguageChange}></div>
        <StyledList class={this.state.open ? 'open' : ''}>
          <StyledListItem>
            <a href="#about-me">
              <FormattedMessage id="NAV.ABOUT_ME"/>
            </a>
          </StyledListItem>
          <StyledListItem>
            <a href="#portfolio">
              <FormattedMessage id="NAV.PORTFOLIO"/>
            </a>
          </StyledListItem>
          <StyledListItem>
            <a href="#contact">
              <FormattedMessage id="NAV.CONTACT"/>
            </a>
          </StyledListItem>
          <StyledListItem>
            <a href="#social-media">
              <FormattedMessage id="NAV.SOCIAL_MEDIA"/>
            </a>
          </StyledListItem>
        </StyledList>
        <NavDropdown/>
      </NavStyled>
    );
  }
}