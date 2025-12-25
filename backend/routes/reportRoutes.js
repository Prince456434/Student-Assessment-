const express = require('express');
const router = express.Router();
const { getStudentReport, getAllReports } = require('../controllers/reportController');

// @desc    Get all student reports
// @route   GET /api/report
// @access  Public
router.get('/', getAllReports);

// @desc    Get student report by ID
// @route   GET /api/report/:studentId
// @access  Public
router.get('/:studentId', getStudentReport);

module.exports = router;