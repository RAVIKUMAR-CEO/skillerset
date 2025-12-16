import { Tutorial } from '../tutorials';

export const dataStructuresAlgorithmsTutorial: Tutorial = {
  id: 'data-structures-algorithms',
  title: 'Data Structures and Algorithms - Complete Guide',
  category: 'Algorithms',
  subcategory: 'Data Structures',
  difficulty: 'Advanced',
  readTime: '25 minutes',
  prerequisites: ['arrays-data-structure', 'programming-basics'],
  description: 'Master essential data structures like arrays, linked lists, trees, graphs, and algorithms for efficient problem-solving. Learn time and space complexity analysis.',
  keywords: ['data structures', 'algorithms', 'linked lists', 'trees', 'graphs', 'sorting', 'searching', 'complexity analysis'],
  metaDescription: 'Complete guide to data structures and algorithms. Learn arrays, linked lists, trees, graphs, sorting, searching algorithms with complexity analysis and practical examples.',

  introduction: {
    whatYouLearn: [
      'Fundamental data structures: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs',
      'Essential algorithms: Sorting, Searching, Graph traversal',
      'Time and space complexity analysis (Big O notation)',
      'When to use which data structure',
      'Algorithm design patterns and techniques',
      'Problem-solving strategies',
      'Real-world applications of data structures and algorithms'
    ],
    whyImportant: 'Data structures and algorithms form the foundation of computer science and software engineering. Understanding them is crucial for writing efficient code, solving complex problems, and excelling in technical interviews. They help you think systematically about problem-solving and optimize your solutions.',
    realWorldApplications: [
      'Database indexing and query optimization',
      'Search engines and recommendation systems',
      'Social media networks (friend suggestions, news feed)',
      'GPS navigation and route finding',
      'Operating systems (process scheduling, memory management)',
      'Compiler design and parsing',
      'Game development (pathfinding, collision detection)',
      'Cryptography and security',
      'Machine learning algorithms',
      'Web development (caching, load balancing)'
    ],
    learningObjectives: [
      'Understand fundamental data structures and their operations',
      'Master essential algorithms and their implementations',
      'Analyze time and space complexity of algorithms',
      'Choose appropriate data structures for different problems',
      'Design efficient algorithms for problem-solving',
      'Apply data structures and algorithms to real-world problems',
      'Prepare for technical interviews'
    ]
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What are Data Structures and Algorithms?'
    },
    {
      type: 'paragraph',
      text: 'Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Algorithms are step-by-step procedures or formulas for solving problems.'
    },
    {
      type: 'paragraph',
      text: 'Think of data structures as containers that hold data in different ways, and algorithms as recipes that tell you how to manipulate that data to solve problems. The choice of data structure and algorithm significantly impacts the performance of your program.'
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Data Structures and Algorithms Relationship: A central circle labeled "Problem" with arrows pointing to two boxes: "Data Structure" (how to store) and "Algorithm" (how to solve). Below, examples: Arrays → Sorting, Trees → Searching, Graphs → Traversal. Shows the relationship between choosing the right structure and algorithm.',
        alt: 'Data structures and algorithms relationship diagram'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Time and Space Complexity'
    },
    {
      type: 'paragraph',
      text: 'Before diving into data structures and algorithms, it\'s crucial to understand complexity analysis. This helps us compare different solutions and choose the most efficient one.'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Big O Notation'
    },
    {
      type: 'paragraph',
      text: 'Big O notation describes the worst-case time or space complexity of an algorithm. It tells us how the algorithm\'s performance scales with input size.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// O(1) - Constant time
function getFirst(arr) {
  return arr[0];  // Always takes same time
}

// O(n) - Linear time
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {  // Loop through all elements
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// O(n²) - Quadratic time
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {  // Nested loops
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// O(log n) - Logarithmic time
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`,
        explanation: 'Different time complexities: O(1) is constant, O(n) is linear, O(n²) is quadratic, and O(log n) is logarithmic. Understanding these helps choose the right algorithm.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'comparison',
        description: 'Time Complexity Graph: X-axis is input size (n), Y-axis is time. Shows curves: O(1) flat line, O(log n) slowly increasing, O(n) diagonal line, O(n log n) curved upward, O(n²) steep curve. Labels show which is best to worst.',
        alt: 'Time complexity comparison graph'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Essential Data Structures'
    },
    {
      type: 'heading',
      level: 3,
      text: '1. Arrays'
    },
    {
      type: 'paragraph',
      text: 'Arrays store elements in contiguous memory locations. They provide fast random access but have fixed size (in some languages).'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Array operations
let arr = [10, 20, 30, 40, 50];

// Access: O(1)
console.log(arr[2]);  // 30

// Search: O(n)
let index = arr.indexOf(30);  // 2

// Insert at end: O(1)
arr.push(60);  // [10, 20, 30, 40, 50, 60]

// Insert at beginning: O(n)
arr.unshift(5);  // [5, 10, 20, 30, 40, 50, 60]

// Delete: O(n) in worst case
arr.splice(2, 1);  // Remove element at index 2`,
        explanation: 'Arrays are great for random access but expensive for insertions/deletions in the middle. Use when you need fast access by index.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: '2. Linked Lists'
    },
    {
      type: 'paragraph',
      text: 'Linked lists store elements in nodes, where each node points to the next node. They allow dynamic size and efficient insertions/deletions.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Linked List Node
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Linked List implementation
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  // Insert at beginning: O(1)
  insertAtHead(val) {
    this.head = new ListNode(val, this.head);
    this.size++;
  }
  
  // Insert at end: O(n)
  insertAtTail(val) {
    if (!this.head) {
      this.head = new ListNode(val);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(val);
    }
    this.size++;
  }
  
  // Search: O(n)
  find(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) return current;
      current = current.next;
    }
    return null;
  }
  
  // Delete: O(n)
  delete(val) {
    if (!this.head) return;
    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }
}`,
        explanation: 'Linked lists excel at insertions/deletions but require O(n) for access. Use when you need frequent insertions/deletions and don\'t need random access.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Linked List Structure: Shows nodes as boxes with value and next pointer. First node (head) has value 10, arrow to next node with value 20, arrow to next node with value 30, arrow to null. Each node labeled with memory address showing non-contiguous storage.',
        alt: 'Linked list node structure diagram'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: '3. Stacks (LIFO - Last In First Out)'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `class Stack {
  constructor() {
    this.items = [];
  }
  
  // Push: O(1)
  push(element) {
    this.items.push(element);
  }
  
  // Pop: O(1)
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }
  
  // Peek: O(1)
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}

