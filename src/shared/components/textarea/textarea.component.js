import React, { Component } from 'react';
import { TextareaStyled } from './textarea.styles';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class Textarea extends Component {
  static propTypes = {
    placeholder: propTypes.string,
    required: propTypes.bool,
    name: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange({[this.props.name]: e.target.value});
  }

  render() {
    return (
      <TextareaStyled>
        <FormattedMessage id={this.props.placeholder}>
          {(msg) =>
            <textarea required={this.props.required}
                      onKeyUp={this.onChange}
                      placeholder={msg}></textarea>
          }
        </FormattedMessage>
      </TextareaStyled>
    );
  }
}