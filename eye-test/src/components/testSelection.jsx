// testSelection.jsx
import React from 'react';

const TestSelection = () => {
  return (
    <div>
      <h1>Select a Test</h1>
      <div className='test-selection-container'>
      <button className='defaultButton' onClick={() => window.location.href='/instrukce-test-ostrosti'}>Sharp Test</button>
      <button className='defaultButton' onClick={() => window.location.href='/instrukce-test-astigmatismu'}>Astigmatism Test</button>
      <button className='defaultButton' onClick={() => window.location.href='/instrukce-test-barevneho-videni'}>Color Test</button>
      <button className='defaultButton' onClick={() => window.location.href='/instrukce-test-kontrastniho-videni'}>Contrast Test</button>
      <button className='defaultButton' onClick={() => window.location.href='/instrukce-test-zorneho-pole'}>Eye Field Test</button>
      {/* Add more buttons for other tests */}
    </div>
    </div>
  );
}

export default TestSelection;