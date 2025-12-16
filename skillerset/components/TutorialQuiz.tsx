'use client';

import { Tutorial } from '@/lib/tutorials';
import { useState } from 'react';

interface TutorialQuizProps {
  quiz: Tutorial['quiz'];
}

export default function TutorialQuiz({ quiz }: TutorialQuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    if (showResults) return;
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: optionIndex });
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++;
      }
    });
    return { correct, total: quiz.length };
  };

  const score = showResults ? calculateScore() : null;

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Quiz: Test Your Knowledge
      </h2>
      <div className="space-y-6">
        {quiz.map((question, qIndex) => {
          const isCorrect = selectedAnswers[qIndex] === question.correct;
          const showAnswer = showResults;

          return (
            <div
              key={qIndex}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                {qIndex + 1}. {question.question}
              </h3>
              <div className="space-y-2">
                {question.options.map((option, oIndex) => {
                  const isSelected = selectedAnswers[qIndex] === oIndex;
                  const isCorrectAnswer = oIndex === question.correct;
                  let bgColor = 'bg-gray-50 dark:bg-gray-700';
                  
                  if (showAnswer) {
                    if (isCorrectAnswer) {
                      bgColor = 'bg-green-100 dark:bg-green-900/30 border-green-500';
                    } else if (isSelected && !isCorrectAnswer) {
                      bgColor = 'bg-red-100 dark:bg-red-900/30 border-red-500';
                    }
                  } else if (isSelected) {
                    bgColor = 'bg-blue-100 dark:bg-blue-900/30 border-blue-500';
                  }

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswerSelect(qIndex, oIndex)}
                      disabled={showResults}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${bgColor} ${
                        !showResults ? 'hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      <span className="font-medium text-gray-900 dark:text-white">
                        {String.fromCharCode(65 + oIndex)}. {option}
                      </span>
                      {showAnswer && isCorrectAnswer && (
                        <span className="ml-2 text-green-600 dark:text-green-400">✓ Correct</span>
                      )}
                    </button>
                  );
                })}
              </div>
              {showAnswer && (
                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => setShowResults(!showResults)}
          className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
        >
          {showResults ? 'Hide Results' : 'Check Answers'}
        </button>
        {score && (
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            Score: {score.correct} / {score.total}
          </div>
        )}
      </div>
    </div>
  );
}

