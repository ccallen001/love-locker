import React from 'react';
import { Link } from "react-router-dom";

import './AppNav.scss';

function AppNav() {
  return (
    <nav id="App-nav" className="components">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/locker">Locker</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;