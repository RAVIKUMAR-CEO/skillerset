import { Tutorial } from '../tutorials';

export const arraysDataStructureTutorial: Tutorial = {
  id: 'arrays-data-structure',
  title: 'Arrays Data Structure - Complete Guide',
  category: 'Data Structures & Algorithms',
  subcategory: 'Data Structures',
  difficulty: 'Intermediate',
  readTime: '18 minutes',
  prerequisites: ['programming-basics'],
  description: 'Master arrays - the fundamental data structure. Learn array operations, time complexity, and solve problems like finding maximum, reversing arrays, and rotating arrays.',
  keywords: ['arrays', 'data structures', 'array operations', 'time complexity', 'algorithm', 'programming'],
  metaDescription: 'Learn arrays data structure from basics to advanced. Master array operations, indexing, time complexity analysis, and solve common array problems with step-by-step solutions.',

  introduction: {
    whatYouLearn: [
      'What arrays are and how they work',
      'Array indexing and memory representation',
      'Common array operations (access, insert, delete, search)',
      'Time complexity of array operations',
      'Solving array problems (find max, reverse, rotate)',
      'Multi-dimensional arrays',
      'Array algorithms and patterns'
    ],
    whyImportant: 'Arrays are the most fundamental data structure in computer science. They form the basis for many other data structures and are used in virtually every program. Understanding arrays deeply is essential for solving coding problems, optimizing algorithms, and building efficient applications.',
    realWorldApplications: [
      'Storing and processing lists of data',
      'Image processing (pixel arrays)',
      'Database indexing',
      'Dynamic programming solutions',
      'Sorting and searching algorithms',
      'Matrix operations',
      'Buffer management in systems programming'
    ],
    learningObjectives: [
      'Understand array structure and memory layout',
      'Master all array operations and their complexities',
      'Analyze time and space complexity',
      'Solve common array problems efficiently',
      'Work with multi-dimensional arrays',
      'Apply arrays to real-world problems'
    ]
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What is an Array?'
    },
    {
      type: 'paragraph',
      text: 'An array is a collection of elements stored in contiguous memory locations. Each element can be accessed directly using its index. Arrays are zero-indexed in most programming languages, meaning the first element is at index 0.'
    },
    {
      type: 'paragraph',
      text: 'Arrays have a fixed size in some languages (like C/C++) but are dynamic in others (like JavaScript, Python). The key characteristic is that elements are stored sequentially in memory, allowing for fast access.'
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Array Memory Layout: A horizontal row of boxes labeled with indices 0, 1, 2, 3, 4, 5. Each box contains a value (10, 20, 30, 40, 50, 60). Below, memory addresses are shown (1000, 1004, 1008, 1012, 1016, 1020) showing contiguous memory. Arrows point from indices to memory addresses.',
        alt: 'Array memory representation diagram'
      }
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Array declaration and initialization
let numbers = [10, 20, 30, 40, 50];

// Accessing elements by index
console.log(numbers[0]);  // 10 (first element)
console.log(numbers[2]);  // 30 (third element)
console.log(numbers[4]);  // 50 (last element)

// Array length
console.log(numbers.length);  // 5`,
        explanation: 'Arrays store elements in order. Access elements using square brackets with the index. Arrays are zero-indexed.',
        output: '10\n30\n50\n5'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Array Operations and Time Complexity'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Access (Read)'
    },
    {
      type: 'paragraph',
      text: 'Accessing an element by index is the fastest array operation because arrays use direct memory addressing.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `let arr = [10, 20, 30, 40, 50];

// Access by index - O(1) time complexity
let first = arr[0];    // 10
let third = arr[2];    // 30
let last = arr[arr.length - 1];  // 50`,
        explanation: 'Accessing an element by index takes O(1) constant time because the computer can calculate the memory address directly: base_address + (index × element_size).',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'tip',
        text: 'Array access is O(1) because the computer knows exactly where each element is stored in memory. This is why arrays are so fast for random access.'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Search'
    },
    {
      type: 'paragraph',
      text: 'Searching for an element requires checking each element until found.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Linear search - O(n) time complexity
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;  // Return index if found
    }
  }
  return -1;  // Return -1 if not found
}

let numbers = [10, 20, 30, 40, 50];
console.log(linearSearch(numbers, 30));  // 2
console.log(linearSearch(numbers, 60));  // -1`,
        explanation: 'Linear search checks each element one by one. In the worst case, it checks all n elements, so time complexity is O(n).',
        output: '2\n-1'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Insertion'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `let arr = [10, 20, 30, 40];

// Insert at end - O(1) amortized
arr.push(50);  // [10, 20, 30, 40, 50]

// Insert at beginning - O(n)
arr.unshift(5);  // [5, 10, 20, 30, 40, 50]

