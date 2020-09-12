import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import pages from '@seven/pages';
import './App.scss';

function App() {
  return <BrowserRouter>{renderRoutes(pages)}</BrowserRouter>;
}

export default App;
