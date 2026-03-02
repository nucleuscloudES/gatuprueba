import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { courseData } from '../data/courseData';
import { isAnswerCorrect } from '../utils/stringComparison';

const TemarioBlock = ({ blockIndex }) => {
    const { progress, markExerciseCompleted, setCurrentLocation, finishCourse } = useProgress();
    const block = courseData.blocks[blockIndex];

    // Guard against invalid index when modifying array directly or via bugs
    if (!block) return <div>Bloque no encontrado</div>;

    const lessonIndex = progress.currentLesson || 0;
    const lesson = block.lessons[lessonIndex];

    if (!lesson) {
        return (
            <div className="fade-in glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>¡Bloque completado!</h2>
                <button className="btn-primary" onClick={() => setCurrentLocation(null)}>
                    Volver al Menú
                </button>
            </div>
        );
    }

    const [userAnswers, setUserAnswers] = useState({});
    const [feedback, setFeedback] = useState({});

    const handleAnswerSubmit = (exerciseId, expectedAnswer) => {
        const userAnswer = userAnswers[exerciseId] || "";
        const isCorrect = isAnswerCorrect(userAnswer, expectedAnswer);

        setFeedback(prev => ({ ...prev, [exerciseId]: { isCorrect, submitted: true } }));

        if (isCorrect) {
            markExerciseCompleted(exerciseId, true);
        } else {
            // Still mark as completed but no point awarded? 
            // Re-read requirements: "Guardado automático. Resultado final con orientativo según puntuación...". 
            // Usually you can retry until correct, but I'll mark completed even if wrong, or require correct?
            // "Corrección automática comparando la respuesta. Explicación tras cada respuesta."
            markExerciseCompleted(exerciseId, isCorrect);
        }
    };

    const allExercisesCompleted = lesson.exercises.every(ex => feedback[ex.id]?.submitted);

    const handleNextLesson = () => {
        if (lessonIndex < block.lessons.length - 1) {
            setCurrentLocation(blockIndex, lessonIndex + 1);
            setUserAnswers({});
            setFeedback({});
        } else {
            // Return to menu when block ends
            setCurrentLocation(null);
        }
    };

    return (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2rem' }}>
                <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{lesson.title}</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8', whiteSpace: 'pre-line' }}>{lesson.theory}</p>

                <div style={{ background: 'var(--color-background)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-primary-light)' }}>
                    <h4 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>Ejemplos:</h4>
                    <ul style={{ listStylePosition: 'inside', color: 'var(--color-text-muted)' }}>
                        {lesson.examples.map((ex, i) => (
                            <li key={i} style={{ marginBottom: '0.5rem' }}>{ex}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Ejercicios Prácticos</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {lesson.exercises.map((ex) => {
                        const fb = feedback[ex.id];
                        const isCompleted = progress.completedExerciseIds.includes(ex.id) || fb?.submitted;

                        return (
                            <div key={ex.id} style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '1.5rem' }}>
                                <p style={{ fontWeight: '600', marginBottom: '1rem' }}>{ex.question}</p>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                    {ex.options ? (
                                        <select
                                            className="input-field"
                                            value={userAnswers[ex.id] || ''}
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
                                            value={userAnswers[ex.id] || ''}
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

                                {fb?.submitted && (
                                    <div className="fade-in" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', background: fb.isCorrect ? '#D1FAE5' : '#FEE2E2', color: fb.isCorrect ? '#065F46' : '#991B1B' }}>
                                        <p style={{ fontWeight: 'bold' }}>{fb.isCorrect ? '¡Correcto!' : '¡Incorrecto! La respuesta era: ' + ex.expectedAnswer}</p>
                                        <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{ex.explanation}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {allExercisesCompleted && (
                    <div className="fade-in" style={{ marginTop: '2rem', textAlign: 'right' }}>
                        <button className="btn-primary" onClick={handleNextLesson}>
                            {lessonIndex < block.lessons.length - 1 ? 'Siguiente Lección' : 'Completar Bloque'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TemarioBlock;
