import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { MenuIcon } from 'mdi-react';
import { DropdownStyled } from './dropdown.styles';
import { FormattedMessage } from 'react-intl';

export default class NavDropdown extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <DropdownStyled>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>
            <MenuIcon/>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#about-me">
              <FormattedMessage id="NAV.ABOUT_ME"/>
            </DropdownItem>
            <DropdownItem href="#portfolio">
              <FormattedMessage id="NAV.PORTFOLIO"/>
            </DropdownItem>
            <DropdownItem href="#contact">
              <FormattedMessage id="NAV.CONTACT"/>
            </DropdownItem>
            <DropdownItem href="#social-media">
              <FormattedMessage id="NAV.SOCIAL_MEDIA"/>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </DropdownStyled>
    );
  }
}