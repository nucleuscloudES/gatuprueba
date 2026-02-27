import React from 'react';
import { useProgress } from '../context/ProgressContext';
import { courseData } from '../data/courseData';

const Results = () => {
    const { progress, resetProgress, setCurrentLocation } = useProgress();

    // Calculate total possible score
    const totalExercises = courseData.blocks.reduce((acc, block) =>
        acc + block.lessons.reduce((lAcc, lesson) => lAcc + lesson.exercises.length, 0), 0) +
        courseData.vocabulary.categories.reduce((acc, cat) => acc + cat.words.length, 0);

    const scorePercentage = totalExercises > 0 ? Math.round((progress.score / totalExercises) * 100) : 0;

    let levelText = "Principiante";
    let feedbackText = "Buen intento, todavía te queda mucho por aprender.";
    if (scorePercentage >= 90) {
        levelText = "Maestro Cántabru";
        feedbackText = "¡Impresionante! Tienes un nivel excelente.";
    } else if (scorePercentage >= 70) {
        levelText = "Avanzado";
        feedbackText = "¡Muy bien! Tienes un gran dominio del nivel básico.";
    } else if (scorePercentage >= 40) {
        levelText = "Intermedio";
        feedbackText = "Vas por buen camino, pero sigue practicando.";
    }

    const handleReturnToCourse = () => {
        // Simply go to home page but keep progress
        setCurrentLocation(null, 0);
    };

    return (
        <div className="fade-in glass-panel" style={{ padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ color: 'var(--color-primary)', fontSize: '3rem', marginBottom: '1rem' }}>¡Curso Completado!</h1>

            <div style={{ margin: '3rem 0', background: 'var(--color-background)', padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>Tu Puntuación</h2>
                <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>
                    {progress.score} <span style={{ fontSize: '2rem', color: 'var(--color-text-muted)' }}>/ {totalExercises}</span>
                </div>
                <div style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
                    ({scorePercentage}% de aciertos)
                </div>
            </div>

            <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Nivel Asignado: {levelText}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>{feedbackText}</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexDirection: 'column' }}>
                <button className="btn-primary" onClick={handleReturnToCourse} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
                    Volver al Curso (Mantener Progreso)
                </button>
                <button className="btn-secondary" onClick={() => { if (window.confirm('¿Estás seguro de que quieres borrar todo tu progreso y empezar de cero?')) resetProgress(); }} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
                    Reiniciar Todo (Empezar de Cero)
                </button>
            </div>
        </div>
    );
};

export default Results;
