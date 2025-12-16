import { Tutorial } from '../tutorials';

export const reactComponentsTutorial: Tutorial = {
  id: 'react-components',
  title: 'React Components - Building Reusable UI',
  category: 'Web Development',
  subcategory: 'React',
  difficulty: 'Intermediate',
  readTime: '16 minutes',
  prerequisites: ['javascript-functions', 'html-introduction'],
  description: 'Master React components - the building blocks of React applications. Learn functional components, props, component composition, and build a user profile card example.',
  keywords: ['React components', 'React props', 'functional components', 'React tutorial', 'component composition', 'React JSX'],
  metaDescription: 'Learn React components from basics to advanced. Master functional components, props, component composition, and build reusable UI components with practical examples.',

  introduction: {
    whatYouLearn: [
      'What React components are and why they matter',
      'Functional components vs class components',
      'Understanding and using props',
      'Component composition patterns',
      'JSX syntax and best practices',
      'Building reusable components',
      'Creating a complete user profile card component'
    ],
    whyImportant: 'Components are the heart of React. They allow you to break your UI into reusable, independent pieces. Understanding components is essential for building modern React applications. Components make code more maintainable, testable, and reusable.',
    realWorldApplications: [
      'Building user interfaces',
      'Creating reusable UI libraries',
      'Developing single-page applications',
      'Building component-based design systems',
      'Creating interactive web applications',
      'Developing mobile apps with React Native',
      'Building dashboards and admin panels'
    ],
    learningObjectives: [
      'Understand React component concepts',
      'Create functional components',
      'Use props to pass data',
      'Compose components together',
      'Write clean JSX code',
      'Build reusable component patterns',
      'Create a complete component example'
    ]
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What are React Components?'
    },
    {
      type: 'paragraph',
      text: 'A React component is a reusable piece of code that returns JSX (JavaScript XML) to describe what should appear on the screen. Components are like JavaScript functions, but they return UI elements instead of values.'
    },
    {
      type: 'paragraph',
      text: 'Think of components as building blocks. Just like you can build a house from bricks, you can build a user interface from components. Each component is independent and can be reused throughout your application.'
    },
    {
      type: 'callout',
      callout: {
        variant: 'note',
        text: 'React components must start with a capital letter. This is how React distinguishes components from regular HTML elements.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Functional Components'
    },
    {
      type: 'paragraph',
      text: 'Functional components are the modern way to write React components. They\'re simply JavaScript functions that return JSX.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Simple functional component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function component
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};

// Using the component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
      <Welcome />
    </div>
  );
}`,
        explanation: 'Components are defined as functions that return JSX. You can use them like HTML tags. This example shows the Welcome component used three times.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'JSX Syntax'
    },
    {
      type: 'paragraph',
      text: 'JSX looks like HTML but it\'s actually JavaScript. It allows you to write HTML-like code in your JavaScript files.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// JSX with JavaScript expressions
function Greeting() {
  const name = "Alice";
  const age = 25;
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Next year you'll be {age + 1}.</p>
    </div>
  );
}

// JSX with conditional rendering
function Message({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

// JSX with lists
function TodoList() {
  const todos = ['Learn React', 'Build app', 'Deploy'];
  
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}`,
        explanation: 'JSX allows you to embed JavaScript expressions in curly braces `{}`. You can use variables, expressions, conditionals, and loops.',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'tip',
        text: 'In JSX, you must use `className` instead of `class`, and `htmlFor` instead of `for`, because `class` and `for` are reserved words in JavaScript.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Props: Passing Data to Components'
    },
    {
      type: 'paragraph',
      text: 'Props (short for properties) allow you to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Component that accepts props
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Using the component with props
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
      <Greeting name="Charlie" age={28} />
    </div>
  );
}

