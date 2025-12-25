const getFeedback = (score, skill) => {
  const feedbackTemplates = {
    overall: {
      excellent: "Excellent performance with strong control across all speaking skills.",
      good: "Good performance with minor inaccuracies that don't impede communication.",
      fair: "Fair performance with some issues that occasionally affect understanding.",
      poor: "Needs improvement. Significant issues that impede effective communication."
    },
    pronunciation: {
      excellent: "Excellent pronunciation with clear articulation and natural rhythm.",
      good: "Good pronunciation with minor accent issues that don't affect understanding.",
      fair: "Fair pronunciation with some unclear sounds that occasionally affect comprehension.",
      poor: "Pronunciation needs significant improvement. Many sounds are unclear or incorrect."
    },
    fluency: {
      excellent: "Excellent fluency with natural pace and smooth delivery.",
      good: "Good fluency with occasional hesitations that don't disrupt communication.",
      fair: "Fair fluency with noticeable pauses and some disruption to flow.",
      poor: "Fluency needs improvement. Frequent pauses and hesitations affect communication."
    },
    vocabulary: {
      excellent: "Excellent vocabulary range with precise and varied word choice.",
      good: "Good vocabulary with appropriate word choice and some variety.",
      fair: "Fair vocabulary with basic word choice and limited range.",
      poor: "Vocabulary needs expansion. Limited word choice affects expression."
    },
    grammar: {
      excellent: "Excellent grammar with accurate and varied sentence structures.",
      good: "Good grammar with minor errors that don't affect meaning.",
      fair: "Fair grammar with some errors that occasionally affect clarity.",
      poor: "Grammar needs significant improvement. Errors frequently affect understanding."
    }
  };

  const level = getScoreLevel(score);
  const skillKey = skill.toLowerCase();
  
  if (feedbackTemplates[skillKey] && feedbackTemplates[skillKey][level]) {
    return feedbackTemplates[skillKey][level];
  }
  
  return feedbackTemplates.overall[level];
};

const getScoreLevel = (score) => {
  if (score >= 8) return 'excellent';
  if (score >= 6) return 'good';
  if (score >= 4) return 'fair';
  return 'poor';
};

const getRecommendations = (skills) => {
  const recommendations = [];
  
  Object.entries(skills).forEach(([skill, score]) => {
    if (score < 6) {
      recommendations.push(`Focus on improving ${skill} through targeted practice and speaking exercises.`);
    } else if (score < 8) {
      recommendations.push(`Continue building your ${skill} skills with more challenging speaking tasks.`);
    }
  });

  if (recommendations.length === 0) {
    recommendations.push("Maintain your excellent speaking performance through regular practice.");
    recommendations.push("Consider taking advanced speaking challenges to further improve.");
  } else {
    recommendations.push("Practice speaking regularly with native speakers or language exchange partners.");
    recommendations.push("Record yourself speaking and analyze areas for improvement.");
  }

  return recommendations;
};

module.exports = {
  getFeedback,
  getScoreLevel,
  getRecommendations
};