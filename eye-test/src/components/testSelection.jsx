// testSelection.jsx
import React from 'react';

const TestSelection = () => {
  return (
    <div>
      <h1>Select a Test</h1>
      <button onClick={() => window.location.href='/sharptest'}>Sharp Test</button>
      <button onClick={() => window.location.href='/astigmtest'}>Astigmatism Test</button>
      <button onClick={() => window.location.href='/colortest'}>Color Test</button>
      <button onClick={() => window.location.href='/contrasttest'}>Contrast Test</button>
      <button onClick={() => window.location.href='/eyefieldtest'}>Eye Field Test</button>
      {/* Add more buttons for other tests */}
    </div>
  );
}

export default TestSelection;