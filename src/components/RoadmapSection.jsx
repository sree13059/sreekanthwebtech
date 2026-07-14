import { useState, useEffect } from 'react';

export default function RoadmapSection({ setCurrentTab }) {
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem('roadmap_progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('roadmap_progress', JSON.stringify(completedItems));
  }, [completedItems]);

  const roadmapPhases = [
    {
      title: 'Phase 1: MERN Frontend Basics',
      subtitle: 'For Beginners & Freshers',
      description: 'Master core semantic layouts, responsive grid behaviors, and baseline client scripting.',
      badge: 'Fresher Level',
      color: 'teal',
      steps: [
        { id: '1', title: 'HTML Skeleton & Document Type', details: 'Doctype declarations, html, head, and body tag structures.', tabTarget: 'html' },
        { id: '2', title: 'HTML Semantic Elements', details: 'Structural layouts using header, nav, main, article, section, and footer.', tabTarget: 'html' },
        { id: '3', title: 'HTML Forms & Validation', details: 'Form element groups, input fields, checkboxes, and required attributes.', tabTarget: 'html' },
        { id: '4', title: 'HTML Formatting & Typography', details: 'Bold/strong, italic/em, mark highlights, subscripts, and superscripts.', tabTarget: 'html' },
        { id: '5', title: 'HTML Lists & Data Tables', details: 'Ordered/unordered lists, description items, table rows, headers, and spans.', tabTarget: 'html' },
        { id: '6', title: 'CSS Box Model Properties', details: 'Content width/height bounds, inner padding, borders, and outer margins.', tabTarget: 'css' },
        { id: '7', title: 'CSS Flexbox Containers', details: 'Flexible row/column alignments using justify-content and align-items.', tabTarget: 'css' },
        { id: '8', title: 'CSS Grid Systems', details: 'Custom layouts using grid-template columns, template areas, and gaps.', tabTarget: 'css' },
        { id: '9', title: 'CSS Responsive Media Queries', details: 'Mobile-first breakpoint designs and viewport viewport configurations.', tabTarget: 'css' },
        { id: '10', title: 'CSS Variables & Themes', details: 'Defining root variables tokens for themes and active dark modes.', tabTarget: 'css' },
        { id: '11', title: 'CSS Transitions & Keyframes', details: 'Transforms, delay transitions, and keyframe animations.', tabTarget: 'css' },
        { id: '12', title: 'JS Variable Scoping', details: 'Differences between block scopes (const/let) and function scopes (var).', tabTarget: 'javascript' },
        { id: '13', title: 'JS Conditional Control Flow', details: 'Evaluating values using if/else switches, for loops, and while loops.', tabTarget: 'javascript' },
        { id: '14', title: 'JS Standard & Arrow Functions', details: 'Arrow parameters syntax, implicit returns, closures, and lexical scopes.', tabTarget: 'javascript' },
        { id: '15', title: 'JS Functional Array Operators', details: 'Transforming list arrays using map, filter, and reduce operations.', tabTarget: 'javascript' },
      ],
    },
    {
      title: 'Phase 2: Modern Interactive Frontend',
      subtitle: 'Transitioning to Junior Developer',
      description: 'Move into state-driven user interfaces, dynamic REST fetching, and advanced React components.',
      badge: 'Junior Frontend',
      color: 'indigo',
      steps: [
        { id: '16', title: 'DOM Querying & Text Edits', details: 'Selecting elements (querySelector) and modifying innerHTML or textContent.', tabTarget: 'javascript' },
        { id: '17', title: 'DOM Listeners & Event Bubbling', details: 'Binding events, tracking targets (event.target), and class toggles.', tabTarget: 'javascript' },
        { id: '18', title: 'Async JS & Promises', details: 'Understanding asynchronous Javascript threads and then/catch syntax.', tabTarget: 'javascript' },
        { id: '19', title: 'JS Async/Await API Fetch', details: 'Processing API data asynchronously using fetch queries and try/catch logs.', tabTarget: 'javascript' },
        { id: '20', title: 'ES6+ Spread & Destructuring', details: 'Extracting properties, copying objects, and optional chaining.', tabTarget: 'javascript' },
        { id: '21', title: 'OOP JavaScript Classes', details: 'Building class declarations, constructors, instances, and inheritances.', tabTarget: 'javascript' },
        { id: '22', title: 'React.js Declarative JSX', details: 'Binds HTML markup inside JavaScript files with curly brace expressions.', tabTarget: 'react' },
        { id: '23', title: 'React Component Props', details: 'Passing read-only configuration variables down to sub-components.', tabTarget: 'react' },
        { id: '24', title: 'React useState Hook', details: 'Setting up local component state variables to trigger re-renders.', tabTarget: 'react' },
        { id: '25', title: 'React useEffect Hook', details: 'Handling side effects, dependency array triggers, and cleanups.', tabTarget: 'react' },
        { id: '26', title: 'React useRef Hook', details: 'Persistent references and direct DOM selection without re-renders.', tabTarget: 'react' },
        { id: '27', title: 'React Context API', details: 'Sharing global parameters (e.g. login credentials) without prop drilling.', tabTarget: 'react' },
        { id: '28', title: 'React useReducer Hook', details: 'Consolidating complex states using dispatcher actions and reducers.', tabTarget: 'react' },
        { id: '29', title: 'React useMemo & useCallback', details: 'Memoizing heavy computed values and caching callback functions.', tabTarget: 'react' },
        { id: '30', title: 'React Router Routing', details: 'Navigating paths, client routes, and dynamic URL params.', tabTarget: 'react' },
      ],
    },
    {
      title: 'Phase 3: Backend Services & API Design',
      subtitle: 'Transitioning to Mid-Level Full Stack',
      description: 'Spin up backend modules, build routing pipelines, and design modular HTTP controllers.',
      badge: 'Mid-Level Fullstack',
      color: 'purple',
      steps: [
        { id: '31', title: 'Node.js V8 Core Environment', details: 'Process models, single-threaded architecture, and non-blocking I/O.', tabTarget: 'node' },
        { id: '32', title: 'CommonJS Modules (Exports)', details: 'Configuring script exports using require and module.exports.', tabTarget: 'node' },
        { id: '33', title: 'Node File System (fs)', details: 'Performing asynchronous read and write calls to server files.', tabTarget: 'node' },
        { id: '34', title: 'HTTP Core Module Web Server', details: 'Handling network headers, status codes, and raw JSON returns.', tabTarget: 'node' },
        { id: '35', title: 'Express.js Server framework', details: 'Bootstrapping backend architectures using express.listen.', tabTarget: 'node' },
        { id: '36', title: 'REST API Design Principles', details: 'Mapping CRUD requests to GET, POST, PUT, and DELETE routes.', tabTarget: 'node' },
        { id: '37', title: 'Express Route Controllers', details: 'Isolating backend routing pathways into modular controller files.', tabTarget: 'node' },
        { id: '38', title: 'Express Custom Middlewares', details: 'Creating functions that inspect request headers before routing.', tabTarget: 'node' },
        { id: '39', title: 'Global Error Handling Middleware', details: 'Catching runtime backend errors using 4-argument route middleware.', tabTarget: 'node' },
        { id: '40', title: 'CORS & Body Parser Middlewares', details: 'Controlling cross-origin requests and parsing payload req.body JSON.', tabTarget: 'node' },
      ],
    },
    {
      title: 'Phase 4: Datastores & Advanced Operations',
      subtitle: 'Experienced Full Stack & Senior Concepts',
      description: 'Configure databases, model collections, secure authorization tokens, and deploy applications.',
      badge: 'Experienced Senior',
      color: 'cyan',
      steps: [
        { id: '41', title: 'SQL Relational vs NoSQL Databases', details: 'Key differences between table structures and document collections.', tabTarget: 'mongodb' },
        { id: '42', title: 'MongoDB Atlas Cloud Setup', details: 'Configuring database clusters and whitelist IP credentials.', tabTarget: 'mongodb' },
        { id: '43', title: 'MongoDB Document CRUD', details: 'Querying records using find, insertOne, updateMany, and deleteOne.', tabTarget: 'mongodb' },
        { id: '44', title: 'Mongoose Schemas & Types', details: 'Creating models, casting properties, and defining strict parameters.', tabTarget: 'mongodb' },
        { id: '45', title: 'Mongoose Document Relations', details: 'Referencing ObjectIds and joining collections using .populate().', tabTarget: 'mongodb' },
        { id: '46', title: 'Mongoose Lifecycle Middleware Hooks', details: 'Executing pre-save validations and password hashing triggers.', tabTarget: 'mongodb' },
        { id: '47', title: 'JWT Auth & Security Headers', details: 'Signing login sessions and securing endpoints via Bearer tokens.', tabTarget: 'node' },
        { id: '48', title: 'MongoDB Aggregation Pipelines', details: 'Filtering and grouping records using $match, $group, and $sort stages.', tabTarget: 'mongodb' },
        { id: '49', title: 'MongoDB Database Indexing', details: 'Optimizing performance using index keys and analyzing query plans.', tabTarget: 'mongodb' },
        { id: '50', title: 'Full Stack App Deployment', details: 'Hosting node backends on Render/Heroku and react on Netlify/Vercel.', tabTarget: 'roadmap' },
      ],
    },
  ];

  const totalSteps = roadmapPhases.reduce((acc, phase) => acc + phase.steps.length, 0);
  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const progressPercent = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

  const toggleItem = (itemId) => {
    setCompletedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleStartLearning = (targetTab) => {
    setCurrentTab(targetTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="roadmap-container animate-fade-in">
      {/* Progress Card */}
      <div className="roadmap-progress-card glass">
        <div className="progress-details">
          <h2>Your MERN Full Stack Progress</h2>
          <p>
            Track your progress across <strong>50 core concepts</strong>. Ticking off tasks updates your progress percentage live.
          </p>
        </div>
        <div className="progress-indicator-group">
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="progress-stats">
            <span className="progress-percent">{progressPercent}% Completed</span>
            <span className="progress-fraction">
              {completedCount} / {totalSteps} Core Topics
            </span>
          </div>
        </div>
      </div>

      {/* Visual Timeline */}
      <div className="roadmap-timeline">
        {roadmapPhases.map((phase, phaseIdx) => (
          <div key={phaseIdx} className={`timeline-phase phase-${phase.color} glass`}>
            <div className="phase-header">
              <span className={`phase-badge badge-${phase.color}`}>{phase.badge}</span>
              <h3 className="phase-title">{phase.title}</h3>
              <p className="phase-subtitle">{phase.subtitle}</p>
              <p className="phase-desc">{phase.description}</p>
            </div>

            <div className="phase-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginTop: '24px' }}>
              {phase.steps.map((step) => {
                const isCompleted = !!completedItems[step.id];
                return (
                  <div key={step.id} className={`phase-step-item ${isCompleted ? 'completed' : ''}`} style={{ margin: 0, height: '100%' }}>
                    <div className="step-checkbox-wrapper" onClick={() => toggleItem(step.id)}>
                      <div className={`step-checkbox ${isCompleted ? 'checked' : ''}`}>
                        {isCompleted && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="step-content">
                      <div className="step-title-row">
                        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--primary-teal)', display: 'block', marginBottom: '4px' }}>Topic #{step.id}</span>
                        <h4 style={{ fontSize: '0.98rem', margin: 0 }}>{step.title}</h4>
                      </div>
                      <p className="step-details" style={{ fontSize: '0.8rem', marginTop: '6px', minHeight: '44px' }}>{step.details}</p>
                      <button
                        className="step-learn-btn"
                        onClick={() => handleStartLearning(step.tabTarget)}
                        style={{ marginTop: '10px' }}
                      >
                        Start Learning →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
