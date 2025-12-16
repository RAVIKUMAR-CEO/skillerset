export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          About SkillersET
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            SkillersET is a comprehensive online learning platform designed to help you master 
            programming and software development. Whether you're a beginner taking your first steps 
            in coding or an experienced developer looking to expand your skills, we provide the 
            resources you need to succeed.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            To make quality programming education accessible to everyone, everywhere. We believe 
            that learning to code should be interactive, engaging, and practical.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-6">
            <li>Comprehensive tutorials covering multiple programming languages and technologies</li>
            <li>Interactive code examples with live execution</li>
            <li>Practice problems with varying difficulty levels</li>
            <li>Structured courses for systematic learning</li>
            <li>Code playground for experimentation</li>
            <li>Progress tracking and personalized learning paths</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

