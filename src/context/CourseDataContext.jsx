import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { courseData as fallbackCourseData } from '../data/courseData';

const DEFAULT_REMOTE_DATA_URL = 'https://raw.githubusercontent.com/nucleuscloudES/gatuprueba/course-content/courseData.json';
const DEFAULT_TIMEOUT_MS = 2000;

const configuredUrl = import.meta.env.VITE_COURSE_DATA_URL?.trim();
const remoteDataUrl = configuredUrl || DEFAULT_REMOTE_DATA_URL;

const configuredTimeout = Number(import.meta.env.VITE_COURSE_DATA_TIMEOUT_MS);
const requestTimeoutMs = Number.isFinite(configuredTimeout) && configuredTimeout > 0
  ? configuredTimeout
  : DEFAULT_TIMEOUT_MS;

const isValidCourseData = (candidate) => {
  if (!candidate || typeof candidate !== 'object') return false;
  if (!Array.isArray(candidate.blocks)) return false;
  if (!candidate.vocabulary || !Array.isArray(candidate.vocabulary.categories)) return false;
  return true;
};

const CourseDataContext = createContext({
  courseData: fallbackCourseData,
  source: 'fallback',
  loading: false,
  error: null,
});

const fetchRemoteCourseData = async (signal) => {
  const response = await fetch(remoteDataUrl, { cache: 'no-store', signal });
  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status}`);
  }

  const payload = await response.json();
  if (!isValidCourseData(payload)) {
    throw new Error('Formato de courseData remoto no valido');
  }

  return payload;
};

export const CourseDataProvider = ({ children }) => {
  const didLoadRef = useRef(false);
  const [state, setState] = useState(() => ({
    courseData: fallbackCourseData,
    source: 'fallback',
    loading: true,
    error: null,
  }));

  useEffect(() => {
    if (didLoadRef.current) return undefined;
    didLoadRef.current = true;

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), requestTimeoutMs);

    const load = async () => {
      try {
        const remoteCourseData = await fetchRemoteCourseData(controller.signal);
        setState({
          courseData: remoteCourseData,
          source: 'remote',
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          courseData: fallbackCourseData,
          source: 'fallback',
          loading: false,
          error: error instanceof Error ? error.message : 'No se pudo cargar contenido remoto',
        });

        console.warn('[CourseData] Carga remota fallida. Usando fallback hardcodeado.', error);
      } finally {
        window.clearTimeout(timeoutId);
      }
    };

    load();

    return () => {
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return (
    <CourseDataContext.Provider value={state}>
      {children}
    </CourseDataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCourseData = () => useContext(CourseDataContext);