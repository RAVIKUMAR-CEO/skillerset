import Link from 'next/link';
import TutorialCard from '@/components/TutorialCard';

export default function Home() {
  const programmingLanguages = [
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-yellow-600' },
    { name: 'JavaScript', icon: '📜', color: 'from-yellow-300 to-yellow-500' },
    { name: 'Java', icon: '☕', color: 'from-orange-400 to-orange-600' },
    { name: 'C++', icon: '⚙️', color: 'from-blue-400 to-blue-600' },
    { name: 'HTML/CSS', icon: '🎨', color: 'from-pink-400 to-pink-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
  ];

  const popularTutorials = [
    {
      title: 'Introduction to Python Programming',
      description: 'Learn the fundamentals of Python programming language, including variables, data types, and basic operations.',
      category: 'Programming Languages',
      difficulty: 'Beginner' as const,
      slug: 'python-introduction',
      language: 'Python',
    },
    {
      title: 'JavaScript ES6+ Features',
      description: 'Master modern JavaScript features including arrow functions, destructuring, promises, and async/await.',
      category: 'Web Development',
      difficulty: 'Intermediate' as const,
      slug: 'javascript-es6',
      language: 'JavaScript',
    },
    {
      title: 'React Hooks Explained',
      description: 'Deep dive into React Hooks including useState, useEffect, useContext, and custom hooks.',
      category: 'Web Development',
      difficulty: 'Intermediate' as const,
      slug: 'react-hooks',
      language: 'React',
    },
    {
      title: 'Data Structures and Algorithms',
      description: 'Learn essential data structures like arrays, linked lists, trees, and algorithms for problem-solving.',
      category: 'Algorithms',
      difficulty: 'Advanced' as const,
      slug: 'data-structures-algorithms',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Learn to Code.<br />
            Build Your Skills.<br />
            Transform Your Career.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Master programming with our comprehensive tutorials, interactive code examples, 
            and hands-on practice problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tutorials"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Learning
            </Link>
            <Link
              href="/practice"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Practice Problems
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Programming Languages */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Learn Popular Programming Languages
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {programmingLanguages.map((lang) => (
              <Link
                key={lang.name}
                href={`/tutorials?language=${lang.name.toLowerCase()}`}
                className="group"
              >
                <div className={`bg-gradient-to-br ${lang.color} rounded-lg p-6 text-center transform transition-transform hover:scale-105 shadow-md hover:shadow-xl`}>
                  <div className="text-4xl mb-3">{lang.icon}</div>
                  <h3 className="text-white font-semibold text-lg">{lang.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tutorials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Popular Tutorials
            </h2>
            <Link
              href="/tutorials"
              className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTutorials.map((tutorial) => (
              <TutorialCard key={tutorial.slug} {...tutorial} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Join Thousands of Learners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-xl text-blue-100">Tutorials</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">10K+</div>
              <div className="text-xl text-blue-100">Practice Problems</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">50K+</div>
              <div className="text-xl text-blue-100">Active Learners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Web Development', count: 120, icon: '🌐', color: 'bg-blue-500' },
              { name: 'Programming Languages', count: 150, icon: '💻', color: 'bg-green-500' },
              { name: 'Data Structures & Algorithms', count: 80, icon: '📊', color: 'bg-purple-500' },
              { name: 'Database', count: 45, icon: '🗄️', color: 'bg-yellow-500' },
              { name: 'Mobile Development', count: 60, icon: '📱', color: 'bg-pink-500' },
              { name: 'DevOps', count: 40, icon: '⚙️', color: 'bg-indigo-500' },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/courses?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="block"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {category.count} Tutorials
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join SkillersET today and unlock unlimited access to tutorials, practice problems, and more.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
