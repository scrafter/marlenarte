import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { addLocaleData, IntlProvider, FormattedMessage } from 'react-intl';
import messagesPl from './translations/pl';
import messagesEn from './translations/en';

let plLocaleData = require('react-intl/locale-data/pl');
addLocaleData(plLocaleData);

const i18nConfig = {
  en: {
    locale: 'en',
    messages: messagesEn,
  },
  pl: {
    locale: 'pl',
    messages: messagesPl,
  },
};

class App extends Component {
  browserLanguage = 'en';

  constructor(props) {
    super(props);
    this.browserLanguage = navigator.language;
  }

  render() {
    return (
      <IntlProvider locale={i18nConfig[this.browserLanguage] ? i18nConfig[this.browserLanguage].locale : i18nConfig.en.locale}
                    messages={i18nConfig[this.browserLanguage] ? i18nConfig[this.browserLanguage].messages : i18nConfig.en.messages}>
        <FormattedMessage id="test.test1"/>
      </IntlProvider>
    );
  }
}

export default App;
