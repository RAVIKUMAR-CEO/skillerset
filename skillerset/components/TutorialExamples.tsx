'use client';

import { Tutorial } from '@/lib/tutorials';
import { useState } from 'react';

interface TutorialExamplesProps {
  examples: Tutorial['examples'];
}

export default function TutorialExamples({ examples }: TutorialExamplesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        Practical Examples
      </h2>
      <div className="space-y-6">
        {examples.map((example, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Example {index + 1}: {example.title}
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-gray-100">
                <code className={`language-${example.language}`}>{example.code}</code>
              </pre>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {example.explanation}
            </p>
            {example.output && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">
                  Expected Output:
                </p>
                <p className="text-green-700 dark:text-green-300">{example.output}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

