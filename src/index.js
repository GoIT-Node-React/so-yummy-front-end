import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { persistor, store } from 'redux/store';
import { App } from 'components/App';
import './index.css';
import { theme } from 'theme/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { setupInterceptors } from 'redux/auth/authOperation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PersistGate loading={<p>...loading</p>} persistor={persistor}>
        <Provider store={store}>
          <App />
        </Provider>
      </PersistGate>
    </ThemeProvider>
  </React.StrictMode>
);

setupInterceptors(store);
