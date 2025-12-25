// Score ranges and thresholds for speaking assessment
const SCORE_RANGES = {
  EXCELLENT: { min: 8, max: 9 },
  GOOD: { min: 6, max: 7.9 },
  FAIR: { min: 4, max: 5.9 },
  POOR: { min: 0, max: 3.9 }
};

const SCORE_LEVELS = {
  EXCELLENT: 'excellent',
  GOOD: 'good',
  FAIR: 'fair',
  POOR: 'poor'
};

const SKILLS = {
  PRONUNCIATION: 'pronunciation',
  FLUENCY: 'fluency',
  VOCABULARY: 'vocabulary',
  GRAMMAR: 'grammar'
};

module.exports = {
  SCORE_RANGES,
  SCORE_LEVELS,
  SKILLS
};