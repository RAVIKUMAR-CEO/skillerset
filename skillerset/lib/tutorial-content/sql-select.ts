import { Tutorial } from '../tutorials';

export const sqlSelectTutorial: Tutorial = {
  id: 'sql-select',
  title: 'SQL SELECT Statement - Complete Guide',
  category: 'Database',
  subcategory: 'SQL',
  difficulty: 'Beginner',
  readTime: '14 minutes',
  prerequisites: ['database-basics'],
  description: 'Master the SQL SELECT statement. Learn to query databases, filter data, sort results, and work with sample employee database examples.',
  keywords: ['SQL SELECT', 'SQL queries', 'database queries', 'SQL tutorial', 'SELECT statement', 'SQL WHERE', 'SQL ORDER BY'],
  metaDescription: 'Learn SQL SELECT statement from basics to advanced. Master querying databases, filtering with WHERE, sorting with ORDER BY, and working with sample data.',

  introduction: {
    whatYouLearn: [
      'SQL SELECT statement syntax',
      'Selecting specific columns',
      'Filtering data with WHERE clause',
      'Sorting results with ORDER BY',
      'Working with sample employee database',
      'Using aggregate functions',
      'Combining multiple conditions'
    ],
    whyImportant: 'The SELECT statement is the most fundamental SQL command. It allows you to retrieve data from databases, which is essential for any application that works with data. Understanding SELECT is the foundation for all database querying and reporting.',
    realWorldApplications: [
      'Retrieving user data from databases',
      'Generating reports and analytics',
      'Filtering and searching data',
      'Data analysis and business intelligence',
      'Building data-driven applications',
      'Creating dashboards',
      'Exporting data for processing'
    ],
    learningObjectives: [
      'Write basic SELECT queries',
      'Filter data using WHERE clause',
      'Sort results with ORDER BY',
      'Use comparison and logical operators',
      'Query sample databases effectively',
      'Combine multiple conditions',
      'Select specific columns efficiently'
    ]
  },

  content: [
    {
      type: 'heading',
      level: 2,
      text: 'What is SQL SELECT?'
    },
    {
      type: 'paragraph',
      text: 'The SELECT statement is used to retrieve data from a database. It\'s one of the most commonly used SQL commands and forms the foundation of database querying. SELECT allows you to specify exactly what data you want to retrieve and from which tables.'
    },
    {
      type: 'paragraph',
      text: 'SQL (Structured Query Language) is the standard language for managing relational databases. SELECT queries can be simple (retrieving all data) or complex (with multiple conditions, joins, and aggregations).'
    },
    {
      type: 'callout',
      callout: {
        variant: 'note',
        text: 'SQL keywords are typically written in uppercase (SELECT, FROM, WHERE), but SQL is case-insensitive. However, using uppercase for keywords is a widely accepted convention that improves readability.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Sample Database: Employees'
    },
    {
      type: 'paragraph',
      text: 'Throughout this tutorial, we\'ll use a sample employees table to demonstrate SQL queries. Here\'s the structure:'
    },
    {
      type: 'code',
      code: {
        language: 'sql',
        code: `-- Employees table structure
CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(100),
  department VARCHAR(50),
  salary DECIMAL(10, 2),
  hire_date DATE
);

-- Sample data
INSERT INTO employees VALUES
(1, 'John', 'Doe', 'john.doe@company.com', 'Engineering', 75000, '2020-01-15'),
(2, 'Jane', 'Smith', 'jane.smith@company.com', 'Marketing', 65000, '2019-03-20'),
(3, 'Bob', 'Johnson', 'bob.johnson@company.com', 'Engineering', 80000, '2018-06-10'),
(4, 'Alice', 'Williams', 'alice.williams@company.com', 'Sales', 70000, '2021-02-14'),
(5, 'Charlie', 'Brown', 'charlie.brown@company.com', 'Engineering', 72000, '2020-11-05'),
(6, 'Diana', 'Davis', 'diana.davis@company.com', 'Marketing', 68000, '2019-08-22');`,
        explanation: 'This is our sample employees table with employee information including name, email, department, salary, and hire date.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'table',
        description: 'Employees Table Sample Data: Columns are id, first_name, last_name, email, department, salary, hire_date. Rows show 6 employees with different departments (Engineering, Marketing, Sales), various salaries (65000-80000), and hire dates from 2018-2021.',
        alt: 'Sample employees database table'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Basic SELECT Syntax'
    },
    {
      type: 'code',
      code: {
        language: 'sql',
        code: `-- Select all columns from a table
SELECT * FROM employees;

-- Select specific columns
SELECT first_name, last_name, email FROM employees;

-- Select with column aliases
SELECT 
  first_name AS 'First Name',
  last_name AS 'Last Name',
  salary AS 'Annual Salary'
FROM employees;`,
        explanation: 'The basic SELECT syntax: `SELECT columns FROM table`. Use `*` for all columns, or specify column names. Use `AS` to create aliases for better readability.',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'tip',
        text: 'Always specify column names instead of using `SELECT *` in production code. It\'s more efficient and makes your queries clearer and easier to maintain.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'WHERE Clause: Filtering Data'
    },
    {
      type: 'paragraph',
      text: 'The WHERE clause filters rows based on specified conditions. Only rows that meet the condition are returned.'
    },
    {
      type: 'heading',
      level: 3,
      text: 'Comparison Operators'
    },
    {
      type: 'code',
      code: {
        language: 'sql',
        code: `-- Equal to
SELECT * FROM employees WHERE department = 'Engineering';

-- Not equal to
SELECT * FROM employees WHERE department != 'Sales';
-- or
SELECT * FROM employees WHERE department <> 'Sales';

-- Greater than
SELECT * FROM employees WHERE salary > 70000;

-- Less than or equal to
SELECT * FROM employees WHERE salary <= 70000;

-- Between (inclusive)
SELECT * FROM employees WHERE salary BETWEEN 65000 AND 75000;

-- IN (match any value in list)
SELECT * FROM employees WHERE department IN ('Engineering', 'Marketing');

-- LIKE (pattern matching)
SELECT * FROM employees WHERE email LIKE '%@company.com';
SELECT * FROM employees WHERE first_name LIKE 'J%';  -- Names starting with J`,
        explanation: 'Comparison operators allow you to filter data based on various conditions. `LIKE` is useful for pattern matching with wildcards (`%` for any characters, `_` for single character).',
        output: undefined
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
        language: 'sql',
        code: `-- AND (both conditions must be true)
SELECT * FROM employees 
WHERE department = 'Engineering' AND salary > 70000;

-- OR (either condition can be true)
SELECT * FROM employees 
WHERE department = 'Engineering' OR department = 'Marketing';

-- NOT (negates condition)
SELECT * FROM employees 
WHERE NOT department = 'Sales';

-- Combining multiple conditions
SELECT * FROM employees 
WHERE (department = 'Engineering' OR department = 'Marketing')
  AND salary > 65000;`,
        explanation: 'Logical operators allow you to combine multiple conditions. Use parentheses to control the order of evaluation.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'ORDER BY: Sorting Results'
    },
    {
      type: 'paragraph',
      text: 'The ORDER BY clause sorts the result set. You can sort by one or more columns in ascending (ASC) or descending (DESC) order.'
    },
    {
      type: 'code',
      code: {
        language: 'sql',
        code: `-- Sort by salary (ascending by default)
SELECT * FROM employees ORDER BY salary;

-- Sort by salary descending
SELECT * FROM employees ORDER BY salary DESC;

-- Sort by multiple columns
SELECT * FROM employees 
ORDER BY department ASC, salary DESC;

-- Sort by column position (not recommended)
SELECT first_name, last_name, salary 
FROM employees 
ORDER BY 3 DESC;  -- Sorts by 3rd column (salary)`,
        explanation: 'ORDER BY sorts results. Default is ascending (ASC). You can sort by multiple columns, and each column can have its own sort direction.',
        output: undefined
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'best-practice',
        text: 'Always use column names in ORDER BY instead of column positions. It makes your queries more readable and maintainable.'
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'LIMIT: Restricting Results'
    },
    {
      type: 'code',
      code: {
        language: 'sql',
        code: `-- Get top 3 highest paid employees
SELECT first_name, last_name, salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 3;

-- Get employees with offset (skip first 2, get next 3)
SELECT * FROM employees 
ORDER BY hire_date 
LIMIT 3 OFFSET 2;`,
        explanation: 'LIMIT restricts the number of rows returned. OFFSET skips a specified number of rows. Useful for pagination.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'DISTINCT: Removing Duplicates'
    },
    {
      type: 'code',
      code: {
        language: 'sql',
        code: `-- Get unique departments
SELECT DISTINCT department FROM employees;

-- Get unique combinations
SELECT DISTINCT department, salary FROM employees;`,
        explanation: 'DISTINCT removes duplicate rows from the result set. Useful when you want unique values.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Aggregate Functions'
    },
    {
      type: 'paragraph',
      text: 'Aggregate functions perform calculations on a set of rows and return a single value.'
    },
    {
      type: 'code',
      code: {
        language: 'sql',
        code: `-- COUNT: Count rows
SELECT COUNT(*) FROM employees;
SELECT COUNT(*) FROM employees WHERE department = 'Engineering';

-- SUM: Sum of values
SELECT SUM(salary) AS total_salary FROM employees;

-- AVG: Average value
SELECT AVG(salary) AS average_salary FROM employees;

-- MIN: Minimum value
SELECT MIN(salary) AS min_salary FROM employees;

-- MAX: Maximum value
SELECT MAX(salary) AS max_salary FROM employees;

-- Multiple aggregates
SELECT 
  COUNT(*) AS employee_count,
  AVG(salary) AS avg_salary,
  MIN(salary) AS min_salary,
  MAX(salary) AS max_salary
FROM employees;`,
        explanation: 'Aggregate functions summarize data. They\'re often used with GROUP BY to calculate statistics for groups.',
        output: undefined
      }
    },
    {
      type: 'heading',
      level: 2,
      text: 'Complete Query Examples'
    },
    {
      type: 'code',
      code: {
        language: 'sql',
        code: `-- Example 1: Get all engineering employees sorted by salary
SELECT 
  first_name,
  last_name,
  salary,
  hire_date
FROM employees
WHERE department = 'Engineering'
ORDER BY salary DESC;

-- Example 2: Find employees hired after 2020
SELECT 
  first_name,
  last_name,
  department,
  hire_date
FROM employees
WHERE hire_date > '2020-01-01'
ORDER BY hire_date;

-- Example 3: Get department statistics
SELECT 
  department,
  COUNT(*) AS employee_count,
  AVG(salary) AS avg_salary,
  MAX(salary) AS max_salary
FROM employees
GROUP BY department
ORDER BY avg_salary DESC;

-- Example 4: Find employees with email containing 'smith'
SELECT 
  first_name,
  last_name,
  email
FROM employees
WHERE email LIKE '%smith%';

-- Example 5: Get top 3 highest paid employees by department
SELECT 
  department,
  first_name,
  last_name,
  salary
FROM employees
WHERE (department, salary) IN (
  SELECT department, MAX(salary)
  FROM employees
  GROUP BY department
)
ORDER BY salary DESC;`,
        explanation: 'These examples combine multiple SQL concepts: SELECT, WHERE, ORDER BY, aggregate functions, and subqueries.',
        output: undefined
      }
    },
    {
      type: 'visual',
      visual: {
        type: 'flowchart',
        description: 'SQL SELECT Query Flow: Start → SELECT columns → FROM table → WHERE conditions (optional) → GROUP BY (optional) → ORDER BY (optional) → LIMIT (optional) → End. Each step is a box with arrows showing the flow. WHERE, GROUP BY, ORDER BY, and LIMIT are marked as optional.',
        alt: 'SQL SELECT query execution flow'
      }
    },
    {
      type: 'callout',
      callout: {
        variant: 'warning',
        text: 'Be careful with NULL values in WHERE clauses. Use `IS NULL` or `IS NOT NULL` to check for NULL, not `= NULL` or `!= NULL`.'
      }
    }
  ],

  examples: [
    {
      title: 'Select All Employees',
      code: `SELECT * FROM employees;`,
      language: 'sql',
      explanation: 'Basic SELECT query to retrieve all columns and rows from the employees table.',
      output: 'Returns all 6 employee records with all columns'
    },
    {
      title: 'Select Specific Columns',
      code: `SELECT first_name, last_name, department 
FROM employees;`,
      language: 'sql',
      explanation: 'Selecting only specific columns instead of all columns for better performance and clarity.',
      output: 'Returns first name, last name, and department for all employees'
    },
    {
      title: 'Filter by Department',
      code: `SELECT * FROM employees 
WHERE department = 'Engineering';`,
      language: 'sql',
      explanation: 'Using WHERE clause to filter employees by department.',
      output: 'Returns 3 employees from Engineering department'
    },
    {
      title: 'Sort by Salary',
      code: `SELECT first_name, last_name, salary 
FROM employees 
ORDER BY salary DESC;`,
      language: 'sql',
      explanation: 'Sorting employees by salary in descending order to see highest paid first.',
      output: 'Returns employees sorted from highest to lowest salary'
    },
    {
      title: 'Find High Earners',
      code: `SELECT first_name, last_name, salary, department
FROM employees 
WHERE salary > 70000
ORDER BY salary DESC;`,
      language: 'sql',
      explanation: 'Combining WHERE and ORDER BY to find employees earning more than 70000, sorted by salary.',
      output: 'Returns employees with salary > 70000, sorted descending'
    },
    {
      title: 'Department Statistics',
      code: `SELECT 
  department,
  COUNT(*) AS employee_count,
  AVG(salary) AS avg_salary
FROM employees
GROUP BY department;`,
      language: 'sql',
      explanation: 'Using aggregate functions with GROUP BY to get statistics per department.',
      output: 'Returns count and average salary for each department'
    }
  ],

  quiz: [
    {
      question: 'What does the WHERE clause do in a SELECT statement?',
      options: [
        'Sorts the results',
        'Filters rows based on conditions',
        'Groups rows together',
        'Limits the number of rows'
      ],
      correct: 1,
      explanation: 'The WHERE clause filters rows based on specified conditions. Only rows that meet the condition are included in the result.'
    },
    {
      question: 'Which operator is used for pattern matching in SQL?',
      options: ['=', 'LIKE', 'MATCH', 'CONTAINS'],
      correct: 1,
      explanation: 'The LIKE operator is used for pattern matching with wildcards. `%` matches any sequence of characters, `_` matches a single character.'
    },
    {
      question: 'What is the default sort order for ORDER BY?',
      options: ['DESC (descending)', 'ASC (ascending)', 'RANDOM', 'No default'],
      correct: 1,
      explanation: 'The default sort order is ASC (ascending). You must specify DESC explicitly for descending order.'
    },
    {
      question: 'What does SELECT DISTINCT do?',
      options: [
        'Selects all columns',
        'Removes duplicate rows',
        'Sorts the results',
        'Limits the results'
      ],
      correct: 1,
      explanation: 'SELECT DISTINCT removes duplicate rows from the result set, returning only unique combinations of the selected columns.'
    },
    {
      question: 'Which aggregate function counts the number of rows?',
      options: ['SUM', 'COUNT', 'TOTAL', 'NUMBER'],
      correct: 1,
      explanation: 'COUNT() is the aggregate function that counts the number of rows. COUNT(*) counts all rows, COUNT(column) counts non-NULL values in a column.'
    }
  ],

  exercises: [
    {
      title: 'Find All Engineering Employees',
      description: 'Write a query to select all employees from the Engineering department, showing their name and salary.',
      hints: [
        'Use SELECT to choose columns',
        'Use WHERE to filter by department',
        'Include first_name, last_name, and salary columns'
      ],
      solution: `SELECT first_name, last_name, salary
FROM employees
WHERE department = 'Engineering';`
    },
    {
      title: 'Get Top 3 Highest Paid Employees',
      description: 'Write a query to get the top 3 highest paid employees, showing their full name and salary, sorted by salary.',
      hints: [
        'Use ORDER BY salary DESC',
        'Use LIMIT 3',
        'Include first_name, last_name, and salary'
      ]
    },
    {
      title: 'Find Employees Hired in 2020',
      description: 'Write a query to find all employees hired in the year 2020, showing their name, department, and hire date.',
      hints: [
        'Use WHERE with date comparison',
        'Use hire_date column',
        'Compare with date range or use YEAR() function'
      ]
    },
    {
      title: 'Calculate Average Salary by Department',
      description: 'Write a query to calculate the average salary for each department.',
      hints: [
        'Use AVG(salary) aggregate function',
        'Use GROUP BY department',
        'Include department in SELECT'
      ]
    },
    {
      title: 'Find Employees with Specific Name Pattern',
      description: 'Write a query to find all employees whose first name starts with "J".',
      hints: [
        'Use WHERE with LIKE operator',
        'Use pattern "J%" for names starting with J',
        'LIKE is case-sensitive in some databases'
      ]
    }
  ],

  relatedTopics: [
    'sql-joins',
    'sql-aggregate-functions',
    'sql-group-by',
    'database-basics'
  ],
  nextTopic: 'sql-joins'
};

