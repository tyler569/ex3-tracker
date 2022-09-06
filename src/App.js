import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import './App.css';

import { InitiativeTracker } from './components/InitiativeTracker';
import { testState } from './state'

function App() {
  return <Router>
    <h1>Exalted Combat Tracker</h1>
    <Routes>
      <Route path="/" element={<p>Nothing to see here</p>} />
      <Route path="/new" element={<p>Let's make a new combat</p>} />
      <Route path="/:combat/:char" element={<Child />} />
      <Route path="/combat/:combat/:char" element={<InitiativeTracker state={testState} />} />
    </Routes>
  </Router>
}

function Child() {
  const { combat, char } = useParams()
  return <h3>{combat} {char}</h3>
}

export default App;
