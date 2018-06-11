import React, { Component } from 'react';
import { AboutMeDescription, AboutMeStyled, WhatIDo } from './about-me.styles';
import { Headline } from '../../../shared/components/headline/headline.styles';
import { FormattedMessage } from 'react-intl';
import { Subtitle } from '../../../shared/components/subtitle/subtitle.styles';
import { WhatIDoItem } from './what-i-do-item/what-i-do-item.styles';

export default class AboutMe extends Component {
  render() {
    return (
      <AboutMeStyled>
        <Headline>
          <FormattedMessage id="ABOUT_ME.TITLE"/>
        </Headline>
        <AboutMeDescription>
          <FormattedMessage id="ABOUT_ME.DESCRIPTION"/>
        </AboutMeDescription>

        <Subtitle>
          <FormattedMessage id="ABOUT_ME.WHAT_I_DO"/>
        </Subtitle>

        <WhatIDo>
          <WhatIDoItem>
            <FormattedMessage id="ABOUT_ME.DRAW"/>
          </WhatIDoItem>
          <WhatIDoItem>
            <FormattedMessage id="ABOUT_ME.OIL_PAINTING"/>
          </WhatIDoItem>
          <WhatIDoItem>
            <FormattedMessage id="ABOUT_ME.ACRYLIC_PAINTING"/>
          </WhatIDoItem>
        </WhatIDo>
      </AboutMeStyled>
    );
  }
}