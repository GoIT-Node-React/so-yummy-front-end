import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistedStore, store } from 'redux/store';
import { App } from 'components/App';
import { theme } from 'theme/theme';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SearchedRecipesProvider } from './contexts/searchedRecipes/Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <BrowserRouter>
          <SearchedRecipesProvider>
            <App />
          </SearchedRecipesProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ThemeProvider>
  // </React.StrictMode>
);
