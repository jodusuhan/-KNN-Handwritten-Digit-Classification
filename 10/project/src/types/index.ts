export interface StudentProgress {
  id: string;
  user_id: string;
  module_name: string;
  completed: boolean;
  notes: string;
  created_at: string;
  updated_at: string;
}

export interface QuizAttempt {
  id: string;
  user_id: string;
  question: string;
  answer: string;
  is_correct: boolean;
  created_at: string;
}

export interface KNNResult {
  k: number;
  accuracy: number;
}

export interface DigitSample {
  image: number[];
  actualLabel: number;
  predictedLabel: number;
}
