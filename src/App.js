import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { GlobalStyle } from './global-style';
import PageUsers from './application/PageUsers';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <GlobalStyle />
        <PageUsers />
      </Provider>
    </I18nextProvider>
  );
};

export default App;
