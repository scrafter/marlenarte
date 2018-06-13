import React, { Component } from 'react';
import { ContactStyled } from './contact.styles';
import { HeadlineWhite } from '../../../shared/components/headline/headline.styles';
import { FormattedMessage } from 'react-intl';
import Input from '../../../shared/components/input/input.component';
import Textarea from '../../../shared/components/textarea/textarea.component';
import Button from '../../../shared/components/button/button.component';

export default class Contact extends Component {
  render() {
    return (
      <ContactStyled>
        <HeadlineWhite>
          <FormattedMessage id="CONTACT.TITLE"/>
        </HeadlineWhite>
        <form>
          <Input type={'email'} placeholder={'CONTACT.EMAIL'}/>
          <Input type={'text'} placeholder={'CONTACT.TOPIC'}/>
          <Textarea placeholder={'CONTACT.MESSAGE'}></Textarea>
          <Button type={'text'} text={'CONTACT.SEND'} />
        </form>
      </ContactStyled>
    );
  }
}