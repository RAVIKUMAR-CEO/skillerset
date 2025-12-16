'use client';

import { Tutorial, TutorialSection, CodeExample, Callout, VisualAid } from '@/lib/tutorials';
import { useState } from 'react';

interface TutorialContentProps {
  tutorial: Tutorial;
}

export default function TutorialContent({ tutorial }: TutorialContentProps) {
  const [showOutput, setShowOutput] = useState<Record<number, boolean>>({});

  const renderSection = (section: TutorialSection, index: number) => {
    switch (section.type) {
      case 'heading':
        const HeadingTag = `h${section.level || 2}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={index}
            className={`font-bold text-gray-900 dark:text-white mb-4 mt-8 ${
              section.level === 2 ? 'text-3xl' :
              section.level === 3 ? 'text-2xl' :
              section.level === 4 ? 'text-xl' :
              'text-lg'
            }`}
          >
            {section.text}
          </HeadingTag>
        );

      case 'paragraph':
        return (
          <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {section.text}
          </p>
        );

      case 'code':
        if (!section.code) return null;
        return (
          <CodeBlock
            key={index}
            code={section.code}
            index={index}
            showOutput={showOutput[index]}
            onToggleOutput={() => setShowOutput({ ...showOutput, [index]: !showOutput[index] })}
          />
        );

      case 'callout':
        if (!section.callout) return null;
        return <CalloutBox key={index} callout={section.callout} />;

      case 'visual':
        if (!section.visual) return null;
        return <VisualAidBox key={index} visual={section.visual} />;

      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300 ml-4">
            {section.items?.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {tutorial.content.map((section, index) => renderSection(section, index))}
    </div>
  );
}

function CodeBlock({ 
  code, 
  index, 
  showOutput, 
  onToggleOutput 
}: { 
  code: CodeExample; 
  index: number; 
  showOutput: boolean;
  onToggleOutput: () => void;
}) {
  return (
    <div className="my-6">
      <div className="bg-gray-900 rounded-t-lg p-4 flex items-center justify-between">
        <span className="text-gray-400 text-sm font-mono">{code.language.toUpperCase()}</span>
        <button
          onClick={onToggleOutput}
          className="text-gray-400 hover:text-white text-sm"
        >
          {showOutput ? 'Hide' : 'Show'} Output
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
        <code className={`language-${code.language}`}>{code.code}</code>
      </pre>
      {code.explanation && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
          {code.explanation}
        </p>
      )}
      {showOutput && code.output && (
        <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2">Output:</p>
          <p className="text-green-700 dark:text-green-300">{code.output}</p>
        </div>
      )}
    </div>
  );
}

function CalloutBox({ callout }: { callout: Callout }) {
  const styles = {
    tip: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200',
    note: 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200',
    'best-practice': 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
    example: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200',
  };

  const icons = {
    tip: '💡',
    warning: '⚠️',
    note: '📝',
    'best-practice': '✅',
    example: '🔍',
  };

  return (
    <div className={`my-4 p-4 rounded-lg border ${styles[callout.variant]}`}>
      <p className="font-semibold mb-1">
        {icons[callout.variant]} {callout.variant.charAt(0).toUpperCase() + callout.variant.slice(1).replace('-', ' ')}
      </p>
      <p>{callout.text}</p>
    </div>
  );
}

function VisualAidBox({ visual }: { visual: VisualAid }) {
  return (
    <div className="my-6 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        📊 {visual.type.charAt(0).toUpperCase() + visual.type.slice(1)}:
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-sm italic">
        {visual.description}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
        Alt text: {visual.alt}
      </p>
    </div>
  );
}

