import React, { Component } from 'react';
import { PhoneStyled } from './phone.styles';
import { PhoneIcon } from 'mdi-react';

export default class Phone extends Component {
  render() {
    return (
      <a href="tel:+496170961709">
        <PhoneStyled>
          <PhoneIcon size={40} color={'white'} />
        </PhoneStyled>
      </a>
    );
  }
}