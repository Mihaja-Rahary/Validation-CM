export type QuestionType = 'qcm' | 'open' | 'closed';

export interface Question {
  id: string;
  topic: string;
  type: QuestionType;
  text: string;
  options?: string[]; // Pour 'qcm' et 'closed'
  correctAnswer?: string; // Pour 'qcm' et 'closed'
  explanation: string; // Le feedback/la bonne réponse
}

export interface EvaluationProgress {
  userName: string;
  moduleScores: Record<string, number>;
  unlockedTopicIndex: number;
}
