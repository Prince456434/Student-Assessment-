@echo off
echo ========================================
echo   Student Assessment Report - GitHub Setup
echo ========================================
echo.

echo Initializing Git repository...
git init

echo.
echo Adding all files to staging...
git add .

echo.
echo Creating initial commit...
git commit -m "Initial commit: Student Speaking Assessment Report

✨ Features:
- Full-stack application with React frontend and Node.js backend
- Speaking assessment with 0-9 IELTS-style scoring scale
- Four skills assessment: Pronunciation, Fluency, Vocabulary, Grammar
- Dynamic feedback generation based on score ranges
- Modern UI with progress bars and responsive design
- RESTful API with proper error handling and validation
- Security headers and middleware implementation
- Comprehensive documentation and setup instructions

🎯 Assignment Requirements Met:
- Clean report page with overall score (X/9 format)
- Skill-wise scores with graphical representation
- Score-based feedback logic (8+ excellent, 6-7 good, <6 needs improvement)
- JSON data source with simple API endpoint
- Professional code structure following best practices

🛠️ Tech Stack:
- Frontend: React, CSS3, Custom Components
- Backend: Node.js, Express.js, JSON data storage
- Development: Modern ES6+, Error handling, Input validation"

echo.
echo Adding remote repository...
git remote add origin https://github.com/Prince456434/Student-Assessment-.git

echo.
echo Setting main branch and pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo   Setup Complete! 
echo   Repository: https://github.com/Prince456434/Student-Assessment-
echo ========================================
pause