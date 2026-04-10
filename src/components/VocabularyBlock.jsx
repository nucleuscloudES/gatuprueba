import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { useCourseData } from '../context/CourseDataContext';
import { isAnswerCorrect } from '../utils/stringComparison';

const VocabularyBlock = ({ isEmbedded = false }) => {
    const { setCurrentLocation, progress, updateProgress } = useProgress();
    const { courseData } = useCourseData();
    const [mode, setMode] = useState('menu'); // 'menu', 'practice', 'flashcards'
    const [activeCategory, setActiveCategory] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [showFlashcardAnswer, setShowFlashcardAnswer] = useState(false);

    const vocabData = courseData.vocabulary;

    // Flatten all words for a mixed session, or use category-specific
    const wordsToPractice = activeCategory !== null
        ? vocabData.categories[activeCategory].words
        : vocabData.categories.flatMap(c => c.words);

    const handleStartMode = (selectedMode, categoryIndex = null) => {
        setMode(selectedMode);
        setActiveCategory(categoryIndex);
        setCurrentIndex(0);
        setUserAnswer('');
        setFeedback(null);
        setShowFlashcardAnswer(false);
    };

    const currentWord = wordsToPractice[currentIndex];

    const handlePracticeSubmit = () => {
        // In practice, usually translated CASTELLANO -> CANTABRU or vice-verse
        // Example: translate from Castellano to Cantabru
        const isCorrect = isAnswerCorrect(userAnswer, currentWord.cantabru);
        setFeedback({ isCorrect, expected: currentWord.cantabru });

        if (isCorrect) {
            // Add to practiceCompleted progress
            const wordId = `vocab-prac-${currentWord.cantabru}`;
            if (!progress.vocabProgress.practiceCompleted.includes(wordId)) {
                updateProgress({
                    score: progress.score + 1,
                    vocabProgress: {
                        ...progress.vocabProgress,
                        practiceCompleted: [...progress.vocabProgress.practiceCompleted, wordId]
                    }
                });
            }
        }
    };

    const handleNextWord = () => {
        if (currentIndex < wordsToPractice.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setUserAnswer('');
            setFeedback(null);
            setShowFlashcardAnswer(false);
        } else {
            setMode('menu'); // Done with session, return to vocab menu
        }
    };

    if (mode === 'menu') {
        return (
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{vocabData.title}</h2>
                    <p style={{ color: 'var(--color-text-muted)' }}>{vocabData.description}</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleStartMode('flashcards')} title="Repaso de todo el vocabulario">
                        <h3 style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Modo Repaso (Flashcards)</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Aprende el vocabulario rápidamente</p>
                    </div>
                    <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }} onClick={() => handleStartMode('practice')} title="Práctica escrita de todo el vocabulario">
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Modo Práctica (Escritura)</h3>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Escribe la traducción para ganar puntos</p>
                    </div>
                </div>

                {!isEmbedded && (
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <button className="btn-secondary" onClick={() => setCurrentLocation(null)}>
                            Volver al Menú Principal
                        </button>
                    </div>
                )}
            </div>
        );
    }

    if (mode === 'flashcards') {
        return (
            <div className="fade-in glass-panel" style={{ padding: '2rem', textAlign: 'center', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    Tarjeta {currentIndex + 1} de {wordsToPractice.length}
                </p>

                <div
                    onClick={() => setShowFlashcardAnswer(!showFlashcardAnswer)}
                    style={{
                        cursor: 'pointer',
                        padding: '3rem',
                        background: 'var(--color-background)',
                        borderRadius: 'var(--radius-lg)',
                        border: '2px solid #E2E8F0',
                        marginBottom: '2rem',
                        minHeight: '200px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <h2 style={{ fontSize: '2rem', color: showFlashcardAnswer ? 'var(--color-primary)' : 'var(--color-text)', marginBottom: '1rem' }}>
                        {showFlashcardAnswer ? currentWord.cantabru : currentWord.castellano}
                    </h2>
                    {showFlashcardAnswer && (
                        <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                            Ej. {currentWord.example}
                        </p>
                    )}
                    <p style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2rem' }}>
                        {showFlashcardAnswer ? 'Haz clic para ver la palabra en castellano' : 'Haz clic para ver la traducción al cántabru'}
                    </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className="btn-secondary" onClick={() => setMode('menu')}>Salir</button>
                    <button className="btn-primary" onClick={handleNextWord}>
                        {currentIndex < wordsToPractice.length - 1 ? 'Siguiente' : 'Terminar'}
                    </button>
                </div>
            </div>
        );
    }

    if (mode === 'practice') {
        return (
            <div className="fade-in glass-panel" style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                    <span>Progreso: {currentIndex + 1} / {wordsToPractice.length}</span>
                    <button onClick={() => setMode('menu')} style={{ color: 'var(--color-error)' }}>Salir</button>
                </div>

                <h3 style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.5rem', color: 'var(--color-text)' }}>
                    ¿Cómo se dice en cántabru?
                </h3>

                <div style={{ textAlign: 'center', marginBottom: '2rem', padding: '1.5rem', background: '#F1F5F9', borderRadius: 'var(--radius-md)' }}>
                    <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--color-secondary)' }}>
                        "{currentWord.castellano}"
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Escribe la palabra en cántabru..."
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        disabled={feedback !== null}
                        autoFocus
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && feedback === null && userAnswer.trim() !== '') {
                                handlePracticeSubmit();
                            } else if (e.key === 'Enter' && feedback !== null) {
                                handleNextWord();
                            }
                        }}
                    />

                    {feedback === null ? (
                        <button
                            className="btn-primary"
                            onClick={handlePracticeSubmit}
                            disabled={userAnswer.trim() === ''}
                            style={{ padding: '1rem', fontSize: '1.1rem' }}
                        >
                            Comprobar
                        </button>
                    ) : (
                        <div className="fade-in" style={{
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-md)',
                            background: feedback.isCorrect ? '#D1FAE5' : '#FEE2E2',
                            color: feedback.isCorrect ? '#065F46' : '#991B1B',
                            textAlign: 'center'
                        }}>
                            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                                {feedback.isCorrect ? '¡Correcto!' : '¡Incorrecto!'}
                            </h4>
                            {!feedback.isCorrect && (
                                <p style={{ marginBottom: '0.5rem' }}>La forma correcta es: <strong>{feedback.expected}</strong></p>
                            )}
                            <p style={{ fontStyle: 'italic', fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                                {currentWord.example}
                            </p>
                            <button className="btn-primary" onClick={handleNextWord} style={{ width: '100%', background: feedback.isCorrect ? '#10B981' : '#EF4444' }}>
                                Continuar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return null;
};

export default VocabularyBlock;
