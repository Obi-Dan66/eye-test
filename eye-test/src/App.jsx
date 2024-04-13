import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Sharptest from './components/sharptest.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <img src='src\assets\logo.png' width={200} height={150} alt="Logo"></img>
        <h1>Oční test</h1>
        <button className='testBegin homePage' onClick={() => window.location.href='/sharptest'}>Začít test zraku</button>
        <button className='selectTest homePage' onClick={() => {}}>Vybrat určitý test</button>

        <Routes>
          <Route path="/sharptest" element={<Sharptest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;