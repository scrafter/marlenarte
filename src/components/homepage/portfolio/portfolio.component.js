import React, { Component } from 'react';
import { PortfolioStyled } from './portfolio.styles';
import { Headline } from '../../../shared/components/headline/headline.styles';
import { FormattedMessage } from 'react-intl';
import PortfolioItem from './portfolio-item/portfolio-item.component';
import drawing1 from '../../../assets/images/portfolio/drawing/drawing1.jpg';
import drawing2 from '../../../assets/images/portfolio/drawing/drawing2.jpg';
import drawing3 from '../../../assets/images/portfolio/drawing/drawing3.jpg';
import drawing4 from '../../../assets/images/portfolio/drawing/drawing4.jpg';
import mural1 from '../../../assets/images/portfolio/mural-painting/mural1.jpg';
import mural2 from '../../../assets/images/portfolio/mural-painting/mural2.jpg';
import mural3 from '../../../assets/images/portfolio/mural-painting/mural3.jpg';
import mural4 from '../../../assets/images/portfolio/mural-painting/mural4.jpg';
import mural5 from '../../../assets/images/portfolio/mural-painting/mural5.jpg';
import mural6 from '../../../assets/images/portfolio/mural-painting/mural6.jpg';
import painting1 from '../../../assets/images/portfolio/painting/painting1.jpg';
import painting2 from '../../../assets/images/portfolio/painting/painting2.jpg';
import painting3 from '../../../assets/images/portfolio/painting/painting3.jpg';
import painting4 from '../../../assets/images/portfolio/painting/paiting4.jpg';
import painting5 from '../../../assets/images/portfolio/painting/paiting5.jpg';
import painting6 from '../../../assets/images/portfolio/painting/paiting6.jpg';
import painting7 from '../../../assets/images/portfolio/painting/paiting7.jpg';
import PhotoModal from '../../../shared/components/photo-modal/photo-modal.component';

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
      currentPhoto: '',
      category: 'drawing',
    };
    this.modalToggle = this.modalToggle.bind(this);
    this.setCategory = this.setCategory.bind(this);
  }

  modalToggle(img) {
    this.setState({
      modalOpen: !this.state.modalOpen,
      currentPhoto: img,
    });
  }

  setCategory(category) {
    this.setState({ category: category });
  }

  render() {
    return (
      <PortfolioStyled>
        <Headline>
          <FormattedMessage id="PORTFOLIO.TITLE"/>
        </Headline>

        <div className="tabs">
          <button className={this.state.category === 'drawing' ? 'active' : ''}
                  onClick={() => this.setCategory('drawing')}>
            <FormattedMessage id="PORTFOLIO.DRAWING"/>
          </button>
          <button className={this.state.category === 'painting' ? 'active' : ''}
                  onClick={() => this.setCategory('painting')}>
            <FormattedMessage id="PORTFOLIO.PAINTING"/>
          </button>
          <button className={this.state.category === 'mural' ? 'active' : ''}
                  onClick={() => this.setCategory('mural')}>
            <FormattedMessage id="PORTFOLIO.MURAL_PAINTING"/>
          </button>
        </div>

        {
          this.state.category === 'drawing' && <div className="container">
            <PortfolioItem onOpen={this.modalToggle} picture={drawing1} />
            <PortfolioItem onOpen={this.modalToggle} picture={drawing2} />
            <PortfolioItem onOpen={this.modalToggle} picture={drawing3} />
            <PortfolioItem onOpen={this.modalToggle} picture={drawing4} />
          </div>
        }
        {
          this.state.category === 'painting' && <div className="container">
            <PortfolioItem onOpen={this.modalToggle} picture={painting1} />
            <PortfolioItem onOpen={this.modalToggle} picture={painting2} />
            <PortfolioItem onOpen={this.modalToggle} picture={painting3} />
            <PortfolioItem onOpen={this.modalToggle} picture={painting4} />
            <PortfolioItem onOpen={this.modalToggle} picture={painting5} />
            <PortfolioItem onOpen={this.modalToggle} picture={painting6} />
            <PortfolioItem onOpen={this.modalToggle} picture={painting7} />
          </div>
        }
        {
          this.state.category === 'mural' && <div className="container">
            <PortfolioItem onOpen={this.modalToggle} picture={mural1} />
            <PortfolioItem onOpen={this.modalToggle} picture={mural2} />
            <PortfolioItem onOpen={this.modalToggle} picture={mural3} />
            <PortfolioItem onOpen={this.modalToggle} picture={mural4} />
            <PortfolioItem onOpen={this.modalToggle} picture={mural5} />
            <PortfolioItem onOpen={this.modalToggle} picture={mural6} />
          </div>
        }
        <PhotoModal img={this.state.currentPhoto}
                    toggle={this.modalToggle}
                    isOpen={this.state.modalOpen}/>
      </PortfolioStyled>
    );
  }
}