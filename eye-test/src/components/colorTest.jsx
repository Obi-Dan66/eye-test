import React, { useState } from 'react';

const ColorTest = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const [sliderValue, setSliderValue] = useState(50); // Define sliderValue here
  const [results, setResults] = useState([]); // Array to store results
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const totalContents = 7;

  const handleClick = (isCorrect) => {
    // Increment correct answers count if the answer is correct
    if (isCorrect) {
      setCorrectAnswersCount(prevCount => prevCount + 1);
    }
  
    // Move to the next content
    setCurrentContent((prevContent) => (prevContent + 1) % totalContents);
  };

  const startTest = () => {
    // Redirect to '/another-page' when a button is clicked
    window.location.href = '/test-zrakove-ostrosti';
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
                <button className='colorTestBtn' onClick={() => handleClick(false)}>31</button>
                <button className='colorTestBtn correct' onClick={() => handleClick(true)}>12</button>
                <button className='colorTestBtn' onClick={() => handleClick(false)}>71</button>
                <button className='colorTestBtn' onClick={() => handleClick(false)}>Nic</button>
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
          <button className='colorTestBtn correct' onClick={() => handleClick(true)}>8</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>3</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>11</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>Nic</button>
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
          <button className='colorTestBtn' onClick={() => handleClick(false)}>5</button>
          <button className='colorTestBtn correct' onClick={() => handleClick(true)}>3</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>27</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>Nic</button>
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
          <button className='colorTestBtn' onClick={() => handleClick(false)}>36</button>
          <button className='colorTestBtn correct' onClick={() => handleClick(true)}>45</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>60</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>Nic</button>
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
          <button className='colorTestBtn correct' onClick={() => handleClick(true)}>5</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>57</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>14</button>
          <button className='colorTestBtn' onClick={() => handleClick(false)}>Nic</button>
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
            <button className='colorTestBtn' onClick={() => handleClick(false)}>45</button>
            <button className='colorTestBtn' onClick={() => handleClick(false)}>70</button>
            <button className='colorTestBtn' onClick={() => handleClick(false)}>6</button>
            <button className='colorTestBtn correct' onClick={() => handleClick(true)}>Nic</button>
          </div>
      </div>
  </div>);
      case 6:
        let imageUrl;
        if (correctAnswersCount === 6) {
          imageUrl = 'src/assets/image1.jpg';
        } else if (correctAnswersCount === 4 || correctAnswersCount === 5) {
          imageUrl = 'src/assets/image2.jpg';
        } else {
          imageUrl = 'src/assets/image3.jpg';
        }
      
        return (
          <div>
            <h1>Test Results</h1>
            <p>You have identified {correctAnswersCount} correct answers.</p>
            <img src={imageUrl} alt="Result" />
            {/* Additional logic to display more detailed results or feedback */}
          </div>
        );
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