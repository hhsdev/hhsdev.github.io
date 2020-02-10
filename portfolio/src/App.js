import React from 'react';
import logo from './logo.svg';
import './App.css';
import { appTheme } from './theme';
import { AppBar, Toolbar, ThemeProvider, createMuiTheme } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <AppBar position="static" color="primary">
        <Toolbar variant="regular"></Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
