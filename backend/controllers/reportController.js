const Student = require('../models/Student.js');
const { getFeedback, getScoreLevel, getRecommendations } = require('../services/feedbackService.js');
const sampleData = require('../data/sampleData.json');

// Controller: Handle report requests

// @desc    Get student report by ID
// @route   GET /api/report/:studentId
// @access  Public
const getStudentReport = (req, res, next) => {
  try {
    const { studentId } = req.params;

    // Input validation
    if (!studentId || typeof studentId !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Valid student ID is required'
      });
    }

    // Find student in sample data
    const studentData = sampleData.students.find(s => s.id === studentId);

    if (!studentData) {
      return res.status(404).json({
        success: false,
        message: `Student with ID '${studentId}' not found`
      });
    }

    // Create Student instance
    const student = new Student(studentData);

    // Generate feedback for each skill
    const skillFeedback = {};
    for (const [skill, score] of Object.entries(student.skills)) {
      skillFeedback[skill] = getFeedback(score, skill);
    }

    // Generate overall feedback
    const overallFeedback = getFeedback(student.overallScore, 'overall');

    // Generate recommendations
    const recommendations = getRecommendations(student.skills);

    // Prepare response
    const response = {
      success: true,
      data: {
        student: {
          id: student.id,
          name: student.name,
          email: student.email,
          testDate: student.testDate,
          grade: student.grade
        },
        assessment: {
          overallScore: student.overallScore,
          overallFeedback: overallFeedback,
          skills: student.skills,
          skillFeedback: skillFeedback,
          recommendations: recommendations
        }
      }
    };

    res.json(response);
  } catch (error) {
    console.error('Error fetching report:', error);
    next(error);
  }
};

// @desc    Get all student reports
// @route   GET /api/report
// @access  Public
const getAllReports = (req, res, next) => {
  try {
    const reports = sampleData.students.map(studentData => {
      const student = new Student(studentData);
      return {
        id: studentData.id,
        name: studentData.name,
        testDate: studentData.testDate,
        overallScore: student.overallScore
      };
    });

    res.json({
      success: true,
      count: reports.length,
      data: reports
    });
  } catch (error) {
    console.error('Error fetching reports:', error);
    next(error);
  }
};

module.exports = {
  getStudentReport,
  getAllReports
};