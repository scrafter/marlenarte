import React, { Component } from 'react';
import { TextareaStyled } from './textarea.styles';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class Textarea extends Component {
  static propTypes = {
    placeholder: propTypes.string,
  };

  render() {
    return (
      <TextareaStyled>
        <FormattedMessage id={this.props.placeholder}>
          {(msg) => <textarea placeholder={msg}></textarea>}
        </FormattedMessage>
      </TextareaStyled>
    );
  }
}