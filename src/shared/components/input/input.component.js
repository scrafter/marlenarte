import React, { Component } from 'react';
import { InputStyled } from './input.styles';
import propTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

export default class Input extends Component {
  static propTypes = {
    type: propTypes.string,
    name: propTypes.string,
    placeholder: propTypes.string,
    required: propTypes.bool,
    onChange: propTypes.func,
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
      <InputStyled>
        <FormattedMessage id={this.props.placeholder}>
          {(msg) =>
            <input type={this.props.type}
                   ref={this.props.inputRef}
                   onKeyUp={this.onChange}
                   required={this.props.required}
                   placeholder={msg} />
          }
        </FormattedMessage>
      </InputStyled>
    );
  }
}