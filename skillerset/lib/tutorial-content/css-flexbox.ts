import { Tutorial } from '../tutorials';

export const cssFlexboxTutorial: Tutorial = {
  id: 'css-flexbox',
  title: 'CSS Flexbox - Complete Guide to Flexible Layouts',
  category: 'Web Development',
  subcategory: 'CSS',
  difficulty: 'Intermediate',
  readTime: '15 minutes',
  prerequisites: ['html-introduction', 'css-introduction'],
  description: 'Master CSS Flexbox to create flexible, responsive layouts. Learn flex container properties, alignment, and build real-world navigation bars and card layouts.',
  keywords: ['CSS Flexbox', 'flexbox layout', 'CSS flex', 'responsive design', 'flex container', 'flex items', 'CSS tutorial'],
  metaDescription: 'Learn CSS Flexbox from scratch. Master flex containers, items, alignment, and create responsive layouts. Includes 5+ practical examples with navigation bars and card layouts.',

  introduction: {
    whatYouLearn: [
      'What Flexbox is and when to use it',
      'Flex container and flex items concepts',
      'Main axis and cross axis alignment',
      'All flex properties (flex-direction, justify-content, align-items, etc.)',
      'How to build responsive navigation bars',
      'Creating flexible card layouts',
      'Common Flexbox patterns and best practices'
    ],
    whyImportant: 'Flexbox revolutionized CSS layout by providing a powerful way to align and distribute space among items in a container. It solves many layout problems that were difficult with traditional CSS, such as centering content, creating equal-height columns, and building responsive navigation bars. Flexbox is essential for modern web development.',
    realWorldApplications: [
      'Creating responsive navigation bars',
      'Building card layouts and grids',
      'Centering content vertically and horizontally',
      'Creating flexible form layouts',
      'Building dashboard layouts',
      'Creating sticky footers',
      'Designing responsive image galleries'
    ],
    learningObjectives: [
      'Understand Flexbox container and item concepts',
      'Master all flex container properties',
      'Control item alignment and distribution',
      'Build responsive navigation bars',
      'Create flexible card layouts',
      'Apply Flexbox to solve common layout problems'
    ]
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What is Flexbox?'
    },
    {
      type: 'paragraph',
      text: 'Flexbox (Flexible Box Layout) is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill available space or shrink to prevent overflow. Flexbox makes it easy to align items and distribute space, even when their sizes are unknown or dynamic.'
    },
    {
      type: 'paragraph',
      text: 'The key concept is that Flexbox works in one dimension at a time - either as a row (horizontally) or as a column (vertically). This makes it perfect for components like navigation bars, card layouts, and centering content.'
    },
    {
      type: 'callout',
      callout: {
        variant: 'note',
        text: 'Flexbox is one-dimensional, meaning it works with rows OR columns. For two-dimensional layouts (both rows and columns), use CSS Grid instead.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Flex Container and Flex Items'
    },
    {
      type: 'paragraph',
      text: 'To use Flexbox, you need a flex container (parent) and flex items (children). The container becomes flexible by setting `display: flex` or `display: inline-flex`.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.container {
  display: flex;
  /* Now all direct children become flex items */
}

.item {
  /* These are flex items */
}`,
        explanation: 'The container with `display: flex` becomes a flex container, and all its direct children automatically become flex items.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Flexbox Structure Diagram: A rectangle labeled "Flex Container (display: flex)" containing three smaller rectangles labeled "Flex Item 1", "Flex Item 2", "Flex Item 3". Arrows show the main axis (horizontal) and cross axis (vertical). The main axis has an arrow pointing right, and the cross axis has an arrow pointing down.',
        alt: 'Flexbox container and items structure'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Main Axis and Cross Axis'
    },
    {
      type: 'paragraph',
      text: 'Flexbox has two axes: the main axis and the cross axis. The main axis is the primary axis along which flex items are laid out. The cross axis is perpendicular to the main axis.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.container {
  display: flex;
  flex-direction: row; /* Main axis: horizontal (left to right) */
  /* Cross axis: vertical (top to bottom) */
}

.container-column {
  display: flex;
  flex-direction: column; /* Main axis: vertical (top to bottom) */
  /* Cross axis: horizontal (left to right) */
}`,
        explanation: 'When `flex-direction: row` (default), the main axis is horizontal. When `flex-direction: column`, the main axis is vertical.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Flexbox Axes Diagram: Two containers side by side. Left container shows horizontal main axis (arrow pointing right) with vertical cross axis (arrow pointing down), labeled "flex-direction: row". Right container shows vertical main axis (arrow pointing down) with horizontal cross axis (arrow pointing right), labeled "flex-direction: column".',
        alt: 'Flexbox main axis and cross axis visualization'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Flex Container Properties'
    },
    {
      type: 'heading',
      level: 3,
      text: 'flex-direction'
    },
    {
      type: 'paragraph',
      text: 'Defines the direction of the main axis. It determines whether flex items are laid out in a row or column.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.container {
  display: flex;
  flex-direction: row;        /* Default: left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column;      /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */
}`,
        explanation: 'The `flex-direction` property controls the direction of the main axis and how items are ordered.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'justify-content'
    },
    {
      type: 'paragraph',
      text: 'Aligns flex items along the main axis. It distributes extra space between or around items.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.container {
  display: flex;
  justify-content: flex-start;    /* Default: items at start */
  justify-content: flex-end;      /* Items at end */
  justify-content: center;        /* Items centered */
  justify-content: space-between; /* Space between items */
  justify-content: space-around;  /* Space around items */
  justify-content: space-evenly; /* Equal space everywhere */
}`,
        explanation: '`justify-content` controls how items are distributed along the main axis. This is perfect for centering content or creating equal spacing.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'comparison',
        description: 'justify-content Values Visualization: Six rows showing different justify-content values. Row 1: flex-start (items aligned left), Row 2: flex-end (items aligned right), Row 3: center (items centered), Row 4: space-between (equal space between, none at edges), Row 5: space-around (equal space around each item), Row 6: space-evenly (equal space everywhere including edges). Each row has three boxes representing flex items.',
        alt: 'justify-content property values comparison'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'align-items'
    },
    {
      type: 'paragraph',
      text: 'Aligns flex items along the cross axis. This is how you vertically center items in a row (or horizontally center in a column).'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.container {
  display: flex;
  align-items: stretch;     /* Default: stretch to fill */
  align-items: flex-start;  /* Align to start of cross axis */
  align-items: flex-end;    /* Align to end of cross axis */
  align-items: center;     /* Center along cross axis */
  align-items: baseline;   /* Align to baseline of text */
}`,
        explanation: '`align-items` is essential for vertical centering. When you have a row, `align-items: center` centers items vertically.',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'tip',
        text: 'To center content both horizontally and vertically, use `justify-content: center` and `align-items: center` together. This is one of Flexbox\'s most powerful features!'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'flex-wrap'
    },
    {
      type: 'paragraph',
      text: 'Controls whether flex items wrap onto multiple lines or stay on a single line.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.container {
  display: flex;
  flex-wrap: nowrap;  /* Default: all items on one line */
  flex-wrap: wrap;    /* Items wrap to new lines */
  flex-wrap: wrap-reverse; /* Items wrap in reverse */
}`,
        explanation: 'By default, flex items try to fit on one line. Use `flex-wrap: wrap` to allow items to wrap to new lines when needed.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'gap'
    },
    {
      type: 'paragraph',
      text: 'Sets the spacing between flex items. This is a modern, clean way to add space without margins.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.container {
  display: flex;
  gap: 20px;        /* Space between all items */
  gap: 10px 20px;   /* Row gap, column gap */
}`,
        explanation: 'The `gap` property creates consistent spacing between flex items. It\'s much cleaner than using margins on individual items.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Flex Item Properties'
    },
    {
      type: 'heading',
      level: 3,
      text: 'flex (flex-grow, flex-shrink, flex-basis)'
    },
    {
      type: 'paragraph',
      text: 'The `flex` property is a shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`. It controls how items grow, shrink, and their initial size.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.item {
  flex: 1;           /* flex: 1 1 0% - grow, shrink, basis */
  flex: 0 1 auto;   /* Don't grow, can shrink, auto basis */
  flex: 2;          /* Take twice the space of flex: 1 items */
  flex-grow: 1;     /* Can grow to fill space */
  flex-shrink: 1;   /* Can shrink if needed */
  flex-basis: 200px; /* Initial size before growing/shrinking */
}`,
        explanation: '`flex: 1` is commonly used to make items grow equally to fill available space. `flex: 2` makes an item take twice the space of `flex: 1` items.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'align-self'
    },
    {
      type: 'paragraph',
      text: 'Overrides the container\'s `align-items` for a specific item. Useful when you want one item to align differently.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.container {
  display: flex;
  align-items: center;
}

.special-item {
  align-self: flex-start; /* This item aligns to start */
}`,
        explanation: '`align-self` allows individual items to override the container\'s alignment, giving you fine-grained control.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common Flexbox Patterns'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Centering Content'
    },
    {
      type: 'paragraph',
      text: 'One of the most common uses of Flexbox is centering content both horizontally and vertically.'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.center-container {
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center;      /* Vertical centering */
  height: 100vh;           /* Full viewport height */
}`,
        explanation: 'This is the modern way to center content. Much simpler than the old margin: auto trick!',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'For centering, always use `justify-content: center` and `align-items: center` together. This works perfectly for modals, hero sections, and card content.'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Equal Height Columns'
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.columns {
  display: flex;
}

.column {
  flex: 1; /* Each column takes equal space */
}`,
        explanation: 'Flexbox automatically makes all columns the same height, solving a common layout problem.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Complete Example: Responsive Navigation Bar'
    },
    {
      type: 'paragraph',
      text: 'Let\'s build a complete responsive navigation bar using Flexbox:'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<nav class="navbar">
  <div class="logo">SkillersET</div>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`,
        explanation: 'HTML structure for our navigation bar.',
        output: undefined
      }
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.navbar {
  display: flex;
  justify-content: space-between; /* Logo left, links right */
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem; /* Space between links */
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #4CAF50;
}`,
        explanation: 'Flexbox makes it easy to create a navigation bar with logo on the left and links on the right.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Complete Example: Card Layout'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<div class="card-container">
  <div class="card">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
    <button>Learn More</button>
  </div>
  <div class="card">
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
    <button>Learn More</button>
  </div>
</div>`,
        explanation: 'HTML for a card layout.',
        output: undefined
      }
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, min-width 300px */
  max-width: 400px;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}

.card button {
  margin-top: auto; /* Push button to bottom */
}`,
        explanation: 'This creates a responsive card layout that wraps on smaller screens. Cards have equal height and buttons align at the bottom.',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'warning',
        text: 'Remember: Flexbox is one-dimensional. For complex two-dimensional layouts (like a full page with header, sidebar, main content, and footer), consider using CSS Grid or combining Grid with Flexbox.'
      }
    }
  ],

  examples: [
    {
      title: 'Basic Flexbox Container',
      code: `.container {
  display: flex;
  gap: 1rem;
}

.item {
  padding: 1rem;
  background: #f0f0f0;
}`,
      language: 'css',
      explanation: 'The simplest Flexbox setup. Items will arrange horizontally by default.',
      output: 'Items display in a row with spacing between them.'
    },
    {
      title: 'Centering Content Perfectly',
      code: `.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background: #e0e0e0;
}`,
      language: 'css',
      explanation: 'Perfect centering both horizontally and vertically - one of Flexbox\'s most useful features.',
      output: 'Content is perfectly centered in the container.'
    },
    {
      title: 'Space Between Items',
      code: `.spaced {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}

.spaced > * {
  flex: 1;
}`,
      language: 'css',
      explanation: 'Items are evenly distributed with space between them. Each item grows equally.',
      output: 'Items spread across the container with equal spacing between them.'
    },
    {
      title: 'Responsive Navigation Bar',
      code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-items {
  display: flex;
  gap: 2rem;
  list-style: none;
}`,
      language: 'css',
      explanation: 'A professional navigation bar with logo on left and menu items on right.',
      output: 'Navigation bar with logo and menu items properly aligned.'
    },
    {
      title: 'Flexible Card Grid',
      code: `.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 250px;
  min-width: 250px;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}`,
      language: 'css',
      explanation: 'Responsive card grid that adapts to screen size. Cards wrap and maintain minimum width.',
      output: 'Cards arrange in a grid that wraps on smaller screens, maintaining equal heights.'
    },
    {
      title: 'Sticky Footer Layout',
      code: `.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1; /* Takes available space */
}

