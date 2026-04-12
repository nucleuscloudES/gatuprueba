import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { useCourseData } from '../context/CourseDataContext';

const Layout = ({ children }) => {
    const { progress, resetProgress, setCurrentLocation } = useProgress();
    const { courseData } = useCourseData();

    // Calculate overall progress across all blocks/lessons
    const totalExercises = courseData.blocks.reduce((acc, block) =>
        acc + block.lessons.reduce((lAcc, lesson) => lAcc + lesson.exercises.length, 0), 0) +
        courseData.vocabulary.categories.reduce((acc, cat) => acc + cat.words.length, 0); // Assuming 1 exercise per word in practice mode

    const completedCount = progress.completedExerciseIds.length + progress.vocabProgress.practiceCompleted.length;
    const progressPercent = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;

    return (
        <div className="layout-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 10, borderRadius: 0, padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => setCurrentLocation(null, 0)}
                        style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}
                        className="brand-logo"
                        title="Volver al inicio"
                    >
                        Aprende Cántabru
                    </button>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div className="score-display" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.2rem' }}>Racha</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: progress.streak > 0 ? '#ea580c' : '#94a3b8', fontWeight: 'bold' }}>
                                <span style={{ fontSize: '1.2rem' }}>🔥</span>
                                <span style={{ fontSize: '1.1rem' }}>{progress.streak || 0}</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Puntuación</span>
                            <strong style={{ color: 'var(--color-secondary)', fontSize: '1.2rem' }}>{progress.score}</strong>
                        </div>
                    </div>
                    <button onClick={() => { if (window.confirm('¿Seguro que quieres reiniciar todo el progreso?')) resetProgress(); }} className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Reiniciar
                    </button>
                </div>            </header>

            <div className="progress-bar-container" style={{ width: '100%', height: '6px', background: '#E2E8F0' }}>
                <div
                    className="progress-bar-fill"
                    style={{
                        width: `${progressPercent}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))',
                        transition: 'width 0.5s ease'
                    }}
                />
            </div>

            <main style={{ flex: 1, padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                {children}
            </main>

            <footer style={{ padding: '1rem', textAlign: 'center', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                Jechu por Proyeutu Montañés
            </footer>
        </div>
    );
};

export default Layout;
