import './App.css';
import React, { useState, useEffect } from 'react';
import { getStudentReport } from './services/api';
import { ReportHeader } from './components/ReportHeader';
import { ScoreSummary } from './components/ScoreSummary';
import { FeedbackSection } from './components/FeedbackSection';
import { LoadingSpinner } from './components/LoadingSpinner';

function App(){
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Default student ID (can be changed to STU002 for testing)
  const studentId = 'STU001';

  useEffect(() => {
    const fetchReport = async () => {
      try {
        setLoading(true);
        const response = await getStudentReport(studentId);
        
        if (response.success) {
          setReportData(response.data);
        } else {
          setError('Failed to fetch report data');
        }
      } catch (err) {
        setError(err.message || 'An error occurred while fetching the report');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [studentId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-card">
          <h2 className="error-title">Error</h2>
          <p className="error-message">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="retry-button"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!reportData) {
    return (
      <div className="no-data-container">
        <div className="no-data-message">No report data available</div>
      </div>
    );
  }

  const { student, assessment } = reportData;

  return (
    <div className="app-container">
      <div className="app-content">
        <ReportHeader 
          student={student}
          overallScore={assessment.overallScore}
        />
        
        <ScoreSummary 
          skills={assessment.skills}
          skillFeedback={assessment.skillFeedback}
        />
        
        <FeedbackSection 
          overallFeedback={assessment.overallFeedback}
          skillFeedback={assessment.skillFeedback}
          recommendations={assessment.recommendations}
        />
      </div>
    </div>
  );
}

export default App;