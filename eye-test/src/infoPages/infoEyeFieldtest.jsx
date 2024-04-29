import React from 'react';

const InfoEyeFieldtest = ({ title, description, imageUrl, testInstructionsUrl }) => {
  return (
    <div className="test-info-page">
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <a href={testInstructionsUrl}>Start Test</a>
    </div>
  );
}

export default InfoEyeFieldtest;