// Usage: Balanced parentheses
function isBalanced(str) {
  let stack = new Stack();
  for (let char of str) {
    if (char === '(') stack.push(char);
    else if (char === ')') {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }
  return stack.isEmpty();
}`,
        explanation: 'Stacks follow LIFO principle. Perfect for problems like balanced parentheses, expression evaluation, undo operations, and function call management.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: '4. Queues (FIFO - First In First Out)'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `class Queue {
  constructor() {
    this.items = [];
  }
  
  // Enqueue: O(1)
  enqueue(element) {
    this.items.push(element);
  }
  
  // Dequeue: O(n) - can be optimized to O(1) with linked list
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }
  
  front() {
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}

// Usage: BFS (Breadth-First Search)
function bfs(graph, start) {
  let queue = new Queue();
  let visited = new Set();
  
  queue.enqueue(start);
  visited.add(start);
  
  while (!queue.isEmpty()) {
    let node = queue.dequeue();
    console.log(node);
    
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.enqueue(neighbor);
      }
    }
  }
}`,
        explanation: 'Queues follow FIFO principle. Essential for BFS, task scheduling, printer queues, and any scenario requiring first-come-first-served processing.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: '5. Trees'
    },
    {
      type: 'paragraph',
      text: 'Trees are hierarchical data structures. A binary tree has at most two children per node. Binary Search Trees (BST) maintain ordering for efficient search.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  // Insert: O(log n) average, O(n) worst
  insert(val) {
    this.root = this._insert(this.root, val);
  }
  
  _insert(node, val) {
    if (!node) return new TreeNode(val);
    if (val < node.val) {
      node.left = this._insert(node.left, val);
    } else {
      node.right = this._insert(node.right, val);
    }
    return node;
  }
  
  // Search: O(log n) average, O(n) worst
  search(val) {
    return this._search(this.root, val);
  }
  
  _search(node, val) {
    if (!node || node.val === val) return node;
    if (val < node.val) return this._search(node.left, val);
    return this._search(node.right, val);
  }
  
  // Inorder traversal: O(n)
  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.val);
    this.inorder(node.right);
  }
}`,
        explanation: 'Binary Search Trees provide O(log n) search, insert, and delete operations on average. Perfect for maintaining sorted data with efficient operations.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Binary Search Tree: Root node 50, left child 30 (with left 20, right 40), right child 70 (with left 60, right 80). Shows hierarchical structure with values arranged so left < parent < right.',
        alt: 'Binary search tree structure diagram'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: '6. Graphs'
    },
    {
      type: 'paragraph',
      text: 'Graphs represent relationships between objects. They consist of vertices (nodes) and edges (connections).'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Graph representation: Adjacency List
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);  // For undirected graph
  }
  
  // DFS: O(V + E)
  dfs(start) {
    const result = [];
    const visited = {};
    
    const dfsHelper = (vertex) => {
      if (!vertex) return;
      visited[vertex] = true;
      result.push(vertex);
      
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          dfsHelper(neighbor);
        }
      });
    };
    
    dfsHelper(start);
    return result;
  }
  
  // BFS: O(V + E)
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = { [start]: true };
    
    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      
      this.adjacencyList[vertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    
    return result;
  }
}`,
        explanation: 'Graphs model relationships. DFS explores deeply, BFS explores level by level. Used in social networks, web pages, maps, and dependency resolution.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Essential Algorithms'
    },
    {
      type: 'heading',
      level: 3,
      text: '1. Sorting Algorithms'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Quick Sort: O(n log n) average, O(n²) worst
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Merge Sort: O(n log n) always
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`,
        explanation: 'Quick Sort is fast on average but can degrade. Merge Sort is consistently O(n log n) but uses extra space. Choose based on stability and space requirements.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: '2. Searching Algorithms'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Linear Search: O(n)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// Binary Search: O(log n) - requires sorted array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`,
        explanation: 'Linear search works on any array but is slow. Binary search is much faster but requires a sorted array. Use binary search when possible.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Choosing the Right Data Structure'
    },
    {
      type: 'visual',
      visual: {
        type: 'table',
        description: 'Data Structure Selection Guide: Table with columns "Operation", "Array", "Linked List", "Stack", "Queue", "Tree", "Hash Table". Rows: Access by index - O(1), O(n), N/A, N/A, O(log n), O(1); Insert at beginning - O(n), O(1), N/A, N/A, O(log n), O(1); Search - O(n), O(n), N/A, N/A, O(log n), O(1); Delete - O(n), O(1), O(1), O(1), O(log n), O(1).',
        alt: 'Data structure operation complexity comparison table'
      }
    },
    {
      type: 'list',
      items: [
        '**Need fast random access?** → Use Arrays or Hash Tables',
        '**Frequent insertions/deletions?** → Use Linked Lists',
        '**Need LIFO behavior?** → Use Stack',
        '**Need FIFO behavior?** → Use Queue',
        '**Need sorted data with efficient search?** → Use Binary Search Tree',
        '**Need to model relationships?** → Use Graph',
        '**Need key-value pairs with fast lookup?** → Use Hash Table'
      ]
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'There\'s no "best" data structure - only the most appropriate one for your specific use case. Consider the operations you\'ll perform most frequently and choose accordingly.'
      }
    }
  ],

  examples: [
    {
      title: 'Array Operations',
      code: `let arr = [1, 2, 3, 4, 5];

// Access: O(1)
console.log(arr[2]);  // 3

// Search: O(n)
console.log(arr.indexOf(4));  // 3

// Insert at end: O(1)
arr.push(6);

// Insert at beginning: O(n)
arr.unshift(0);`,
      language: 'javascript',
      explanation: 'Arrays provide fast random access but expensive insertions at the beginning.',
      output: undefined
    },
    {
      title: 'Stack Implementation',
      code: `class Stack {
  constructor() {
    this.items = [];
  }
  
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());  // 2`,
      language: 'javascript',
      explanation: 'Stack follows LIFO principle - last element added is first removed.',
      output: '2'
    },
    {
      title: 'Binary Search',
      code: `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7));  // 3`,
      language: 'javascript',
      explanation: 'Binary search finds elements in O(log n) time by repeatedly dividing the search space in half.',
      output: '3'
    },
    {
      title: 'Tree Traversal',
      code: `function inorderTraversal(root) {
  if (!root) return;
  inorderTraversal(root.left);
  console.log(root.val);
  inorderTraversal(root.right);
}

// For BST, inorder gives sorted order`,
      language: 'javascript',
      explanation: 'Inorder traversal visits left, root, right. For BST, this gives elements in sorted order.',
      output: undefined
    },
    {
      title: 'Graph BFS',
      code: `function bfs(graph, start) {
  let queue = [start];
  let visited = new Set([start]);
  let result = [];
  
  while (queue.length) {
    let node = queue.shift();
    result.push(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}`,
      language: 'javascript',
      explanation: 'BFS explores graph level by level, useful for finding shortest paths in unweighted graphs.',
      output: undefined
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
      question: 'Which data structure follows LIFO (Last In First Out) principle?',
      options: ['Queue', 'Stack', 'Tree', 'Graph'],
      correct: 1,
      explanation: 'Stack follows LIFO - the last element added is the first one removed, like a stack of plates.'
    },
    {
      question: 'What is the average time complexity of binary search?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
      correct: 2,
      explanation: 'Binary search has O(log n) time complexity because it eliminates half of the search space in each step.'
    },
    {
      question: 'Which algorithm is best for finding shortest path in an unweighted graph?',
      options: ['DFS', 'BFS', 'Quick Sort', 'Binary Search'],
      correct: 1,
      explanation: 'BFS (Breadth-First Search) explores level by level, making it perfect for finding shortest paths in unweighted graphs.'
    },
    {
      question: 'What is the time complexity of inserting at the beginning of a linked list?',
      options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
      correct: 0,
      explanation: 'Inserting at the beginning of a linked list is O(1) because you only need to update the head pointer.'
    }
  ],

  exercises: [
    {
      title: 'Implement a Stack',
      description: 'Create a complete stack implementation with push, pop, peek, isEmpty, and size methods. Test it with bracket matching.',
      hints: [
        'Use an array to store elements',
        'push() adds to end, pop() removes from end',
        'peek() returns last element without removing',
        'For bracket matching, push opening brackets, pop when closing'
      ],
      solution: `class Stack {
  constructor() {
    this.items = [];
  }
  
  push(item) {
    this.items.push(item);
  }
  
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}`
    },
    {
      title: 'Reverse a Linked List',
      description: 'Write a function to reverse a linked list iteratively and recursively.',
      hints: [
        'Iterative: Use three pointers (prev, current, next)',
        'Update pointers as you traverse',
        'Recursive: Reverse rest, then adjust current node',
        'Handle edge cases (empty list, single node)'
      ]
    },
    {
      title: 'Find Height of Binary Tree',
      description: 'Write a function to find the height (maximum depth) of a binary tree.',
      hints: [
        'Use recursion',
        'Base case: empty tree has height -1 or 0',
        'Height = 1 + max(height of left, height of right)',
        'Return the maximum depth'
      ]
    },
    {
      title: 'Implement Binary Search',
      description: 'Implement binary search both iteratively and recursively. Handle edge cases.',
      hints: [
        'Requires sorted array',
        'Compare middle element with target',
        'Eliminate half of search space each iteration',
        'Handle not found case'
      ]
    },
    {
      title: 'Detect Cycle in Linked List',
      description: 'Write a function to detect if a linked list has a cycle using Floyd\'s cycle detection algorithm.',
      hints: [
        'Use two pointers: slow and fast',
        'Slow moves one step, fast moves two steps',
        'If they meet, there\'s a cycle',
        'If fast reaches null, no cycle'
      ]
    }
  ],

  relatedTopics: [
    'arrays-data-structure',
    'sorting-algorithms',
    'searching-algorithms',
    'dynamic-programming'
  ],
  nextTopic: 'sorting-algorithms'
};

