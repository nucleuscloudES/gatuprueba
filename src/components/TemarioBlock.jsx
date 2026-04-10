import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useCourseData } from '../context/CourseDataContext';
import { isAnswerCorrect } from '../utils/stringComparison';
import VocabularyBlock from './VocabularyBlock'; // We import it for the special lesson

const TemarioBlock = ({ blockIndex }) => {
    const { progress, markExerciseCompleted, setCurrentLocation, resetBlock } = useProgress();
    const { courseData } = useCourseData();
    const [userAnswers, setUserAnswers] = useState({});
    const [feedback, setFeedback] = useState({});
    const block = courseData.blocks[blockIndex];

    if (!block) return <div>Bloque no encontrado</div>;

    const lessonIndex = progress.currentLesson || 0;
    const lesson = block.lessons[lessonIndex];

    if (!lesson) {
        return (
            <div className="fade-in glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>¡Bloque completado!</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                    <button className="btn-primary" onClick={() => setCurrentLocation(null)}>
                        Volver al Menú
                    </button>
                    <button className="btn-secondary" style={{ backgroundColor: '#EF4444', color: 'white', border: 'none' }} onClick={() => {
                        resetBlock(blockIndex);
                        setCurrentLocation(blockIndex, 0);
                    }}>
                        Reiniciar Bloque
                    </button>
                </div>
            </div>
        );
    }

    const handleAnswerSubmit = (exerciseId, expectedAnswer) => {
        const userAnswer = userAnswers[exerciseId] || "";
        const isCorrect = isAnswerCorrect(userAnswer, expectedAnswer);

        setFeedback(prev => ({ ...prev, [exerciseId]: { isCorrect, submitted: true } }));

        if (isCorrect) {
            markExerciseCompleted(exerciseId, true);
        } else {
            markExerciseCompleted(exerciseId, isCorrect);
        }
    };

    const allExercisesCompleted = lesson.exercises && lesson.exercises.length > 0 
        ? lesson.exercises.every(ex => feedback[ex.id]?.submitted || progress.completedExerciseIds.includes(ex.id))
        : true; // If no exercises, it's considered completed

    const handleNextLesson = () => {
        if (lessonIndex < block.lessons.length - 1) {
            setCurrentLocation(blockIndex, lessonIndex + 1);
            setUserAnswers({});
            setFeedback({});
        } else {
            setCurrentLocation(null);
        }
    };

    const handlePrevLesson = () => {
        if (lessonIndex > 0) {
            setCurrentLocation(blockIndex, lessonIndex - 1);
            setUserAnswers({});
            setFeedback({});
        }
    };

    const renderHighlightedText = (text) => {
        if (!text) return text;
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                const innerText = part.slice(2, -2);
                return <span key={index} className="latin-highlight">{innerText}</span>;
            }
            return part;
        });
    };

    return (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Top Navigation Row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button 
                    className="btn-secondary" 
                    onClick={handlePrevLesson}
                    disabled={lessonIndex === 0}
                    style={{ opacity: lessonIndex === 0 ? 0.5 : 1, cursor: lessonIndex === 0 ? 'not-allowed' : 'pointer' }}
                >
                    &larr; Lición Antirior
                </button>
                <span style={{ color: 'var(--color-text-muted)', fontWeight: 'bold' }}>
                    Lición {lessonIndex + 1} de {block.lessons.length}
                </span>
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{lesson.title}</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{renderHighlightedText(lesson.theory)}</p>

                {lesson.examples && lesson.examples.length > 0 && (
                    <div style={{ background: 'var(--color-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary-light)' }}>
                        <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Ejemplos:</h4>
                        <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-muted)' }}>
                            {lesson.examples.map((ex, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{renderHighlightedText(ex)}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Render interactive vocabulary game if flagged */}
            {lesson.interactiveVocab && (
                <VocabularyBlock isEmbedded={true} />
            )}

            {/* Standard Exercises */}
            {!lesson.interactiveVocab && lesson.exercises && lesson.exercises.length > 0 && (
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Ejercicios Prácticos</h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {lesson.exercises.map((ex) => {
                            const fb = feedback[ex.id];
                            const isCompleted = progress.completedExerciseIds.includes(ex.id) || fb?.submitted;

                            return (
                                <div key={ex.id} style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '1.5rem' }}>
                                    <p style={{ fontWeight: '600', marginBottom: '1rem' }}>{renderHighlightedText(ex.question)}</p>
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                        {ex.options ? (
                                            <select
                                                className="input-field"
                                                value={userAnswers[ex.id] || (isCompleted && !fb ? ex.expectedAnswer : '')}
                                                onChange={(e) => setUserAnswers({ ...userAnswers, [ex.id]: e.target.value })}
                                                disabled={isCompleted}
                                                style={{ flexGrow: 1 }}
                                            >
                                                <option value="">Selecciona una opción</option>
                                                {ex.options.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                className="input-field"
                                                placeholder="Escribe tu respuesta aquí..."
                                                value={userAnswers[ex.id] || (isCompleted && !fb ? ex.expectedAnswer : '')}
                                                onChange={(e) => setUserAnswers({ ...userAnswers, [ex.id]: e.target.value })}
                                                disabled={isCompleted}
                                                style={{ flexGrow: 1 }}
                                            />
                                        )}
                                        {!isCompleted && (
                                            <button className="btn-primary" onClick={() => handleAnswerSubmit(ex.id, ex.expectedAnswer)}>
                                                Comprobar
                                            </button>
                                        )}
                                    </div>

                                    {/* Local visual feedback right after submission */}
                                    {fb?.submitted && (
                                        <div className="fade-in" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', background: fb.isCorrect ? '#D1FAE5' : '#FEE2E2', color: fb.isCorrect ? '#065F46' : '#991B1B' }}>
                                            <p style={{ fontWeight: 'bold' }}>{fb.isCorrect ? '¡Correcto!' : '¡Incorrecto! La respuesta era: ' + ex.expectedAnswer}</p>
                                            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{ex.explanation}</p>
                                        </div>
                                    )}

                                    {/* Indication that it was already completed if loaded from memory */}
                                    {isCompleted && !fb && (
                                        <div style={{ padding: '0.5rem', color: '#10B981', fontWeight: 'bold', fontSize: '0.9rem' }}>
                                            ✓ Ejercicio completado
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Next Lesson Button always visible if all exercises are done (or if there are no exercises) */}
            <div className={`fade-in ${allExercisesCompleted ? '' : 'disabled'}`} style={{ marginTop: '1rem', textAlign: 'right' }}>
                <button 
                    className="btn-primary" 
                    onClick={handleNextLesson}
                    disabled={!allExercisesCompleted && !lesson.interactiveVocab}
                    style={{ opacity: (!allExercisesCompleted && !lesson.interactiveVocab) ? 0.5 : 1 }}
                >
                    {lessonIndex < block.lessons.length - 1 ? 'Siguienti Lición' : 'Completar Bloqui'}
                </button>
            </div>
        </div>
    );
};

export default TemarioBlock;
