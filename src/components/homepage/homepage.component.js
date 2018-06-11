import React, { Component } from 'react';
import Header from './header/header.component';
import { HomepageStyled } from './homepage.styles';
import AboutMe from './about-me/about-me.component';

export default class Homepage extends Component {
  render() {
    return (
      <HomepageStyled>
        <Header/>
        <AboutMe/>
      </HomepageStyled>
    );
  }
}