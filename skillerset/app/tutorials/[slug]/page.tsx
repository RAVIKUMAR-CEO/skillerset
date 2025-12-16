import { getTutorial } from '@/lib/tutorials';
import TutorialContent from '@/components/TutorialContent';
import TutorialExamples from '@/components/TutorialExamples';
import TutorialQuiz from '@/components/TutorialQuiz';
import TutorialExercises from '@/components/TutorialExercises';
import Link from 'next/link';
import '@/lib/tutorial-content'; // Import to register tutorials

export default async function TutorialPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const tutorial = getTutorial(slug);

  if (!tutorial) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Tutorial Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            The tutorial you're looking for doesn't exist.
          </p>
          <Link
            href="/tutorials"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Tutorials
          </Link>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    Intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    Advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <li><Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
            <li>/</li>
            <li><Link href="/tutorials" className="hover:text-blue-600 dark:hover:text-blue-400">Tutorials</Link></li>
            <li>/</li>
            <li><Link href={`/tutorials?category=${tutorial.category}`} className="hover:text-blue-600 dark:hover:text-blue-400">{tutorial.category}</Link></li>
            <li>/</li>
            <li className="text-gray-900 dark:text-white">{tutorial.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tutorial Header */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2 block">
                    {tutorial.category} / {tutorial.subcategory}
                  </span>
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {tutorial.title}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    {tutorial.description}
                  </p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${difficultyColors[tutorial.difficulty]}`}>
                  {tutorial.difficulty}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>⏱️ {tutorial.readTime}</span>
                {tutorial.prerequisites.length > 0 && (
                  <span>📚 Prerequisites: {tutorial.prerequisites.join(', ')}</span>
                )}
              </div>
            </div>

            {/* Introduction Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Introduction
              </h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  What You'll Learn
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  {tutorial.introduction.whatYouLearn.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Why This Topic is Important
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {tutorial.introduction.whyImportant}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Real-World Applications
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  {tutorial.introduction.realWorldApplications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  Learning Objectives
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  {tutorial.introduction.learningObjectives.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Tutorial Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
              <TutorialContent tutorial={tutorial} />
            </div>

            {/* Examples Section */}
            {tutorial.examples.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
                <TutorialExamples examples={tutorial.examples} />
              </div>
            )}

            {/* Quiz Section */}
            {tutorial.quiz.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
                <TutorialQuiz quiz={tutorial.quiz} />
              </div>
            )}

            {/* Exercises Section */}
            {tutorial.exercises.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
                <TutorialExercises exercises={tutorial.exercises} />
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <Link
                href="/tutorials"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                ← Back to Tutorials
              </Link>
              {tutorial.nextTopic && (
                <Link
                  href={`/tutorials/${tutorial.nextTopic}`}
                  className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Next: {tutorial.nextTopic} →
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-20">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tutorial.content
                  .filter(section => section.type === 'heading')
                  .map((section, index) => (
                    <a
                      key={index}
                      href={`#${section.text?.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      style={{ paddingLeft: `${((section.level || 2) - 2) * 1}rem` }}
                    >
                      {section.text}
                    </a>
                  ))}
              </nav>

              {tutorial.relatedTopics.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                    Related Topics
                  </h3>
                  <ul className="space-y-2">
                    {tutorial.relatedTopics.map((topic, index) => (
                      <li key={index}>
                        <Link
                          href={`/tutorials/${topic}`}
                          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          {topic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