// Insert at specific index - O(n)
arr.splice(2, 0, 15);  // Insert 15 at index 2
// [5, 10, 15, 20, 30, 40, 50]`,
        explanation: 'Inserting at the end is fast (O(1)), but inserting at the beginning or middle requires shifting all subsequent elements (O(n)).',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Array Insertion Diagram: Shows array [10, 20, 30, 40] and inserting 15 at index 2. Step 1: Original array. Step 2: Shift elements 30 and 40 to the right. Step 3: Insert 15 at index 2. Result: [10, 20, 15, 30, 40]. Red arrows show elements being shifted.',
        alt: 'Array insertion operation visualization'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Deletion'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `let arr = [10, 20, 30, 40, 50];

// Delete from end - O(1)
arr.pop();  // [10, 20, 30, 40]

// Delete from beginning - O(n)
arr.shift();  // [20, 30, 40]

// Delete at specific index - O(n)
arr.splice(1, 1);  // Delete element at index 1
// [20, 40]`,
        explanation: 'Similar to insertion, deleting from the end is O(1), but deleting from the beginning or middle requires shifting elements (O(n)).',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'table',
        description: 'Array Operations Time Complexity Table: Columns are "Operation", "Time Complexity", "Explanation". Rows: Access by index - O(1) - Direct memory access, Search - O(n) - Must check each element, Insert at end - O(1) - No shifting needed, Insert at beginning - O(n) - Shift all elements, Delete from end - O(1) - No shifting needed, Delete from beginning - O(n) - Shift all elements.',
        alt: 'Array operations time complexity reference'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common Array Problems'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Problem 1: Find Maximum Element'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `function findMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  
  let max = arr[0];  // Assume first element is maximum
  
  // Compare with rest of elements
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

let numbers = [3, 7, 2, 9, 1, 5];
console.log(findMax(numbers));  // 9

// Time Complexity: O(n)
// Space Complexity: O(1)`,
        explanation: 'We iterate through the array once, keeping track of the maximum value seen so far. Time complexity is O(n) and space is O(1).',
        output: '9'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Problem 2: Reverse an Array'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  // Swap elements from both ends
  while (left < right) {
    // Swap
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    left++;
    right--;
  }
  
  return arr;
}

let numbers = [1, 2, 3, 4, 5];
reverseArray(numbers);
console.log(numbers);  // [5, 4, 3, 2, 1]

// Time Complexity: O(n)
// Space Complexity: O(1)`,
        explanation: 'We use two pointers starting from both ends, swapping elements until they meet in the middle. This is an in-place reversal.',
        output: '[5, 4, 3, 2, 1]'
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Array Reversal Process: Shows array [1, 2, 3, 4, 5] being reversed. Step 1: Swap indices 0 and 4 → [5, 2, 3, 4, 1]. Step 2: Swap indices 1 and 3 → [5, 4, 3, 2, 1]. Step 3: Pointers meet, done. Arrows show swapping process.',
        alt: 'Array reversal algorithm visualization'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Problem 3: Rotate Array'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `function rotateArray(arr, k) {
  // Handle edge cases
  if (arr.length === 0 || k === 0) {
    return arr;
  }
  
  k = k % arr.length;  // Handle k > array length
  
  // Reverse entire array
  reverse(arr, 0, arr.length - 1);
  
  // Reverse first k elements
  reverse(arr, 0, k - 1);
  
  // Reverse remaining elements
  reverse(arr, k, arr.length - 1);
  
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

let numbers = [1, 2, 3, 4, 5];
rotateArray(numbers, 2);
console.log(numbers);  // [4, 5, 1, 2, 3]

// Time Complexity: O(n)
// Space Complexity: O(1)`,
        explanation: 'We rotate by reversing the array in three steps: reverse all, reverse first k, reverse rest. This is an efficient in-place rotation.',
        output: '[4, 5, 1, 2, 3]'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Multi-dimensional Arrays'
    },
    {
      type: 'paragraph',
      text: 'Arrays can have multiple dimensions. A 2D array is like a grid or matrix.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// 2D array (matrix)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Accessing elements
console.log(matrix[0][0]);  // 1 (first row, first column)
console.log(matrix[1][2]);  // 6 (second row, third column)

// Iterating through 2D array
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}`,
        explanation: '2D arrays are arrays of arrays. Access elements using two indices: row and column.',
        output: '1\n6\n1\n2\n3\n4\n5\n6\n7\n8\n9'
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: '2D Array Visualization: A 3x3 grid showing matrix indices. Rows labeled 0, 1, 2. Columns labeled 0, 1, 2. Values: Row 0: [1, 2, 3], Row 1: [4, 5, 6], Row 2: [7, 8, 9]. Arrows show how matrix[1][2] accesses row 1, column 2 (value 6).',
        alt: '2D array matrix visualization'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Array Best Practices'
    },
    {
      type: 'list',
      items: [
        'Use arrays when you need fast random access by index',
        'Prefer arrays over linked lists when size is known and fixed',
        'Be aware of insertion/deletion costs in the middle',
        'Consider time complexity when choosing operations',
        'Use appropriate data structures (e.g., Set for lookups)',
        'Initialize arrays with appropriate size when possible',
        'Handle edge cases (empty array, single element)'
      ]
    },
    {
      type: 'callout',
      callout: {
        variant: 'warning',
        text: 'Remember: Array operations like insert/delete in the middle are expensive (O(n)). If you need frequent insertions/deletions, consider other data structures like linked lists.'
      }
    }
  ],

  examples: [
    {
      title: 'Basic Array Operations',
      code: `let arr = [10, 20, 30];

