import React from 'react';
import Layout from './components/Layout';
import { useProgress } from './context/ProgressContext';
import Home from './pages/Home';
import TemarioBlock from './components/TemarioBlock';
import VocabularyBlock from './components/VocabularyBlock';
import Results from './components/Results';

function App() {
  const { progress } = useProgress();

  const renderContent = () => {
    if (progress.finished) {
      return <Results />;
    }

    if (progress.currentBlock === null) {
      return <Home />;
    }

    if (progress.currentBlock === 'vocab') { // 'vocab' is used for Vocabulary
      return <VocabularyBlock />;
    }

    return <TemarioBlock blockIndex={progress.currentBlock} />;
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
}

export default App;
