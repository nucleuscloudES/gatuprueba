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
  finished: false,
  streak: 0,
  lastActiveDate: null
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

    const todayStr = new Date().toISOString().split('T')[0];
    const todayDate = new Date(todayStr);

    let newStreak = progress.streak || 0;

    if (progress.lastActiveDate) {
      const lastActive = new Date(progress.lastActiveDate);
      // Calculate diff in days
      const diffTime = Math.abs(todayDate - lastActive);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        newStreak += 1;
      } else if (diffDays > 1) {
        newStreak = 1; // resets if missed a day
      }
      // If diffDays === 0, it means same day, streak stays the same
    } else {
      // First time completing an exercise
      newStreak = 1;
    }

    setProgress((prev) => ({
      ...prev,
      completedExerciseIds: [...prev.completedExerciseIds, exerciseId],
      score: correct ? prev.score + 1 : prev.score,
      streak: newStreak,
      lastActiveDate: todayStr
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
