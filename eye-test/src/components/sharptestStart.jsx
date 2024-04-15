import React from 'react';

const SharptestStart = () => {
  return (
    <div>
      <h1>Sharptest Start Page</h1>
      <div className='circle1'>
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" fill="none"
            r="200" stroke-width="50" stroke="black"
            stroke-dasharray="1200 1400"/>
        </svg>
      </div>
      <p>This is the start page for the Sharptest.</p>
        <div className='sharpButtonsDiv'>
            <button className='sharp topLeft'>TopL</button>
            <button className='sharp top'>Top</button>
            <button className='sharp topRight'>TopR</button>
            <button className='sharp left'>Left</button>
            <button className='sharp right'>Right</button>
            <button className='sharp bottomLeft'>BtL</button>
            <button className='sharp bottomRight'>BtR</button>
            <button className='sharp bottom'>Btm</button>
      </div>
    </div>
  );
}

export default SharptestStart;
