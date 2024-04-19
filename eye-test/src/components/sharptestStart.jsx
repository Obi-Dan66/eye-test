import React, { useState } from 'react';

const SharptestStart = () => {
  const [currentCase, setCurrentCase] = useState(0);

  const handleNext = () => {
    setCurrentCase((prevCase) => (prevCase + 1) % 9);
    checkButtonAlignment(currentCase);
  };

  const getCircleStyle = (caseIndex) => {
    switch (caseIndex) {
      case 0:
        return { transform: 'rotate(95deg) scale(1)' }; // bottom
      case 1:
        return { transform: 'rotate(5deg) scale(0.9)' }; // right
      case 2:
        return { transform: 'rotate(320deg) scale(0.8)' }; // topRight
      case 3:
        return { transform: 'rotate(190deg) scale(0.7)' }; // left
      case 4:
        return { transform: 'rotate(280deg) scale(0.6)' }; // top
      case 5:
        return { transform: 'rotate(50deg) scale(0.5)' }; // bottom right
      case 6:
        return { transform: 'rotate(140deg) scale(0.4)' }; // bottom left
      case 7:
        return { transform: 'rotate(235deg) scale(0.3)' }; // top left
      case 8:
        return { transform: 'rotate(190deg) scale(0.2)' }; // left again
      default:
        return null;
    }
  };

  const circleStyle = getCircleStyle(currentCase);

  const checkButtonAlignment = (caseIndex) => {
    const buttonAlignments = ['bottom', 'right', 'topRight', 'left', 'top', 'bottomRight', 'bottomLeft', 'topLeft', 'left'];
    const currentRotation = parseInt(circleStyle.transform.split('rotate(')[1].split('deg')[0]); // Parse rotation value to integer
    const alignedButton = buttonAlignments[caseIndex];
    
    if (alignedButton === 'left' && (currentRotation >= 185 || currentRotation <= 5)) {
      console.log('Correct button clicked: ' + alignedButton);
    } else if (alignedButton === 'right' && (currentRotation >= 5 && currentRotation <= 15)) {
      console.log('Correct button clicked: ' + alignedButton);
    } else if (alignedButton === 'top' && (currentRotation >= 275 && currentRotation <= 285)) {
      console.log('Correct button clicked: ' + alignedButton);
    } else if (alignedButton === 'bottom' && (currentRotation >= 85 && currentRotation <= 95)) {
      console.log('Correct button clicked: ' + alignedButton);
    } else if (alignedButton === 'topRight' && (currentRotation >= 315 && currentRotation <= 325)) {
      console.log('Correct button clicked: ' + alignedButton);
    } else if (alignedButton === 'bottomRight' && (currentRotation >= 45 && currentRotation <= 55)) {
      console.log('Correct button clicked: ' + alignedButton);
    } else if (alignedButton === 'bottomLeft' && (currentRotation >= 135 && currentRotation <= 145)) {
      console.log('Correct button clicked: ' + alignedButton);
    } else if (alignedButton === 'topLeft' && (currentRotation >= 225 && currentRotation <= 235)) {
      console.log('Correct button clicked: ' + alignedButton);
    } else {
      console.log('Incorrect button clicked. Expected: ' + alignedButton);
    }
  };

  return (
    <div>
      <h1>Sharptest Start Page</h1>
      <div className='circle1' style={{ transform: circleStyle.transform }}>
        <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="400" fill="none" r="200" strokeWidth="80" stroke="black" strokeDasharray="1200 1400"/>
        </svg>
      </div>
      <p>This is the start page for the Sharptest.</p>
      <div className='sharpButtonsDiv'>
        <button className='sharp topLeft' onClick={handleNext}>TopL</button>
        <button className='sharp top' onClick={handleNext}>Top</button>
        <button className='sharp topRight' onClick={handleNext}>TopR</button>
        <button className='sharp left' onClick={handleNext}>Left</button>
        <button className='sharp right' onClick={handleNext}>Right</button>
        <button className='sharp bottomLeft' onClick={handleNext}>BtL</button>
        <button className='sharp bottomRight' onClick={handleNext}>BtR</button>
        <button className='sharp bottom' onClick={handleNext}>Btm</button>
      </div>
    </div>
  );
}

export default SharptestStart;