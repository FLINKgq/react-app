import './App.css'

import { BrowserRouter, NavLink, Outlet } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
