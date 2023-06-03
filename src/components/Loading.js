import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <>
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">Loading...</div>
      <br/>
      </div>
      <h3 className='loading-h3'>Please wait as it may take some time to load as the project is hosted for free</h3>
    </>
    
  );
};

export default Loading;
