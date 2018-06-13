import React, { Component } from 'react';
import { SocialMediaStyled } from './social-media.styles';
import { Headline } from '../../../shared/components/headline/headline.styles';
import { FormattedMessage } from 'react-intl';
import { FacebookBoxIcon, InstagramIcon, LinkedinBoxIcon } from 'mdi-react';

export default class SocialMedia extends Component {
  render() {
    return (
      <SocialMediaStyled>
        <Headline>
          <FormattedMessage id="SOCIAL_MEDIA.TITLE" />
        </Headline>
        <div>
          <a href="http://www.facebook" target="_blank" rel="noopener noreferrer">
            <FacebookBoxIcon className="facebook" size={140}/>
          </a>
          <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={140}/>
          </a>
          <a href="http://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <LinkedinBoxIcon size={140}/>
          </a>
        </div>
      </SocialMediaStyled>
    );
  }
}