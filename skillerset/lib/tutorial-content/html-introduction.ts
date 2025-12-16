import { Tutorial } from '../tutorials';

export const htmlIntroductionTutorial: Tutorial = {
  id: 'html-introduction',
  title: 'HTML Introduction - Getting Started with HTML',
  category: 'Web Development',
  subcategory: 'HTML',
  difficulty: 'Beginner',
  readTime: '10 minutes',
  prerequisites: [],
  description: 'Learn the basics of HTML, the foundation of web development. Understand HTML structure, syntax, and create your first webpage.',
  keywords: ['HTML', 'web development', 'HTML basics', 'HTML tutorial', 'HTML introduction', 'learn HTML', 'HTML structure'],
  metaDescription: 'Learn HTML from scratch. Master HTML document structure, elements, and syntax. Create your first webpage with this comprehensive beginner-friendly tutorial.',

  introduction: {
    whatYouLearn: [
      'What HTML is and why it\'s essential for web development',
      'HTML document structure and anatomy',
      'Basic HTML syntax and elements',
      'How to create and view your first HTML page',
      'Best practices for writing clean HTML code'
    ],
    whyImportant: 'HTML (HyperText Markup Language) is the foundation of every website on the internet. Without HTML, there would be no structure for web content. It\'s the first language every web developer must learn, and it works seamlessly with CSS for styling and JavaScript for interactivity.',
    realWorldApplications: [
      'Creating website layouts and structure',
      'Building forms for user input',
      'Organizing content with semantic elements',
      'Embedding images, videos, and multimedia',
      'Creating accessible web pages',
      'SEO optimization through proper HTML structure'
    ],
    learningObjectives: [
      'Understand what HTML is and its role in web development',
      'Learn HTML document structure and basic syntax',
      'Create your first HTML page from scratch',
      'Identify and use common HTML elements',
      'Follow HTML best practices and standards'
    ]
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What is HTML?'
    },
    {
      type: 'paragraph',
      text: 'HTML stands for HyperText Markup Language. It\'s not a programming language, but rather a markup language used to structure content on the web. Think of HTML as the skeleton of a webpage - it defines the structure, but doesn\'t control the appearance (that\'s CSS) or behavior (that\'s JavaScript).'
    },
    {
      type: 'paragraph',
      text: 'HTML uses tags (also called elements) to mark up content. These tags tell the browser how to display the content. For example, `<h1>` creates a heading, `<p>` creates a paragraph, and `<img>` displays an image.'
    },
    {
      type: 'callout',
      callout: {
        variant: 'note',
        text: 'HTML is case-insensitive, but the convention is to use lowercase for all tags. This makes your code more consistent and easier to read.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'HTML Document Structure'
    },
    {
      type: 'paragraph',
      text: 'Every HTML document follows a standard structure. Understanding this structure is crucial for creating valid HTML pages.'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to HTML!</h1>
  <p>This is my first webpage.</p>
</body>
</html>`,
        explanation: 'This is the basic structure of every HTML document. Let\'s break down each part:',
        output: undefined
      }
    },
    {
      type: 'list',
      items: [
        '`<!DOCTYPE html>` - Declares the document type and HTML version (HTML5)',
        '`<html>` - The root element that wraps all HTML content',
        '`<head>` - Contains metadata, title, and links to external resources',
        '`<meta charset="UTF-8">` - Specifies character encoding (supports all languages)',
        '`<meta name="viewport">` - Makes the page responsive on mobile devices',
        '`<title>` - Sets the page title (appears in browser tab)',
        '`<body>` - Contains all visible content of the webpage'
      ]
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'HTML Document Structure Diagram: A vertical tree structure showing the hierarchy. At the top is "html" element, branching into "head" (containing meta tags and title) and "body" (containing h1 and p elements). Each element is color-coded: html (dark blue), head (light blue), body (green), content elements (orange). Arrows show parent-child relationships.',
        alt: 'HTML document structure hierarchy'
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'tip',
        text: 'Always include the DOCTYPE declaration at the very beginning of your HTML file. It ensures the browser renders your page in standards mode.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Creating Your First HTML Page'
    },
    {
      type: 'paragraph',
      text: 'Let\'s create a simple HTML page step by step. You can use any text editor like Notepad, VS Code, or Sublime Text.'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 1: Create the File'
    },
    {
      type: 'paragraph',
      text: 'Create a new file and save it with a `.html` extension. For example, `index.html` or `my-first-page.html`. The name doesn\'t matter, but `.html` extension is required.'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 2: Add Basic Structure'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first HTML page.</p>
</body>
</html>`,
        explanation: 'Copy this code into your HTML file. This creates a minimal but complete HTML page.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Step 3: View Your Page'
    },
    {
      type: 'paragraph',
      text: 'To view your HTML page, simply double-click the file. It will open in your default web browser. You can also right-click the file and select "Open with" to choose a specific browser.'
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'Use a code editor like VS Code for better HTML editing experience. It provides syntax highlighting, auto-completion, and error detection.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common HTML Elements'
    },
    {
      type: 'paragraph',
      text: 'HTML provides many elements for different types of content. Here are the most commonly used ones:'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Headings'
    },
    {
      type: 'paragraph',
      text: 'HTML has six levels of headings, from `<h1>` (most important) to `<h6>` (least important). Headings help structure your content and are important for SEO.'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>`,
        explanation: 'Use headings to create a hierarchy in your content. Typically, you\'ll use h1 once per page for the main title.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Paragraphs'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<p>This is a paragraph. It can contain multiple sentences.</p>
<p>This is another paragraph. Each paragraph is a separate block of text.</p>`,
        explanation: 'The `<p>` tag is used for paragraphs. Browsers automatically add spacing before and after paragraphs.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Links'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<a href="https://www.example.com">Visit Example</a>
<a href="about.html">About Page</a>
<a href="#section1">Jump to Section</a>`,
        explanation: 'The `<a>` tag creates links. The `href` attribute specifies the destination URL. Links can point to external websites, other pages, or sections within the same page.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Images'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<img src="image.jpg" alt="Description of image">
<img src="https://example.com/photo.png" alt="Photo from website">`,
        explanation: 'The `<img>` tag displays images. Always include the `alt` attribute for accessibility - it describes the image for screen readers.',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'warning',
        text: 'Always include the alt attribute in img tags. It\'s required for accessibility and helps users with screen readers understand your images.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'HTML Attributes'
    },
    {
      type: 'paragraph',
      text: 'Attributes provide additional information about HTML elements. They are always specified in the opening tag and usually come in name/value pairs like `name="value"`.'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<!-- Link with href and target attributes -->
<a href="https://example.com" target="_blank">Open in New Tab</a>

<!-- Image with multiple attributes -->
<img src="photo.jpg" alt="My Photo" width="300" height="200">

<!-- Paragraph with class and id attributes -->
<p class="intro" id="first-paragraph">This paragraph has a class and an ID.</p>`,
        explanation: 'Common attributes include `href` (for links), `src` and `alt` (for images), `class` and `id` (for styling and JavaScript), and `target` (for link behavior).',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'table',
        description: 'HTML Attributes Reference Table: A table with columns "Attribute", "Element", "Purpose", and "Example". Rows include: href (a, link destination, href="page.html"), src (img, image source, src="photo.jpg"), alt (img, image description, alt="Photo"), class (any, CSS styling, class="container"), id (any, unique identifier, id="header"), target (a, link behavior, target="_blank").',
        alt: 'Common HTML attributes reference table'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'HTML Comments'
    },
    {
      type: 'paragraph',
      text: 'Comments in HTML are not displayed in the browser but help document your code. They\'re useful for notes, explanations, or temporarily disabling code.'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<!-- This is a comment -->
<p>This paragraph is visible.</p>
<!-- 
  This is a multi-line comment
  You can write multiple lines here
-->
<!-- <p>This paragraph is commented out</p> -->`,
        explanation: 'Comments start with `<!--` and end with `-->`. Everything between is ignored by the browser.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Complete Example: Personal Introduction Page'
    },
    {
      type: 'paragraph',
      text: 'Let\'s create a complete example that combines everything we\'ve learned:'
    },
    {
      type: 'code',
      code: {
        language: 'html',
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>John Doe - Web Developer</title>
</head>
<body>
  <h1>John Doe</h1>
  <h2>Web Developer</h2>
  
  <img src="profile.jpg" alt="John Doe Profile Picture" width="200">
  
  <h3>About Me</h3>
  <p>I'm a passionate web developer with 5 years of experience building modern web applications.</p>
  
  <h3>Skills</h3>
  <p>HTML, CSS, JavaScript, React, Node.js</p>
  
  <h3>Contact</h3>
  <p>Email: <a href="mailto:john@example.com">john@example.com</a></p>
  <p>Website: <a href="https://johndoe.dev" target="_blank">johndoe.dev</a></p>
</body>
</html>`,
        explanation: 'This example demonstrates a complete HTML page with headings, paragraphs, images, and links. Save this as an HTML file and open it in your browser to see the result.',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'example',
        text: 'Try modifying this example: Change the name, add more sections, or include additional links. Experimenting is the best way to learn!'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'HTML Best Practices'
    },
    {
      type: 'list',
      items: [
        'Always use lowercase for HTML tags and attributes',
        'Always quote attribute values (use `class="container"` not `class=container`)',
        'Close all tags properly (use `<p></p>` not just `<p>`)',
        'Use semantic HTML elements when possible',
        'Include the lang attribute in the `<html>` tag',
        'Always provide alt text for images',
        'Use indentation to make your code readable',
        'Validate your HTML using tools like W3C Validator'
      ]
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'Use a consistent indentation style (2 or 4 spaces) throughout your HTML file. This makes your code much easier to read and maintain.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Common Mistakes to Avoid'
    },
    {
      type: 'list',
      items: [
        'Forgetting to close tags - Always close your HTML tags',
        'Missing quotes in attributes - Use `href="page.html"` not `href=page.html`',
        'Using uppercase tags - Use `<div>` not `<DIV>`',
        'Nesting tags incorrectly - Close tags in reverse order of opening',
        'Missing DOCTYPE declaration - Always include `<!DOCTYPE html>`',
        'Forgetting alt attributes - Always include alt text for images'
      ]
    },
    {
      type: 'visual',
      visual: {
        type: 'comparison',
        description: 'Good vs Bad HTML Comparison: Left side shows "Good HTML" with proper indentation, lowercase tags, quoted attributes, closed tags. Right side shows "Bad HTML" with inconsistent formatting, uppercase tags, unquoted attributes, unclosed tags. Red X marks on bad examples, green checkmarks on good examples.',
        alt: 'Good vs bad HTML code comparison'
      }
    }
  ],

  examples: [
    {
      title: 'Basic HTML Page Structure',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>Welcome to HTML!</p>
</body>
</html>`,
      language: 'html',
      explanation: 'This is the minimal structure required for a valid HTML5 document. Every HTML page should start with this structure.',
      output: 'Displays "Hello World" as a heading and "Welcome to HTML!" as a paragraph in the browser.'
    },
    {
      title: 'Page with Multiple Sections',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website</title>
</head>
<body>
  <h1>My Website</h1>
  <h2>About</h2>
  <p>This is the about section.</p>
  <h2>Contact</h2>
  <p>Email: contact@example.com</p>
</body>
</html>`,
      language: 'html',
      explanation: 'This example shows how to organize content using multiple headings and paragraphs to create sections.',
      output: 'Displays a main heading, followed by two sections (About and Contact) with their respective content.'
    },
    {
      title: 'Page with Links and Images',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Links and Images</title>
</head>
<body>
  <h1>My Favorite Sites</h1>
  <p>Visit <a href="https://www.google.com">Google</a></p>
  <p>Check out my <a href="about.html">About Page</a></p>
  <img src="logo.png" alt="Website Logo">
</body>
</html>`,
      language: 'html',
      explanation: 'This demonstrates how to add links (both external and internal) and images to your HTML page.',
      output: 'Shows clickable links and displays an image. The links navigate to different pages when clicked.'
    },
    {
      title: 'Formatted Text Example',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Text Formatting</title>
</head>
<body>
  <h1>Text Formatting</h1>
  <p>This is <strong>bold text</strong> and this is <em>italic text</em>.</p>
  <p>This is <mark>highlighted</mark> and this is <small>small text</small>.</p>
</body>
</html>`,
      language: 'html',
      explanation: 'HTML provides various tags for text formatting. `<strong>` makes text bold, `<em>` makes it italic, `<mark>` highlights text, and `<small>` makes text smaller.',
      output: 'Displays formatted text with bold, italic, highlighted, and small text variations.'
    },
    {
      title: 'Complete Personal Page',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jane Smith - Portfolio</title>
</head>
<body>
  <h1>Jane Smith</h1>
  <h2>Frontend Developer</h2>
  
  <img src="jane.jpg" alt="Jane Smith" width="150">
  
  <h3>Bio</h3>
  <p>I'm a frontend developer passionate about creating beautiful and functional web experiences.</p>
  
  <h3>Projects</h3>
  <p>Check out my work on <a href="https://github.com/janesmith" target="_blank">GitHub</a></p>
  
  <h3>Get in Touch</h3>
  <p>Email: <a href="mailto:jane@example.com">jane@example.com</a></p>
</body>
</html>`,
      language: 'html',
      explanation: 'This is a complete example of a personal portfolio page using all the HTML elements we\'ve learned. It includes headings, images, paragraphs, and links.',
      output: 'A complete personal portfolio page with profile information, image, and contact details.'
    }
  ],

  quiz: [
    {
      question: 'What does HTML stand for?',
      options: [
        'HyperText Markup Language',
        'High-Level Text Markup Language',
        'Hyperlink and Text Markup Language',
        'Home Tool Markup Language'
      ],
      correct: 0,
      explanation: 'HTML stands for HyperText Markup Language. It\'s a markup language used to structure content on the web.'
    },
    {
      question: 'Which tag is used to create the main heading?',
      options: ['<heading>', '<h1>', '<head>', '<title>'],
      correct: 1,
      explanation: 'The `<h1>` tag is used for the main heading. There are six levels of headings from h1 to h6.'
    },
    {
      question: 'What is the purpose of the alt attribute in an img tag?',
      options: [
        'To set the image size',
        'To provide alternative text for accessibility',
        'To link to another page',
        'To change the image color'
      ],
      correct: 1,
      explanation: 'The alt attribute provides alternative text that describes the image. This is important for accessibility, especially for users with screen readers.'
    },
    {
      question: 'Which of the following is the correct way to create a link?',
      options: [
        '<link href="page.html">Click here</link>',
        '<a href="page.html">Click here</a>',
        '<url href="page.html">Click here</url>',
        '<href="page.html">Click here</href>'
      ],
      correct: 1,
      explanation: 'The `<a>` tag (anchor tag) is used to create links. The href attribute specifies the destination URL.'
    },
    {
      question: 'What should be the first line in every HTML5 document?',
      options: [
        '<html>',
        '<!DOCTYPE html>',
        '<head>',
        '<body>'
      ],
      correct: 1,
      explanation: 'Every HTML5 document should start with `<!DOCTYPE html>` to declare the document type and ensure proper rendering.'
    }
  ],

  exercises: [
    {
      title: 'Create Your First HTML Page',
      description: 'Create an HTML page with your name as the main heading, a paragraph introducing yourself, and a link to your favorite website.',
      hints: [
        'Start with the basic HTML structure',
        'Use <h1> for your name',
        'Use <p> for the introduction',
        'Use <a> with href attribute for the link'
      ],
      solution: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Your Name</h1>
  <p>Introduction about yourself here.</p>
  <p>Visit my favorite site: <a href="https://example.com">Example.com</a></p>
</body>
</html>`
    },
    {
      title: 'Build a Recipe Page',
      description: 'Create an HTML page for a recipe. Include a title, ingredients list, and cooking instructions using headings and paragraphs.',
      hints: [
        'Use <h1> for the recipe title',
        'Use <h2> for sections like "Ingredients" and "Instructions"',
        'Use <p> tags for each ingredient and instruction step'
      ]
    },
    {
      title: 'Create a Book Review Page',
      description: 'Build an HTML page reviewing a book. Include the book title, author, your rating, a summary, and a link to purchase the book.',
      hints: [
        'Use appropriate heading levels',
        'Include an image of the book cover using <img>',
        'Add a link to an online bookstore'
      ]
    },
    {
      title: 'Build a Personal Blog Post',
      description: 'Create an HTML page for a blog post. Include a title, date, author name, multiple paragraphs, and links to related articles.',
      hints: [
        'Structure content with headings',
        'Use multiple <p> tags for paragraphs',
        'Add links using <a> tags'
      ]
    },
    {
      title: 'Create a Product Showcase Page',
      description: 'Design an HTML page showcasing a product. Include the product name, description, image, price, and a "Buy Now" link.',
      hints: [
        'Use <h1> for product name',
        'Include an <img> tag for the product image',
        'Add a link styled as a button (we\'ll style it with CSS later)'
      ]
    }
  ],

  relatedTopics: [
    'html-elements',
    'html-forms',
    'html5-semantic',
    'css-introduction'
  ],
  nextTopic: 'html-elements'
};

