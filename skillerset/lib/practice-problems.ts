// Practice problems data structure

export interface ProblemExample {
  input: string;
  output: string;
  explanation: string;
}

export interface PracticeProblem {
  problemId: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  difficultyStars: 1 | 2 | 3;
  category: string;
  subcategory?: string;
  description: string;
  examples: ProblemExample[];
  constraints: string[];
  hints: string[];
  starterCode: string;
  solution: string;
  explanation: string;
  timeComplexity?: string;
  spaceComplexity?: string;
  relatedProblems?: string[];
  tags: string[];
  estimatedTime?: string;
}

// Practice problems storage
export const practiceProblems: Record<string, PracticeProblem> = {};

// Helper functions
export function addProblem(problem: PracticeProblem) {
  practiceProblems[problem.problemId] = problem;
}

export function getProblem(id: string): PracticeProblem | null {
  return practiceProblems[id] || null;
}

export function getProblemsByCategory(category: string): PracticeProblem[] {
  return Object.values(practiceProblems).filter(p => p.category === category);
}

export function getProblemsByDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard'): PracticeProblem[] {
  return Object.values(practiceProblems).filter(p => p.difficulty === difficulty);
}

export function getAllProblems(): PracticeProblem[] {
  return Object.values(practiceProblems);
}

