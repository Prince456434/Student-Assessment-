const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

// API service for communicating with backend
export const getStudentReport = async (studentId) => {
  try {
    if (!studentId) {
      throw new Error('Student ID is required');
    }

    const response = await fetch(`${API_BASE_URL}/report/${studentId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Health check function
export const checkServerHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL.replace('/api', '')}/api/health`);
    
    if (!response.ok) {
      throw new Error(`Health check failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Health check error:', error);
    throw error;
  }
};