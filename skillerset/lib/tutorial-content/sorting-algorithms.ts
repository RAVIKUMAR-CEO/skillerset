import { Tutorial } from "../tutorials";

export const sortingAlgorithmsTutorial: Tutorial = {
  id: "sorting-algorithms",
  title: "Sorting Algorithms - Complete Guide",
  category: "Algorithms",
  subcategory: "Sorting",
  difficulty: "Advanced",
  readTime: "22 minutes",
  prerequisites: ["data-structures-algorithms", "arrays-data-structure"],
  description:
    "Master essential sorting algorithms: Bubble, Selection, Insertion, Merge, Quick, and understanding stability and time complexity.",
  keywords: [
    "sorting algorithms",
    "quick sort",
    "merge sort",
    "insertion sort",
    "bubble sort",
    "selection sort",
    "algorithm complexity",
  ],
  metaDescription:
    "Learn and compare Bubble, Selection, Insertion, Merge, and Quick Sort. Includes stability discussion, complexity analysis, and code examples.",

  introduction: {
    whatYouLearn: [
      "How key sorting algorithms work and when to use them",
      "Time/space complexity and stability of each algorithm",
      "In-place vs non in-place sorting",
      "Divide-and-conquer approach (Merge, Quick)",
      "Implementations in JavaScript/TypeScript",
      "Choosing the right sorting algorithm for constraints",
    ],
    whyImportant:
      "Sorting is foundational for searching, data processing, and many higher-level algorithms. Understanding trade-offs helps you choose the right algorithm for performance-critical systems and interviews.",
    realWorldApplications: [
      "Database ordering and indexing",
      "Displaying sorted lists in UIs",
      "Preprocessing for binary search",
      "Ranking/leaderboards",
      "Scheduling and prioritization",
      "Deduplication and merging datasets",
    ],
    learningObjectives: [
      "Implement classic sorting algorithms",
      "Compare complexities and stability",
      "Identify best/worst-case behaviors",
      "Select appropriate algorithm per scenario",
      "Reason about in-place vs extra-space trade-offs",
    ],
  },

  content: [
    { type: "heading", level: 2, text: "Sorting Basics" },
    {
      type: "paragraph",
      text: "Sorting rearranges elements into a specific order (ascending/descending). Efficiency depends on algorithm choice, input distribution, and constraints like memory and stability.",
    },
    {
      type: "list",
      items: [
        "**Stability**: Keeps equal elements in original order (important when items have secondary keys).",
        "**In-place**: Uses O(1) extra space vs allocating new arrays.",
        "**Best/Average/Worst**: Behavior can vary widely by input.",
      ],
    },
    {
      type: "visual",
      visual: {
        type: "comparison",
        description:
          "Table comparing algorithms: Bubble O(n^2) stable/in-place; Selection O(n^2) unstable/in-place; Insertion O(n^2) avg, O(n) best (nearly sorted), stable/in-place; Merge O(n log n) stable/not in-place; Quick O(n log n) avg, O(n^2) worst, unstable/in-place (partition).",
        alt: "Sorting algorithms complexity and stability table",
      },
    },

    { type: "heading", level: 2, text: "Bubble Sort" },
    {
      type: "code",
      code: {
        language: "javascript",
        code: `function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    let swapped = false;
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // early exit if already sorted
  }
  return a;
}`,
        explanation:
          "Repeatedly swaps adjacent out-of-order elements. Stable, in-place. Best O(n) if nearly sorted, worst O(n^2).",
      },
    },

    { type: "heading", level: 2, text: "Selection Sort" },
    {
      type: "code",
      code: {
        language: "javascript",
        code: `function selectionSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[min]) min = j;
    }
    if (min !== i) [a[i], a[min]] = [a[min], a[i]];
  }
  return a;
}`,
        explanation:
          "Finds minimum each pass and swaps to front. Always O(n^2), in-place, not stable (swap can reorder equals).",
      },
    },

    { type: "heading", level: 2, text: "Insertion Sort" },
    {
      type: "code",
      code: {
        language: "javascript",
        code: `function insertionSort(arr) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}`,
        explanation:
          "Builds sorted prefix by inserting each element. Stable, in-place. Great for small or nearly-sorted data (best O(n), worst O(n^2)).",
      },
    },

    { type: "heading", level: 2, text: "Merge Sort" },
    {
      type: "code",
      code: {
        language: "javascript",
        code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const res = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) res.push(left[i++]);
    else res.push(right[j++]);
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}`,
        explanation:
          "Divide-and-conquer: split, sort halves, merge. Stable, not in-place (O(n) extra). Time O(n log n) always.",
      },
    },

    { type: "heading", level: 2, text: "Quick Sort" },
    {
      type: "code",
      code: {
        language: "javascript",
        code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [], equal = [], right = [];
  for (const x of arr) {
    if (x < pivot) left.push(x);
    else if (x > pivot) right.push(x);
    else equal.push(x);
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}`,
        explanation:
          "Divide-and-conquer: partition by pivot. Average O(n log n), worst O(n^2) if pivot poor. In-place versions exist; this is simpler non in-place.",
      },
    },
    {
      type: "callout",
      callout: {
        variant: "warning",
        text: "Quick Sort worst-case is O(n^2) (e.g., already sorted with bad pivot). Mitigate with random or median-of-three pivot selection.",
      },
    },

    { type: "heading", level: 2, text: "Choosing the Right Sort" },
    {
      type: "list",
      items: [
        "Small or nearly-sorted input → Insertion Sort",
        "Guaranteed O(n log n) and stable → Merge Sort",
        "Average-case fast, in-place → Quick Sort (with good pivot)",
        "Educational/simple but slow → Bubble/Selection",
      ],
    },
    {
      type: "visual",
      visual: {
        type: "table",
        description:
          "Sorting decision table: Columns (Use When, Stable, Extra Space). Rows: Insertion (small/nearly-sorted, yes, O(1)); Merge (need stability, yes, O(n)); Quick (average speed/in-place, no, O(log n) stack); Bubble/Selection (only for teaching, bubble stable, selection not).",
        alt: "Sorting algorithm decision guide",
      },
    },
  ],

  examples: [
    {
      title: "Insertion Sort on nearly-sorted array",
      code: `console.log(insertionSort([1,2,4,3,5])); // [1,2,3,4,5]`,
      language: "javascript",
      explanation: "Nearly-sorted arrays run in close to O(n) with insertion sort.",
    },
    {
      title: "Merge Sort for stable sorting of objects",
      code: `const people = [
  { name: "A", age: 30 },
  { name: "B", age: 25 },
  { name: "C", age: 30 }
];
// Stable sort by age keeps relative order of age=30
const sorted = mergeSort(people.map(p => p.age));`,
      language: "javascript",
      explanation:
        "Merge sort is stable; equal keys keep order. (Shown with ages; apply to paired data to maintain order.)",
    },
    {
      title: "Quick Sort average-case",
      code: `console.log(quickSort([9,4,6,2,7,5]));`,
      language: "javascript",
      explanation: "Quick sort partitions around a pivot; average O(n log n).",
    },
    {
      title: "Bubble Sort early exit",
      code: `console.log(bubbleSort([1,2,3,4])); // early exit after one pass`,
      language: "javascript",
      explanation: "Early-exit optimization makes bubble sort O(n) on sorted input.",
    },
    {
      title: "Selection Sort deterministic passes",
      code: `console.log(selectionSort([3,1,2]));`,
      language: "javascript",
      explanation: "Selection sort always makes n-1 passes; good for education, not performance.",
    },
  ],

  quiz: [
    {
      question: "Which sorting algorithm is stable and guarantees O(n log n) time?",
      options: ["Quick Sort", "Merge Sort", "Selection Sort", "Heap Sort"],
      correct: 1,
      explanation: "Merge Sort is stable and always O(n log n); Quick Sort can be O(n^2).",
    },
    {
      question: "Which algorithm is best for nearly-sorted small arrays?",
      options: ["Insertion Sort", "Selection Sort", "Merge Sort", "Heap Sort"],
      correct: 0,
      explanation: "Insertion Sort runs close to O(n) on nearly-sorted data and is simple/in-place.",
    },
    {
      question: "Quick Sort worst-case occurs when:",
      options: [
        "Array is empty",
        "Pivot is always median",
        "Array is already sorted with bad pivot choice",
        "Array has duplicates",
      ],
      correct: 2,
      explanation: "Already sorted with first/last pivot yields O(n^2). Use random/median pivot.",
    },
    {
      question: "Which is NOT in-place by default?",
      options: ["Quick Sort (Lomuto)", "Insertion Sort", "Merge Sort", "Selection Sort"],
      correct: 2,
      explanation: "Merge sort typically uses O(n) extra space; others are in-place variants.",
    },
    {
      question: "Which algorithm is always unstable (in basic form)?",
      options: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"],
      correct: 3,
      explanation: "Selection sort swaps min with current, potentially reordering equal keys.",
    },
  ],

  exercises: [
    {
      title: "Implement Heap Sort",
      description: "Write a heap sort implementation (build max-heap, then extract).",
      hints: [
        "Build heap in O(n) using bottom-up heapify",
        "Then swap first/last, heapify reduced heap",
        "Repeat until size 1",
      ],
    },
    {
      title: "Stable Sort by Secondary Key",
      description:
        "Given an array of objects with fields (dept, name), sort by dept, preserving original order for same dept.",
      hints: [
        "Use stable algorithm (merge sort) or decorate-sort-undecorate",
        "Key: dept; keep indices to maintain order",
      ],
    },
    {
      title: "Quick Sort In-Place (Lomuto)",
      description: "Implement in-place quick sort using Lomuto partition scheme.",
      hints: [
        "Partition with pivot at end",
        "i tracks boundary of smaller elements",
        "Recurse on subarrays",
      ],
    },
    {
      title: "Count Inversions with Merge Sort",
      description: "Modify merge sort to count inversions in O(n log n).",
      hints: [
        "During merge, when right[j] < left[i], inversions += left.length - i",
        "Accumulate from subcalls",
      ],
    },
    {
      title: "Benchmark Sorts",
      description:
        "Write a script to benchmark bubble, insertion, merge, and quick sort on random and nearly-sorted arrays.",
      hints: [
        "Use performance.now() (browser) or process.hrtime.bigint() (Node)",
        "Generate arrays of different sizes and orders",
      ],
    },
  ],

  relatedTopics: [
    "data-structures-algorithms",
    "searching-algorithms",
    "arrays-data-structure",
  ],
  nextTopic: "searching-algorithms",
};

