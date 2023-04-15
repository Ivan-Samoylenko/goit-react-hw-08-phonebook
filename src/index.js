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
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <BrowserRouter basename="it-react-hw-08-phonebook"> */}
        <BrowserRouter>
          <App />
          <ToastContainer theme="dark" />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
