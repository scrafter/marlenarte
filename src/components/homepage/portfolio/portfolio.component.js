import React, { Component } from 'react';
import { PortfolioStyled } from './portfolio.styles';
import { Headline } from '../../../shared/components/headline/headline.styles';
import { FormattedMessage } from 'react-intl';
import PortfolioItem from './portfolio-item/portfolio-item.component';
import img from './../../../assets/images/portfolio-item.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioStyled>
        <Headline>
          <FormattedMessage id="PORTFOLIO.TITLE"/>
        </Headline>

        <div className="container">
          <PortfolioItem picture={img} parameters={{Wysokość: "100cm", Szerokość: "200cm"}} />
          <PortfolioItem picture={img} />
          <PortfolioItem picture={img} />
          <PortfolioItem picture={img} />
        </div>
      </PortfolioStyled>
    );
  }
}