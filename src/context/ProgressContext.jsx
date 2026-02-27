import React, { createContext, useContext, useState, useEffect } from 'react';

const initialState = {
  currentBlock: null, // null means home page. 0, 1, 2 for temario, 3 for vocabulary
  currentLesson: 0,
  score: 0,
  completedExerciseIds: [],
  vocabProgress: {
    flashcardsReviewed: [],
    practiceCompleted: []
  },
  finished: false
};

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('aprende-cantabru-progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialState;
      }
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('aprende-cantabru-progress', JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (updates) => {
    setProgress((prev) => ({ ...prev, ...updates }));
  };

  const markExerciseCompleted = (exerciseId, correct) => {
    if (progress.completedExerciseIds.includes(exerciseId)) return; // Already completed

    setProgress((prev) => ({
      ...prev,
      completedExerciseIds: [...prev.completedExerciseIds, exerciseId],
      score: correct ? prev.score + 1 : prev.score
    }));
  };

  const setCurrentLocation = (blockId, lessonId = 0) => {
    setProgress((prev) => ({
      ...prev,
      currentBlock: blockId,
      currentLesson: lessonId
    }));
  };

  const resetProgress = () => {
    setProgress(initialState);
  };

  const finishCourse = () => {
    setProgress((prev) => ({ ...prev, finished: true }));
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      updateProgress,
      markExerciseCompleted,
      setCurrentLocation,
      resetProgress,
      finishCourse
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
