import React, { Component } from 'react';
import { ContactStyled } from './contact.styles';
import { HeadlineWhite } from '../../../shared/components/headline/headline.styles';
import { FormattedMessage } from 'react-intl';
import Input from '../../../shared/components/input/input.component';
import Textarea from '../../../shared/components/textarea/textarea.component';
import Button from '../../../shared/components/button/button.component';
import { BACKENDLESS_URL } from '../../../shared/constants';
import nativeToast from 'native-toast';
import messagesPl from '../../../translations/pl';
import messagesEn from '../../../translations/en';

const browserLanguage = navigator.language.split(/[-_]/)[0];

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      topic: '',
      message: '',
    };
    this.onFormUpdate = this.onFormUpdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.target.checkValidity();
    event.preventDefault();
    const content = `Od: ${this.state.email} <br/> temat: ${this.state.topic}, <br/> tekst: ${this.state.message}`;

    const emailData = JSON.stringify({
      subject: 'Wiadomość ze strony Marlenarte',
      to: ['misiewicz.marlena08@gmail.com'],
      bodyparts: {
        htmlmessage: content,
      },
    });

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.refs.form.reset();
        nativeToast.warning({
          type: 'success',
          message: this.getNotificationText('NOTIFICATION.SENT_SUCCESS'),
          position: 'bottom',
        });
      } else if (xhr.readyState === 4 && xhr.status === 200) {
        nativeToast.warning({
          type: 'error',
          message: this.getNotificationText('NOTIFICATION.SENT_ERROR'),
          position: 'bottom',
        });
      }
    };
    xhr.open('POST', BACKENDLESS_URL, true);
    xhr.setRequestHeader('application-type', 'REST');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(emailData);
  }

  getNotificationText(notification) {
    const messages = browserLanguage === 'pl' ? messagesPl : messagesEn;
    return messages[notification];
  }

  onFormUpdate(data) {
    this.setState(data);
  }

  render() {
    return (
      <ContactStyled>
        <HeadlineWhite>
          <FormattedMessage id="CONTACT.TITLE"/>
        </HeadlineWhite>
        <form onSubmit={this.onSubmit} ref="form">
          <Input type={'email'}
                 name={'email'}
                 onChange={this.onFormUpdate}
                 required={true}
                 placeholder={'CONTACT.EMAIL'}/>
          <Input type={'text'}
                 name={'topic'}
                 onChange={this.onFormUpdate}
                 required={true}
                 placeholder={'CONTACT.TOPIC'}/>
          <Textarea placeholder={'CONTACT.MESSAGE'}
                    name={'message'}
                    onChange={this.onFormUpdate}></Textarea>
          <Button type={'text'} text={'CONTACT.SEND'} />
        </form>
      </ContactStyled>
    );
  }
}