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

  render() {
    return (
      <IntlProvider locale={browserLanguage}
                    messages={messages[browserLanguage]}>
        <div>
          <Nav/>
          <Homepage/>
          <Footer/>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
