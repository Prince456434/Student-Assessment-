import React from 'react';
import './LoadingSpinner.css';

export const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="spinner"></div>
        <p className="loading-text">Loading report...</p>
      </div>
    </div>
  );
};