import React, { useState, useEffect } from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswerSubmit: (isCorrect: boolean) => void;
  onNext: () => void;
  isLastQuestion: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswerSubmit, onNext, isLastQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    setSelectedAnswer('');
    setIsSubmitted(false);
    setIsCorrect(null);
  }, [question]);

  const handleSubmit = () => {
    if (!selectedAnswer && question.type !== 'open') return;
    
    setIsSubmitted(true);
    let correct = false;
    if (question.type !== 'open') {
        correct = selectedAnswer === question.correctAnswer;
        setIsCorrect(correct);
        onAnswerSubmit(correct);
    } else {
        // Les questions ouvertes sont pour la réflexion, pas de scoring. On ne notifie pas le parent.
        // ou on peut décider qu'elles sont toujours "correctes" pour la progression
        onAnswerSubmit(false); // Ne donne pas de point pour les questions ouvertes
    }
  };
  
  const getButtonClass = (option: string) => {
    if (!isSubmitted) {
        return 'border-gray-600 hover:border-purple-500 hover:bg-gray-700';
    }
    if (option === question.correctAnswer) {
        return 'bg-green-500/80 border-green-400 text-white cursor-default';
    }
    if (option === selectedAnswer && option !== question.correctAnswer) {
        return 'bg-red-500/80 border-red-400 text-white cursor-default';
    }
    return 'border-gray-600 opacity-60 cursor-default';
  };

  return (
    <div>
      <p className="font-semibold text-lg text-gray-200 mb-6">{question.text}</p>
      
      <div className="space-y-3 mb-6">
        {(question.type === 'qcm' || question.type === 'closed') && question.options?.map(option => (
          <button
            key={option}
            onClick={() => !isSubmitted && setSelectedAnswer(option)}
            disabled={isSubmitted}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${selectedAnswer === option && !isSubmitted ? 'bg-purple-500/20 border-purple-500' : ''} ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
        {question.type === 'open' && (
          <textarea
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            placeholder="Votre réponse..."
            rows={4}
            disabled={isSubmitted}
            className="w-full p-3 bg-gray-900 border-2 border-gray-600 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition"
          />
        )}
      </div>

      {!isSubmitted && (
         <button
            onClick={handleSubmit}
            disabled={(question.type === 'qcm' || question.type === 'closed') && !selectedAnswer}
            className="w-full px-6 py-3 text-base font-bold text-white bg-indigo-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Valider
          </button>
      )}

      {isSubmitted && (
        <div className="mt-4 p-4 rounded-lg animate-fade-in bg-gray-900/70 border border-gray-700">
          {question.type !== 'open' && (isCorrect ? (
              <p className="font-bold text-green-400">✅ Bonne réponse !</p>
            ) : (
              <p className="font-bold text-red-400">❌ Incorrect.</p>
            )
          )}
          <p className="mt-2 text-gray-300">{question.explanation}</p>
          <button
            onClick={onNext}
            className="w-full mt-4 px-6 py-3 text-base font-bold text-white bg-purple-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-700"
          >
            {isLastQuestion ? 'Terminer le test' : 'Question suivante'}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
