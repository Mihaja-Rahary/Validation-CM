import React from 'react';
import type { EvaluationProgress } from '../types';
import { allTopicsInOrder } from '../constants';

interface EvaluationSummaryProps {
    progress: EvaluationProgress;
    onReset: () => void;
}

const EvaluationSummary: React.FC<EvaluationSummaryProps> = ({ progress, onReset }) => {
    const totalPossibleScore = allTopicsInOrder.length * 10; // Assuming 10 questions per quiz
    // Fix: Explicitly type the accumulator and value in the reduce function to prevent type inference issues.
    const totalUserScore = Object.values(progress.moduleScores).reduce((sum: number, score: number) => sum + score, 0);

    return (
        <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold text-green-400">Évaluation Terminée !</h2>
            <p className="text-xl text-gray-300 mt-4">Rapport final pour <span className="font-bold text-purple-400">{progress.userName}</span></p>
            
            <div className="my-8 max-h-96 overflow-y-auto bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <table className="w-full text-left">
                    <thead className="sticky top-0 bg-gray-800">
                        <tr>
                            <th className="p-3 font-semibold text-gray-300">Module SOP</th>
                            <th className="p-3 font-semibold text-gray-300 text-right">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTopicsInOrder.map((topic) => {
                            const score = progress.moduleScores[topic];
                            const isCompleted = score !== undefined;
                            return (
                                <tr key={topic} className="border-t border-gray-700">
                                    <td className="p-3 text-gray-400">{topic}</td>
                                    <td className={`p-3 text-right font-bold ${isCompleted ? 'text-green-400' : 'text-gray-500'}`}>
                                        {isCompleted ? `${score} / 10` : 'N/A'}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

             <div className="mt-6">
                <p className="text-lg text-gray-200">Score global : <span className="font-extrabold text-2xl text-white">{totalUserScore} / {totalPossibleScore}</span></p>
            </div>

            <button
                onClick={onReset}
                className="mt-8 px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
                Recommencer une évaluation
            </button>
        </div>
    );
};

export default EvaluationSummary;