// Props with default values
function Button({ text = "Click me", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}`,
        explanation: 'Props are passed as attributes to components. You can destructure props in the function parameters. Props can have default values.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'React Props Flow: Parent component "App" at top with data (name="Alice", age=25). Arrow pointing down to child component "Greeting" showing props being passed. Greeting component displays the data. Multiple Greeting components shown side by side with different props.',
        alt: 'React props data flow diagram'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Component Composition'
    },
    {
      type: 'paragraph',
      text: 'Component composition means building complex UIs by combining smaller components. This is one of React\'s greatest strengths.'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// Small, reusable components
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
}

// Composing components together
function App() {
  return (
    <div>
      <Card title="Welcome">
        <p>This is the welcome card.</p>
        <Button text="Get Started" onClick={() => alert('Clicked!')} />
      </Card>
      
      <Card title="About">
        <p>This is the about card.</p>
        <Button text="Learn More" onClick={() => alert('Learn more!')} />
      </Card>
    </div>
  );
}`,
        explanation: 'By breaking UI into small, reusable components, you can compose them together to build complex interfaces. The `children` prop allows components to contain other components.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Complete Example: User Profile Card'
    },
    {
      type: 'paragraph',
      text: 'Let\'s build a complete, reusable user profile card component:'
    },
    {
      type: 'code',
      code: {
        language: 'javascript',
        code: `// User Profile Card Component
function UserProfileCard({ user }) {
  const { name, email, avatar, bio, followers, following } = user;
  
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={avatar} alt={name} className="avatar" />
        <h2>{name}</h2>
        <p className="email">{email}</p>
      </div>
      
      <div className="profile-body">
        <p className="bio">{bio}</p>
      </div>
      
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-value">{followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-value">{following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
      
      <button className="follow-button">Follow</button>
    </div>
  );
}

// Using the component
function App() {
  const user1 = {
    name: "Alice Johnson",
    email: "alice@example.com",
    avatar: "https://example.com/avatar1.jpg",
    bio: "Software developer passionate about React and web development.",
    followers: 1250,
    following: 320
  };
  
  const user2 = {
    name: "Bob Smith",
    email: "bob@example.com",
    avatar: "https://example.com/avatar2.jpg",
    bio: "Designer and creative thinker.",
    followers: 890,
    following: 150
  };
  
  return (
    <div className="app">
      <UserProfileCard user={user1} />
      <UserProfileCard user={user2} />
    </div>
  );
}`,
        explanation: 'This complete example shows a reusable profile card component that accepts a user object as a prop and displays all the user information in a structured way.',
        output: undefined
      }
    },
    {
      type: 'code',
      code: {
        language: 'css',
        code: `/* Profile Card Styles */
.profile-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.profile-body {
  margin-bottom: 20px;
}

.bio {
  color: #666;
  font-size: 14px;
}

.profile-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 20px;
  font-weight: bold;
}

.stat-label {
  display: block;
  font-size: 12px;
  color: #666;
}

.follow-button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}`,
        explanation: 'CSS styles for the profile card component. These styles make the component look professional and polished.',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'Keep components small and focused on a single responsibility. If a component is doing too much, break it into smaller components.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Component Best Practices'
    },
    {
      type: 'list',
      items: [
        'Keep components small and focused',
        'Use descriptive component names (PascalCase)',
        'Extract reusable logic into separate components',
        'Use props for configuration, not for everything',
        'Keep components pure when possible (same props = same output)',
        'Use meaningful prop names',
        'Provide default values for optional props',
        'Document components with comments'
      ]
    },
    {
      type: 'visual',
      visual: {
        type: 'comparison',
        description: 'Good vs Bad Component Design: Left side "Good" shows small, focused components like Button, Card, Header. Right side "Bad" shows one large component doing everything. Green checkmarks on good design, red X on bad design.',
        alt: 'Component design best practices comparison'
      }
    }
  ],

  examples: [
    {
      title: 'Simple Button Component',
      code: `function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button text="Click Me" onClick={() => alert('Clicked!')} />
      <Button text="Submit" onClick={() => console.log('Submitted')} />
    </div>
  );
}`,
      language: 'javascript',
      explanation: 'A simple, reusable button component that accepts text and onClick handler as props.',
      output: undefined
    },
    {
      title: 'Card Component with Children',
      code: `function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Card title="Welcome">
      <p>This is card content.</p>
      <button>Action</button>
    </Card>
  );
}`,
      language: 'javascript',
      explanation: 'Card component that accepts children, allowing flexible content composition.',
      output: undefined
    },
    {
      title: 'List Component',
      code: `function List({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const fruits = ['Apple', 'Banana', 'Orange'];
  return <List items={fruits} />;
}`,
      language: 'javascript',
      explanation: 'List component that renders an array of items. Always use a unique key prop when rendering lists.',
      output: undefined
    },
    {
      title: 'Conditional Rendering Component',
      code: `function UserGreeting({ isLoggedIn, username }) {
  if (isLoggedIn) {
    return <h1>Welcome back, {username}!</h1>;
  }
  return <h1>Please log in.</h1>;
}

function App() {
  return (
    <div>
      <UserGreeting isLoggedIn={true} username="Alice" />
      <UserGreeting isLoggedIn={false} />
    </div>
  );
}`,
      language: 'javascript',
      explanation: 'Component that conditionally renders different content based on props.',
      output: undefined
    },
    {
      title: 'Composed Dashboard Component',
      code: `function Header({ title }) {
  return <header><h1>{title}</h1></header>;
}

function Sidebar({ items }) {
  return (
    <aside>
      <ul>
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </aside>
  );
}

function Main({ content }) {
  return <main>{content}</main>;
}

function Dashboard() {
  return (
    <div>
      <Header title="My Dashboard" />
      <Sidebar items={['Home', 'About', 'Contact']} />
      <Main content={<p>Dashboard content here</p>} />
    </div>
  );
}`,
      language: 'javascript',
      explanation: 'Complex component composed of smaller components, demonstrating component composition.',
      output: undefined
    }
  ],

  quiz: [
    {
      question: 'What is JSX?',
      options: [
        'A JavaScript framework',
        'A syntax extension that allows HTML-like code in JavaScript',
        'A CSS preprocessor',
        'A database query language'
      ],
      correct: 1,
      explanation: 'JSX (JavaScript XML) is a syntax extension that allows you to write HTML-like code in JavaScript. It gets compiled to regular JavaScript.'
    },
    {
      question: 'How do you pass data to a React component?',
      options: ['Using state', 'Using props', 'Using variables', 'Using functions'],
      correct: 1,
      explanation: 'Props (properties) are used to pass data from parent components to child components. Props are read-only.'
    },
    {
      question: 'What must React component names start with?',
      options: ['Lowercase letter', 'Uppercase letter', 'Number', 'Special character'],
      correct: 1,
      explanation: 'React component names must start with an uppercase letter. This is how React distinguishes components from regular HTML elements.'
    },
    {
      question: 'What is component composition?',
      options: [
        'Mixing class and functional components',
        'Building complex UIs by combining smaller components',
        'Combining CSS styles',
        'Merging JavaScript files'
      ],
      correct: 1,
      explanation: 'Component composition is the practice of building complex user interfaces by combining smaller, reusable components together.'
    },
    {
      question: 'In JSX, what should you use instead of the HTML `class` attribute?',
      options: ['class', 'className', 'cssClass', 'styleClass'],
      correct: 1,
      explanation: 'In JSX, you must use `className` instead of `class` because `class` is a reserved word in JavaScript.'
    }
  ],

  exercises: [
    {
      title: 'Create a Product Card Component',
      description: 'Build a reusable product card component that displays product name, price, and image. Accept these as props.',
      hints: [
        'Create a functional component',
        'Accept name, price, and imageUrl as props',
        'Use JSX to structure the card',
        'Add some basic styling'
      ],
      solution: `function ProductCard({ name, price, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p className="price">\${price}</p>
    </div>
  );
}`
    },
    {
      title: 'Build a Navigation Component',
      description: 'Create a navigation component that accepts an array of links and renders them as a navigation menu.',
      hints: [
        'Accept links array as prop',
        'Map over the links array',
        'Render each link as an anchor tag',
        'Use key prop for list items'
      ]
    },
    {
      title: 'Create a Modal Component',
      description: 'Build a modal component that accepts title, content, and a close function. Use conditional rendering to show/hide it.',
      hints: [
        'Accept isOpen, title, children, and onClose props',
        'Conditionally render based on isOpen',
        'Add a close button that calls onClose',
        'Style it as an overlay'
      ]
    },
    {
      title: 'Build a Form Input Component',
      description: 'Create a reusable input component that accepts label, type, value, and onChange handler.',
      hints: [
        'Accept label, type, value, onChange as props',
        'Use label element for accessibility',
        'Connect input value and onChange',
        'Add proper HTML attributes'
      ]
    },
    {
      title: 'Create a Todo Item Component',
      description: 'Build a todo item component that displays todo text, completion status, and has toggle/delete buttons.',
      hints: [
        'Accept todo object with text and completed',
        'Accept onToggle and onDelete functions',
        'Conditionally style based on completed status',
        'Add buttons for actions'
      ]
    }
  ],

  relatedTopics: [
    'react-hooks',
    'react-state',
    'react-props',
    'javascript-functions'
  ],
  nextTopic: 'react-hooks'
};

