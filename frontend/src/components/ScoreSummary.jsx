import React from 'react';
import './ScoreSummary.css';

export const ScoreSummary = ({ skills, skillFeedback }) => {
  const getScoreClass = (score) => {
    if (score >= 8) return 'excellent';
    if (score >= 6) return 'good';
    if (score >= 4) return 'fair';
    return 'poor';
  };

  const formatSkillName = (skillName) => {
    return skillName.charAt(0).toUpperCase() + skillName.slice(1);
  };

  const getProgressPercentage = (score) => {
    return (score / 9) * 100; // Convert 0-9 scale to percentage for progress bar
  };

  return (
    <div className="score-summary">
      <h2 className="section-title">Summary of Scores</h2>
      
      <div className="skills-grid">
        {skills && Object.entries(skills).map(([skillName, score]) => (
          <div key={skillName} className="skill-card">
            <div className="skill-header">
              <h3 className="skill-name">{formatSkillName(skillName)}</h3>
              <span className={`skill-score ${getScoreClass(score)}`}>
                {score}/9
              </span>
            </div>
            
            <div className="progress-bar">
              <div 
                className={`progress-fill ${getScoreClass(score)}`}
                style={{ width: `${getProgressPercentage(score)}%` }}
              ></div>
            </div>
            
            {skillFeedback && skillFeedback[skillName] && (
              <p className="skill-feedback">
                {skillFeedback[skillName]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};