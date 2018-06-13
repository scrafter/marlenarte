import React, { Component } from 'react';
import Header from './header/header.component';
import { HomepageStyled } from './homepage.styles';
import AboutMe from './about-me/about-me.component';
import Portfolio from './portfolio/portfolio.component';
import Contact from './contact/contact.component';
import SocialMedia from './social-media/social-media.component';

export default class Homepage extends Component {
  render() {
    return (
      <HomepageStyled>
        <Header/>
        <AboutMe/>
        <Portfolio/>
        <Contact/>
        <SocialMedia/>
      </HomepageStyled>
    );
  }
}