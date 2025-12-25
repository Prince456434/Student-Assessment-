class Student {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.grade = data.grade;
    this.testDate = data.testDate;
    this.skills = data.skills || {};
    this.overallScore = this.calculateOverallScore();
  }

  calculateOverallScore() {
    if (!this.skills || Object.keys(this.skills).length === 0) {
      return 0;
    }
    
    const scores = Object.values(this.skills);
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return Math.round((sum / scores.length) * 10) / 10; // Round to 1 decimal place
  }

  getSkillScore(skillName) {
    return this.skills[skillName] || 0;
  }

  getSkillLevel(skillName) {
    const score = this.getSkillScore(skillName);
    if (score >= 8) return 'Excellent';
    if (score >= 6) return 'Good';
    if (score >= 4) return 'Fair';
    return 'Needs Improvement';
  }
}

module.exports = Student;