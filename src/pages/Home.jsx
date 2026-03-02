import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { courseData } from '../data/courseData';

const Home = () => {
    const { setCurrentLocation, progress, finishCourse } = useProgress();

    const handleStartBlock = (index) => {
        setCurrentLocation(index, 0);
    };

    const handleVocab = () => {
        setCurrentLocation(3, 0);
    };

    return (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Aprende Cántabru</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                    Descubre el montañés de forma fácil y progresiva.
                </p>
                <p style={{ color: 'var(--color-secondary-dark, #0f172a)', fontSize: '1.1rem', fontWeight: 'bold' }}>
                    Jechu por Proyeutu Montañés
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {courseData.blocks.map((block, index) => {
                    let btnStyle = {};
                    if (index === 0) btnStyle = { backgroundColor: '#10B981', color: 'white' };
                    if (index === 1) btnStyle = { backgroundColor: '#F97316', color: 'white' };

                    return (
                        <div key={block.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{block.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{block.description}</p>
                            </div>
                            <button className="btn-primary" style={btnStyle} onClick={() => handleStartBlock(index)}>
                                {progress.completedExerciseIds.some(id => id.startsWith(`b${index + 1}-`)) ? 'Continuar' : 'Empezar'}
                            </button>
                        </div>
                    );
                })}

                <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '2px solid var(--color-secondary-light)' }}>
                    <div>
                        <h3 style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{courseData.vocabulary.title}</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{courseData.vocabulary.description}</p>
                    </div>
                    <button className="btn-primary" onClick={handleVocab} style={{ background: 'var(--color-secondary)' }}>
                        Practicar Vocabulario
                    </button>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button className="btn-secondary" onClick={finishCourse}>
                    Ver Resultados Finales
                </button>
            </div>
        </div>
    );
};

export default Home;
