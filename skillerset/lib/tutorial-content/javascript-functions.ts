import { Tutorial } from '../tutorials';

export const javascriptFunctionsTutorial: Tutorial = {
  id: 'javascript-functions',
  title: 'JavaScript Functions - Complete Guide',
  category: 'Web Development',
  subcategory: 'JavaScript',
  difficulty: 'Intermediate',
  readTime: '12 minutes',
  prerequisites: ['javascript-basics'],
  description: 'Master JavaScript functions including function declarations, expressions, arrow functions, parameters, and closures. Build a practical calculator example.',
  keywords: ['JavaScript functions', 'arrow functions', 'function parameters', 'closures', 'JavaScript tutorial', 'ES6 functions'],
  metaDescription: 'Learn JavaScript functions from basics to advanced. Master function declarations, arrow functions, parameters, return values, and closures with practical examples.',

  introduction: {
    whatYouLearn: [
      'Function declarations and expressions',
      'Arrow functions (ES6)',
      'Parameters and arguments',
      'Return values and early returns',
      'Function scope and closures',
      'Higher-order functions',
      'Building a practical calculator application'
    ],
    whyImportant: 'Functions are the building blocks of JavaScript. They allow you to organize code into reusable blocks, making your programs more modular, readable, and maintainable. Understanding functions is essential for any JavaScript developer, as they\'re used everywhere - from simple calculations to complex application logic.',
    realWorldApplications: [
      'Creating reusable code blocks',
      'Event handlers in web applications',
      'API request functions',
      'Data transformation and processing',
      'Building interactive user interfaces',
      'Creating utility functions',
      'Implementing algorithms and data structures'
    ],
    learningObjectives: [
      'Understand different ways to define functions',
      'Master function parameters and return values',
      'Learn arrow function syntax and when to use it',
      'Understand function scope and closures',
      'Create practical, reusable functions',
      'Build a complete calculator application'
    ]
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What are Functions?'
    },
    {
      type: 'paragraph',
      text: 'A function is a block of code designed to perform a specific task. Functions allow you to organize code into reusable pieces, avoid repetition, and make your code more maintainable. When you call (invoke) a function, it executes the code inside it.'
    },
    {
      type: 'paragraph',
      text: 'Think of a function as a recipe: you define it once with ingredients (parameters), and you can use it multiple times to cook (execute) the same dish (get the result).'
    },
    {
      type: 'callout',
      callout: {
        variant: 'note',
        text: 'Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Function Declaration'
    },
    {
      type: 'paragraph',
      text: 'The most common way to define a function is using a function declaration. Function declarations are hoisted, meaning they can be called before they\'re defined in the code.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Function declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Calling the function
console.log(greet('Alice')); // Output: Hello, Alice!
console.log(greet('Bob'));   // Output: Hello, Bob!`,
        explanation: 'Function declarations start with the `function` keyword, followed by the function name, parameters in parentheses, and the function body in curly braces.',
        output: 'Hello, Alice!\nHello, Bob!'
      }
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Function with multiple parameters
function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(5, 10);
console.log(area); // Output: 50`,
        explanation: 'Functions can accept multiple parameters. The `return` statement sends a value back to the caller.',
        output: '50'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Function Expression'
    },
    {
      type: 'paragraph',
      text: 'A function expression assigns a function to a variable. Unlike function declarations, function expressions are not hoisted and cannot be called before they\'re defined.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Function expression
const greet = function(name) {
  return \`Hello, \${name}!\`;
};

console.log(greet('Charlie')); // Output: Hello, Charlie!

// Anonymous function expression
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // Output: 12`,
        explanation: 'Function expressions are useful when you want to assign functions to variables or pass them as arguments.',
        output: 'Hello, Charlie!\n12'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Arrow Functions (ES6)'
    },
    {
      type: 'paragraph',
      text: 'Arrow functions provide a shorter syntax for writing functions. They\'re especially useful for short, simple functions and are commonly used in modern JavaScript.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Arrow function syntax
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Shorter syntax (single expression)
const greet = (name) => \`Hello, \${name}!\`;

// Even shorter (single parameter, no parentheses needed)
const greet = name => \`Hello, \${name}!\`;

// Multiple parameters
const add = (a, b) => a + b;

// No parameters
const sayHello = () => 'Hello, World!';

console.log(greet('David')); // Output: Hello, David!
console.log(add(5, 3));       // Output: 8
console.log(sayHello());      // Output: Hello, World!`,
        explanation: 'Arrow functions use `=>` syntax. If the function body is a single expression, you can omit the curly braces and return statement.',
        output: 'Hello, David!\n8\nHello, World!'
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'tip',
        text: 'Arrow functions don\'t have their own `this` binding, which makes them perfect for callbacks and event handlers where you want to preserve the outer scope\'s `this`.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Parameters and Arguments'
    },
    {
      type: 'paragraph',
      text: 'Parameters are the variables listed in the function definition. Arguments are the actual values passed to the function when it\'s called.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Parameters with default values
function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}

console.log(greet());              // Output: Hello, Guest!
console.log(greet('Alice'));       // Output: Hello, Alice!
console.log(greet('Bob', 'Hi'));    // Output: Hi, Bob!

// Rest parameters (collect remaining arguments)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // Output: 6
console.log(sum(1, 2, 3, 4, 5));  // Output: 15`,
        explanation: 'Default parameters allow you to provide fallback values. Rest parameters (`...`) collect multiple arguments into an array.',
        output: 'Hello, Guest!\nHello, Alice!\nHi, Bob!\n6\n15'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Return Values'
    },
    {
      type: 'paragraph',
      text: 'Functions can return values using the `return` statement. If no return is specified, the function returns `undefined`.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Function with return value
function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 5);
console.log(result); // Output: 20

// Function without return (returns undefined)
function logMessage(message) {
  console.log(message);
  // No return statement
}

const value = logMessage('Hello');
console.log(value); // Output: undefined

// Early return
function checkAge(age) {
  if (age < 18) {
    return 'Minor';
  }
  return 'Adult';
}

console.log(checkAge(15)); // Output: Minor
console.log(checkAge(25)); // Output: Adult`,
        explanation: 'The `return` statement exits the function and sends a value back. You can use early returns to exit functions conditionally.',
        output: '20\nHello\nundefined\nMinor\nAdult'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Function Scope'
    },
    {
      type: 'paragraph',
      text: 'Variables declared inside a function are local to that function and cannot be accessed from outside. This is called function scope.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `const globalVar = 'I am global';

function myFunction() {
  const localVar = 'I am local';
  console.log(globalVar); // Can access global
  console.log(localVar);  // Can access local
}

myFunction();
// console.log(localVar); // Error: localVar is not defined

// Variables declared with var are function-scoped
function example() {
  if (true) {
    var functionScoped = 'I am function scoped';
    let blockScoped = 'I am block scoped';
  }
  console.log(functionScoped); // Works
  // console.log(blockScoped); // Error: blockScoped is not defined
}`,
        explanation: 'Variables declared with `const` and `let` are block-scoped, while `var` is function-scoped. Function parameters are also local to the function.',
        output: 'I am global\nI am local\nI am function scoped'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Higher-Order Functions'
    },
    {
      type: 'paragraph',
      text: 'Higher-order functions are functions that take other functions as arguments or return functions. They\'re powerful for creating reusable, flexible code.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Function that takes another function as argument
function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add));       // Output: 8
console.log(operate(5, 3, multiply));  // Output: 15

// Function that returns another function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15`,
        explanation: 'Higher-order functions enable powerful patterns like function composition and creating specialized functions dynamically.',
        output: '8\n15\n10\n15'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Complete Example: Calculator Application'
    },
    {
      type: 'paragraph',
      text: 'Let\'s build a complete calculator using functions:'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Calculator functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
};

