import { useState } from 'react';
import Playground from './Playground';

export default function InterviewPrep({ onBackHome }) {
  const [activeCategory, setActiveCategory] = useState('html_css');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('all');
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);
  const [leetcodeTheme, setLeetcodeTheme] = useState('dark');

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
      {
        question: 'Explain CSS Grid vs Flexbox and when to use which.',
        level: 'Experienced',
        answer: `
          <p><strong>Flexbox</strong> is designed for one-dimensional layouts—either a row or a column. It is ideal for aligning items inside components, distributing space, and handling simple dynamic alignments.</p>
          <p><strong>CSS Grid</strong> is designed for two-dimensional layouts—both rows and columns simultaneously. It is ideal for major page layouts, complex grid structures, and overlapping elements.</p>
          <div class="note-box">
            <strong>Summary:</strong> Use Flexbox for component content alignment; use Grid for full page architectures.
          </div>
        `,
      },
      {
        question: 'What is the HTML viewport meta tag and why is it important?',
        level: 'Fresher',
        answer: `
          <p>The viewport meta tag (<code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>) gives instructions to the browser on how to control the dimensions and scaling of the page.</p>
          <p>Without it, mobile devices render pages at typical desktop screen widths, scaling them down to fit, making them tiny and unreadable. This tag is critical for responsive design.</p>
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
      {
        question: 'What is hoisting in JavaScript? Explain with examples.',
        level: 'Fresher',
        answer: `
          <p><strong>Hoisting</strong> is JavaScript's default behavior of moving declarations to the top of the current scope before code execution.</p>
          <p>Variable declarations using <code>var</code> are hoisted and initialized as <code>undefined</code>. Declarations with <code>let</code> and <code>const</code> are hoisted but not initialized (they remain in the Temporal Dead Zone). Function declarations are fully hoisted with their definitions.</p>
          <pre><code>console.log(x); // undefined (hoisted)
var x = 5;

sayHello(); // "Hello!" (fully hoisted)
function sayHello() {
  console.log("Hello!");
}</code></pre>
        `,
      },
      {
        question: 'What is the difference between synchronous and asynchronous execution in JavaScript?',
        level: 'Fresher',
        answer: `
          <p><strong>Synchronous execution</strong> means code is executed line-by-line in sequential order. Each statement blocks the execution of the next line until it finishes.</p>
          <p><strong>Asynchronous execution</strong> allows the execution thread to trigger long-running actions (e.g., API requests, timers) and continue processing other operations in parallel. When the async action completes, its callback or promise resolves and runs via the event loop.</p>
        `,
      },
      {
        question: 'Explain the difference between Map and WeakMap in JavaScript.',
        level: 'Experienced',
        answer: `
          <p>Both are collections of key-value pairs, but have critical differences:</p>
          <ul>
            <li><strong>Map:</strong> Keys can be of any type (objects or primitives). It maintains insertion order and doesn't prevent garbage collection of object keys if references are lost.</li>
            <li><strong>WeakMap:</strong> Keys *must* be objects. The references to keys are held weakly, meaning if there are no other references to the key object, it is automatically garbage-collected, preventing memory leaks.</li>
          </ul>
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
      {
        question: 'What is Virtual DOM and how does React reconcile changes?',
        level: 'Fresher',
        answer: `
          <p>The <strong>Virtual DOM (VDOM)</strong> is a lightweight, in-memory representation of the real DOM. When a component's state changes, React builds a new VDOM tree.</p>
          <p>React then compares this new tree with the previous VDOM tree using a diffing algorithm (called <strong>Reconciliation</strong>) and updates *only* the specific nodes in the real DOM that actually changed, which is much faster than full page updates.</p>
        `,
      },
      {
        question: 'Explain state management patterns in React (Context API vs Redux).',
        level: 'Experienced',
        answer: `
          <p>Both manage global state, but suit different cases:</p>
          <ul>
            <li><strong>Context API:</strong> Built-in React solution. Best for low-frequency updates like theme selectors, user auth, or settings. High-frequency changes can cause unnecessary re-renders in deep child trees.</li>
            <li><strong>Redux / Redux Toolkit:</strong> Centralized external store. Uses actions and reducers to update state. Uses selectors to subscribe to specific states, optimizing render performance for complex, large-scale apps with high-frequency updates.</li>
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
      {
        question: 'What is REST API and what are the best practices for designing them?',
        level: 'Fresher',
        answer: `
          <p>A <strong>REST API</strong> is an architectural style for designing APIs based on resources, stateless requests, and standard HTTP methods.</p>
          <p><strong>Best Practices:</strong> Use nouns instead of verbs for endpoints (e.g., <code>/api/books</code> instead of <code>/api/getBooks</code>), use proper HTTP methods (GET, POST, PUT, DELETE), return standard JSON payloads, use HTTP status codes correctly, and implement pagination and versioning.</p>
        `,
      },
      {
        question: 'Explain MongoDB aggregation pipelines with examples.',
        level: 'Experienced',
        answer: `
          <p>An <strong>Aggregation Pipeline</strong> is a framework for data aggregation in MongoDB modeled on data processing pipelines. Documents enter a multi-stage pipeline that transforms them into aggregated results.</p>
          <p>Common stages include:</p>
          <ul>
            <li><code>$match</code>: Filters documents (similar to WHERE in SQL)</li>
            <li><code>$group</code>: Groups documents by specified keys and computes calculations (similar to GROUP BY)</li>
            <li><code>$sort</code>: Sorts documents</li>
            <li><code>$project</code>: Selects specific fields to output</li>
          </ul>
          <pre><code>db.orders.aggregate([
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } }
])</code></pre>
        `,
      },
    ],
    challenges: [
      {
        title: 'Challenge 1: Reverse a String',
        level: 'Fresher',
        description: 'Write a function/method that takes a string input and returns the characters in reverse order. Select your programming language from the tabs below to test.',
        js: '// Write your JavaScript code here\n',
        java: '// Write your Java code here\n',
        python: '# Write your Python code here\n',
        dotnet: '// Write your .NET (C#) code here\n',
      },
      {
        title: 'Challenge 2: Array Grouping by Property',
        level: 'Junior / Experienced',
        description: 'Group a list of employee objects by their department. Write the logic to transform the list into a categorized mapping.',
        js: '// Write your JavaScript code here\n',
        java: '// Write your Java code here\n',
        python: '# Write your Python code here\n',
        dotnet: '// Write your .NET (C#) code here\n',
      },
      {
        title: 'Challenge 3: The FizzBuzz Algorithm',
        level: 'Fresher',
        description: 'Write a function that outputs "Fizz" for multiples of 3, "Buzz" for multiples of 5, "FizzBuzz" for multiples of both, and the number itself otherwise.',
        js: '// Write your JavaScript code here\n',
        java: '// Write your Java code here\n',
        python: '# Write your Python code here\n',
        dotnet: '// Write your .NET (C#) code here\n',
      },
      {
        title: 'Challenge 4: Palindrome Checker',
        level: 'Junior Developer',
        description: 'Verify if a string reads the same forwards and backwards, ignoring casing, spacing, and special characters.',
        js: '// Write your JavaScript code here\n',
        java: '// Write your Java code here\n',
        python: '# Write your Python code here\n',
        dotnet: '// Write your .NET (C#) code here\n',
      },
      {
        title: 'Challenge 5: Find the Largest Number in an Array',
        level: 'Fresher',
        description: 'Find the largest number in a numeric list without using pre-built maximum comparison methods.',
        js: '// Write your JavaScript code here\n',
        java: '// Write your Java code here\n',
        python: '# Write your Python code here\n',
        dotnet: '// Write your .NET (C#) code here\n',
      },
      {
        title: 'Challenge 6: Find Duplicates in an Array',
        level: 'Junior / Experienced',
        description: 'Parse an array and return a list containing only the values that appear more than once.',
        js: '// Write your JavaScript code here\n',
        java: '// Write your Java code here\n',
        python: '# Write your Python code here\n',
        dotnet: '// Write your .NET (C#) code here\n',
      },
    ],
  };

  const handleToggle = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const handleSelectCategory = (catId) => {
    setActiveCategory(catId);
    setExpandedIndex(null);
    setSelectedLevelFilter('all');
    setActiveChallengeIndex(0);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allActiveQuestions = questionsData[activeCategory] || [];
  const activeQuestions = allActiveQuestions.filter((q) => {
    if (selectedLevelFilter === 'all') return true;
    const lvl = q.level.toLowerCase();
    if (selectedLevelFilter === 'fresher') {
      return lvl.includes('fresher') || lvl.includes('junior');
    }
    if (selectedLevelFilter === 'experienced') {
      return lvl.includes('experienced') || lvl.includes('senior');
    }
    return true;
  });

  return (
    <div className="course-workspace animate-fade-in">
      {/* Mobile Interview Topics Toggle */}
      <button
        className={`mobile-sidebar-toggle ${isSidebarOpen ? 'open' : ''}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Interview Topics Menu"
        aria-expanded={isSidebarOpen}
      >
        {isSidebarOpen ? (
          <span className="close-x">âœ•</span>
        ) : (
          <div className="hamburger-three-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <span className="toggle-label">{isSidebarOpen ? 'Close' : 'Topics'}</span>
      </button>

      {/* Sidebar for categories */}
      <aside className={`course-sidebar glass ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          {onBackHome && (
            <button className="back-home-btn" onClick={onBackHome}>
              ← Back to Home
            </button>
          )}
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
          <span className={onBackHome ? "crumb-link" : ""} onClick={onBackHome}>Home</span>
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

        {/* Level Filter Bar */}
        <div className="level-filter-bar glass">
          <button
            className={`filter-tab ${selectedLevelFilter === 'all' ? 'active' : ''}`}
            onClick={() => {
              setSelectedLevelFilter('all');
              setExpandedIndex(null);
            }}
          >
            All Levels
          </button>
          <button
            className={`filter-tab ${selectedLevelFilter === 'fresher' ? 'active' : ''}`}
            onClick={() => {
              setSelectedLevelFilter('fresher');
              setExpandedIndex(null);
            }}
          >
            🎓 Fresher / Junior
          </button>
          <button
            className={`filter-tab ${selectedLevelFilter === 'experienced' ? 'active' : ''}`}
            onClick={() => {
              setSelectedLevelFilter('experienced');
              setExpandedIndex(null);
            }}
          >
            💼 Experienced / Senior
          </button>
        </div>

        {/* Challenge Coding Playground Layout */}
        {activeCategory === 'challenges' ? (
          (() => {
            const activeChallenge = activeQuestions[activeChallengeIndex] || activeQuestions[0] || {};
            if (!activeChallenge.title) return <div className="glass" style={{ padding: '24px', color: 'var(--text-muted)' }}>No challenges available.</div>;
            return (
              <div className={`leetcode-container theme-${leetcodeTheme}`}>
                {/* Header Control Bar */}
                <div className="leetcode-header">
                  <div className="leetcode-header-left">
                    <button className="leetcode-btn leetcode-btn-secondary" style={{ fontSize: '1.1rem' }}>
                      💻
                    </button>
                    <select
                      className="leetcode-dropdown"
                      value={activeChallengeIndex}
                      onChange={(e) => setActiveChallengeIndex(Number(e.target.value))}
                    >
                      {activeQuestions.map((ch, idx) => (
                        <option key={idx} value={idx}>
                          {ch.title.split(':')[0]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="leetcode-header-center">
                    <button
                      className="leetcode-btn leetcode-btn-secondary"
                      disabled={activeChallengeIndex === 0}
                      onClick={() => setActiveChallengeIndex((prev) => Math.max(0, prev - 1))}
                      title="Previous Challenge"
                    >
                      ‹ Prev
                    </button>
                    <span style={{ fontSize: '0.88rem', fontWeight: 'bold' }}>
                      {activeChallengeIndex + 1} / {activeQuestions.length}
                    </span>
                    <button
                      className="leetcode-btn leetcode-btn-secondary"
                      disabled={activeChallengeIndex === activeQuestions.length - 1}
                      onClick={() => setActiveChallengeIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
                      title="Next Challenge"
                    >
                      Next ›
                    </button>
                  </div>

                  <div className="leetcode-header-right">
                    <button
                      className="leetcode-btn leetcode-btn-secondary"
                      onClick={() => setLeetcodeTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                      title="Toggle Dark/Light Theme"
                    >
                      {leetcodeTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                  </div>
                </div>

                {/* Split Workspace */}
                <div className="leetcode-split-pane">
                  {/* Left Column: Description Pane */}
                  <div className="leetcode-desc-pane">
                    <div className="leetcode-meta-row">
                      <span className={`difficulty-badge badge-${activeChallenge.level?.toLowerCase().replace(/[^a-z]/g, '') || 'fresher'}`}>
                        {activeChallenge.level}
                      </span>
                      <span className="leetcode-tag">Topics</span>
                      <span className="leetcode-tag">Company Tags</span>
                    </div>

                    <h3 className="leetcode-desc-pane-title">{activeChallenge.title}</h3>

                    <p
                      className="leetcode-desc-text"
                      dangerouslySetInnerHTML={{ __html: activeChallenge.description }}
                    />

                    {/* Styled LeetCode Examples */}
                    {activeChallenge.title?.includes('Challenge 1') && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                        <div className="leetcode-example-card">
                          <strong>Example 1:</strong>
                          <br />
                          Input: str = "hello"
                          <br />
                          Output: "olleh"
                        </div>
                        <div className="leetcode-example-card">
                          <strong>Example 2:</strong>
                          <br />
                          Input: str = "Sreekanth WebTech"
                          <br />
                          Output: "hcetbeW htnakeerS"
                        </div>
                      </div>
                    )}

                    {activeChallenge.title?.includes('Challenge 2') && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                        <div className="leetcode-example-card">
                          <strong>Example 1:</strong>
                          <br />
                          Input: employees = [
  {"{ name: 'Siri', dept: 'Engineering' }"},
  {"{ name: 'Ravi', dept: 'Marketing' }"},
  {"{ name: 'Kanth', dept: 'Engineering' }"}
]
                          <br />
                          Output: {"{ Engineering: ['Siri', 'Kanth'], Marketing: ['Ravi'] }"}
                        </div>
                      </div>
                    )}

                    {activeChallenge.title?.includes('Challenge 3') && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                        <div className="leetcode-example-card">
                          <strong>Example 1:</strong>
                          <br />
                          Input: num = 3
                          <br />
                          Output: "Fizz"
                        </div>
                        <div className="leetcode-example-card">
                          <strong>Example 2:</strong>
                          <br />
                          Input: num = 15
                          <br />
                          Output: "FizzBuzz"
                        </div>
                      </div>
                    )}

                    {activeChallenge.title?.includes('Challenge 4') && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                        <div className="leetcode-example-card">
                          <strong>Example 1:</strong>
                          <br />
                          Input: str = "Racecar"
                          <br />
                          Output: true
                        </div>
                        <div className="leetcode-example-card">
                          <strong>Example 2:</strong>
                          <br />
                          Input: str = "hello"
                          <br />
                          Output: false
                        </div>
                      </div>
                    )}

                    {activeChallenge.title?.includes('Challenge 5') && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                        <div className="leetcode-example-card">
                          <strong>Example 1:</strong>
                          <br />
                          Input: arr = [12, 45, 2, 89, 34, 11]
                          <br />
                          Output: 89
                        </div>
                      </div>
                    )}

                    {activeChallenge.title?.includes('Challenge 6') && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                        <div className="leetcode-example-card">
                          <strong>Example 1:</strong>
                          <br />
                          Input: arr = [1, 2, 3, 2, 4, 5, 3, 6, 1]
                          <br />
                          Output: [1, 2, 3]
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Code Editor Pane */}
                  <div className="leetcode-editor-pane">
                    {activeChallenge.title && (
                      <Playground
                        key={`${activeChallengeIndex}_${leetcodeTheme}`}
                        mode="interview"
                        layout="leetcode"
                        theme={leetcodeTheme}
                        initialJs={activeChallenge.js}
                        initialJava={activeChallenge.java}
                        initialPython={activeChallenge.python}
                        initialDotnet={activeChallenge.dotnet}
                        lessonTitle={activeChallenge.title}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })()
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
