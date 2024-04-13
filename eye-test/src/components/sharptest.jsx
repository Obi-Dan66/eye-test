// sharptest.jsx
import React, { useState } from 'react';

const Sharptest = () => {
  const [currentContent, setCurrentContent] = useState(0);
  const totalContents = 6;

  const handleNext = () => {
    setCurrentContent((prevContent) => (prevContent + 1) % totalContents);
  };

  const getContent = (contentIndex) => {
    switch (contentIndex) {
      case 0:
        return <h1>This is the Sharp Test Page</h1>;
      case 1:
        return <h1>Content 1</h1>;
      case 2:
        return <p>Content 2</p>;
      case 3:
        return <p>Content 3</p>;
      case 4:
        return <p>Content 4</p>;
      case 5:
        return <p>Content 5</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      {getContent(currentContent)}
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Sharptest;