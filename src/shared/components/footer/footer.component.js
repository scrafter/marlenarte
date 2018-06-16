import React, { Component } from 'react';
import { FooterStyled } from './footer.styles';
import { FormattedMessage } from 'react-intl';

export default class Footer extends Component {
  year = '';
  constructor(props) {
    super(props);
    this.year = new Date().getFullYear();
  }
  render() {
    return (
      <FooterStyled>
        <div>
          <p>Madlenarte Marlena Misiewicz</p>
          <p>NIP: 123 100 23 21</p>
          <p>Plac Kościuszki 13/3, Wrocław</p>
        </div>
        <div className="right">
          <p>tel. 123 321 123</p>
          <p>email@interia.pl</p>
        </div>

        <p className="signiture">
          {this.year} | <FormattedMessage id="FOOTER.CREATED_BY" />&nbsp;
          <a href="http://chillsoft.net"
             rel="noopener noreferrer"
             target="_blank">ChillSoft.net</a>
        </p>
      </FooterStyled>
    );
  }
}