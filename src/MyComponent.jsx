import React, { useState } from 'react';
import profileLogo from '../src/assets/profile.png';
const MyComponent = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleImageClick = () => {
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    console.log(`Clicked on ${option}`);
    setShowOptions(false);
  };

  return (
    <div>
      <div className="image-container" onClick={handleImageClick}>
        <img src={profileLogo} alt="your-image-alt" />
      </div>
      {showOptions && (
        <div className="options-container">
          <button onClick={() => handleOptionClick('Action 1')}>Action 1</button>
          <button onClick={() => handleOptionClick('Action 2')}>Action 2</button>
          <button onClick={() => handleOptionClick('Something else')}>Something else</button>
        </div>
      )}
    </div>
  );
};

export default MyComponent;