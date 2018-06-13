import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ButtonStyled } from './button.styles';
import { FormattedMessage } from 'react-intl';

export default class Button extends Component {
  static propTypes = {
    text: propTypes.string,
    type: propTypes.string,
  };
  render() {
    return (
      <ButtonStyled type={this.props.type}>
        <FormattedMessage id={this.props.text} />
      </ButtonStyled>
    );
  }
}