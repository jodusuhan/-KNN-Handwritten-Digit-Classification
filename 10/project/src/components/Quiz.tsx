import { useState } from 'react';
import { interviewQuestions } from '../data/knnData';
import { HelpCircle, CheckCircle, XCircle } from 'lucide-react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(
    new Array(interviewQuestions.length).fill(false)
  );

  const question = interviewQuestions[currentQuestion];

  const handleAnswerSelect = (index: number) => {
    if (showAnswer) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowAnswer(true);
    if (selectedAnswer === question.correctIndex && !answeredQuestions[currentQuestion]) {
      setScore(score + 1);
      const newAnswered = [...answeredQuestions];
      newAnswered[currentQuestion] = true;
      setAnsweredQuestions(newAnswered);
    }
  };

  const handleNext = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setAnsweredQuestions(new Array(interviewQuestions.length).fill(false));
  };

  return (
    <section className="bg-white rounded-xl shadow-md p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Test Your Knowledge</h2>
        </div>
        <div className="bg-blue-100 px-4 py-2 rounded-lg">
          <span className="text-blue-800 font-semibold">
            Score: {score} / {interviewQuestions.length}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {interviewQuestions.length}
          </span>
          <div className="flex space-x-1">
            {interviewQuestions.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentQuestion
                    ? 'bg-blue-600'
                    : answeredQuestions[idx]
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{question.question}</h3>
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === question.correctIndex;
              const showCorrect = showAnswer && isCorrect;
              const showIncorrect = showAnswer && isSelected && !isCorrect;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    showCorrect
                      ? 'border-green-500 bg-green-50'
                      : showIncorrect
                      ? 'border-red-500 bg-red-50'
                      : isSelected
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  } ${showAnswer ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800">{option}</span>
                    {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {showAnswer && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-blue-900 mb-2">Explanation:</h4>
            <p className="text-blue-800 text-sm leading-relaxed">{question.answer}</p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex space-x-3">
            {!showAnswer ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
              >
                Submit
              </button>
            ) : (
              <>
                {currentQuestion < interviewQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                  >
                    Restart Quiz
                  </button>
                )}
              </>
            )}
          </div>

          <button
            onClick={handleNext}
            disabled={currentQuestion === interviewQuestions.length - 1}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
