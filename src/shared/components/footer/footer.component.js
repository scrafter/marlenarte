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
          {/*<p>NIP: -</p>*/}
          <p>Plac Kościuszki 17/7, Wrocław</p>
        </div>
        <div className="right">
          <p>
            <a href="tel:+496170961709">
              tel. 575 638 778
            </a>
          </p>
          <p>
            <a href="mailto:misiewicz.marlena08@gmail.com">
              misiewicz.marlena08@gmail.com
            </a>
          </p>
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