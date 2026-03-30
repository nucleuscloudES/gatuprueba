import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { courseData } from '../data/courseData';

const Home = () => {
    const { setCurrentLocation, progress, finishCourse } = useProgress();

    const handleStartBlock = (index) => {
        setCurrentLocation(index, 0);
    };

    return (
        <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Aprende Cántabru</h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                    Iscubri'l cántabru de jorma cincía y prugrisiva
                </p>
                <p style={{ color: 'var(--color-secondary-dark, #0f172a)', fontSize: '1.1rem', fontWeight: 'bold' }}>
                    Jechu por Proyeutu Montañés
                </p>
                <p style={{ marginBottom: '1rem' }}>
                    <a href="https://depriendi.wordpress.com/indiz/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
                        Pa deprender más cántabru: ÍNDICI | Proyeutu Depriendi
                    </a>
                </p>
                <img src="/foto.jpg" alt="Logo Cántabru" style={{ maxWidth: '200px', margin: '0 auto', display: 'block' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {courseData.blocks.map((block, index) => {
                    let btnStyle = {};
                    if (index === 0) btnStyle = { background: '#10B981', color: 'white' }; // Verde
                    if (index === 1) btnStyle = { background: '#F97316', color: 'white' }; // Naranja
                    if (index === 2) btnStyle = { background: '#3B82F6', color: 'white' }; // Azul
                    if (index === 3) btnStyle = { background: '#EF4444', color: 'white' }; // Rojo
                    if (index === 4) btnStyle = { background: '#8B5CF6', color: 'white' }; // Morado

                    return (
                        <div key={block.id} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <h3 style={{ color: btnStyle.background, marginBottom: '0.5rem' }}>{block.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{block.description}</p>
                            </div>
                            <button className="btn-primary" style={btnStyle} onClick={() => handleStartBlock(index)}>
                                {progress.completedExerciseIds.some(id => id.startsWith(`b${index + 1}-`)) ? 'Continuar' : 'Empezar'}
                            </button>
                        </div>
                    );
                })}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button className="btn-secondary" onClick={finishCourse}>
                    Ver Resultados Finales
                </button>
            </div>

            {/* Redes Sociales */}
            <div style={{ textAlign: 'center', marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Síguenos pa más:</p>
                <a href="https://www.instagram.com/proyeutu.montanies/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>@proyeutu.montanies</a>
                <a href="https://www.instagram.com/cantabrudeprendiu/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>@cantabrudeprendiu</a>
                <a href="https://www.instagram.com/cantabru_parlau/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>@cantabru_parlau</a>
            </div>
        </div>
    );
};

export default Home;
