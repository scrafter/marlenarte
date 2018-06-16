import React, { Component } from 'react';

import './App.css';

import { addLocaleData, IntlProvider } from 'react-intl';
import Nav from './shared/components/nav/nav.component';
import Homepage from './components/homepage/homepage.component';
import Footer from './shared/components/footer/footer.component';
import messagesEn from './translations/en';
import messagesPl from './translations/pl';

let plLocaleData = require('react-intl/locale-data/pl');
addLocaleData(plLocaleData);

const messages = {
  'pl': messagesPl,
  'en': messagesEn,
};
const browserLanguage = navigator.language.split(/[-_]/)[0];

class App extends Component {
  constructor() {
    super();
    this.state = {
      language: browserLanguage,
    };
    this.onLanguageChange = this.onLanguageChange.bind(this);
  }

  onLanguageChange() {
    this.setState(prevousValue => ({
      language: prevousValue.language === 'pl' ? 'en' : 'pl',
    }));
  }

  render() {
    return (
      <IntlProvider locale={this.state.language}
                    messages={messages[this.state.language]}>
        <div>
          <Nav language={this.state.language}
               onLanguageChange={this.onLanguageChange}/>
          <Homepage/>
          <Footer/>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
