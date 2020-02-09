import React from 'react';
import { BrowserRouter } from "react-router-dom";

import RouterViews from './RouterViews';

import AppHeader from './components/appHeader/AppHeader';
import AppNav from './components/appNav/AppNav';

import logo from './logo.png';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <AppNav />
        <main className="App-main">
          <img src={logo} className="App-logo" alt="logo" />
          <RouterViews />
        </main>
        <footer className="App-footer"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