.footer {
  margin-top: auto; /* Sticks to bottom */
}`,
      language: 'css',
      explanation: 'Footer always stays at the bottom, even when content is short. Content expands to fill space.',
      output: 'Page layout with footer always at the bottom of the viewport.'
    }
  ],

  quiz: [
    {
      question: 'What does `justify-content: center` do?',
      options: [
        'Centers items along the cross axis',
        'Centers items along the main axis',
        'Centers items both horizontally and vertically',
        'Centers the container itself'
      ],
      correct: 1,
      explanation: '`justify-content` controls alignment along the main axis. To center both ways, you also need `align-items: center`.'
    },
    {
      question: 'What is the default value of `flex-direction`?',
      options: ['column', 'row', 'row-reverse', 'column-reverse'],
      correct: 1,
      explanation: 'The default `flex-direction` is `row`, which means items are laid out horizontally from left to right.'
    },
    {
      question: 'What does `flex: 1` mean?',
      options: [
        'Item takes 1px width',
        'Item can grow and shrink equally, with 0% basis',
        'Item cannot grow or shrink',
        'Item is positioned first'
      ],
      correct: 1,
      explanation: '`flex: 1` is shorthand for `flex: 1 1 0%`, meaning the item can grow and shrink, with an initial size of 0%.'
    },
    {
      question: 'Which property aligns items along the cross axis?',
      options: ['justify-content', 'align-items', 'align-content', 'flex-direction'],
      correct: 1,
      explanation: '`align-items` controls alignment along the cross axis, while `justify-content` controls the main axis.'
    },
    {
      question: 'What happens when you use `flex-wrap: wrap`?',
      options: [
        'Items shrink to fit on one line',
        'Items wrap to new lines when needed',
        'Items reverse their order',
        'Items become invisible'
      ],
      correct: 1,
      explanation: '`flex-wrap: wrap` allows flex items to wrap onto multiple lines when they don\'t fit on a single line.'
    }
  ],

  exercises: [
    {
      title: 'Create a Centered Card',
      description: 'Build a card that is perfectly centered both horizontally and vertically in the viewport using Flexbox.',
      hints: [
        'Use display: flex on the container',
        'Set height to 100vh for full viewport height',
        'Use justify-content: center and align-items: center',
        'Add some padding and styling to make it look like a card'
      ],
      solution: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`
    },
    {
      title: 'Build a Responsive Navigation Bar',
      description: 'Create a navigation bar with a logo on the left and menu items on the right. Make it responsive.',
      hints: [
        'Use flexbox on the navbar container',
        'Use justify-content: space-between',
        'Make the nav links a flex container too',
        'Add gap for spacing between links'
      ]
    },
    {
      title: 'Create Equal Height Columns',
      description: 'Build a three-column layout where all columns have equal height, regardless of content.',
      hints: [
        'Use display: flex on the container',
        'Set flex: 1 on each column',
        'Add some gap for spacing'
      ]
    },
    {
      title: 'Design a Card Grid',
      description: 'Create a responsive grid of cards that wraps on smaller screens. Each card should have equal height.',
      hints: [
        'Use flex-wrap: wrap',
        'Set flex: 1 1 300px on cards (grow, shrink, min-width)',
        'Add gap for spacing between cards'
      ]
    },
    {
      title: 'Build a Sticky Footer Layout',
      description: 'Create a page layout where the footer always stays at the bottom, even with little content.',
      hints: [
        'Use flex-direction: column on the page',
        'Set min-height: 100vh',
        'Use flex: 1 on the main content area',
        'Footer will naturally stick to bottom'
      ]
    }
  ],

  relatedTopics: [
    'css-grid',
    'css-introduction',
    'responsive-design',
    'html-introduction'
  ],
  nextTopic: 'css-grid'
};

