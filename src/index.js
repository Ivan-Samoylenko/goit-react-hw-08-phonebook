import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// App component
import { App } from 'components';
// Styles
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';
import './index.css';
// Toasts
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Redux
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
            <ToastContainer theme="dark" />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
