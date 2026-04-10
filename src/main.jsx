import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ProgressProvider } from './context/ProgressContext';
import { CourseDataProvider } from './context/CourseDataContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProgressProvider>
      <CourseDataProvider>
        <App />
      </CourseDataProvider>
    </ProgressProvider>
  </StrictMode>,
);
