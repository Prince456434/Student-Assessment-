import React from 'react';
import './ReportHeader.css';

export const ReportHeader = ({ student, overallScore }) => {
  const getScoreClass = (score) => {
    if (score >= 8) return 'score-excellent';
    if (score >= 6) return 'score-good';
    if (score >= 4) return 'score-fair';
    return 'score-poor';
  };

  return (
    <div className="report-header">
      <div className="header-content">
        <div className="student-info">
          <h1 className="report-title">Speaking Assessment Report</h1>
          <div className="student-details">
            <p><span className="label">Name:</span> {student?.name || 'N/A'}</p>
            <p><span className="label">ID:</span> {student?.id || 'N/A'}</p>
            <p><span className="label">Test Date:</span> {student?.testDate || 'N/A'}</p>
          </div>
        </div>
        <div className={`score-display ${getScoreClass(overallScore)}`}>
          <div className="score-label">Overall Score</div>
          <div className="score-value">{overallScore}/9</div>
        </div>
      </div>
    </div>
  );
};