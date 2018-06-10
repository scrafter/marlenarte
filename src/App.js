import React, { Component } from 'react';
import './App.css';
import { addLocaleData, IntlProvider } from 'react-intl';
import Nav from './shared/components/nav/nav.component';
import { i18nConfig } from './i18n-config';

let plLocaleData = require('react-intl/locale-data/pl');
addLocaleData(plLocaleData);

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
        <Nav/>
      </IntlProvider>
    );
  }
}

export default App;
