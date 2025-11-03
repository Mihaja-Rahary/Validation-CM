import React from 'react';

interface ResultsDisplayProps {
  score: number;
  totalQuestions: number;
  onContinue: () => void;
  onRetry: () => void;
  topic: string | null;
  isPassed: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ score, totalQuestions, onContinue, onRetry, topic, isPassed }) => {
  return (
    <div className="text-center animate-fade-in">
        <h2 className={`text-3xl font-bold ${isPassed ? 'text-green-400' : 'text-red-400'}`}>
            {isPassed ? 'Module validé !' : 'Module non validé'}
        </h2>
        {topic && <p className="text-md text-gray-400 mt-2">{topic}</p>}
        <p className="text-xl text-gray-300 mt-4">Votre score :</p>
        <p className="text-6xl font-extrabold text-white my-4">{score} / {totalQuestions}</p>
        
        {isPassed ? (
             <p className="text-gray-300 mb-6">Félicitations ! Vous avez atteint le seuil de réussite.</p>
        ) : (
            <p className="text-gray-300 mb-6">Vous n'avez pas atteint le score requis de 80%.<br/>Veuillez revoir la SOP et retenter le test.</p>
        )}

        <button
          onClick={isPassed ? onContinue : onRetry}
          className={`mt-6 px-8 py-3 text-lg font-bold text-white rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
            isPassed 
            ? 'bg-gradient-to-r from-purple-600 to-indigo-600'
            : 'bg-gradient-to-r from-yellow-600 to-orange-600'
          }`}
        >
          {isPassed ? 'Continuer' : 'Réessayer'}
        </button>
    </div>
  );
};

export default ResultsDisplay;
