import React, { Component } from 'react';
import { H1Styled, H3Styled, HeaderStyled } from './header.styles';
import { FormattedMessage } from 'react-intl';
import ParticleEffectButton from 'react-particle-effect-button';

export default class Header extends Component {
  state = {
    hidden: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({hidden: false}));
  }

  render() {
    return (
      <HeaderStyled>
        <ParticleEffectButton type="rectangle"
                              style="fill"
                              color="#FFF"
                              size={() => 5}
                              speed={() => 5}
                              particlesAmountCoefficient={20}
                              hidden={this.state.hidden}>
          <H1Styled>Marlena Misiewicz</H1Styled>
        </ParticleEffectButton>
        <H3Styled>
          <FormattedMessage id="HEADER.ARTIST"/>
        </H3Styled>
      </HeaderStyled>
    );
  }
}