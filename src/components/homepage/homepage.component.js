import React, { Component } from 'react';
import Header from './header/header.component';
import { HomepageStyled } from './homepage.styles';
import AboutMe from './about-me/about-me.component';
import Portfolio from './portfolio/portfolio.component';
import Contact from './contact/contact.component';
import SocialMedia from './social-media/social-media.component';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Phone from '../../shared/components/phone/phone.component';

configureAnchors({offset: -40, scrollDuration: 200});

export default class Homepage extends Component {
  render() {
    return (
      <HomepageStyled>
        <Header/>
        <ScrollableAnchor id={'about-me'}>
          <AboutMe/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'portfolio'}>
          <Portfolio/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'social-media'}>
          <SocialMedia/>
        </ScrollableAnchor>
        <Phone/>
      </HomepageStyled>
    );
  }
}