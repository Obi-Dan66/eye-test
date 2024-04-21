import React, { useState } from 'react';

const ColorTest = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [sliderValue, setSliderValue] = useState(50); // Define sliderValue here
  const [results, setResults] = useState([]); // Array to store results

  const totalContents = 7;

  const handleNext = () => {
    setCurrentContent((prevContent) => (prevContent + 1) % totalContents);
  };

  
  const startTest = () => {
    // Redirect to '/another-page' when a button is clicked
    window.location.href = '/test-zrakove-ostrosti';
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const getContent = (contentIndex) => {
    switch (contentIndex) {
      case 0:
        return (
            <div>
                <h1>Barevné vidění</h1>
                <p>1 - Mějte obě oči otevřené.</p>
                <p>2 - Zařízení držte na délku paže.</p>
                <p>3 - Vyberte číslo, které vidíte v kruhu.</p>
                <div className='colorTestCard' style={{backgroundColor:'white'}}>
                <img className= "color-image" src='src\assets\12.svg' width={200} height={200} alt="color test"></img>
                <div>
                <button className='colorTestBtn' onClick={handleNext}>31</button>
                <button className='colorTestBtn' onClick={handleNext}>12</button>
                <button className='colorTestBtn' onClick={handleNext}>71</button>
                <button className='colorTestBtn' onClick={handleNext}>Nic</button>
              </div>
            </div>
        </div>);
      case 1:
        return (
          <div>
          <h1>Barevné vidění</h1>
          <p>1 - Mějte obě oči otevřené.</p>
          <p>2 - Zařízení držte na délku paže.</p>
          <p>3 - Vyberte číslo, které vidíte v kruhu.</p>
          <div className='colorTestCard' style={{backgroundColor:'white'}}>
          <img className= "color-image" src='src\assets\8.svg' width={200} height={200} alt="color test"></img>
          <div>
          <button className='colorTestBtn' onClick={handleNext}>8</button>
          <button className='colorTestBtn' onClick={handleNext}>3</button>
          <button className='colorTestBtn' onClick={handleNext}>11</button>
          <button className='colorTestBtn' onClick={handleNext}>Nic</button>
        </div>
        </div>
  </div>);
      case 2:
        return (
          <div>
          <h1>Barevné vidění</h1>
          <p>1 - Mějte obě oči otevřené.</p>
          <p>2 - Zařízení držte na délku paže.</p>
          <p>3 - Vyberte číslo, které vidíte v kruhu.</p>
          <div className='colorTestCard' style={{backgroundColor:'white'}}>
          <img className= "color-image" src='src\assets\3.svg' width={200} height={200} alt="color test"></img>
          <div>
          <button className='colorTestBtn' onClick={handleNext}>5</button>
          <button className='colorTestBtn' onClick={handleNext}>3</button>
          <button className='colorTestBtn' onClick={handleNext}>27</button>
          <button className='colorTestBtn' onClick={handleNext}>Nic</button>
        </div>
      </div>
  </div>);
      case 3:
        return (
          <div>
          <h1>Barevné vidění</h1>
          <p>1 - Mějte obě oči otevřené.</p>
          <p>2 - Zařízení držte na délku paže.</p>
          <p>3 - Vyberte číslo, které vidíte v kruhu.</p>
          <div className='colorTestCard' style={{backgroundColor:'white'}}>
          <img className= "color-image" src='src\assets\45.svg' width={200} height={200} alt="color test"></img>
          <div>
          <button className='colorTestBtn' onClick={handleNext}>36</button>
          <button className='colorTestBtn' onClick={handleNext}>45</button>
          <button className='colorTestBtn' onClick={handleNext}>60</button>
          <button className='colorTestBtn' onClick={handleNext}>Nic</button>
        </div>
      </div>
  </div>);
      case 4:
        return (
          <div>
          <h1>Barevné vidění</h1>
          <p>1 - Mějte obě oči otevřené.</p>
          <p>2 - Zařízení držte na délku paže.</p>
          <p>3 - Vyberte číslo, které vidíte v kruhu.</p>
          <div className='colorTestCard' style={{backgroundColor:'white'}}>
          <img className= "color-image" src='src\assets\5.svg' width={200} height={200} alt="color test"></img>
          <div>
          <button className='colorTestBtn' onClick={handleNext}>5</button>
          <button className='colorTestBtn' onClick={handleNext}>57</button>
          <button className='colorTestBtn' onClick={handleNext}>14</button>
          <button className='colorTestBtn' onClick={handleNext}>Nic</button>
        </div>
      </div>
  </div>);
      case 5:
        return (
          <div>
          <h1>Barevné vidění</h1>
          <p>1 - Mějte obě oči otevřené.</p>
          <p>2 - Zařízení držte na délku paže.</p>
          <p>3 - Vyberte číslo, které vidíte v kruhu.</p>
          <div className='colorTestCard' style={{backgroundColor:'white'}}>
            <img className= "color-image" src='src\assets\nic.svg' width={200} height={200} alt="color test"></img>
            <div>
            <button className='colorTestBtn' onClick={handleNext}>45</button>
            <button className='colorTestBtn' onClick={handleNext}>70</button>
            <button className='colorTestBtn' onClick={handleNext}>6</button>
            <button className='colorTestBtn' onClick={handleNext}>Nic</button>
          </div>
      </div>
  </div>);
      case 6:
        return (
           <div>
                
        </div>);
      default:
        return null;
    }
  };

  return (
    <div>
      {getContent(currentContent)}
    </div>
  );
}

export default ColorTest ;