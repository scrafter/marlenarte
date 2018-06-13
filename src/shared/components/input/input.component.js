import React, { Component } from 'react';
import { InputStyled } from './input.styles';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class Input extends Component {
  static propTypes = {
    type: propTypes.string,
    placeholder: propTypes.string,
  };

  render() {
    return (
      <InputStyled>
        <FormattedMessage id={this.props.placeholder}>
          {(msg) => <input type={this.props.type} placeholder={msg} />}
        </FormattedMessage>
      </InputStyled>
    );
  }
}