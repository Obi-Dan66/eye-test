import React, { useState } from 'react';

const SharpTest = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [clickedButton, setClickedButton] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const totalCases = 10; // Adjust based on your actual cases

  // Define correctButtonForCase here for simplicity
  const correctButtonForCase = {
    0: 'RIGHT',
    1: 'TOP',
    2: 'TOPLEFT',
    3: 'BOTTOM',
    4: 'LEFT',
    5: 'TOPRIGHT',
    6: 'BOTTOMRIGHT',
    7: 'BOTTOMLEFT',
    8: 'BOTTOM', // Adjust as needed
  };

  const handleClick = (buttonId) => {
    if (correctButtonForCase[currentContent] === buttonId) {
      setCorrectAnswersCount(prevCount => prevCount + 1); // Increment correct answers count
    }
    // Move to the next content, or loop back to the start
    setCurrentContent((prevContent) => (prevContent + 1) % totalCases);
    setClickedButton(null); // Reset clicked button
  };

  const getContent = (currentContent) => {
    // Define transformation styles directly within the switch cases
    const transformStyles = [
      'rotate(90deg) scale(1)',   // Case 0
      'rotate(0deg) scale(0.9)',  // Case 1
      'rotate(315deg) scale(0.8)',// Case 2
      'rotate(180deg) scale(0.7)',// Case 3
      'rotate(270deg) scale(0.6)',// Case 4
      'rotate(45deg) scale(0.5)', // Case 5
      'rotate(135deg) scale(0.4)',// Case 6
      'rotate(225deg) scale(0.3)',// Case 7
      'rotate(180deg) scale(0.2)' // Case 8
    ];

    // Use a default style if the case index is out of bounds
    const transformStyle = transformStyles[currentContent] || 'scale(1)';
    const renderSvgContainer = (clickedButton, handleClick, transformStyle) => {
      return (
        <div className='sharptestCircle'>
      <h1><b>Zraková ostrost</b></h1>
      <p>1 - Zakryjte si levé oko.</p>
      <p>2 - Zařízení držte na délku paže.</p>
      <p>3 - Vidíte horní kruh? Označte příslušný výřez.</p>

      <div className='sharpTestContainer'>
      <div className="sharpTestCircleSmall"style={{ transform: transformStyle }}>
        <svg width="25" height="25" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.785,0.015c0.684,0.139 1.2,0.745 1.2,1.47c0,0.828 -0.672,1.5 -1.5,1.5c-0.828,0 -1.5,-0.672 -1.5,-1.5c0,-0.725 0.516,-1.331 1.2,-1.47l0,0.69c-0.321,0.119 -0.55,0.424 -0.55,0.78c0,0.46 0.381,0.833 0.85,0.833c0.469,0 0.85,-0.373 0.85,-0.833c0,-0.356 -0.229,-0.661 -0.55,-0.78l0,-0.69Z"></path>
        </svg>
      </div>
      <div className='circle1'>
      <svg viewBox="0 0 100% 100%" xmlns="http://www.w3.org/2000/svg">
      <path id="TOP" onClick={() => handleClick('TOP')} style={{ opacity: clickedButton === 'TOP' ? 0 : 1 }} d="M158.934 57.545a77.47 77.47 0 00-13.211-3.957 78.642 78.642 0 00-31.437 0 77.47 77.47 0 00-13.211 3.957l-19.9-48.059a130.162 130.162 0 0197.674 0z"></path>
      <path id="TOPRIGHT" onClick={() => handleClick('TOPRIGHT')} style={{ opacity: clickedButton === 'TOPRIGHT' ? 0 : 1 }} d="M201.693 99.226a78.216 78.216 0 00-40.914-40.914l19.906-48.059a130.414 130.414 0 0169.066 69.066l-48.059 19.907z"></path>
      <path id="RIGHT" onClick={() => handleClick('RIGHT')} style={{ opacity: clickedButton === 'RIGHT' ? 0 : 1 }} d="M202.459 158.933a77.41 77.41 0 003.959-13.213 78.785 78.785 0 000-31.437 77.477 77.477 0 00-3.957-13.209l48.057-19.9a129.319 129.319 0 016.844 22.635 130.2 130.2 0 01-6.844 75.036z"></path>
      <path id="BOTTOMRIGHT" onClick={() => handleClick('BOTTOMRIGHT')} style={{ opacity: clickedButton === 'BOTTOMRIGHT' ? 0 : 1 }} d="M160.779 201.692a78.193 78.193 0 0024.379-16.535 78.8 78.8 0 009.525-11.545 77.993 77.993 0 007.008-12.833l48.061 19.907a130.393 130.393 0 01-69.068 69.064z"></path>
      <path id="BOTTOM" onClick={() => handleClick('BOTTOM')} style={{ opacity: clickedButton === 'BOTTOM' ? 0 : 1 }} d="M130 260.001a130.826 130.826 0 01-26.2-2.641 129.332 129.332 0 01-22.639-6.846l19.906-48.058a77.615 77.615 0 0013.213 3.957 78.642 78.642 0 0031.438 0 77.47 77.47 0 0013.211-3.957l19.906 48.058a129.181 129.181 0 01-22.639 6.846A130.778 130.778 0 01130 260.001z"></path>
      <path id="BOTTOMLEFT" onClick={() => handleClick('BOTTOMLEFT')} style={{ opacity: clickedButton === 'BOTTOMLEFT' ? 0 : 1 }} d="M79.316 249.75a130.42 130.42 0 01-69.066-69.063l48.057-19.9a78.285 78.285 0 0028.084 33.9 77.645 77.645 0 0012.836 7.015z"></path>
      <path id="LEFT" onClick={() => handleClick('LEFT')} style={{ opacity: clickedButton === 'LEFT' ? 0 : 1 }} d="M9.486 178.84a130.148 130.148 0 010-97.673l48.055 19.9a78.1 78.1 0 000 57.865z"></path>
      <path id="TOPLEFT" onClick={() => handleClick('TOPLEFT')} style={{ opacity: clickedButton === 'TOPLEFT' ? 0 : 1 }} d="M10.252 79.316a130.414 130.414 0 0169.064-69.064l19.908 48.059a77.664 77.664 0 00-12.834 7.014 78.166 78.166 0 00-28.084 33.9z"></path>
      </svg>
      </div>
    </div>
  </div>
  );
};
switch (currentContent) {
  case 0:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(90deg) scale(1)');
  case 1:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(0deg) scale(0.9)');
  case 2:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(315deg) scale(0.8)');
  case 3:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(180deg) scale(0.7)');
  case 4:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(270deg) scale(0.6)');
  case 5:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(45deg) scale(0.5)');
  case 6:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(135deg) scale(0.4)');
  case 7:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(225deg) scale(0.3)');
  case 8:
    return renderSvgContainer(clickedButton, handleClick, 'rotate(180deg) scale(0.2)');
  case 9:
        let imageUrl;
        let resultText= "";
        if (correctAnswersCount === 9 || correctAnswersCount === 8) {
          imageUrl = 'src/assets/greenface.svg';
          resultText = "Vaše zraková ostrost se zdá být vynikající.";
        } else if (correctAnswersCount === 7 || correctAnswersCount === 6) {
          imageUrl = 'src/assets/yellowface.svg';
          resultText = "Vaše zraková ostrost se zdá být v pořádku.";
        } else {
          imageUrl = 'src/assets/redface.svg';
          resultText = "Vaše zraková ostrost se zdá být omezena.";
        }
      
        return (
          <div>
            <h1><b>Výsledek testu zrakové ostrosti</b></h1>
            <div className='eyes-result'>
            <img src={imageUrl} alt="ResultLeft" />
            <img src={imageUrl} alt="ResultRight" />
            <div className='resultDescriptionLeft'>
              <p>Levé</p>
              <div className='resultDescriptionRight'>
              <p>Pravé</p>
              </div>
            </div>
            </div>
            <p>{resultText}</p>
          </div>
        );
  default:
    // Handle any other cases or provide a default case
    return <div>No content available for this case.</div>;
  };
  };

  return (
    <div>
      {getContent(currentContent)}
    </div>
  );
};

export default SharpTest;