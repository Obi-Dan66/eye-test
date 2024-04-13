import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sharptest from './components/sharptest.jsx';
import TestSelection from './components/testSelection.jsx';
import AstigmTest from './components/astigmTest.jsx';
import ColorTest from './components/colorTest.jsx';
import ContrastTest from './components/contrastTest.jsx';
import EyeFieldTest from './components/eyeFieldTest.jsx';
import SharptestStart from './components/sharptestStart.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sharptest" element={<Sharptest />} />
        <Route path="/select-test" element={<TestSelection />} />
        <Route path="/astigmtest" element={<AstigmTest />} />
        <Route path="/colortest" element={<ColorTest />} />
        <Route path="/eyefieldtest" element={<EyeFieldTest />} />
        <Route path="/contrasttest" element={<ContrastTest />} />
        <Route path="/sharptestStart" element={<SharptestStart />}/>
      </Routes>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <img src='src\assets\logo.png' width={200} height={150} alt="Logo"></img>
      <h1>Oční test</h1>
      <button className='testBegin homePage' onClick={() => window.location.href='/sharptest'}>Začít test zraku</button>
      <button className='selectTest homePage' onClick={() => window.location.href='/select-test'}>Vybrat určitý test</button>
    </div>
  );
}

export default App;