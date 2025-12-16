'use client';

import { Tutorial } from '@/lib/tutorials';
import { useState } from 'react';

interface TutorialExercisesProps {
  exercises: Tutorial['exercises'];
}

export default function TutorialExercises({ exercises }: TutorialExercisesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showSolutions, setShowSolutions] = useState<Record<number, boolean>>({});

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Practice Exercises
      </h2>
      <div className="space-y-6">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Exercise {index + 1}: {exercise.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {exercise.description}
            </p>
            
            {exercise.hints && exercise.hints.length > 0 && (
              <details className="mb-4">
                <summary className="cursor-pointer text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Show Hints
                </summary>
                <ul className="mt-2 ml-4 list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  {exercise.hints.map((hint, hIndex) => (
                    <li key={hIndex}>{hint}</li>
                  ))}
                </ul>
              </details>
            )}

            {exercise.solution && (
              <details className="mt-4">
                <summary className="cursor-pointer text-green-600 dark:text-green-400 font-medium hover:underline">
                  Show Solution
                </summary>
                <div className="mt-4 bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-gray-100">
                    <code>{exercise.solution}</code>
                  </pre>
                </div>
              </details>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