// Main calculator function
function calculate(operation, a, b) {
  const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
  };
  
  const operationFunc = operations[operation];
  if (!operationFunc) {
    return 'Error: Invalid operation';
  }
  
  return operationFunc(a, b);
}

// Usage
console.log(calculate('+', 10, 5));  // Output: 15
console.log(calculate('-', 10, 5)); // Output: 5
console.log(calculate('*', 10, 5)); // Output: 50
console.log(calculate('/', 10, 5)); // Output: 2
console.log(calculate('/', 10, 0)); // Output: Error: Division by zero`,
        explanation: 'This calculator demonstrates how to use functions to organize code, handle errors, and create a clean, maintainable structure.',
        output: '15\n5\n50\n2\nError: Division by zero'
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'Always validate inputs in your functions, especially for mathematical operations. Check for division by zero, invalid operations, and edge cases.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common Function Patterns'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Callback Functions'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Callback function
function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, (num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]`,
        explanation: 'Callbacks are functions passed as arguments to be executed later. They\'re commonly used in array methods and event handlers.',
        output: '[2, 4, 6, 8, 10]'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Immediately Invoked Function Expression (IIFE)'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// IIFE - runs immediately
(function() {
  console.log('This runs immediately!');
})();

// IIFE with parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})('World');`,
        explanation: 'IIFEs are functions that execute immediately after being defined. They\'re useful for creating isolated scopes.',
        output: 'This runs immediately!\nHello, World!'
      }
    }
  ],

  examples: [
    {
      title: 'Basic Function Declaration',
      code: `function sayHello(name) {
  return \`Hello, \${name}!\`;
}

console.log(sayHello('Alice'));`,
      language: 'javascript',
      explanation: 'Simple function declaration with one parameter and a return value.',
      output: 'Hello, Alice!'
    },
    {
      title: 'Arrow Function with Multiple Parameters',
      code: `const calculateTotal = (price, tax, discount) => {
  const subtotal = price - discount;
  return subtotal + (subtotal * tax);
};

console.log(calculateTotal(100, 0.1, 10));`,
      language: 'javascript',
      explanation: 'Arrow function performing calculations with multiple parameters.',
      output: '99'
    },
    {
      title: 'Function with Default Parameters',
      code: `function createGreeting(name = 'Guest', time = 'day') {
  return \`Good \${time}, \${name}!\`;
}

console.log(createGreeting());
console.log(createGreeting('Alice'));
console.log(createGreeting('Bob', 'evening'));`,
      language: 'javascript',
      explanation: 'Functions can have default parameter values that are used when arguments are not provided.',
      output: 'Good day, Guest!\nGood day, Alice!\nGood evening, Bob!'
    },
    {
      title: 'Higher-Order Function',
      code: `function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result1 = applyOperation(10, 5, (x, y) => x + y);
const result2 = applyOperation(10, 5, (x, y) => x * y);

console.log(result1, result2);`,
      language: 'javascript',
      explanation: 'Higher-order function that accepts another function as a parameter.',
      output: '15 50'
    },
    {
      title: 'Function Returning a Function',
      code: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3`,
      language: 'javascript',
      explanation: 'Function that returns another function, creating a closure that maintains state.',
      output: '1\n2\n3'
    }
  ],

  quiz: [
    {
      question: 'What is the main difference between function declarations and function expressions?',
      options: [
        'Function declarations are hoisted, function expressions are not',
        'Function expressions are hoisted, function declarations are not',
        'There is no difference',
        'Function declarations cannot have parameters'
      ],
      correct: 0,
      explanation: 'Function declarations are hoisted, meaning they can be called before they\'re defined. Function expressions are not hoisted.'
    },
    {
      question: 'What does this arrow function return: `const add = (a, b) => a + b`?',
      options: [
        'Nothing (undefined)',
        'The sum of a and b',
        'An error',
        'A function'
      ],
      correct: 1,
      explanation: 'Arrow functions with a single expression automatically return that expression. This is equivalent to `return a + b`.'
    },
    {
      question: 'What happens if you don\'t use a return statement in a function?',
      options: [
        'The function returns null',
        'The function returns undefined',
        'The function returns 0',
        'The function causes an error'
      ],
      correct: 1,
      explanation: 'If a function doesn\'t have a return statement, it implicitly returns `undefined`.'
    },
    {
      question: 'What is a closure in JavaScript?',
      options: [
        'A function that closes immediately',
        'A function that has access to variables in its outer scope',
        'A function that cannot be called',
        'A function that only works in strict mode'
      ],
      correct: 1,
      explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope, even after the outer function has returned.'
    },
    {
      question: 'What does the rest parameter (`...`) do?',
      options: [
        'Stops the function execution',
        'Collects remaining arguments into an array',
        'Removes parameters',
        'Makes parameters optional'
      ],
      correct: 1,
      explanation: 'The rest parameter (`...`) collects all remaining arguments into an array, allowing functions to accept variable numbers of arguments.'
    }
  ],

  exercises: [
    {
      title: 'Create a Temperature Converter',
      description: 'Write a function that converts Celsius to Fahrenheit. Formula: F = (C * 9/5) + 32',
      hints: [
        'Use function declaration or arrow function',
        'Take Celsius as a parameter',
        'Return the Fahrenheit value',
        'Test with known values (0°C = 32°F, 100°C = 212°F)'
      ],
      solution: `const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9/5) + 32;
};

