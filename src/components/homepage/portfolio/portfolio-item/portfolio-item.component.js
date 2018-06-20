import React, { Component } from 'react';
import { PortfolioItemStyled } from './portfolio-item.styles';
import propTypes from 'prop-types';

export default class PortfolioItem extends Component {
  static propTypes = {
    picture: propTypes.string.isRequired,
    parameters: propTypes.object,
    onOpen: propTypes.func,
  };

  render() {
    const { parameters } = this.props;
    return (
      <PortfolioItemStyled>
        <div className="photo-box"
             onClick={() => this.props.onOpen(this.props.picture)}
             style={{'backgroundImage': `url(${this.props.picture})`}}></div>
        {parameters && Object.keys(parameters).map((key, index) => (
          <p key={index}>
            {key}: <strong>{parameters[key]}</strong>
          </p>
          ))}
      </PortfolioItemStyled>
    );
  }
}