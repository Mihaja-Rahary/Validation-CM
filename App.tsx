import React, { useState, useEffect } from 'react';
import { SOP_CONTENT, allTopicsInOrder, evaluationStructure, PASSING_THRESHOLD } from './constants';
import { generateQuizQuestions } from './services/geminiService';
import type { Question, EvaluationProgress } from './types';
import QuestionCard from './components/QuestionCard';
import ResultsDisplay from './components/ResultsDisplay';
import ProgressBar from './components/ProgressBar';
import LoadingSpinner from './components/LoadingSpinner';
import Login from './components/Login';
import EvaluationSummary from './components/EvaluationSummary';

const APP_STORAGE_KEY = 'cmEvaluationProgress';

type AppState = 'login' | 'module_selection' | 'loading_quiz' | 'quiz_active' | 'quiz_results' | 'final_summary';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('login');
  const [progress, setProgress] = useState<EvaluationProgress | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);

  // Load progress from localStorage on initial mount
  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem(APP_STORAGE_KEY);
      if (savedProgress) {
        const parsedProgress = JSON.parse(savedProgress) as EvaluationProgress;
        setProgress(parsedProgress);
        if (parsedProgress.unlockedTopicIndex >= allTopicsInOrder.length) {
            setAppState('final_summary');
        } else {
            setAppState('module_selection');
        }
      }
    } catch (error) {
      console.error("Failed to load progress from localStorage", error);
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (progress) {
      try {
        localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(progress));
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
    }
  }, [progress]);

  const handleLogin = (userName: string) => {
    const newProgress: EvaluationProgress = {
      userName,
      moduleScores: {},
      unlockedTopicIndex: 0,
    };
    setProgress(newProgress);
    setAppState('module_selection');
  };

  const handleStartQuiz = async (topic: string, topicIndex: number) => {
    if (!progress || topicIndex > progress.unlockedTopicIndex) {
      alert("Veuillez d'abord compléter les modules précédents.");
      return;
    }
    
    setSelectedTopic(topic);
    setCurrentScore(0);
    setCurrentQuestionIndex(0);
    setAppState('loading_quiz');

    try {
      const content = SOP_CONTENT[topic];
      if (!content) throw new Error("Contenu de la SOP introuvable.");
      
      const questions = await generateQuizQuestions(topic, content);
      
      if (questions && questions.length > 0) {
        setActiveQuestions(questions);
        setAppState('quiz_active');
      } else {
        throw new Error("Aucune question n'a été générée.");
      }
    } catch (error) {
      console.error("Échec du démarrage du quiz:", error);
      alert("Une erreur est survenue lors de la création du quiz. Veuillez réessayer.");
      setAppState('module_selection');
    }
  };

  const handleAnswerSubmit = (isCorrect: boolean) => {
    if(isCorrect) {
      setCurrentScore(prev => prev + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setAppState('quiz_results');
    }
  };

  const handleQuizCompletion = () => {
    if (!progress || !selectedTopic) return;
    
    const isPassed = currentScore / activeQuestions.length >= PASSING_THRESHOLD;
    
    setProgress(prev => {
        if (!prev) return null;
        const newScores = { ...prev.moduleScores, [selectedTopic]: currentScore };
        const newUnlockedIndex = isPassed && prev.unlockedTopicIndex === allTopicsInOrder.indexOf(selectedTopic)
            ? prev.unlockedTopicIndex + 1
            : prev.unlockedTopicIndex;
        
        return { ...prev, moduleScores: newScores, unlockedTopicIndex: newUnlockedIndex };
    });

    if (isPassed && (progress.unlockedTopicIndex + 1) >= allTopicsInOrder.length) {
        setAppState('final_summary');
    } else {
        setAppState('module_selection');
    }
  };

  const handleRetry = () => {
      if (selectedTopic) {
        const topicIndex = allTopicsInOrder.indexOf(selectedTopic);
        handleStartQuiz(selectedTopic, topicIndex);
      }
  };

  const handleResetEvaluation = () => {
    localStorage.removeItem(APP_STORAGE_KEY);
    setProgress(null);
    setAppState('login');
  }

  const renderContent = () => {
    switch(appState) {
        case 'login':
            return <Login onLogin={handleLogin} />;
        case 'module_selection':
            if (!progress) return <Login onLogin={handleLogin} />; // Failsafe
            return (
                <div className="animate-fade-in">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-200">Bonjour, {progress.userName} !</h2>
                        <p className="text-gray-400">Choisissez un module pour commencer ou continuer votre évaluation.</p>
                    </div>
                    {evaluationStructure.map(section => (
                        <div key={section.title} className="mb-10">
                            <h3 className="text-xl font-semibold text-purple-400 mb-6 border-b-2 border-purple-800 pb-2">{section.title}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.topics.map(topic => {
                                    const topicIndex = allTopicsInOrder.indexOf(topic);
                                    const isUnlocked = topicIndex <= progress.unlockedTopicIndex;
                                    const score = progress.moduleScores[topic];
                                    const isCompleted = score !== undefined;

                                    return (
                                        <button
                                            key={topic}
                                            onClick={() => handleStartQuiz(topic, topicIndex)}
                                            disabled={!isUnlocked}
                                            className="group relative flex flex-col justify-center items-center p-6 bg-gray-800 rounded-2xl shadow-lg border-2 transition-all duration-300 ease-in-out transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                                                ${isUnlocked ? 'hover:scale-105 hover:border-purple-500 hover:bg-gray-700/50' : 'border-gray-700/50'}
                                                ${isCompleted ? 'border-green-500' : 'border-gray-700/50'}
                                            "
                                            style={{ minHeight: '120px' }}
                                        >
                                            {!isUnlocked && <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center"><span className="text-2xl">🔒</span></div>}
                                            <span className="text-base font-semibold text-gray-200 group-hover:text-white text-center">{topic}</span>
                                            {isCompleted && <span className="absolute bottom-2 right-3 text-sm font-bold text-green-400">✓ {score}/10</span>}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            );
        case 'loading_quiz':
            return <LoadingSpinner />;
        case 'quiz_active':
            return (
                <div className="animate-fade-in w-full">
                    <ProgressBar current={currentQuestionIndex + 1} total={activeQuestions.length} />
                    <QuestionCard 
                        key={activeQuestions[currentQuestionIndex].id}
                        question={activeQuestions[currentQuestionIndex]}
                        onAnswerSubmit={handleAnswerSubmit}
                        onNext={handleNextQuestion}
                        isLastQuestion={currentQuestionIndex === activeQuestions.length - 1}
                    />
                </div>
            );
        case 'quiz_results':
             const isPassed = currentScore / activeQuestions.length >= PASSING_THRESHOLD;
             return (
                <ResultsDisplay 
                   score={currentScore}
                   totalQuestions={activeQuestions.length}
                   onContinue={handleQuizCompletion}
                   onRetry={handleRetry}
                   topic={selectedTopic}
                   isPassed={isPassed}
               />
             );
        case 'final_summary':
             if (!progress) return <Login onLogin={handleLogin} />;
             return (
                <EvaluationSummary
                    progress={progress}
                    onReset={handleResetEvaluation}
                />
             );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">
            Évaluation CM
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Évaluation des connaissances sur les Standard Operating Procedures.
          </p>
        </header>

        <main className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700 min-h-[400px] flex flex-col justify-center">
          {renderContent()}
        </main>

        <footer className="text-center mt-12 text-gray-500 text-sm">
            <p>Plateforme d'évaluation interactive</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
