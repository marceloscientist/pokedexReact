import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavBar from './components/navbar/NavBar'
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
