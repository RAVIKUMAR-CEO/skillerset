import { Tutorial } from '../tutorials';

export const pythonBasicsTutorial: Tutorial = {
  id: 'python-basics',
  title: 'Python Basics - Getting Started with Python',
  category: 'Programming Languages',
  subcategory: 'Python',
  difficulty: 'Beginner',
  readTime: '15 minutes',
  prerequisites: [],
  description: 'Learn Python programming from scratch. Master variables, data types, input/output, and write your first Python programs.',
  keywords: ['Python basics', 'Python tutorial', 'learn Python', 'Python programming', 'Python variables', 'Python data types'],
  metaDescription: 'Learn Python programming fundamentals. Master variables, data types, operators, input/output, and create your first Python programs with this beginner-friendly tutorial.',

  introduction: {
    whatYouLearn: [
      'How to install and set up Python',
      'Python syntax and basic rules',
      'Variables and data types (strings, numbers, booleans)',
      'Input and output operations',
      'Basic operators and expressions',
      'Writing and running your first Python program',
      'Best practices for Python code'
    ],
    whyImportant: 'Python is one of the most popular and beginner-friendly programming languages. It\'s used in web development, data science, artificial intelligence, automation, and more. Python\'s simple syntax makes it an excellent first language, while its power makes it valuable for professional development.',
    realWorldApplications: [
      'Web development (Django, Flask)',
      'Data science and analytics',
      'Machine learning and AI',
      'Automation and scripting',
      'Game development',
      'Desktop applications',
      'API development'
    ],
    learningObjectives: [
      'Set up Python development environment',
      'Understand Python syntax and indentation',
      'Work with variables and data types',
      'Perform input and output operations',
      'Use basic operators and expressions',
      'Write and execute Python programs',
      'Follow Python coding conventions'
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
      text: 'Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum and first released in 1991, Python emphasizes code readability and allows programmers to express concepts in fewer lines of code than languages like C++ or Java.'
    },
    {
      type: 'paragraph',
      text: 'Python is an interpreted language, meaning code is executed line by line, making it great for learning and rapid development. It\'s also cross-platform, running on Windows, macOS, and Linux.'
    },
    {
      type: 'callout',
      callout: {
        variant: 'note',
        text: 'Python uses indentation to define code blocks, unlike many languages that use curly braces. This makes Python code more readable but requires careful attention to spacing.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Installing Python'
    },
    {
      type: 'paragraph',
      text: 'Before you can write Python code, you need to install Python on your computer.'
    },
    {
      type: 'list',
      items: [
        'Visit python.org/downloads',
        'Download the latest Python 3.x version for your operating system',
        'Run the installer and check "Add Python to PATH"',
        'Verify installation by opening terminal/command prompt and typing: `python --version`'
      ]
    },
    {
      type: 'code',
      code: {
        language: 'bash',
        code: `# Check Python version
python --version
# Output: Python 3.11.0 (or similar)

# Run Python interactively
python
# This opens Python REPL (Read-Eval-Print Loop)`,
        explanation: 'After installation, verify Python is working by checking the version. You can also run Python interactively.',
        output: 'Python 3.11.0'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Your First Python Program'
    },
    {
      type: 'paragraph',
      text: 'Let\'s start with the classic "Hello, World!" program. Create a file named `hello.py` and write:'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# This is a comment
print("Hello, World!")

# Run this file with: python hello.py`,
        explanation: 'The `print()` function displays output. Comments start with `#`. Save this as a `.py` file and run it.',
        output: 'Hello, World!'
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'tip',
        text: 'Python files should have a `.py` extension. You can run them from the command line using `python filename.py`.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Variables and Data Types'
    },
    {
      type: 'paragraph',
      text: 'Variables are containers for storing data. In Python, you don\'t need to declare variable types - Python figures it out automatically (this is called dynamic typing).'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Creating Variables'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# String variable
name = "Alice"
print(name)  # Output: Alice

# Integer variable
age = 25
print(age)  # Output: 25

# Float (decimal) variable
height = 5.6
print(height)  # Output: 5.6

# Boolean variable
is_student = True
print(is_student)  # Output: True`,
        explanation: 'Variables are created by assigning values. Python automatically determines the data type.',
        output: 'Alice\n25\n5.6\nTrue'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Data Types'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# String (str)
text = "Hello, Python!"
print(type(text))  # <class 'str'>

# Integer (int)
number = 42
print(type(number))  # <class 'int'>

# Float (float)
decimal = 3.14
print(type(decimal))  # <class 'float'>

# Boolean (bool)
is_active = True
print(type(is_active))  # <class 'bool'>

# List (list)
fruits = ["apple", "banana", "orange"]
print(type(fruits))  # <class 'list'>

# Dictionary (dict)
person = {"name": "Alice", "age": 25}
print(type(person))  # <class 'dict'>`,
        explanation: 'Use `type()` to check the data type of a variable. Python has several built-in data types.',
        output: "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>\n<class 'list'>\n<class 'dict'>"
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'table',
        description: 'Python Data Types Table: Columns are "Type", "Example", "Description". Rows: str - "Hello" - Text/string data, int - 42 - Whole numbers, float - 3.14 - Decimal numbers, bool - True/False - Boolean values, list - [1,2,3] - Ordered collection, dict - {"key":"value"} - Key-value pairs.',
        alt: 'Python data types reference table'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Input and Output'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Output with print()'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# Basic print
print("Hello, World!")

# Print multiple values
name = "Alice"
age = 25
print("Name:", name, "Age:", age)

# Formatted strings (f-strings) - Python 3.6+
print(f"Name: {name}, Age: {age}")

# Print with separator
print("Python", "is", "awesome", sep="-")  # Output: Python-is-awesome

# Print without newline
print("Hello", end=" ")
print("World")  # Output: Hello World`,
        explanation: 'The `print()` function is versatile. You can print multiple values, use f-strings for formatting, and control separators and endings.',
        output: 'Hello, World!\nName: Alice Age: 25\nName: Alice, Age: 25\nPython-is-awesome\nHello World'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Input with input()'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# Get user input
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Input always returns a string
age = input("Enter your age: ")
print(type(age))  # <class 'str'>

# Convert input to number
age = int(input("Enter your age: "))
print(f"You are {age} years old")
print(type(age))  # <class 'int'>`,
        explanation: 'The `input()` function gets user input. It always returns a string, so convert to numbers when needed using `int()` or `float()`.',
        output: 'Enter your name: [user types] Alice\nHello, Alice!\nEnter your age: [user types] 25\n<class \'str\'>\nEnter your age: [user types] 25\nYou are 25 years old\n<class \'int\'>'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Operators'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Arithmetic Operators'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# Addition
result = 10 + 5
print(result)  # 15

# Subtraction
result = 10 - 5
print(result)  # 5

# Multiplication
result = 10 * 5
print(result)  # 50

# Division (always returns float)
result = 10 / 5
print(result)  # 2.0

# Floor division (integer division)
result = 10 // 3
print(result)  # 3

# Modulus (remainder)
result = 10 % 3
print(result)  # 1

# Exponentiation (power)
result = 2 ** 3
print(result)  # 8`,
        explanation: 'Python supports all standard arithmetic operations. Division always returns a float, use `//` for integer division.',
        output: '15\n5\n50\n2.0\n3\n1\n8'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Comparison Operators'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `x = 10
y = 5

print(x == y)  # False (equal)
print(x != y)  # True (not equal)
print(x > y)   # True (greater than)
print(x < y)   # False (less than)
print(x >= y)  # True (greater than or equal)
print(x <= y)  # False (less than or equal)`,
        explanation: 'Comparison operators return boolean values (True or False).',
        output: 'False\nTrue\nTrue\nFalse\nTrue\nFalse'
      }
    },
    {
      type: 'heading',
      level: 3,
      text: 'Logical Operators'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `a = True
b = False

print(a and b)  # False
print(a or b)   # True
print(not a)    # False`,
        explanation: 'Logical operators work with boolean values: `and`, `or`, and `not`.',
        output: 'False\nTrue\nFalse'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'String Operations'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# String concatenation
first_name = "Alice"
last_name = "Smith"
full_name = first_name + " " + last_name
print(full_name)  # Alice Smith

# String repetition
greeting = "Hello! " * 3
print(greeting)  # Hello! Hello! Hello!

# String methods
text = "  Python Programming  "
print(text.strip())        # Remove whitespace
print(text.upper())        # Uppercase
print(text.lower())        # Lowercase
print(text.replace("Python", "Java"))  # Replace

# String formatting
name = "Alice"
age = 25
message = f"My name is {name} and I'm {age} years old"
print(message)`,
        explanation: 'Python provides many string operations. F-strings (formatted string literals) are the modern way to format strings.',
        output: 'Alice Smith\nHello! Hello! Hello!\nPython Programming\n  PYTHON PROGRAMMING  \n  python programming  \n  Java Programming  \nMy name is Alice and I\'m 25 years old'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Complete Example: Personal Information Program'
    },
    {
      type: 'code',
      code: {
        language: 'python',
        code: `# Get user information
print("=== Personal Information Form ===")
name = input("Enter your name: ")
age = int(input("Enter your age: "))
city = input("Enter your city: ")

# Process and display
print(f"\\nHello, {name}!")
print(f"You are {age} years old.")
print(f"You live in {city}.")

# Calculate years until 100
years_to_100 = 100 - age
print(f"You will be 100 years old in {years_to_100} years!")`,
        explanation: 'This complete program demonstrates input, variables, type conversion, and formatted output.',
        output: '=== Personal Information Form ===\nEnter your name: [user input]\nEnter your age: [user input]\nEnter your city: [user input]\n\nHello, [name]!\nYou are [age] years old.\nYou live in [city].\nYou will be 100 years old in [years] years!'
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'Always validate user input in real applications. Use try-except blocks to handle errors when converting input to numbers.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Python Naming Conventions'
    },
    {
      type: 'list',
      items: [
        'Use lowercase with underscores for variables: `user_name`, `total_count`',
        'Use uppercase for constants: `MAX_SIZE`, `PI`',
        'Use descriptive names: `age` not `a`, `user_name` not `un`',
        'Avoid Python keywords: don\'t use `print`, `if`, `for` as variable names',
        'Class names use PascalCase: `MyClass`, `UserAccount`'
      ]
    },
    {
      type: 'visual',
      visual: {
        type: 'comparison',
        description: 'Good vs Bad Variable Names: Left side shows "Good" with examples like user_name, total_price, is_active. Right side shows "Bad" with examples like u, tp, flag. Green checkmarks on good examples, red X marks on bad examples.',
        alt: 'Python variable naming conventions comparison'
      }
    }
  ],

  examples: [
    {
      title: 'Hello World Program',
      code: `print("Hello, World!")
print("Welcome to Python!")`,
      language: 'python',
      explanation: 'The simplest Python program - printing messages to the console.',
      output: 'Hello, World!\nWelcome to Python!'
    },
    {
      title: 'Variable Assignment and Types',
      code: `name = "Python"
version = 3.11
is_awesome = True

print(f"{name} version {version} is awesome: {is_awesome}")`,
      language: 'python',
      explanation: 'Demonstrates different data types and f-string formatting.',
      output: 'Python version 3.11 is awesome: True'
    },
    {
      title: 'Simple Calculator',
      code: `a = 10
b = 5

print(f"Addition: {a + b}")
print(f"Subtraction: {a - b}")
print(f"Multiplication: {a * b}")
print(f"Division: {a / b}")`,
      language: 'python',
      explanation: 'Basic arithmetic operations with formatted output.',
      output: 'Addition: 15\nSubtraction: 5\nMultiplication: 50\nDivision: 2.0'
    },
    {
      title: 'User Input Program',
      code: `name = input("What's your name? ")
age = int(input("How old are you? "))

print(f"Hello, {name}! You are {age} years old.")
print(f"Next year you'll be {age + 1}.")`,
      language: 'python',
      explanation: 'Getting user input and performing calculations with it.',
      output: 'What\'s your name? [user input]\nHow old are you? [user input]\nHello, [name]! You are [age] years old.\nNext year you\'ll be [age+1].'
    },
    {
      title: 'String Operations',
      code: `text = "python programming"
print(text.upper())
print(text.capitalize())
print(text.replace("python", "Python"))
print(f"Length: {len(text)}")`,
      language: 'python',
      explanation: 'Common string methods and operations.',
      output: 'PYTHON PROGRAMMING\nPython programming\nPython programming\nLength: 18'
    }
  ],

  quiz: [
    {
      question: 'What is the output of: print(10 // 3)?',
      options: ['3.33', '3', '3.0', '4'],
      correct: 1,
      explanation: 'Floor division (`//`) returns the integer part of the division, so 10 // 3 = 3.'
    },
    {
      question: 'What data type does input() always return?',
      options: ['int', 'float', 'str', 'bool'],
      correct: 2,
      explanation: 'The `input()` function always returns a string, even if the user types a number. You need to convert it using `int()` or `float()`.'
    },
    {
      question: 'Which operator is used for exponentiation in Python?',
      options: ['^', '**', 'exp', 'pow'],
      correct: 1,
      explanation: 'The `**` operator is used for exponentiation. For example, 2 ** 3 = 8.'
    },
    {
      question: 'What is the correct way to format a string with variables in Python 3.6+?',
      options: [
        'f"Hello {name}"',
        '"Hello " + name',
        '"Hello %s" % name',
        'All of the above'
      ],
      correct: 3,
      explanation: 'All three methods work, but f-strings (f"Hello {name}") are the recommended modern approach in Python 3.6+.'
    },
    {
      question: 'What does Python use to define code blocks?',
      options: ['Curly braces {}', 'Indentation', 'Parentheses ()', 'Square brackets []'],
      correct: 1,
      explanation: 'Python uses indentation (spaces or tabs) to define code blocks, not curly braces like many other languages.'
    }
  ],

  exercises: [
    {
      title: 'Create a Greeting Program',
      description: 'Write a program that asks for the user\'s name and age, then greets them and tells them how old they are.',
      hints: [
        'Use input() to get user input',
        'Convert age to int using int()',
        'Use f-strings for formatting',
        'Print a personalized greeting'
      ],
      solution: `name = input("Enter your name: ")
age = int(input("Enter your age: "))
print(f"Hello, {name}! You are {age} years old.")`
    },
    {
      title: 'Build a Simple Calculator',
      description: 'Create a program that takes two numbers and an operation (+, -, *, /) and performs the calculation.',
      hints: [
        'Get two numbers using input() and convert to float',
        'Get the operation as a string',
        'Use if-elif to check the operation',
        'Print the result'
      ]
    },
    {
      title: 'Create a Temperature Converter',
      description: 'Write a program that converts Celsius to Fahrenheit. Formula: F = (C * 9/5) + 32',
      hints: [
        'Get Celsius temperature from user',
        'Convert to float',
        'Apply the formula',
        'Display the result'
      ]
    },
    {
      title: 'Build a String Manipulator',
      description: 'Create a program that takes a string and displays it in uppercase, lowercase, and with first letter capitalized.',
      hints: [
        'Use input() to get a string',
        'Use .upper(), .lower(), and .capitalize() methods',
        'Print all three versions'
      ]
    },
    {
      title: 'Create a Personal Information Form',
      description: 'Build a program that collects name, email, phone, and city, then displays a formatted summary.',
      hints: [
        'Get multiple inputs',
        'Use f-strings for formatting',
        'Create a nice output format',
        'Add some visual separators'
      ]
    }
  ],

  relatedTopics: [
    'python-control-flow',
    'python-functions',
    'python-lists',
    'python-file-handling'
  ],
  nextTopic: 'python-control-flow'
};

