import React, { Component } from 'react';
import { PortfolioStyled } from './portfolio.styles';
import { Headline } from '../../../shared/components/headline/headline.styles';
import { FormattedMessage } from 'react-intl';
import PortfolioItem from './portfolio-item/portfolio-item.component';
import photo1 from '../../../assets/images/portfolio/photo1.jpg';
import photo2 from '../../../assets/images/portfolio/photo2.jpg';
import photo3 from '../../../assets/images/portfolio/photo3.jpg';
import photo4 from '../../../assets/images/portfolio/photo4.jpg';
import photo5 from '../../../assets/images/portfolio/photo5.jpg';
import photo6 from '../../../assets/images/portfolio/photo6.jpg';
import photo7 from '../../../assets/images/portfolio/photo7.jpg';
import photo8 from '../../../assets/images/portfolio/photo8.jpg';
import photo9 from '../../../assets/images/portfolio/photo9.jpg';
import photo10 from '../../../assets/images/portfolio/photo10.jpg';
import photo11 from '../../../assets/images/portfolio/photo11.jpg';
import photo12 from '../../../assets/images/portfolio/photo12.jpg';
import photo13 from '../../../assets/images/portfolio/photo13.jpg';
import photo14 from '../../../assets/images/portfolio/photo14.jpg';
import photo15 from '../../../assets/images/portfolio/photo15.jpg';
import photo16 from '../../../assets/images/portfolio/photo16.jpg';

export default class Portfolio extends Component {
  render() {
    return (
      <PortfolioStyled>
        <Headline>
          <FormattedMessage id="PORTFOLIO.TITLE"/>
        </Headline>

        <div className="container">
          <PortfolioItem picture={photo1} />
          <PortfolioItem picture={photo2} />
          <PortfolioItem picture={photo3} />
          <PortfolioItem picture={photo4} />
          <PortfolioItem picture={photo5} />
          <PortfolioItem picture={photo6} />
          <PortfolioItem picture={photo7} />
          <PortfolioItem picture={photo8} />
          <PortfolioItem picture={photo9} />
          <PortfolioItem picture={photo10} />
          <PortfolioItem picture={photo11} />
          <PortfolioItem picture={photo12} />
          <PortfolioItem picture={photo13} />
          <PortfolioItem picture={photo14} />
          <PortfolioItem picture={photo15} />
          <PortfolioItem picture={photo16} />
        </div>
      </PortfolioStyled>
    );
  }
}