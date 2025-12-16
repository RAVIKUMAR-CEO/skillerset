import Link from 'next/link';

interface TutorialCardProps {
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  slug: string;
  language?: string;
}

export default function TutorialCard({ 
  title, 
  description, 
  category, 
  difficulty, 
  slug,
  language 
}: TutorialCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <Link href={`/tutorials/${slug}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
            {category}
          </span>
          {language && (
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {language}
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}