console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212`
    },
    {
      title: 'Build a String Reverser',
      description: 'Create a function that takes a string and returns it reversed. Use arrow function syntax.',
      hints: [
        'Use arrow function',
        'Convert string to array, reverse, then join',
        'Or use a loop to build reversed string'
      ]
    },
    {
      title: 'Create a Factorial Function',
      description: 'Write a function that calculates the factorial of a number. Factorial of n is n * (n-1) * (n-2) * ... * 1',
      hints: [
        'Use recursion or a loop',
        'Handle edge case: factorial of 0 is 1',
        'Handle negative numbers'
      ]
    },
    {
      title: 'Build a Function Validator',
      description: 'Create a higher-order function that validates input before calling another function. It should return an error message if validation fails.',
      hints: [
        'Create a function that takes a validator function and the actual function',
        'Return a new function that validates first',
        'Call the actual function only if validation passes'
      ]
    },
    {
      title: 'Create a Function Composer',
      description: 'Build a function that composes multiple functions together. For example, compose(f, g, h)(x) should return f(g(h(x))).',
      hints: [
        'Use rest parameters to accept multiple functions',
        'Use reduceRight to apply functions from right to left',
        'Return a new function that applies the composition'
      ]
    }
  ],

  relatedTopics: [
    'javascript-arrays',
    'javascript-objects',
    'javascript-async',
    'javascript-basics'
  ],
  nextTopic: 'javascript-arrays'
};

