// Tutorial content data structure and storage

export interface CodeExample {
  code: string;
  language: string;
  explanation: string;
  output?: string;
  editable?: boolean;
}

export interface Callout {
  variant: 'tip' | 'warning' | 'note' | 'best-practice' | 'example';
  text: string;
}

export interface VisualAid {
  type: 'diagram' | 'table' | 'flowchart' | 'comparison';
  description: string;
  alt: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Exercise {
  title: string;
  description: string;
  hints: string[];
  solution?: string;
}

export interface TutorialSection {
  type: 'heading' | 'paragraph' | 'code' | 'callout' | 'visual' | 'interactive' | 'list';
  level?: number;
  text?: string;
  code?: CodeExample;
  callout?: Callout;
  visual?: VisualAid;
  items?: string[];
}

export interface Tutorial {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  prerequisites: string[];
  description: string;
  introduction: {
    whatYouLearn: string[];
    whyImportant: string;
    realWorldApplications: string[];
    learningObjectives: string[];
  };
  content: TutorialSection[];
  examples: {
    title: string;
    code: string;
    language: string;
    explanation: string;
    output?: string;
  }[];
  quiz: QuizQuestion[];
  exercises: Exercise[];
  relatedTopics: string[];
  nextTopic?: string;
  keywords: string[];
  metaDescription: string;
}

// Tutorial content storage
export const tutorials: Record<string, Tutorial> = {};

// Helper function to add tutorial
export function addTutorial(tutorial: Tutorial) {
  tutorials[tutorial.id] = tutorial;
}

// Helper function to get tutorial
export function getTutorial(id: string): Tutorial | null {
  return tutorials[id] || null;
}

// Helper function to get all tutorials
export function getAllTutorials(): Tutorial[] {
  return Object.values(tutorials);
}

// Helper function to get tutorials by category
export function getTutorialsByCategory(category: string): Tutorial[] {
  return Object.values(tutorials).filter(t => t.category === category);
}

