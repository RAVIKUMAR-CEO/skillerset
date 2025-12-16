import { getAllTutorials } from '@/lib/tutorials';
import TutorialCard from '@/components/TutorialCard';
import Link from 'next/link';
import '@/lib/tutorial-content'; // Import to register tutorials

export default function TutorialsPage() {
  const tutorials = getAllTutorials();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          All Tutorials
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Browse our comprehensive collection of programming tutorials. Learn at your own pace with 
          interactive examples and hands-on exercises.
        </p>

        {tutorials.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              No tutorials available yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <TutorialCard
                key={tutorial.id}
                title={tutorial.title}
                description={tutorial.description}
                category={tutorial.category}
                difficulty={tutorial.difficulty}
                slug={tutorial.id}
                language={tutorial.subcategory}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

