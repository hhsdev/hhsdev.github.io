import React from 'react';
import './App.css';
import { appTheme } from './theme';
import ShowCaseCard from './showcase/card';
import { AppBar, Toolbar, ThemeProvider } from '@material-ui/core';

const data = {
  title: "TTT: Machine Learning explained with AI",
  tags: [ 'css', 'html', 'js' ]
}

function App() {
  return (
    <ShowCaseCard data={data} />
  );
}

export default App;
