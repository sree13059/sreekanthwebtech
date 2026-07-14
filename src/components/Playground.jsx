import { useState, useEffect, useRef } from 'react';

export default function Playground({
  mode = 'course', // 'course' or 'interview'
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
        let logs = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join(' '));
        };
        try {
          const runFn = new Function(jsCode);
          runFn();
          console.log = originalLog;
          setConsoleOutput(logs.join('\n') || '[JS Engine] Code executed successfully.\n(No console.log output triggers)');
        } catch (err) {
          console.log = originalLog;
          setConsoleOutput(`[JS Runtime Error]\n-----------------\n${err.message}`);
        }
      } else if (activeTab === 'python') {
        setConsoleOutput(runPythonMock(pythonCode));
      } else if (activeTab === 'java') {
        setConsoleOutput(runJavaMock(javaCode));
      } else if (activeTab === 'dotnet') {
        setConsoleOutput(runDotnetMock(dotnetCode));
      }
    }, 400);
  };

  const runPythonMock = (code) => {
    let outputs = ['[Python Runner] executing script...', '-------------------------------'];
    const lines = code.split('\n');
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('print(')) {
        const match = trimmed.match(/print\((.*)\)/);
        if (match && match[1]) {
          let val = match[1].trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            outputs.push(val.substring(1, val.length - 1));
          } else {
            // Match challenge output patterns
            if (val.includes('reverseString') || val.includes('reverse_string')) {
              outputs.push('Solution output: htnakeerS beWhtnakeerS');
            } else if (val.includes('groupByDept') || val.includes('group_by_dept')) {
              outputs.push('{\n  "Engineering": ["Siri", "Kanth"],\n  "Marketing": ["Ravi"]\n}');
            } else if (val.includes('fizzBuzz') || val.includes('fizz_buzz')) {
              outputs.push('Number 3 -> Fizz\nNumber 5 -> Buzz\nNumber 15 -> FizzBuzz\nNumber 7 -> 7');
            } else if (val.includes('isPalindrome') || val.includes('is_palindrome')) {
              outputs.push('"Racecar" is Palindrome? -> true\n"hello" is Palindrome? -> false\n"A man a plan a canal Panama" is Palindrome? -> true');
            } else if (val.includes('findMax') || val.includes('find_max')) {
              outputs.push('Array: [12, 45, 2, 89, 34, 11]\nMaximum Value calculated: 89');
            } else if (val.includes('findDuplicates') || val.includes('find_duplicates')) {
              outputs.push('Original List: [1, 2, 3, 2, 4, 5, 3, 6, 1]\nDuplicate elements found: [2, 3, 1]');
            } else {
              outputs.push(`Computed: ${val}`);
            }
          }
        }
      }
    });
    return outputs.join('\n');
  };

  const runJavaMock = (code) => {
    let outputs = ['[Java VM Compiler] Compiling App.java...', '[Java VM] Running class App...', '-------------------------------'];
    const lines = code.split('\n');
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.includes('System.out.println(')) {
        const match = trimmed.match(/System\.out\.println\((.*)\)/);
        if (match && match[1]) {
          let val = match[1].trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            outputs.push(val.substring(1, val.length - 1));
          } else {
            if (val.includes('reverseString')) {
              outputs.push('Solution output: htnakeerS beWhtnakeerS');
            } else if (val.includes('groupByDept')) {
              outputs.push('{\n  "Engineering": ["Siri", "Kanth"],\n  "Marketing": ["Ravi"]\n}');
            } else if (val.includes('fizzBuzz')) {
              outputs.push('Number 3 -> Fizz\nNumber 5 -> Buzz\nNumber 15 -> FizzBuzz\nNumber 7 -> 7');
            } else if (val.includes('isPalindrome')) {
              outputs.push('"Racecar" is Palindrome? -> true\n"hello" is Palindrome? -> false\n"A man a plan a canal Panama" is Palindrome? -> true');
            } else if (val.includes('findMax')) {
              outputs.push('Array: [12, 45, 2, 89, 34, 11]\nMaximum Value calculated: 89');
            } else if (val.includes('findDuplicates')) {
              outputs.push('Original List: [1, 2, 3, 2, 4, 5, 3, 6, 1]\nDuplicate elements found: [2, 3, 1]');
            } else {
              outputs.push(`Output: ${val}`);
            }
          }
        }
      }
    });
    return outputs.join('\n');
  };

  const runDotnetMock = (code) => {
    let outputs = ['[.NET CLR Compiler] Building Program.csproj...', '[.NET CLR Engine] Running Program.exe...', '-------------------------------'];
    const lines = code.split('\n');
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.includes('Console.WriteLine(')) {
        const match = trimmed.match(/Console\.WriteLine\((.*)\)/);
        if (match && match[1]) {
          let val = match[1].trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            outputs.push(val.substring(1, val.length - 1));
          } else {
            if (val.includes('reverseString')) {
              outputs.push('Solution output: htnakeerS beWhtnakeerS');
            } else if (val.includes('groupByDept')) {
              outputs.push('{\n  "Engineering": ["Siri", "Kanth"],\n  "Marketing": ["Ravi"]\n}');
            } else if (val.includes('fizzBuzz')) {
              outputs.push('Number 3 -> Fizz\nNumber 5 -> Buzz\nNumber 15 -> FizzBuzz\nNumber 7 -> 7');
            } else if (val.includes('isPalindrome')) {
              outputs.push('"Racecar" is Palindrome? -> true\n"hello" is Palindrome? -> false\n"A man a plan a canal Panama" is Palindrome? -> true');
            } else if (val.includes('findMax')) {
              outputs.push('Array: [12, 45, 2, 89, 34, 11]\nMaximum Value calculated: 89');
            } else if (val.includes('findDuplicates')) {
              outputs.push('Original List: [1, 2, 3, 2, 4, 5, 3, 6, 1]\nDuplicate elements found: [2, 3, 1]');
            } else {
              outputs.push(`Output: ${val}`);
            }
          }
        }
      }
    });
    return outputs.join('\n');
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
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className="playground-container glass">
      <div className="playground-header">
        <div className="playground-title-group">
          <span className="playground-badge">{mode === 'interview' ? 'Interview Console' : 'Playground'}</span>
          <h4 className="playground-lesson-title">Try it Yourself: {lessonTitle}</h4>
        </div>
        <div className="playground-actions">
          <button className="playground-reset-btn" onClick={resetTemplate}>
            Reset Code
          </button>
          <button className="playground-run-btn" onClick={runCode}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M8 5v14l11-7z" />
            </svg>
            Run Output
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
              <div className="preview-header" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <span>Interactive Terminal Console</span>
              </div>
              <div
                style={{
                  background: '#090d16',
                  height: '100%',
                  minHeight: '260px',
                  padding: '16px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  color: '#10b981',
                  overflowY: 'auto',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {consoleOutput}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
