import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 animate-fade-in">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-40ac00"></div>
      <p className="text-gray-300 text-lg">Génération du quiz en cours...</p>
      <p className="text-gray-400 text-sm">L'IA prépare des questions uniques pour vous.</p>
    </div>
  );
};

export default LoadingSpinner;
