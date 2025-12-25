import React from 'react';
import './FeedbackSection.css';

export const FeedbackSection = ({ overallFeedback, skillFeedback, recommendations }) => {
  const formatSkillName = (skillName) => {
    return skillName.replace(/([A-Z])/g, ' $1').trim();
  };

  return (
    <div className="feedback-section">
      {/* Overall Feedback */}
      {overallFeedback && (
        <div className="feedback-card">
          <h2 className="section-title">Descriptive Feedback</h2>
          <p className="feedback-text">{overallFeedback}</p>
        </div>
      )}

      {/* Detailed Skill Feedback */}
      {skillFeedback && Object.keys(skillFeedback).length > 0 && (
        <div className="feedback-card">
          <h2 className="section-title">Detailed Skill Feedback</h2>
          <div className="skill-feedback-list">
            {Object.entries(skillFeedback).map(([skill, feedback]) => (
              <div key={skill} className="skill-feedback-item">
                <h3 className="skill-feedback-title">
                  {formatSkillName(skill)}
                </h3>
                <p className="skill-feedback-text">{feedback}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {recommendations && recommendations.length > 0 && (
        <div className="feedback-card">
          <h2 className="section-title">Recommendations</h2>
          <ul className="recommendations-list">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="recommendation-item">
                <span className="recommendation-number">{index + 1}</span>
                <p className="recommendation-text">{recommendation}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};