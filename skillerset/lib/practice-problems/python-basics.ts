import { addProblem, PracticeProblem } from '../practice-problems';

// Python Basics Practice Problems

const problems: PracticeProblem[] = [
  {
    problemId: 'py-001',
    title: 'Calculate Area of Rectangle',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Variables and Input/Output',
    description: 'Write a Python program to calculate the area of a rectangle. Take length and width as input from the user and display the area.',
    examples: [
      {
        input: 'Length: 5\nWidth: 3',
        output: 'Area: 15',
        explanation: 'Area = length × width = 5 × 3 = 15'
      },
      {
        input: 'Length: 10.5\nWidth: 4.2',
        output: 'Area: 44.1',
        explanation: 'Area = 10.5 × 4.2 = 44.1'
      }
    ],
    constraints: [
      'Length and width must be positive numbers',
      'Use proper variable names',
      'Display result with appropriate message'
    ],
    hints: [
      'Use input() to get user input',
      'Convert string input to float using float()',
      'Formula: area = length × width',
      'Use f-string for formatted output'
    ],
    starterCode: `# Take input from user
length = float(input('Enter length: '))
width = float(input('Enter width: '))

# Your code here
`,
    solution: `# Take input from user
length = float(input('Enter length: '))
width = float(input('Enter width: '))

# Calculate area
area = length * width

# Display result
print(f'Area of rectangle: {area}')`,
    explanation: 'Step 1: Get length and width from user using input() and convert to float. Step 2: Calculate area by multiplying length and width. Step 3: Display the result using formatted string.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-002', 'py-003'],
    tags: ['basics', 'arithmetic', 'input-output', 'variables'],
    estimatedTime: '5 minutes'
  },
  {
    problemId: 'py-002',
    title: 'Convert Temperature (Celsius to Fahrenheit)',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Variables and Input/Output',
    description: 'Write a Python program to convert temperature from Celsius to Fahrenheit. The formula is: F = (C × 9/5) + 32',
    examples: [
      {
        input: 'Celsius: 0',
        output: 'Fahrenheit: 32.0',
        explanation: 'F = (0 × 9/5) + 32 = 0 + 32 = 32'
      },
      {
        input: 'Celsius: 100',
        output: 'Fahrenheit: 212.0',
        explanation: 'F = (100 × 9/5) + 32 = 180 + 32 = 212'
      },
      {
        input: 'Celsius: 37',
        output: 'Fahrenheit: 98.6',
        explanation: 'F = (37 × 9/5) + 32 = 66.6 + 32 = 98.6'
      }
    ],
    constraints: [
      'Temperature can be any real number',
      'Display result with one decimal place',
      'Use proper formula'
    ],
    hints: [
      'Get Celsius temperature from user',
      'Convert to float',
      'Apply formula: F = (C × 9/5) + 32',
      'Use f-string with formatting for decimal places'
    ],
    starterCode: `# Get temperature in Celsius
celsius = float(input('Enter temperature in Celsius: '))

# Your code here
`,
    solution: `# Get temperature in Celsius
celsius = float(input('Enter temperature in Celsius: '))

# Convert to Fahrenheit
fahrenheit = (celsius * 9/5) + 32

# Display result
print(f'Fahrenheit: {fahrenheit:.1f}')`,
    explanation: 'Step 1: Get Celsius temperature from user and convert to float. Step 2: Apply the conversion formula. Step 3: Display Fahrenheit temperature with one decimal place using format specifier.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-001', 'py-003'],
    tags: ['basics', 'arithmetic', 'input-output', 'formula'],
    estimatedTime: '5 minutes'
  },
  {
    problemId: 'py-003',
    title: 'Swap Two Variables',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Variables',
    description: 'Write a Python program to swap the values of two variables. Display the values before and after swapping.',
    examples: [
      {
        input: 'a = 5, b = 10',
        output: 'Before: a = 5, b = 10\nAfter: a = 10, b = 5',
        explanation: 'The values of a and b are interchanged'
      },
      {
        input: 'a = 100, b = 200',
        output: 'Before: a = 100, b = 200\nAfter: a = 200, b = 100',
        explanation: 'Values are swapped successfully'
      }
    ],
    constraints: [
      'Use two variables',
      'Display before and after values',
      'Can use temporary variable or Python tuple unpacking'
    ],
    hints: [
      'Method 1: Use a temporary variable',
      'Method 2: Use tuple unpacking (Pythonic way)',
      'Display values before swapping',
      'Display values after swapping'
    ],
    starterCode: `# Initialize variables
a = 5
b = 10

print(f'Before: a = {a}, b = {b}')

# Your code here to swap

print(f'After: a = {a}, b = {b}')`,
    solution: `# Initialize variables
a = 5
b = 10

print(f'Before: a = {a}, b = {b}')

# Method 1: Using temporary variable
temp = a
a = b
b = temp

# Method 2: Pythonic way (tuple unpacking)
# a, b = b, a

print(f'After: a = {a}, b = {b}')`,
    explanation: 'Method 1: Use a temporary variable to store one value, then swap. Method 2 (Pythonic): Use tuple unpacking `a, b = b, a` which is more elegant and Python-specific.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-001', 'py-004'],
    tags: ['basics', 'variables', 'swapping'],
    estimatedTime: '5 minutes'
  },
  {
    problemId: 'py-004',
    title: 'Find Data Type of Given Value',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Data Types',
    description: 'Write a Python program that takes a value as input and displays its data type. Handle different types: int, float, str, bool.',
    examples: [
      {
        input: 'Value: 42',
        output: 'Data type: <class \'int\'>',
        explanation: '42 is an integer'
      },
      {
        input: 'Value: 3.14',
        output: 'Data type: <class \'float\'>',
        explanation: '3.14 is a float'
      },
      {
        input: 'Value: "Hello"',
        output: 'Data type: <class \'str\'>',
        explanation: '"Hello" is a string'
      }
    ],
    constraints: [
      'Accept input from user',
      'Use type() function',
      'Display the data type clearly'
    ],
    hints: [
      'Use input() to get value',
      'Use type() function to check data type',
      'Note: input() always returns string, so you may need to convert',
      'Try different input types'
    ],
    starterCode: `# Get input from user
value = input('Enter a value: ')

# Your code here
`,
    solution: `# Get input from user
value = input('Enter a value: ')

# Check and display data type
print(f'Data type: {type(value)}')

# Note: input() always returns string
# To check actual type, you might need to convert:
# Try: value = eval(input('Enter a value: '))
# But be careful with eval() in production code`,
    explanation: 'The type() function returns the data type of a value. Note that input() always returns a string, so to check the actual type of numeric input, you might need to convert it first or use eval() (with caution).',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-005'],
    tags: ['basics', 'data-types', 'type-checking'],
    estimatedTime: '5 minutes'
  },
  {
    problemId: 'py-005',
    title: 'Calculate Simple Interest',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Arithmetic Operations',
    description: 'Write a Python program to calculate simple interest. Formula: SI = (P × R × T) / 100, where P is principal, R is rate, and T is time.',
    examples: [
      {
        input: 'Principal: 1000\nRate: 5\nTime: 2',
        output: 'Simple Interest: 100.0',
        explanation: 'SI = (1000 × 5 × 2) / 100 = 10000 / 100 = 100'
      },
      {
        input: 'Principal: 5000\nRate: 7.5\nTime: 3',
        output: 'Simple Interest: 1125.0',
        explanation: 'SI = (5000 × 7.5 × 3) / 100 = 112500 / 100 = 1125'
      }
    ],
    constraints: [
      'Principal, rate, and time must be positive numbers',
      'Rate can be a decimal',
      'Display result with appropriate formatting'
    ],
    hints: [
      'Get principal, rate, and time from user',
      'Convert all inputs to float',
      'Apply formula: SI = (P × R × T) / 100',
      'Display the result'
    ],
    starterCode: `# Get input from user
principal = float(input('Enter principal amount: '))
rate = float(input('Enter rate of interest: '))
time = float(input('Enter time (in years): '))

# Your code here
`,
    solution: `# Get input from user
principal = float(input('Enter principal amount: '))
rate = float(input('Enter rate of interest: '))
time = float(input('Enter time (in years): '))

# Calculate simple interest
simple_interest = (principal * rate * time) / 100

# Display result
print(f'Simple Interest: {simple_interest}')`,
    explanation: 'Step 1: Get principal, rate, and time from user and convert to float. Step 2: Calculate simple interest using the formula. Step 3: Display the calculated interest.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-001', 'py-002'],
    tags: ['basics', 'arithmetic', 'formula', 'input-output'],
    estimatedTime: '5 minutes'
  },
  {
    problemId: 'py-006',
    title: 'Take User Input and Display Greeting',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Input and Output',
    description: 'Write a Python program that takes the user\'s name and age as input, then displays a personalized greeting message.',
    examples: [
      {
        input: 'Name: Alice\nAge: 25',
        output: 'Hello, Alice! You are 25 years old. Welcome to Python!',
        explanation: 'Personalized greeting with user\'s name and age'
      },
      {
        input: 'Name: Bob\nAge: 30',
        output: 'Hello, Bob! You are 30 years old. Welcome to Python!',
        explanation: 'Different user input produces different greeting'
      }
    ],
    constraints: [
      'Get name and age from user',
      'Use formatted output',
      'Make the message friendly and personalized'
    ],
    hints: [
      'Use input() twice for name and age',
      'Convert age to int',
      'Use f-string for formatted output',
      'Create a friendly greeting message'
    ],
    starterCode: `# Get user input
name = input('Enter your name: ')
age = int(input('Enter your age: '))

# Your code here
`,
    solution: `# Get user input
name = input('Enter your name: ')
age = int(input('Enter your age: '))

# Display personalized greeting
print(f'Hello, {name}! You are {age} years old. Welcome to Python!')`,
    explanation: 'Get name (string) and age (convert to int) from user, then use f-string to create a personalized greeting message.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-001', 'py-007'],
    tags: ['basics', 'input-output', 'formatting'],
    estimatedTime: '5 minutes'
  },
  {
    problemId: 'py-007',
    title: 'Calculate Sum of Two Numbers from User',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Input and Output',
    description: 'Write a Python program that takes two numbers from the user and displays their sum in a formatted way.',
    examples: [
      {
        input: 'First number: 10\nSecond number: 20',
        output: 'Sum of 10 and 20 is: 30',
        explanation: '10 + 20 = 30'
      },
      {
        input: 'First number: 15.5\nSecond number: 24.7',
        output: 'Sum of 15.5 and 24.7 is: 40.2',
        explanation: '15.5 + 24.7 = 40.2'
      }
    ],
    constraints: [
      'Accept two numbers from user',
      'Handle both integers and floats',
      'Display result with both input numbers shown'
    ],
    hints: [
      'Get two numbers using input()',
      'Convert to float to handle both int and float',
      'Calculate sum',
      'Display with formatted message showing both numbers'
    ],
    starterCode: `# Get two numbers from user
num1 = float(input('First number: '))
num2 = float(input('Second number: '))

# Your code here
`,
    solution: `# Get two numbers from user
num1 = float(input('First number: '))
num2 = float(input('Second number: '))

# Calculate sum
sum_result = num1 + num2

# Display result
print(f'Sum of {num1} and {num2} is: {sum_result}')`,
    explanation: 'Get two numbers, convert to float (handles both integers and decimals), calculate sum, and display with a formatted message.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-001', 'py-006'],
    tags: ['basics', 'arithmetic', 'input-output'],
    estimatedTime: '5 minutes'
  },
  {
    problemId: 'py-008',
    title: 'Create a Simple Calculator Input',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Input and Output',
    description: 'Write a Python program that takes two numbers and an operator (+, -, *, /) from the user and displays the result of the operation.',
    examples: [
      {
        input: 'First number: 10\nOperator: +\nSecond number: 5',
        output: 'Result: 10 + 5 = 15',
        explanation: 'Addition operation'
      },
      {
        input: 'First number: 20\nOperator: *\nSecond number: 3',
        output: 'Result: 20 * 3 = 60',
        explanation: 'Multiplication operation'
      }
    ],
    constraints: [
      'Accept two numbers and one operator',
      'Support +, -, *, / operations',
      'Handle division by zero (display error message)',
      'Display operation and result clearly'
    ],
    hints: [
      'Get two numbers and operator from user',
      'Use if-elif to check operator',
      'Perform corresponding operation',
      'Handle division by zero case',
      'Display formatted result'
    ],
    starterCode: `# Get input from user
num1 = float(input('First number: '))
operator = input('Operator (+, -, *, /): ')
num2 = float(input('Second number: '))

# Your code here
`,
    solution: `# Get input from user
num1 = float(input('First number: '))
operator = input('Operator (+, -, *, /): ')
num2 = float(input('Second number: '))

# Perform operation based on operator
if operator == '+':
    result = num1 + num2
elif operator == '-':
    result = num1 - num2
elif operator == '*':
    result = num1 * num2
elif operator == '/':
    if num2 == 0:
        print('Error: Division by zero!')
    else:
        result = num1 / num2
        print(f'Result: {num1} {operator} {num2} = {result}')
else:
    print('Invalid operator!')

# Display result for valid operations (except division by zero)
if operator in ['+', '-', '*'] or (operator == '/' and num2 != 0):
    if operator != '/':  # Already printed for division
        print(f'Result: {num1} {operator} {num2} = {result}')`,
    explanation: 'Use conditional statements to check the operator and perform the corresponding operation. Handle division by zero as a special case.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-007'],
    tags: ['basics', 'arithmetic', 'conditionals', 'input-output'],
    estimatedTime: '10 minutes'
  },
  {
    problemId: 'py-009',
    title: 'Format Output with Decimals',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Input and Output',
    description: 'Write a Python program that takes a number from the user and displays it formatted to 2 decimal places, 4 decimal places, and in scientific notation.',
    examples: [
      {
        input: 'Number: 123.456789',
        output: '2 decimals: 123.46\n4 decimals: 123.4568\nScientific: 1.23e+02',
        explanation: 'Different formatting options for the same number'
      },
      {
        input: 'Number: 0.001234',
        output: '2 decimals: 0.00\n4 decimals: 0.0012\nScientific: 1.23e-03',
        explanation: 'Formatting small numbers'
      }
    ],
    constraints: [
      'Accept a number from user',
      'Display in multiple formats',
      'Use proper formatting specifiers'
    ],
    hints: [
      'Get number from user and convert to float',
      'Use f-string with format specifiers',
      ':2f for 2 decimals, :4f for 4 decimals',
      ':e for scientific notation',
      'Display all formats'
    ],
    starterCode: `# Get number from user
number = float(input('Enter a number: '))

# Your code here
`,
    solution: `# Get number from user
number = float(input('Enter a number: '))

# Display in different formats
print(f'2 decimals: {number:.2f}')
print(f'4 decimals: {number:.4f}')
print(f'Scientific: {number:.2e}')`,
    explanation: 'Use f-string format specifiers: :.2f for 2 decimal places, :.4f for 4 decimal places, and :.2e for scientific notation with 2 decimal places.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-002', 'py-006'],
    tags: ['basics', 'formatting', 'output'],
    estimatedTime: '5 minutes'
  },
  {
    problemId: 'py-010',
    title: 'Display Receipt with Formatted Prices',
    difficulty: 'Easy',
    difficultyStars: 1,
    category: 'Python Basics',
    subcategory: 'Input and Output',
    description: 'Write a Python program that creates a formatted receipt. Take item name, quantity, and price per item, then display a nicely formatted receipt with total.',
    examples: [
      {
        input: 'Item: Apple\nQuantity: 5\nPrice per item: 2.50',
        output: 'RECEIPT\n-------------------\nItem: Apple\nQuantity: 5\nPrice per item: $2.50\nTotal: $12.50\n-------------------',
        explanation: 'Formatted receipt with item details and total'
      }
    ],
    constraints: [
      'Get item name, quantity, and price from user',
      'Calculate total (quantity × price)',
      'Format prices with dollar sign and 2 decimals',
      'Create a receipt-like layout'
    ],
    hints: [
      'Get item name (string), quantity (int), and price (float)',
      'Calculate total',
      'Use formatted strings for alignment',
      'Add separators for receipt look',
      'Format currency with $ and 2 decimals'
    ],
    starterCode: `# Get input from user
item_name = input('Item name: ')
quantity = int(input('Quantity: '))
price_per_item = float(input('Price per item: '))

# Your code here
`,
    solution: `# Get input from user
item_name = input('Item name: ')
quantity = int(input('Quantity: '))
price_per_item = float(input('Price per item: '))

# Calculate total
total = quantity * price_per_item

# Display formatted receipt
print('RECEIPT')
print('-' * 20)
print(f'Item: {item_name}')
print(f'Quantity: {quantity}')
print(f'Price per item: ${price_per_item:.2f}')
print(f'Total: ${total:.2f}')
print('-' * 20)`,
    explanation: 'Get item details from user, calculate total, and display a formatted receipt with proper alignment, currency formatting, and visual separators.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    relatedProblems: ['py-006', 'py-009'],
    tags: ['basics', 'formatting', 'output', 'receipt'],
    estimatedTime: '10 minutes'
  }
];

// Register all problems
problems.forEach(problem => addProblem(problem));

export { problems };

