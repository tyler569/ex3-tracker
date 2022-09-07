import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from 'react-router-dom';
import './App.css';

import { InitiativeTracker } from './components/InitiativeTracker';
import { testState } from './state'

function App() {
  return <Router>
    <h1>Exalted Combat Tracker</h1>
    <Routes>
      <Route path="/" element={<p><NavLink to="/new">New Combat</NavLink></p>} />
      <Route path="/new" element={<p>Let's make a new combat</p>} />
      <Route path="/combat/:combat" element={<InitiativeTracker state={testState} />} />
      <Route path="/*" element={<p>That's a 404</p>} />
    </Routes>
  </Router>
}

function Child() {
  const { combat, char } = useParams()
  return <h3>{combat} {char}</h3>
}

export default App;