// Access
console.log(arr[1]);  // 20

// Modify
arr[1] = 25;
console.log(arr);  // [10, 25, 30]

// Add to end
arr.push(40);
console.log(arr);  // [10, 25, 30, 40]`,
      language: 'javascript',
      explanation: 'Basic array operations: accessing, modifying, and adding elements.',
      output: '20\n[10, 25, 30]\n[10, 25, 30, 40]'
    },
    {
      title: 'Find Minimum Element',
      code: `function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(findMin([5, 2, 8, 1, 9]));  // 1`,
      language: 'javascript',
      explanation: 'Finding the minimum element by iterating and comparing.',
      output: '1'
    },
    {
      title: 'Array Sum',
      code: `function arraySum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5]));  // 15`,
      language: 'javascript',
      explanation: 'Calculating the sum of all elements in an array.',
      output: '15'
    },
    {
      title: 'Check if Array Contains Element',
      code: `function contains(arr, target) {
  for (let element of arr) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

console.log(contains([1, 2, 3, 4, 5], 3));  // true
console.log(contains([1, 2, 3, 4, 5], 6));  // false`,
      language: 'javascript',
      explanation: 'Linear search to check if an element exists in the array.',
      output: 'true\nfalse'
    },
    {
      title: 'Count Occurrences',
      code: `function countOccurrences(arr, target) {
  let count = 0;
  for (let element of arr) {
    if (element === target) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2));  // 3`,
      language: 'javascript',
      explanation: 'Counting how many times a specific element appears in the array.',
      output: '3'
    }
  ],

  quiz: [
    {
      question: 'What is the time complexity of accessing an element by index in an array?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correct: 0,
      explanation: 'Array access by index is O(1) constant time because the computer can directly calculate the memory address.'
    },
    {
      question: 'What is the time complexity of inserting an element at the beginning of an array?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correct: 1,
      explanation: 'Inserting at the beginning requires shifting all existing elements, which takes O(n) time.'
    },
    {
      question: 'In a zero-indexed array, what is the index of the first element?',
      options: ['1', '0', '-1', 'first'],
      correct: 1,
      explanation: 'Arrays are zero-indexed, meaning the first element is at index 0.'
    },
    {
      question: 'What is the best approach to reverse an array in-place?',
      options: [
        'Create a new array',
        'Use two pointers from both ends',
        'Use a stack',
        'Sort the array in reverse'
      ],
      correct: 1,
      explanation: 'Using two pointers to swap elements from both ends is the most efficient in-place reversal method with O(n) time and O(1) space.'
    },
    {
      question: 'What data structure would be better than an array for frequent insertions and deletions in the middle?',
      options: ['Stack', 'Queue', 'Linked List', 'Hash Table'],
      correct: 2,
      explanation: 'Linked lists allow O(1) insertion and deletion at any position (once you have a pointer), while arrays require O(n) for middle operations.'
    }
  ],

  exercises: [
    {
      title: 'Find Maximum and Minimum',
      description: 'Write a function that finds both the maximum and minimum elements in an array in a single pass.',
      hints: [
        'Initialize max and min with the first element',
        'Iterate through the array once',
        'Update max and min as you go',
        'Return both values'
      ],
      solution: `function findMinMax(arr) {
  if (arr.length === 0) return null;
  
  let min = arr[0];
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  
  return { min, max };
}`
    },
    {
      title: 'Remove Duplicates',
      description: 'Write a function that removes duplicate elements from an array and returns a new array with unique elements.',
      hints: [
        'Create a new array for results',
        'Use a loop to check each element',
        'Only add elements that haven\'t been seen',
        'Consider using a Set for better performance'
      ]
    },
    {
      title: 'Array Intersection',
      description: 'Write a function that finds common elements between two arrays.',
      hints: [
        'Iterate through one array',
        'Check if each element exists in the other array',
        'Add common elements to a result array',
        'Avoid duplicates in the result'
      ]
    },
    {
      title: 'Move Zeros to End',
      description: 'Write a function that moves all zeros in an array to the end while maintaining the order of non-zero elements.',
      hints: [
        'Use two pointers approach',
        'One pointer tracks position for non-zero elements',
        'Swap or shift elements as needed',
        'Maintain relative order of non-zeros'
      ]
    },
    {
      title: 'Find Second Largest',
      description: 'Write a function that finds the second largest element in an array.',
      hints: [
        'Track both largest and second largest',
        'Update both as you iterate',
        'Handle edge cases (less than 2 elements)',
        'Consider duplicate maximum values'
      ]
    }
  ],

  relatedTopics: [
    'linked-lists',
    'stacks',
    'queues',
    'sorting-algorithms',
    'searching-algorithms'
  ],
  nextTopic: 'linked-lists'
};

