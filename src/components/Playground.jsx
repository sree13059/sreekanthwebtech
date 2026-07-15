import { useState, useEffect, useRef } from 'react';

export default function Playground({
  mode = 'course', // 'course' or 'interview'
  layout = 'normal', // 'normal' or 'leetcode'
  theme = 'dark', // 'dark' or 'light'
  lessonTitle = '',
  initialHtml = '',
  initialCss = '',
  initialJs = '',
  initialJava = '',
  initialPython = '',
  initialDotnet = ''
}) {
  const [htmlCode, setHtmlCode] = useState(initialHtml);
  const [cssCode, setCssCode] = useState(initialCss);
  const [jsCode, setJsCode] = useState(initialJs);
  const [javaCode, setJavaCode] = useState(initialJava);
  const [pythonCode, setPythonCode] = useState(initialPython);
  const [dotnetCode, setDotnetCode] = useState(initialDotnet);

  const [activeTab, setActiveTab] = useState(mode === 'interview' ? 'javascript' : 'html');
  const [consoleOutput, setConsoleOutput] = useState('Click "Run Output" to run the code and check terminal results.');
  const [iframeKey, setIframeKey] = useState(0);

  const iframeRef = useRef(null);

  // Sync state with defaults when tabs/lessons change
  useEffect(() => {
    setHtmlCode(initialHtml);
    setCssCode(initialCss);
    setJsCode(initialJs);
    setJavaCode(initialJava);
    setPythonCode(initialPython);
    setDotnetCode(initialDotnet);
    setActiveTab(mode === 'interview' ? 'javascript' : 'html');
    setConsoleOutput('Click "Run Output" to run the code and check terminal results.');
    setIframeKey((prev) => prev + 1);
  }, [initialHtml, initialCss, initialJs, initialJava, initialPython, initialDotnet, mode]);

  // Generate output HTML document for Course Mode
  const srcDoc = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #1e293b;
            background-color: #ffffff;
            margin: 15px;
            line-height: 1.5;
          }
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
        <script>
          window.onerror = function(message, source, lineno, colno, error) {
            const errorDiv = document.createElement('div');
            errorDiv.style.color = '#ef4444';
            errorDiv.style.background = '#fef2f2';
            errorDiv.style.border = '1px solid #fee2e2';
            errorDiv.style.padding = '10px';
            errorDiv.style.borderRadius = '6px';
            errorDiv.style.fontSize = '13px';
            errorDiv.style.marginTop = '15px';
            errorDiv.style.fontFamily = 'monospace';
            errorDiv.innerText = 'JS Error: ' + message;
            document.body.appendChild(errorDiv);
          };
          ${jsCode}
        </script>
      </body>
    </html>
  `;

  // Mock runners for Interview Mode
  const runCode = () => {
    if (mode === 'course') {
      setIframeKey((prev) => prev + 1);
      return;
    }

    setConsoleOutput('Compiling and running code script...');

    setTimeout(() => {
      if (activeTab === 'javascript') {
        setConsoleOutput(runJavascriptTestCases(jsCode, lessonTitle));
      } else if (activeTab === 'python') {
        setConsoleOutput(runMockLanguageTestCases(pythonCode, 'python', lessonTitle));
      } else if (activeTab === 'java') {
        setConsoleOutput(runMockLanguageTestCases(javaCode, 'java', lessonTitle));
      } else if (activeTab === 'dotnet') {
        setConsoleOutput(runMockLanguageTestCases(dotnetCode, 'dotnet', lessonTitle));
      }
    }, 400);
  };

  const checkChallengeMatch = (output, challengeTitle) => {
    if (!output) return false;
    const lowerOutput = output.toLowerCase();
    
    if (challengeTitle.includes('Challenge 1')) {
      return lowerOutput.includes('olleh') || lowerOutput.includes('hcetbew htnakeers') || lowerOutput.includes('tcaer');
    }
    if (challengeTitle.includes('Challenge 2')) {
      return lowerOutput.includes('engineering') && lowerOutput.includes('marketing') && lowerOutput.includes('siri') && lowerOutput.includes('kanth');
    }
    if (challengeTitle.includes('Challenge 3')) {
      return lowerOutput.includes('fizz') || lowerOutput.includes('buzz') || lowerOutput.includes('fizzbuzz');
    }
    if (challengeTitle.includes('Challenge 4')) {
      return lowerOutput.includes('true') || lowerOutput.includes('false');
    }
    if (challengeTitle.includes('Challenge 5')) {
      return lowerOutput.includes('89') || lowerOutput.includes('-2');
    }
    if (challengeTitle.includes('Challenge 6')) {
      return lowerOutput.includes('1') && lowerOutput.includes('2') && lowerOutput.includes('3');
    }
    return true;
  };

  const runJavascriptTestCases = (userCode, challengeTitle) => {
    let outputLines = [];

    // Check if userCode is empty or only comments
    const cleanedCode = userCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
    if (!cleanedCode) {
      return 'Error: No code written in the editor. Please write some JavaScript code to run.';
    }

    let runnerCode = `
      let __logs = [];
      const console = {
        log: (...args) => __logs.push(args.map(x => typeof x === 'object' ? JSON.stringify(x) : String(x)).join(' ')),
        error: (...args) => __logs.push('Error: ' + args.join(' ')),
        warn: (...args) => __logs.push('Warning: ' + args.join(' ')),
        info: (...args) => __logs.push('Info: ' + args.join(' '))
      };
      const document = {
        write: (...args) => __logs.push(args.join(' ')),
        writeln: (...args) => __logs.push(args.join(' ') + '\\n')
      };
      
      try {
        ${userCode}
      } catch (err) {
        __logs.push('Runtime Error: ' + err.message);
      }
      return __logs;
    `;

    try {
      const runFn = new Function(runnerCode);
      const logs = runFn() || [];
      if (logs.length === 0) {
        return 'Code compiled and ran successfully, but produced no console outputs or document writes.';
      }
      const actualOutput = logs.map(log => log.replace(/<br\s*\/?>/gi, '\n')).join('\n');
      const isMatch = checkChallengeMatch(actualOutput, challengeTitle);
      
      let finalResult = actualOutput;
      finalResult += '\n----------------------------------------------\n';
      if (isMatch) {
        finalResult += 'Result: Output matches the expected challenge solution! ✅';
      } else {
        finalResult += 'Result: Output does not match the expected challenge solution (notmatch) ❌';
      }
      return finalResult;
    } catch (err) {
      return `Syntax Error during compilation:\nError: ${err.message}`;
    }
  };

  const runMockLanguageTestCases = (userCode, activeLanguage, challengeTitle) => {
    let outputLines = [];
    const langLabel = activeLanguage === 'python' ? 'Python 3' : activeLanguage === 'java' ? 'Java VM' : '.NET CLR';
    outputLines.push(`[${langLabel} Mock compiler] Compiling and running code...`);
    
    // Check if userCode is empty
    const cleanedCode = userCode.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();
    if (!cleanedCode) {
      return `Error: No code written in the editor. Please write some ${langLabel} code.`;
    }

    outputLines.push('Execution Successful! Outputs:');
    
    // Parse print/Console.WriteLine statements inside the user's mock code
    const lines = userCode.split('\n');
    let hasOutput = false;
    lines.forEach(line => {
      // Look for print(...) in Python
      if (activeLanguage === 'python') {
        const pyPrintMatch = line.match(/print\s*\((.*)\)/);
        if (pyPrintMatch) {
          const val = pyPrintMatch[1].trim().replace(/^['"]|['"]$/g, '');
          outputLines.push(`  ${val}`);
          hasOutput = true;
        }
      }
      // Look for System.out.println(...) in Java
      else if (activeLanguage === 'java') {
        const javaPrintMatch = line.match(/System\.out\.println\s*\((.*)\)/);
        if (javaPrintMatch) {
          const val = javaPrintMatch[1].trim().replace(/^['"]|['"]$/g, '');
          outputLines.push(`  ${val}`);
          hasOutput = true;
        }
      }
      // Look for Console.WriteLine(...) in .NET
      else if (activeLanguage === 'dotnet') {
        const dotnetPrintMatch = line.match(/Console\.WriteLine\s*\((.*)\)/);
        if (dotnetPrintMatch) {
          const val = dotnetPrintMatch[1].trim().replace(/^['"]|['"]$/g, '');
          outputLines.push(`  ${val}`);
          hasOutput = true;
        }
      }
    });

    if (!hasOutput) {
      outputLines.push('  (Code ran successfully but returned no print outputs.)');
    }

    const actualOutput = outputLines.join('\n');
    const isMatch = checkChallengeMatch(actualOutput, challengeTitle);
    
    let finalResult = actualOutput;
    finalResult += '\n----------------------------------------------\n';
    if (isMatch) {
      finalResult += 'Result: Output matches the expected challenge solution! ✅';
    } else {
      finalResult += 'Result: Output does not match the expected challenge solution (notmatch) ❌';
    }
    return finalResult;
  };

  const resetTemplate = () => {
    if (mode === 'course') {
      setHtmlCode(initialHtml);
      setCssCode(initialCss);
      setJsCode(initialJs);
    } else {
      setJsCode(initialJs);
      setJavaCode(initialJava);
      setPythonCode(initialPython);
      setDotnetCode(initialDotnet);
    }
    setConsoleOutput('Click "Run Output" to run the code and check terminal results.');
    setShowOutput(false);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className={`playground-container ${layout === 'leetcode' ? '' : 'glass'}`}>
      <div className="playground-header">
        <div className="playground-title-group">
          {layout === 'leetcode' ? (
            <span className="playground-badge" style={{ background: theme === 'light' ? '#6366f1' : 'var(--primary-teal)', color: theme === 'light' ? 'white' : '#0f172a', marginBottom: 0 }}>
              {activeTab.toUpperCase()} CODE
            </span>
          ) : (
            <>
              <span className="playground-badge">{mode === 'interview' ? 'Interview Console' : 'Playground'}</span>
              <h4 className="playground-lesson-title">Try it Yourself: {lessonTitle}</h4>
            </>
          )}
        </div>
        <div className="playground-actions">
          <button className="playground-reset-btn" onClick={resetTemplate}>
            {layout === 'leetcode' ? 'Reset' : 'Reset Code'}
          </button>
          <button
            className="playground-run-btn"
            onClick={runCode}
            style={layout === 'leetcode' && theme === 'light' ? { background: '#6366f1', color: 'white', boxShadow: 'none' } : {}}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M8 5v14l11-7z" />
            </svg>
            {layout === 'leetcode' ? 'Run Code' : 'Run Output'}
          </button>
        </div>
      </div>

      <div className="playground-workspace">
        {/* Code Editor Side */}
        <div className="playground-editor-section">
          <div className="editor-tabs">
            {mode === 'course' ? (
              <>
                <button
                  className={`editor-tab ${activeTab === 'html' ? 'active' : ''}`}
                  onClick={() => setActiveTab('html')}
                >
                  HTML
                </button>
                <button
                  className={`editor-tab ${activeTab === 'css' ? 'active' : ''}`}
                  onClick={() => setActiveTab('css')}
                >
                  CSS
                </button>
                <button
                  className={`editor-tab ${activeTab === 'js' ? 'active' : ''}`}
                  onClick={() => setActiveTab('js')}
                >
                  JavaScript
                </button>
              </>
            ) : (
              <>
                <button
                  className={`editor-tab ${activeTab === 'javascript' ? 'active' : ''}`}
                  onClick={() => setActiveTab('javascript')}
                >
                  JavaScript
                </button>
                <button
                  className={`editor-tab ${activeTab === 'java' ? 'active' : ''}`}
                  onClick={() => setActiveTab('java')}
                >
                  Java
                </button>
                <button
                  className={`editor-tab ${activeTab === 'python' ? 'active' : ''}`}
                  onClick={() => setActiveTab('python')}
                >
                  Python
                </button>
                <button
                  className={`editor-tab ${activeTab === 'dotnet' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dotnet')}
                >
                  .NET (C#)
                </button>
              </>
            )}
          </div>

          <div className="editor-textarea-wrapper">
            {activeTab === 'html' && (
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                className="code-editor-textarea"
                spellCheck="false"
                placeholder="<!-- Write HTML here -->"
              />
            )}
            {activeTab === 'css' && (
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="code-editor-textarea"
                spellCheck="false"
                placeholder="/* Write CSS here */"
              />
            )}
            {activeTab === 'js' && (
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className="code-editor-textarea"
                spellCheck="false"
                placeholder="// Write JavaScript code here"
              />
            )}
            {activeTab === 'javascript' && (
              <textarea
                value={jsCode}
                onChange={(e) => setJsCode(e.target.value)}
                className="code-editor-textarea"
                spellCheck="false"
                placeholder="// Write JavaScript code here"
              />
            )}
            {activeTab === 'java' && (
              <textarea
                value={javaCode}
                onChange={(e) => setJavaCode(e.target.value)}
                className="code-editor-textarea"
                spellCheck="false"
                placeholder="// Write Java code here"
              />
            )}
            {activeTab === 'python' && (
              <textarea
                value={pythonCode}
                onChange={(e) => setPythonCode(e.target.value)}
                className="code-editor-textarea"
                spellCheck="false"
                placeholder="# Write Python code here"
              />
            )}
            {activeTab === 'dotnet' && (
              <textarea
                value={dotnetCode}
                onChange={(e) => setDotnetCode(e.target.value)}
                className="code-editor-textarea"
                spellCheck="false"
                placeholder="// Write .NET (C#) code here"
              />
            )}
          </div>
        </div>

        {/* Preview / Terminal Side */}
        <div className="playground-preview-section">
          {mode === 'course' ? (
            <>
              <div className="preview-header">
                <span>Live Output Preview</span>
              </div>
              <div className="preview-iframe-wrapper">
                <iframe
                  key={iframeKey}
                  ref={iframeRef}
                  srcDoc={srcDoc}
                  title="Code playground live preview"
                  sandbox="allow-scripts"
                  className="preview-iframe"
                />
              </div>
            </>
          ) : (
            <>
              <div className="preview-header" style={{ borderBottom: theme === 'light' ? '1px solid #e2e8f0' : '1px solid rgba(255, 255, 255, 0.1)' }}>
                <span>Interactive Terminal Console</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    background: theme === 'light' ? '#f8fafc' : '#090d16',
                    minHeight: '200px',
                    padding: '16px',
                    fontFamily: 'monospace',
                    fontSize: '0.85rem',
                    color: theme === 'light' ? '#0f172a' : '#10b981',
                    borderTop: theme === 'light' ? '1px solid #e2e8f0' : 'none',
                    overflowY: 'auto',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {consoleOutput}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
