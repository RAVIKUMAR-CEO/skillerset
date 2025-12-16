import { Tutorial } from '../tutorials';

export const pythonIntroductionTutorial: Tutorial = {
  id: 'python-introduction',
  title: 'Python Introduction - Getting Started with Python Programming',
  category: 'Programming Languages',
  subcategory: 'Python',
  difficulty: 'Beginner',
  readTime: '20 minutes',
  prerequisites: [],
  description: 'Complete introduction to Python programming. Learn what Python is, why it\'s popular, how to install it, write your first program, and understand Python syntax basics.',
  keywords: ['Python introduction', 'learn Python', 'Python basics', 'Python tutorial', 'Python programming', 'Python installation', 'Python syntax'],
  metaDescription: 'Start your Python journey! Learn what Python is, install Python, write your first program, understand syntax, variables, data types, and input/output operations.',

  introduction: {
    whatYouLearn: [
      'What Python is and why it\'s one of the most popular programming languages',
      'Real-world applications of Python (Web, Data Science, AI, Automation)',
      'How to install Python on Windows, Mac, and Linux',
      'Setting up Python development environment (VS Code, PyCharm, Jupyter)',
      'Writing and running your first Python program',
      'Understanding Python syntax, indentation, and code structure',
      'Python keywords, identifiers, and naming conventions',
      'Comments and code documentation best practices'
    ],
    whyImportant: 'Python is consistently ranked as one of the top programming languages worldwide. Its simple syntax makes it perfect for beginners, while its powerful libraries make it essential for professionals in web development, data science, artificial intelligence, automation, and more. Learning Python opens doors to numerous career opportunities.',
    realWorldApplications: [
      'Web Development: Django, Flask frameworks for building websites',
      'Data Science: NumPy, Pandas for data analysis and visualization',
      'Machine Learning & AI: TensorFlow, PyTorch for building intelligent systems',
      'Automation: Scripting tasks, web scraping, file processing',
      'Game Development: Pygame for creating games',
      'Desktop Applications: Tkinter, PyQt for GUI applications',
      'API Development: Building RESTful APIs and microservices',
      'DevOps: Automation scripts, infrastructure management'
    ],
    learningObjectives: [
      'Understand what Python is and its advantages',
      'Install Python on your operating system',
      'Set up a Python development environment',
      'Write and execute your first Python program',
      'Master Python syntax and indentation rules',
      'Use comments effectively in code',
      'Understand Python keywords and identifiers',
      'Follow Python coding best practices'
    ]
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What is Python?'
    },
    {
      type: 'paragraph',
      text: 'Python is a high-level, interpreted programming language created by Guido van Rossum and first released in 1991. The name "Python" comes from the British comedy group Monty Python, not the snake!'
    },
    {
      type: 'paragraph',
      text: 'Python is designed with code readability in mind. Its syntax is clean and intuitive, making it one of the easiest languages to learn. Python emphasizes simplicity and allows programmers to express concepts in fewer lines of code compared to languages like C++ or Java.'
    },
    {
      type: 'list',
      items: [
        '**Interpreted Language**: Code is executed line by line, no compilation needed',
        '**Dynamically Typed**: Variable types are determined at runtime',
        '**Object-Oriented**: Supports OOP principles (classes, inheritance, polymorphism)',
        '**Cross-Platform**: Runs on Windows, macOS, Linux, and more',
        '**Extensive Libraries**: Huge standard library and third-party packages',
        '**Community Support**: Large, active community with excellent documentation'
      ]
    },
    {
      type: 'callout',
      callout: {
        variant: 'tip',
        text: 'Python 3 is the current version and what you should learn. Python 2 reached end-of-life in 2020. Always use Python 3.x for new projects.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Why Learn Python?'
    },
    {
      type: 'paragraph',
      text: 'Python\'s popularity has skyrocketed in recent years. Here\'s why it\'s an excellent choice for both beginners and professionals:'
    },
    {
      type: 'visual',
      visual: {
        type: 'diagram',
        description: 'Python Advantages Diagram: A central circle labeled "Python" with 6 branches: 1) Easy to Learn - Simple syntax, 2) Versatile - Web, Data, AI, 3) High Demand - Top job market, 4) Great Libraries - Rich ecosystem, 5) Community - Large support, 6) Fast Development - Rapid prototyping. Each branch has an icon and brief description.',
        alt: 'Python advantages and benefits'
      }
    },
    {
      type: 'list',
      items: [
        '**Beginner-Friendly**: Simple syntax, easy to read and write',
        '**Versatile**: Used in web development, data science, AI, automation, and more',
        '**High Demand**: Consistently ranked in top 3 most in-demand programming languages',
        '**Excellent Libraries**: NumPy, Pandas, Django, Flask, TensorFlow, and thousands more',
        '**Great Community**: Active community, extensive documentation, many tutorials',
        '**Fast Development**: Write code faster than many other languages',
        '**Career Opportunities**: High-paying jobs in data science, AI, web development'
      ]
    },
    {
      type: 'heading',
      level: 2,
      text: 'Installing Python'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Windows Installation'
    },
    {
      type: 'list',
      items: [
        'Visit python.org/downloads',
        'Download the latest Python 3.x version (e.g., Python 3.11 or 3.12)',
        'Run the installer executable',
        '**IMPORTANT**: Check the box "Add Python to PATH"',
        'Click "Install Now"',
        'Verify installation: Open Command Prompt and type `python --version`'
      ]
    },
    {
      type: 'code',
      code: {
        language: 'bash',
        code: `# Verify Python installation
python --version
# Should display: Python 3.11.x or similar

# Check if pip is installed
pip --version
# Should display: pip 23.x.x`,
        explanation: 'After installation, verify Python and pip (package installer) are working correctly.',
        output: 'Python 3.11.0\npip 23.2.1'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'macOS Installation'
    },
    {
      type: 'list',
      items: [
        'Python 3 is pre-installed on macOS, but it might be an older version',
        'Download latest version from python.org/downloads',
        'Or use Homebrew: `brew install python3`',
        'Verify: Open Terminal and type `python3 --version`'
      ]
    },
    {
      type: 'heading',
      level: 3,
      text: 'Linux Installation'
    },
    {
      type: 'code',
      code: {
        language: 'bash',
        code: `# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip

# Fedora
sudo dnf install python3 python3-pip

# Verify
python3 --version
pip3 --version`,
        explanation: 'Linux distributions usually have Python pre-installed. Use package manager to install or update.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Python IDE Options'
    },
    {
      type: 'paragraph',
      text: 'An IDE (Integrated Development Environment) makes coding easier. Here are popular options:'
    },
    {
      type: 'list',
      items: [
        '**VS Code**: Free, lightweight, excellent Python extension',
        '**PyCharm**: Professional IDE by JetBrains, free Community edition available',
        '**Jupyter Notebook**: Great for data science, interactive coding',
        '**IDLE**: Comes with Python, simple but functional',
        '**Sublime Text**: Lightweight text editor with Python support',
        '**Atom**: Free, customizable text editor'
      ]
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'For beginners, VS Code with the Python extension is highly recommended. It\'s free, easy to use, and has excellent features like syntax highlighting, debugging, and IntelliSense.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Your First Python Program: "Hello, World!"'
    },
    {
      type: 'paragraph',
      text: 'Let\'s write the traditional first program that every programmer writes when learning a new language:'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# My first Python program
print("Hello, World!")

# Save this as hello.py and run it`,
        explanation: 'The simplest Python program. The `print()` function displays text on the screen. Save this in a file with `.py` extension.',
        output: 'Hello, World!'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Running Python Code'
    },
    {
      type: 'paragraph',
      text: 'There are two ways to run Python code:'
    },
    {
      type: 'heading',
      level: 4,
      text: '1. Interactive Mode (REPL)'
    },
    {
      type: 'code',
      code: {
        language: 'bash',
        code: `# Open Python interactive mode
python
# or python3 on Mac/Linux

# You'll see: >>>
# Type your code directly
>>> print("Hello, World!")
Hello, World!
>>> exit()`,
        explanation: 'Interactive mode lets you type and execute code line by line. Great for testing and learning.',
        output: 'Hello, World!'
      }
    },
    {
      type: 'heading',
      level: 4,
      text: '2. Script Mode'
    },
    {
      type: 'code',
      code: {
        language: 'bash',
        code: `# Create a file: hello.py
# Add: print("Hello, World!")

# Run from command line
python hello.py
# Output: Hello, World!`,
        explanation: 'Script mode runs entire Python files. This is how you\'ll write most programs.',
        output: 'Hello, World!'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Python Syntax Basics'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Indentation: Python\'s Unique Feature'
    },
    {
      type: 'paragraph',
      text: 'Python uses indentation (whitespace) to define code blocks, unlike languages like C++ or Java that use curly braces `{}`.'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# Correct indentation
if True:
    print("This is indented")
    print("This too")
print("This is not indented")

# Wrong indentation (will cause error)
if True:
print("This will cause IndentationError")`,
        explanation: 'Indentation matters in Python! Use 4 spaces (or 1 tab) for each indentation level. Be consistent throughout your code.',
        output: 'This is indented\nThis too\nThis is not indented'
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'warning',
        text: 'Never mix tabs and spaces for indentation. Choose one and stick with it. Most Python style guides recommend 4 spaces. Most editors can be configured to insert spaces when you press Tab.'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Comments'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# This is a single-line comment

# Comments explain what code does
print("Hello")  # Inline comment

"""
This is a multi-line comment
or docstring
It can span multiple lines
"""

# Multi-line comment using #
# This is another way
# to write multi-line comments`,
        explanation: 'Comments help document your code. Single-line comments use `#`. Multi-line comments use triple quotes `"""` or multiple `#` lines.',
        output: 'Hello'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Python Keywords'
    },
    {
      type: 'paragraph',
      text: 'Keywords are reserved words in Python that have special meaning. You cannot use them as variable names.'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# Some Python keywords
# if, else, elif, for, while, def, class, import, return, True, False, None, and, or, not, in, is, etc.

# This will cause an error:
# if = 5  # SyntaxError: invalid syntax

# Check all keywords
import keyword
print(keyword.kwlist)`,
        explanation: 'Python has about 35 keywords. You cannot use them as variable names. Use `keyword.kwlist` to see all keywords.',
        output: "['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']"
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Identifiers and Naming Rules'
    },
    {
      type: 'list',
      items: [
        'Can contain letters (a-z, A-Z), digits (0-9), and underscore (_)',
        'Must start with a letter or underscore (not a digit)',
        'Case-sensitive: `name` and `Name` are different',
        'Cannot be a Python keyword',
        'Use descriptive names: `user_age` not `ua`'
      ]
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# Valid identifiers
name = "Alice"
user_name = "bob123"
_age = 25
total_count = 100

# Invalid identifiers
# 2name = "Error"      # Cannot start with digit
# user-name = "Error"   # Cannot use hyphen
# class = "Error"       # Cannot use keyword`,
        explanation: 'Follow Python naming conventions for valid identifiers. Use snake_case for variables and functions.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'comparison',
        description: 'Good vs Bad Variable Names: Left side "Good" shows: user_name, total_count, is_active, calculate_total. Right side "Bad" shows: un, tc, flag, calc. Green checkmarks on good names, red X on bad names.',
        alt: 'Python variable naming conventions'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Python Code Structure Best Practices'
    },
    {
      type: 'list',
      items: [
        'Use 4 spaces for indentation (PEP 8 standard)',
        'Maximum line length: 79 characters (PEP 8)',
        'Use blank lines to separate logical sections',
        'Import statements at the top',
        'Use meaningful variable names',
        'Add comments to explain complex logic',
        'Follow PEP 8 style guide'
      ]
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# Good code structure
# Import statements
import math
import os

# Constants
PI = 3.14159
MAX_SIZE = 100

# Main code
def calculate_area(radius):
    """Calculate area of circle."""
    return PI * radius ** 2

# Program entry point
if __name__ == "__main__":
    result = calculate_area(5)
    print(f"Area: {result}")`,
        explanation: 'Well-structured Python code follows conventions: imports first, constants, functions, then main code.',
        output: 'Area: 78.53975'
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'Follow PEP 8 (Python Enhancement Proposal 8) - the official Python style guide. It makes your code more readable and professional. Tools like `autopep8` can automatically format your code to PEP 8 standards.'
      }
    }
  ],

  examples: [
    {
      title: 'Hello World Program',
      code: `print("Hello, World!")
print("Welcome to Python!")`,
      language: 'python',
      explanation: 'The simplest Python program demonstrating the print() function.',
      output: 'Hello, World!\nWelcome to Python!'
    },
    {
      title: 'Multiple Print Statements',
      code: `print("Python")
print("is")
print("awesome!")`,
      language: 'python',
      explanation: 'Each print() statement outputs on a new line by default.',
      output: 'Python\nis\nawesome!'
    },
    {
      title: 'Print with Custom Separator',
      code: `print("Python", "is", "awesome", sep="-")
print("Hello", "World", end="!")`,
      language: 'python',
      explanation: 'Using sep and end parameters to customize print output.',
      output: 'Python-is-awesome\nHello World!'
    },
    {
      title: 'Comments Example',
      code: `# This program calculates the sum
# Author: Your Name
# Date: 2024

# Calculate sum
result = 10 + 20  # Adding two numbers
print(f"Sum: {result}")  # Display result`,
      language: 'python',
      explanation: 'Demonstrating different types of comments in Python code.',
      output: 'Sum: 30'
    },
    {
      title: 'Proper Code Structure',
      code: `# Import section
import math

# Constants
GRAVITY = 9.8

# Function definition
def calculate_force(mass):
    """Calculate force using F = ma."""
    return mass * GRAVITY

# Main program
if __name__ == "__main__":
    force = calculate_force(10)
    print(f"Force: {force}N")`,
      language: 'python',
      explanation: 'Example of well-structured Python code following best practices.',
      output: 'Force: 98.0N'
    }
  ],

  quiz: [
    {
      question: 'What is Python primarily known for?',
      options: [
        'Being the fastest programming language',
        'Simple syntax and readability',
        'Only used for web development',
        'Requiring compilation before execution'
      ],
      correct: 1,
      explanation: 'Python is primarily known for its simple, readable syntax that makes it easy to learn and write code.'
    },
    {
      question: 'What does Python use to define code blocks?',
      options: ['Curly braces {}', 'Indentation (whitespace)', 'Square brackets []', 'Parentheses ()'],
      correct: 1,
      explanation: 'Python uses indentation (whitespace) to define code blocks, unlike many languages that use curly braces.'
    },
    {
      question: 'Which version of Python should you learn?',
      options: ['Python 2', 'Python 3', 'Both are equally good', 'Python 1'],
      correct: 1,
      explanation: 'Python 3 is the current version. Python 2 reached end-of-life in 2020 and is no longer maintained.'
    },
    {
      question: 'What is the recommended indentation in Python?',
      options: ['2 spaces', '4 spaces', '8 spaces', 'Tabs only'],
      correct: 1,
      explanation: 'PEP 8 (Python style guide) recommends 4 spaces for indentation. Most Python developers follow this convention.'
    },
    {
      question: 'Which of these is a valid Python identifier?',
      options: ['2name', 'user-name', 'user_name', 'class'],
      correct: 2,
      explanation: 'Valid identifiers can contain letters, digits, and underscores, but must start with a letter or underscore. `class` is a keyword and cannot be used.'
    }
  ],

  exercises: [
    {
      title: 'Print Your Introduction',
      description: 'Write a Python program that prints your name, age, and a hobby. Use multiple print statements.',
      hints: [
        'Use print() function',
        'Print name, age, and hobby separately',
        'You can use strings directly'
      ],
      solution: `print("Name: Alice")
print("Age: 25")
print("Hobby: Reading")`
    },
    {
      title: 'Create a Welcome Message',
      description: 'Write a program that prints a welcome message with your name using a single print statement.',
      hints: [
        'Use f-strings or string concatenation',
        'Format: "Welcome, [Your Name]!"'
      ],
      solution: `name = "Alice"
print(f"Welcome, {name}!")`
    },
    {
      title: 'Print a Pattern',
      description: 'Print the following pattern using print statements:\n*\n**\n***\n****',
      hints: [
        'Use multiple print statements',
        'Each line has one more asterisk'
      ],
      solution: `print("*")
print("**")
print("***")
print("****")`
    },
    {
      title: 'Add Comments to Code',
      description: 'Write a program that calculates 10 + 20 and prints the result. Add appropriate comments explaining each step.',
      hints: [
        'Use # for single-line comments',
        'Comment what the code does',
        'Add comments before operations'
      ],
      solution: `# This program calculates the sum of two numbers
# First number
num1 = 10

# Second number
num2 = 20

# Calculate sum
result = num1 + num2

# Display result
print(f"Sum: {result}")`
    },
    {
      title: 'Print with Formatting',
      description: 'Print "Python Programming" with a custom separator between words (use "-" as separator).',
      hints: [
        'Use print() with sep parameter',
        'Pass multiple strings to print()',
        'Set sep="-"'
      ],
      solution: `print("Python", "Programming", sep="-")`
    },
    {
      title: 'Create a Multi-line Comment',
      description: 'Write a program with a multi-line comment (docstring) explaining what the program does, then print "Hello, Python!".',
      hints: [
        'Use triple quotes """ for multi-line comments',
        'Add description of the program',
        'Then add print statement'
      ],
      solution: `"""
This is my first Python program.
It demonstrates multi-line comments.
Author: Your Name
"""

print("Hello, Python!")`
    },
    {
      title: 'Print Special Characters',
      description: 'Print a message that includes quotes: "Python is \'awesome\'!"',
      hints: [
        'Use escape characters',
        'Use \\" for double quotes or \\\' for single quotes',
        'Or use different quote types'
      ],
      solution: `print("Python is 'awesome'!")
# or
print('Python is "awesome"!')`
    },
    {
      title: 'Print on Same Line',
      description: 'Print "Hello" and "World" on the same line separated by a space.',
      hints: [
        'Use end parameter in print()',
        'Or print multiple values in one print()',
        'Default separator is space'
      ],
      solution: `print("Hello", "World")
# or
print("Hello", end=" ")
print("World")`
    },
    {
      title: 'Create a Program Header',
      description: 'Write a program with a header comment block containing program name, author, and date, then print "Program started".',
      hints: [
        'Use comments for header',
        'Include program name, author, date',
        'Then print message'
      ],
      solution: `# Program: My First Python Program
# Author: Your Name
# Date: 2024-01-01

print("Program started")`
    },
    {
      title: 'Print Mathematical Expression',
      description: 'Print the result of 5 * 3 + 2 in a formatted way: "Result: 17"',
      hints: [
        'Calculate the expression',
        'Use f-string for formatting',
        'Print with label'
      ],
      solution: `result = 5 * 3 + 2
print(f"Result: {result}")`
    }
  ],

  relatedTopics: [
    'python-basics',
    'python-variables',
    'python-data-types',
    'python-operators'
  ],
  nextTopic: 'python-basics'
};

