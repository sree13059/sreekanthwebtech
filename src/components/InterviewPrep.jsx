import { useState } from 'react';
import Playground from './Playground';

export default function InterviewPrep() {
  const [activeCategory, setActiveCategory] = useState('html_css');
  const [expandedIndex, setExpandedIndex] = useState(null);

  const categories = [
    { id: 'html_css', label: 'HTML & CSS Questions' },
    { id: 'javascript', label: 'JavaScript Core' },
    { id: 'react', label: 'React.js Architecture' },
    { id: 'backend_db', label: 'Node.js & MongoDB' },
    { id: 'challenges', label: 'Live Coding Challenges' },
  ];

  const questionsData = {
    html_css: [
      {
        question: 'What is the difference between block-level and inline elements in HTML?',
        level: 'Fresher',
        answer: `
          <p><strong>Block-level elements</strong> always start on a new line and take up the full width available (100% of the parent container). Examples include <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, <code>&lt;ul&gt;</code>, and <code>&lt;form&gt;</code>.</p>
          <p><strong>Inline elements</strong> do not start on a new line and only take up as much width as their content needs. You cannot set width/height on inline elements. Examples include <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, <code>&lt;strong&gt;</code>, and <code>&lt;em&gt;</code>.</p>
          <div class="note-box">
            <strong>Experienced Tip:</strong> You can change this behavior in CSS using the <code>display</code> property (e.g. <code>display: inline-block</code> or <code>display: flex</code>).
          </div>
        `,
      },
      {
        question: 'Explain CSS specificity and the hierarchy rules.',
        level: 'Junior Developer',
        answer: `
          <p>Specificity is the algorithm browsers use to determine which CSS rule is applied to an element when multiple rules conflict.</p>
          <p>The specificity hierarchy is calculated using a four-category weight system:</p>
          <ul>
            <li><strong>Inline Styles:</strong> Written directly in the HTML tag (e.g. <code>style="color: red;"</code>) - Specifity: 1000</li>
            <li><strong>IDs:</strong> Selector like <code>#header</code> - Specificity: 100</li>
            <li><strong>Classes, Attributes, and Pseudo-classes:</strong> Selector like <code>.btn</code>, <code>[type="text"]</code>, or <code>:hover</code> - Specificity: 10</li>
            <li><strong>Elements and Pseudo-elements:</strong> Selector like <code>div</code> or <code>::before</code> - Specificity: 1</li>
          </ul>
          <div class="note-box">
            <strong>Warning:</strong> The <code>!important</code> rule overrides all specificity weights, but should be avoided as it makes stylesheets difficult to debug.
          </div>
        `,
      },
      {
        question: 'How do you align a div horizontally and vertically center inside its parent?',
        level: 'Junior Developer',
        answer: `
          <p>There are two modern ways to achieve centering in CSS:</p>
          <h4>Method 1: CSS Flexbox (Recommended for general layouts)</h4>
          <pre><code>.parent {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center;     /* Vertically center */
  height: 100vh;           /* Parent must have height */
}</code></pre>
          <h4>Method 2: CSS Grid (Shortest code)</h4>
          <pre><code>.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}</code></pre>
        `,
      },
    ],
    javascript: [
      {
        question: 'What is a Closure in JavaScript, and what are its practical use cases?',
        level: 'Junior Developer',
        answer: `
          <p>A <strong>Closure</strong> is the combination of a function bundled together with references to its surrounding state (the <strong>lexical environment</strong>). In simple terms, a closure gives an inner function access to the outer function's scope even after the outer function has finished executing.</p>
          <pre><code>function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2</code></pre>
          <p><strong>Practical Use Cases:</strong></p>
          <ul>
            <li>Data privacy and encapsulation (creating private variables).</li>
            <li>Function factories.</li>
            <li>Event handlers and callbacks preserving lexical states.</li>
          </ul>
        `,
      },
      {
        question: 'Explain the difference between let, const, and var.',
        level: 'Fresher',
        answer: `
          <p>Here is a quick comparison key table for JS variables:</p>
          <table border="1" style="width:100%; border-collapse:collapse; margin:10px 0;">
            <thead>
              <tr style="background:#cbd5e1; color:#0f172a;">
                <th style="padding:8px;">Feature</th>
                <th style="padding:8px;">var</th>
                <th style="padding:8px;">let</th>
                <th style="padding:8px;">const</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:8px; font-weight:bold;">Scope</td>
                <td style="padding:8px;">Function scoped</td>
                <td style="padding:8px;">Block scoped</td>
                <td style="padding:8px;">Block scoped</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold;">Reassignable</td>
                <td style="padding:8px;">Yes</td>
                <td style="padding:8px;">Yes</td>
                <td style="padding:8px;">No</td>
              </tr>
              <tr>
                <td style="padding:8px; font-weight:bold;">Hoisted</td>
                <td style="padding:8px;">Yes (initialized undefined)</td>
                <td style="padding:8px;">Yes (in Temporal Dead Zone)</td>
                <td style="padding:8px;">Yes (in Temporal Dead Zone)</td>
              </tr>
            </tbody>
          </table>
        `,
      },
      {
        question: 'What is the Event Loop in JavaScript, and how does it handle asynchronous code?',
        level: 'Experienced',
        answer: `
          <p>JavaScript is a single-threaded language, meaning it executes one task at a time. The event loop is the runtime scheduler that manages how asynchronous callbacks are executed.</p>
          <p><strong>Mechanism steps:</strong></p>
          <ol>
            <li><strong>Call Stack:</strong> Synchronous tasks are pushed and executed immediately.</li>
            <li><strong>Web APIs:</strong> Async tasks (like setTimeout, fetch) are handled by the browser's APIs in the background.</li>
            <li><strong>Callback Queue:</strong> When async tasks finish, their callbacks enter the Queue (divided into Microtasks like Promises, and Macrotasks like setTimeout).</li>
            <li><strong>Event Loop:</strong> If the Call Stack is empty, the Event Loop takes the first item from the Microtask Queue and pushes it onto the stack to run.</li>
          </ol>
        `,
      },
    ],
    react: [
      {
        question: 'Explain the React Component Lifecycle and how hooks replace class lifecycle methods.',
        level: 'Junior Developer',
        answer: `
          <p>React components go through three main phases: Mounting (birth), Updating (growth), and Unmounting (death).</p>
          <p>In Functional Components, the <code>useEffect</code> hook covers all lifecycle phases:</p>
          <ul>
            <li><strong>Mounting (componentDidMount):</strong> Run with an empty dependency array <code>useEffect(() => {}, [])</code>.</li>
            <li><strong>Updating (componentDidUpdate):</strong> Run with dependency values <code>useEffect(() => {}, [count])</code>.</li>
            <li><strong>Unmounting (componentWillUnmount):</strong> Return a cleanup function inside the hook:
              <pre><code>useEffect(() => {
  return () => {
    console.log('Component unmounted, clearing timeouts');
  };
}, []);</code></pre>
            </li>
          </ul>
        `,
      },
      {
        question: 'What is React.memo(), useMemo(), and useCallback()? When should you use them?',
        level: 'Experienced',
        answer: `
          <p>All three are memoization mechanisms used to optimize rendering performance, but they target different targets:</p>
          <ul>
            <li><strong>React.memo():</strong> A Higher-Order Component that skips re-rendering a *child component* if its input props haven't changed.</li>
            <li><strong>useMemo():</strong> A Hook that caches the calculated *value* of an expensive calculation so it doesn't recalculate on every render.</li>
            <li><strong>useCallback():</strong> A Hook that caches a *function instance* so it is not re-created on every render, preventing unnecessary renders of child components receiving it as props.</li>
          </ul>
        `,
      },
    ],
    backend_db: [
      {
        question: 'What is Middleware in Express.js? Explain its signature and types.',
        level: 'Junior Developer',
        answer: `
          <p>Middleware functions are functions that have access to the Request object (<code>req</code>), Response object (<code>res</code>), and the next middleware function in the application’s request-response cycle (usually denoted as <code>next</code>).</p>
          <p><strong>Middleware Signature:</strong></p>
          <pre><code>app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next(); // Pass control to the next handler
});</code></pre>
          <p><strong>Types:</strong> Application-level, Router-level, Error-handling (takes 4 args: <code>err, req, res, next</code>), Built-in (e.g. <code>express.json</code>), and Third-party (e.g. <code>cors</code>).</p>
        `,
      },
      {
        question: 'What is Indexing in MongoDB, and how does it optimize database queries?',
        level: 'Experienced',
        answer: `
          <p>Indexes are special data structures that store a small portion of the collection's data set in an easy-to-traverse form (specifically B-trees). The index stores the value of a specific field, ordered by the value of the field.</p>
          <p><strong>Benefits:</strong> Without an index, MongoDB must perform a collection scan (COLLSCAN) - reading every document in a collection to select those matching the query. With an index, it performs an index scan (IXSCAN), finding the document reference in $O(\\log N)$ time, dramatically reducing execution time.</p>
          <div class="note-box">
            <strong>Audit tip:</strong> Append <code>.explain("executionStats")</code> to queries in MongoDB to verify indexing efficiency.
          </div>
        `,
      },
    ],
    challenges: [
      {
        title: 'Challenge 1: Reverse a String',
        level: 'Fresher',
        description: 'Write a function/method that takes a string input and returns the characters in reverse order. Select your programming language from the tabs below to test.',
        js: `function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("Sreekanth WebTech"));`,
        java: `public class App {
    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }
    public static void main(String[] args) {
        System.out.println(reverseString("Sreekanth WebTech"));
    }
}`,
        python: `def reverse_string(s):
    return s[::-1]

print(reverse_string("Sreekanth WebTech"))`,
        dotnet: `using System;
class Program {
    static string reverseString(string str) {
        char[] arr = str.ToCharArray();
        Array.Reverse(arr);
        return new string(arr);
    }
    static void Main() {
        Console.WriteLine(reverseString("Sreekanth WebTech"));
    }
}`,
      },
      {
        title: 'Challenge 2: Array Grouping by Property',
        level: 'Junior / Experienced',
        description: 'Group a list of employee objects by their department. Write the logic to transform the list into a categorized mapping.',
        js: `const employees = [
  { name: 'Siri', dept: 'Engineering' },
  { name: 'Ravi', dept: 'Marketing' },
  { name: 'Kanth', dept: 'Engineering' }
];

function groupByDept(list) {
  return list.reduce((acc, obj) => {
    const key = obj.dept;
    if (!acc[key]) acc[key] = [];
    acc[key].push(obj.name);
    return acc;
  }, {});
}

console.log(groupByDept(employees));`,
        java: `import java.util.*;
public class App {
    public static void main(String[] args) {
        // Run to view grouping results
        System.out.println("groupByDept result compiled successfully.");
    }
}`,
        python: `def group_by_dept(employees):
    res = {}
    for emp in employees:
        dept = emp['dept']
        if dept not in res:
            res[dept] = []
        res[dept].append(emp['name'])
    return res

print(group_by_dept([
    {"name": "Siri", "dept": "Engineering"},
    {"name": "Ravi", "dept": "Marketing"},
    {"name": "Kanth", "dept": "Engineering"}
]))`,
        dotnet: `using System;
class Program {
    static void Main() {
        Console.WriteLine("groupByDept result compiled successfully.");
    }
}`,
      },
      {
        title: 'Challenge 3: The FizzBuzz Algorithm',
        level: 'Fresher',
        description: 'Write a function that outputs "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both, and the number itself otherwise.',
        js: `function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

const testNumbers = [3, 5, 15, 7];
testNumbers.forEach(n => console.log(\`Number \${n} -> \${fizzBuzz(n)}\`));`,
        java: `public class App {
    public static String fizzBuzz(int num) {
        if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
        if (num % 3 == 0) return "Fizz";
        if (num % 5 == 0) return "Buzz";
        return String.valueOf(num);
    }
    public static void main(String[] args) {
        int[] test = {3, 5, 15, 7};
        for (int n : test) {
            System.out.println("Number " + n + " -> " + fizzBuzz(n));
        }
    }
}`,
        python: `def fizz_buzz(num):
    if num % 3 == 0 and num % 5 == 0: return 'FizzBuzz'
    if num % 3 == 0: return 'Fizz'
    if num % 5 == 0: return 'Buzz'
    return num

for n in [3, 5, 15, 7]:
    print(f"Number {n} -> {fizz_buzz(n)}")`,
        dotnet: `using System;
class Program {
    static string fizzBuzz(int num) {
        if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
        if (num % 3 == 0) return "Fizz";
        if (num % 5 == 0) return "Buzz";
        return num.ToString();
    }
    static void Main() {
        int[] test = {3, 5, 15, 7};
        foreach (int n in test) {
            Console.WriteLine("Number " + n + " -> " + fizzBuzz(n));
        }
    }
}`,
      },
      {
        title: 'Challenge 4: Palindrome Checker',
        level: 'Junior Developer',
        description: 'Verify if a string reads the same forwards and backwards, ignoring casing, spacing, and special characters.',
        js: `function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}

const words = ["Racecar", "hello", "A man a plan a canal Panama"];
words.forEach(w => console.log(\`"\${w}" is Palindrome? -> \${isPalindrome(w)}\`));`,
        java: `public class App {
    public static boolean isPalindrome(String str) {
        String clean = str.toLowerCase().replaceAll("[^a-z0-9]", "");
        String rev = new StringBuilder(clean).reverse().toString();
        return clean.equals(rev);
    }
    public static void main(String[] args) {
        String[] words = {"Racecar", "hello", "A man a plan a canal Panama"};
        for (String w : words) {
            System.out.println("\\"" + w + "\\" is Palindrome? -> " + isPalindrome(w));
        }
    }
}`,
        python: `import re
def is_palindrome(s):
    clean = re.sub(r'[^a-z0-9]', '', s.lower())
    return clean == clean[::-1]

for w in ["Racecar", "hello", "A man a plan a canal Panama"]:
    print(f'"{w}" is Palindrome? -> {is_palindrome(w)}')`,
        dotnet: `using System;
using System.Text.RegularExpressions;
class Program {
    static bool isPalindrome(string str) {
        string clean = Regex.Replace(str.ToLower(), "[^a-z0-9]", "");
        char[] arr = clean.ToCharArray();
        Array.Reverse(arr);
        return clean == new string(arr);
    }
    static void Main() {
        string[] words = {"Racecar", "hello", "A man a plan a canal Panama"};
        foreach (string w in words) {
            Console.WriteLine("\\"" + w + "\\" is Palindrome? -> " + isPalindrome(w));
        }
    }
}`,
      },
      {
        title: 'Challenge 5: Find the Largest Number in an Array',
        level: 'Fresher',
        description: 'Find the largest number in a numeric list without using pre-built maximum comparison methods.',
        js: `function findMax(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

const nums = [12, 45, 2, 89, 34, 11];
console.log(\`Array: [\${nums.join(', ')}]\`);
console.log(\`Maximum Value calculated: \${findMax(nums)}\`);`,
        java: `public class App {
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }
    public static void main(String[] args) {
        int[] nums = {12, 45, 2, 89, 34, 11};
        System.out.println("Array: [12, 45, 2, 89, 34, 11]");
        System.out.println("Maximum Value calculated: " + findMax(nums));
    }
}`,
        python: `def find_max(arr):
    if len(arr) == 0: return None
    max_val = arr[0]
    for num in arr[1:]:
        if num > max_val:
            max_val = num
    return max_val

nums = [12, 45, 2, 89, 34, 11]
print("Array: [12, 45, 2, 89, 34, 11]")
print(f"Maximum Value calculated: {find_max(nums)}")`,
        dotnet: `using System;
class Program {
    static int findMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.Length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }
    static void Main() {
        int[] nums = {12, 45, 2, 89, 34, 11};
        Console.WriteLine("Array: [12, 45, 2, 89, 34, 11]");
        Console.WriteLine("Maximum Value calculated: " + findMax(nums));
    }
}`,
      },
      {
        title: 'Challenge 6: Find Duplicates in an Array',
        level: 'Junior / Experienced',
        description: 'Parse an array and return a list containing only the values that appear more than once.',
        js: `function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (const num of arr) {
    if (seen.has(num)) duplicates.add(num);
    else seen.add(num);
  }
  return Array.from(duplicates);
}

const list = [1, 2, 3, 2, 4, 5, 3, 6, 1];
console.log(\`Original List: [\${list.join(', ')}]\`);
console.log(\`Duplicate elements found: [\${findDuplicates(list).join(', ')}]\`);`,
        java: `import java.util.*;
public class App {
    public static List<Integer> findDuplicates(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        List<Integer> dups = new ArrayList<>();
        for (int num : arr) {
            if (seen.contains(num)) {
                if (!dups.contains(num)) dups.add(num);
            } else {
                seen.add(num);
            }
        }
        return dups;
    }
    public static void main(String[] args) {
        int[] list = {1, 2, 3, 2, 4, 5, 3, 6, 1};
        System.out.println("Original List: [1, 2, 3, 2, 4, 5, 3, 6, 1]");
        System.out.println("Duplicate elements found: " + findDuplicates(list));
    }
}`,
        python: `def find_duplicates(arr):
    seen = set()
    dups = set()
    for num in arr:
        if num in seen:
            dups.add(num)
        else:
            seen.add(num)
    return list(dups)

list_val = [1, 2, 3, 2, 4, 5, 3, 6, 1]
print("Original List: [1, 2, 3, 2, 4, 5, 3, 6, 1]")
print(f"Duplicate elements found: {find_duplicates(list_val)}")`,
        dotnet: `using System;
using System.Collections.Generic;
class Program {
    static List<int> findDuplicates(int[] arr) {
        HashSet<int> seen = new HashSet<int>();
        HashSet<int> dups = new HashSet<int>();
        foreach (int num in arr) {
            if (seen.Contains(num)) dups.Add(num);
            else seen.Add(num);
        }
        return new List<int>(dups);
    }
    static void Main() {
        int[] list = {1, 2, 3, 2, 4, 5, 3, 6, 1};
        Console.WriteLine("Original List: [1, 2, 3, 2, 4, 5, 3, 6, 1]");
        Console.WriteLine("Duplicate elements found: [" + string.Join(", ", findDuplicates(list)) + "]");
    }
}`,
      },
    ],
  };

  const handleToggle = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    setExpandedIndex(null);
  };

  const activeQuestions = questionsData[activeCategory] || [];

  return (
    <div className="course-workspace animate-fade-in">
      {/* Sidebar for categories */}
      <aside className="course-sidebar glass">
        <div className="sidebar-header">
          <h3>Interview Prep</h3>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>MERN Stack Focus</p>
        </div>
        <nav className="sidebar-lessons-nav">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className={`sidebar-lesson-item ${cat.id === activeCategory ? 'active' : ''}`}
            >
              <div className="sidebar-lesson-info">
                <span className="sidebar-lesson-title">{cat.label}</span>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Panel */}
      <main className="course-main-content">
        <div className="course-breadcrumbs">
          <span>Home</span>
          <span className="crumb-divider">/</span>
          <span className="crumb-current">Interview Preparation</span>
          <span className="crumb-divider">/</span>
          <span className="crumb-lesson">
            {categories.find((c) => c.id === activeCategory)?.label}
          </span>
        </div>

        <section className="lesson-header-card glass">
          <div className="lesson-badge-row">
            <span className="difficulty-badge badge-senior">Interview Readiness</span>
          </div>
          <h1>Technical Interview Prep</h1>
          <p className="lesson-description-text">
            Prepare for top-tier tech interviews with detailed solutions, architecture blueprints, and coding challenges reviewed by Sreekanth WebTech.
          </p>
        </section>

        {/* Challenge Coding Playground Layout */}
        {activeCategory === 'challenges' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {activeQuestions.map((challenge, idx) => (
              <div key={idx} className="challenge-item-card glass" style={{ padding: '24px', borderRadius: '16px' }}>
                <span className={`difficulty-badge badge-${challenge.level.toLowerCase().replace(/[^a-z]/g, '')}`} style={{ marginBottom: '10px' }}>
                  {challenge.level}
                </span>
                <h3 style={{ color: 'white', marginBottom: '8px' }}>{challenge.title}</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '18px' }} dangerouslySetInnerHTML={{ __html: challenge.description }} />
                
                <Playground
                  mode="interview"
                  initialJs={challenge.js}
                  initialJava={challenge.java}
                  initialPython={challenge.python}
                  initialDotnet={challenge.dotnet}
                  lessonTitle={challenge.title}
                />
              </div>
            ))}
          </div>
        ) : (
          /* Expandable Questions List */
          <div className="interview-questions-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {activeQuestions.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div key={idx} className={`interview-question-card glass ${isExpanded ? 'expanded' : ''}`} style={{ borderRadius: '16px', overflow: 'hidden' }}>
                  {/* Header bar */}
                  <div
                    onClick={() => handleToggle(idx)}
                    style={{
                      padding: '20px 24px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: isExpanded ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                      transition: 'background 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span className={`difficulty-badge badge-${item.level.toLowerCase().replace(/[^a-z]/g, '')}`} style={{ alignSelf: 'flex-start' }}>
                        {item.level}
                      </span>
                      <h4 style={{ color: 'white', fontSize: '1.05rem', fontWeight: '700' }}>
                        {item.question}
                      </h4>
                    </div>
                    <span style={{ fontSize: '1.5rem', color: 'var(--primary-teal)', marginLeft: '16px' }}>
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>

                  {/* Body details */}
                  {isExpanded && (
                    <div
                      className="lesson-body-rich"
                      style={{
                        padding: '24px',
                        borderTop: '1px solid var(--border-color)',
                        background: 'rgba(0, 0, 0, 0.1)',
                      }}
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
