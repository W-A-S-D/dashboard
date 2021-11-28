import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { AuthProvider } from './contexts/auth';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>,
  document.querySelector('#root'),
);