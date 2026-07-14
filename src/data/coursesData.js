export const coursesData = {
  html: {
    title: 'HTML5',
    lessons: [
      {
        title: 'Introduction to HTML5',
        level: 'Fresher',
        summary: 'Learn the core structure of a web page and the essential tags that form the skeleton of any website.',
        content: `
          <h3>HTML: HyperText Markup Language</h3>
          <p>HTML is the standard markup language used to create the structure of web pages. It elements tell the browser how to render text, images, inputs, and layouts.</p>
          
          <div class="concept-point">
            <strong>Key Elements:</strong>
            <ul>
              <li><code>&lt;!DOCTYPE html&gt;</code>: Declares the page content is HTML5.</li>
              <li><code>&lt;html&gt;</code>: The root element containing the entire document.</li>
              <li><code>&lt;head&gt;</code>: Houses metadata, page title, stylesheet links, and scripts.</li>
              <li><code>&lt;body&gt;</code>: Contains all visible page contents (headings, paragraphs, media).</li>
            </ul>
          </div>

          <div class="note-box">
            <strong>Fresher Tip:</strong> HTML tags usually come in pairs: an opening tag (e.g. <code>&lt;p&gt;</code>) and a closing tag (e.g. <code>&lt;/p&gt;</code>). Tags that do not require closing tags are called <em>self-closing</em> (e.g. <code>&lt;img /&gt;</code>, <code>&lt;input /&gt;</code>).
          </div>
        `,
        html: `<!-- Modify this text to see the changes live -->
<h1>Welcome to Sreekanth WebTech!</h1>
<p>This is a live HTML preview. Modify this paragraph tag or add a new heading below.</p>
<button id="alertBtn">Click Me</button>`,
        css: `/* Add styles to your HTML elements */
h1 {
  color: #6366f1;
  font-family: sans-serif;
}
p {
  color: #475569;
  font-size: 16px;
}
button {
  background: #06b6d4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}`,
        js: `// Add script behaviors here
const btn = document.getElementById('alertBtn');
btn.addEventListener('click', () => {
  alert('Hello! You successfully ran JavaScript on this page.');
});`,
        quiz: {
          question: 'Which HTML tag is used to define the root of an HTML document?',
          options: ['<head>', '<body>', '<html>', '<doctype>'],
          answer: 2,
          explanation: 'The <html> tag is the root container element for all other elements on a web page (except for the <!DOCTYPE> declaration).',
        },
      },
      {
        title: 'HTML Formatting Tags',
        level: 'Fresher',
        summary: 'Explore standard inline tags like strong, em, mark, sub, and sup to format texts semantically and visually.',
        content: `
          <h3>HTML Formatting Tags</h3>
          <p>HTML provides inline formatting elements to denote special meanings, formatting texts without explicit CSS styling.</p>
          
          <div class="concept-point">
            <strong>Key Formatting Elements:</strong>
            <ul>
              <li><code>&lt;strong&gt;</code> / <code>&lt;b&gt;</code>: Bold text. <code>&lt;strong&gt;</code> conveys semantic importance, whereas <code>&lt;b&gt;</code> is purely visual.</li>
              <li><code>&lt;em&gt;</code> / <code>&lt;i&gt;</code>: Italic text. <code>&lt;em&gt;</code> stresses emphasis.</li>
              <li><code>&lt;mark&gt;</code>: Defines marked or highlighted text background.</li>
              <li><code>&lt;del&gt;</code> / <code>&lt;ins&gt;</code>: Deleted (strikethrough) and inserted (underlined) text, ideal for revisions.</li>
              <li><code>&lt;sub&gt;</code> / <code>&lt;sup&gt;</code>: Subscript (e.g. H<sub>2</sub>O) and superscript (e.g. X<sup>2</sup>) alignment offsets.</li>
            </ul>
          </div>
        `,
        html: `<!-- Modify formatting tags below to see rendering -->
<p>This is <strong>important text</strong> in bold.</p>
<p>This is <em>emphasized text</em> in italics.</p>
<p>We can <mark>highlight key concepts</mark> easily.</p>
<p>Math equation: A<sup>2</sup> + B<sup>2</sup> = C<sup>2</sup></p>
<p>Chemical formula: H<sub>2</sub>O (Water)</p>`,
        css: `p { font-family: sans-serif; line-height: 1.6; }`,
        js: `// Inline formatting elements default to inline display properties.`,
        quiz: {
          question: 'Which tag should be used to display text as superscript (e.g. X to the power of 2)?',
          options: ['<sub>', '<sup>', '<super>', '<align-top>'],
          answer: 1,
          explanation: 'The <sup> tag defines superscript text, raising it to a higher vertical baseline than normal text.',
        },
      },
      {
        title: 'HTML Attributes',
        level: 'Fresher',
        summary: 'Learn how to provide additional configuration settings to elements using standard attribute key-value pairs.',
        content: `
          <h3>HTML Attributes</h3>
          <p>Attributes provide additional information about HTML elements. They are always specified in the start tag and usually come in name/value pairs like <code>name="value"</code>.</p>
          
          <div class="concept-point">
            <strong>Common HTML Attributes:</strong>
            <ul>
              <li><code>href</code>: Specifies the URL link target on <code>&lt;a&gt;</code> tags.</li>
              <li><code>src</code>: Specifies the image path on <code>&lt;img&gt;</code> tags.</li>
              <li><code>alt</code>: Provides fallback alternative text for search engines and screen readers.</li>
              <li><code>style</code>: Binds inline CSS rules directly to the element.</li>
              <li><code>id</code> / <code>class</code>: Unique identifiers and class styling selectors.</li>
            </ul>
          </div>
        `,
        html: `<p>Anchor tags use the href and target attributes:</p>
<a href="https://youtube.com/@sreekanthwebtech" target="_blank" style="color: #6366f1; font-weight: bold; text-decoration: none;">
  Visit Sreekanth WebTech YouTube
</a>

<p style="margin-top: 15px;">Images use src and alt attributes:</p>
<img src="https://img.youtube.com/vi/NZkxXE-CxL8/maxresdefault.jpg" alt="Roadmap Video" width="220" style="border-radius: 8px;" />`,
        css: `p { font-family: sans-serif; }`,
        js: `// Attribute changes are accessible in JS using element.getAttribute('name') or element.setAttribute()`,
        quiz: {
          question: 'Where should HTML attributes always be declared inside tags?',
          options: ['In the end tag', 'In the start tag', 'Inside the text content', 'In a separate script tag'],
          answer: 1,
          explanation: 'HTML attributes must always be defined within the start/opening tag of an element (e.g., <img src="..." />).',
        },
      },
      {
        title: 'HTML Forms & User Input',
        level: 'Fresher',
        summary: 'Understand how to collect user inputs using textboxes, dropdowns, checkboxes, and buttons with validation.',
        content: `
          <h3>Forms & Input Handling</h3>
          <p>Forms are used to gather data from visitors. The <code>&lt;form&gt;</code> tag groups inputs and defines where to send the data using attributes like <code>action</code> and <code>method</code>.</p>
          
          <div class="concept-point">
            <strong>Essential Attributes:</strong>
            <ul>
              <li><code>type</code>: Specifies the input format (e.g. text, email, password, checkbox, submit).</li>
              <li><code>placeholder</code>: A hint shown in the field before the user types.</li>
              <li><code>required</code>: Browser validation that prevents submission if the field is empty.</li>
              <li><code>name</code>: The identifier sent to the backend server representing this input.</li>
            </ul>
          </div>
        `,
        html: `<form id="userForm">
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username" placeholder="Enter username" required><br><br>
  
  <label for="email">Email Address:</label><br>
  <input type="email" id="email" name="email" placeholder="example@email.com" required><br><br>
  
  <button type="submit">Submit Form</button>
</form>

<div id="output" style="margin-top: 15px; color: green; font-weight: bold;"></div>`,
        css: `label {
  font-weight: bold;
  font-family: sans-serif;
  color: #334155;
}
input {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}
button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}`,
        js: `const form = document.getElementById('userForm');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents page reload
  const username = document.getElementById('username').value;
  output.innerText = 'Form Submitted! Welcome, ' + username + '!';
});`,
        quiz: {
          question: 'Which input attribute ensures a field cannot be submitted blank?',
          options: ['validate', 'required', 'placeholder', 'disabled'],
          answer: 1,
          explanation: 'The "required" attribute is a boolean attribute that mandates the input field must be filled out before submitting.',
        },
      },
      {
        title: 'Semantic HTML & SEO Structure',
        level: 'Junior Developer',
        summary: 'Learn tags that provide meaning to web browsers and search engine web crawlers for structural hierarchy and SEO indexing.',
        content: `
          <h3>Semantic Layouts for SEO</h3>
          <p>Semantic HTML tags clearly describe their meaning to both the browser and the developer, rather than just acting as generic layout boxes (like <code>&lt;div&gt;</code>).</p>
          
          <div class="concept-point">
            <strong>Key Semantic Tags:</strong>
            <ul>
              <li><code>&lt;header&gt;</code>: Banner section containing logos and search boxes.</li>
              <li><code>&lt;nav&gt;</code>: Holds navigation menus.</li>
              <li><code>&lt;main&gt;</code>: Highlights the primary unique content of the page.</li>
              <li><code>&lt;article&gt;</code>: Independent, self-contained article content (e.g. blog posts).</li>
              <li><code>&lt;section&gt;</code>: General grouping of thematic page items.</li>
              <li><code>&lt;footer&gt;</code>: Contains copyright details, links, and contacts.</li>
            </ul>
          </div>
        `,
        html: `<header>
  <h1>Sreekanth WebTech Blog</h1>
  <nav>
    <a href="#">Articles</a> | <a href="#">Tutorials</a>
  </nav>
</header>

<main>
  <article>
    <h2>Understanding Semantic Markup</h2>
    <p>Semantic HTML tags like &lt;article&gt; tell crawlers exactly where core content resides, boosting SEO ranks.</p>
  </article>
</main>

<footer>
  <p>&copy; 2026 Sreekanth WebTech</p>
</footer>`,
        css: `header, footer {
  background: #f1f5f9;
  padding: 15px;
  border-radius: 6px;
}
main {
  margin: 15px 0;
}
article {
  border-left: 4px solid #06b6d4;
  padding-left: 10px;
}
nav a {
  color: #4f46e5;
  text-decoration: none;
}`,
        js: `// No JS needed for structured layouts, but good structure helps script access.`,
        quiz: {
          question: 'Which of the following is a semantic HTML element?',
          options: ['<div>', '<span>', '<article>', '<b>'],
          answer: 2,
          explanation: '<article> describes its contents as a self-contained composition, whereas <div> and <span> provide no semantic meaning.',
        },
      },
      {
        title: 'Multimedia: Audio, Video & Canvas',
        level: 'Senior Developer',
        summary: 'Learn to embed native media files and construct visual graphics using the HTML5 canvas element.',
        content: `
          <h3>HTML5 Audio, Video, and Drawing</h3>
          <p>HTML5 introduced native multimedia players and rendering elements that remove the need for external Flash players.</p>
          
          <div class="concept-point">
            <strong>Tags & Frameworks:</strong>
            <ul>
              <li><code>&lt;video&gt;</code>: Plays video clips with optional custom controller loops.</li>
              <li><code>&lt;audio&gt;</code>: Integrates music clips.</li>
              <li><code>&lt;canvas&gt;</code>: Provides a pixel-level graphics space controlled by JavaScript.</li>
            </ul>
          </div>
        `,
        html: `<h3>Canvas Drawing Example</h3>
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #cbd5e1;"></canvas>

<div style="margin-top: 15px;">
  <button id="drawBtn">Draw Shapes</button>
</div>`,
        css: `canvas {
  background: #f8fafc;
  display: block;
  margin-bottom: 10px;
}
button {
  background: #06b6d4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}`,
        js: `const btn = document.getElementById('drawBtn');
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

btn.addEventListener('click', () => {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw Blue Rectangle
  ctx.fillStyle = '#6366f1';
  ctx.fillRect(10, 10, 150, 50);
  
  // Draw Red Circle
  ctx.beginPath();
  ctx.arc(100, 75, 20, 0, 2 * Math.PI);
  ctx.fillStyle = '#ef4444';
  ctx.fill();
});`,
        quiz: {
          question: 'What JavaScript method is used to get the drawing context of an HTML5 Canvas?',
          options: ['getContext()', 'getDrawingContext()', 'initialize()', 'getContext2D()'],
          answer: 0,
          explanation: 'You call "canvas.getContext(\'2d\')" to retrieve the 2D rendering context reference for drawing shapes.',
        },
      },
      {
        title: 'Web Accessibility: ARIA & landmarks',
        level: 'Experienced',
        summary: 'Design inclusive interfaces using screen-reader attributes, keyboard focus layouts, and proper contrast.',
        content: `
          <h3>HTML Accessibility (a11y)</h3>
          <p>Accessibility ensures that web content is usable for everyone, including those with visual, auditory, or cognitive disabilities.</p>
          
          <div class="concept-point">
            <strong>Key Best Practices:</strong>
            <ul>
              <li><strong>ARIA (Accessible Rich Internet Applications):</strong> Attributes like <code>aria-label</code> and <code>aria-live</code> tell screen-readers what custom components do.</li>
              <li><strong>Tab Index:</strong> Keyboard navigation ordering using the <code>tabindex</code> attribute.</li>
              <li><strong>Alt Text:</strong> Always supply descriptions on images using the <code>alt</code> attribute.</li>
            </ul>
          </div>
        `,
        html: `<!-- Accessible Navigation Toolbar -->
<div role="toolbar" aria-label="Editor Toolbar" class="toolbar">
  <button aria-label="Align Text Left" class="tool-btn">⬅️</button>
  <button aria-label="Align Text Center" class="tool-btn">⏺️</button>
  <button aria-label="Align Text Right" class="tool-btn">➡️</button>
</div>

<p style="margin-top: 15px;">Focus on the buttons and press <strong>Tab</strong> to navigate using your keyboard.</p>`,
        css: `.toolbar {
  background: #e2e8f0;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  gap: 10px;
}
.tool-btn {
  padding: 8px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  cursor: pointer;
}
.tool-btn:focus {
  outline: 3px solid #6366f1;
  background: #cbd5e1;
}`,
        js: `// Screen readers will speak the aria-label whenever a keyboard focus lands on a button.`,
        quiz: {
          question: 'Which HTML attribute provides screen readers with descriptive text for images?',
          options: ['title', 'alt', 'desc', 'aria-image'],
          answer: 1,
          explanation: 'The "alt" (alternative text) attribute is used to provide alternate descriptions for images if they fail to render or are read by accessibility software.',
        },
      },
      {
        title: 'HTML Lists: Ordered, Unordered & Description',
        level: 'Fresher',
        summary: 'Learn how to group related items into structured lists using unordered (bulleted), ordered (numbered), and definition lists.',
        content: `
          <h3>HTML Lists</h3>
          <p>Lists are essential for grouping blocks of items. HTML supports three main types of lists:</p>
          
          <div class="concept-point">
            <strong>Types of Lists:</strong>
            <ul>
              <li><strong>Unordered List (<code>&lt;ul&gt;</code>)</strong>: Bulleted items (uses <code>&lt;li&gt;</code> tags).</li>
              <li><strong>Ordered List (<code>&lt;ol&gt;</code>)</strong>: Sequential, numbered items.</li>
              <li><strong>Description List (<code>&lt;dl&gt;</code>)</strong>: Pairs of terms (<code>&lt;dt&gt;</code>) and descriptions (<code>&lt;dd&gt;</code>), ideal for glossaries.</li>
            </ul>
          </div>
        `,
        html: `<h3>My Web Developer Checklist</h3>
<ul>
  <li>Learn HTML basics</li>
  <li>Master CSS layouts</li>
  <li>Practice JavaScript daily</li>
</ul>

<h3>Steps to Launch a Website</h3>
<ol>
  <li>Write code and files</li>
  <li>Register domain name</li>
  <li>Deploy to web servers</li>
</ol>`,
        css: `ul {
  list-style-type: square;
  color: #4f46e5;
}
ol {
  list-style-type: decimal-leading-zero;
  color: #06b6d4;
}`,
        js: `// Try adding custom items dynamically or changing the list style types!`,
        quiz: {
          question: 'Which tag pair is used to define terms and descriptions inside a glossary list?',
          options: ['<ul> and <li>', '<ol> and <li>', '<dt> and <dd>', '<list> and <item>'],
          answer: 2,
          explanation: 'Description Lists use <dt> (description term) and <dd> (description details/definitions) inside a parent <dl> tag.',
        },
      },
      {
        title: 'HTML Tables: Rows, Columns & Spans',
        level: 'Fresher',
        summary: 'Present tabular data effectively using HTML table rows, column cells, headers, and spanning properties.',
        content: `
          <h3>HTML Tables</h3>
          <p>Tables organize data into grids of cells across rows and columns using specialized semantic markers.</p>
          
          <div class="concept-point">
            <strong>Table Tags & Attributes:</strong>
            <ul>
              <li><code>&lt;table&gt;</code>: The main grid container.</li>
              <li><code>&lt;tr&gt;</code>: Defines a table row (contains cells).</li>
              <li><code>&lt;th&gt;</code>: Table header cell (bold, centered by default).</li>
              <li><code>&lt;td&gt;</code>: Standard table data cell.</li>
              <li><code>colspan</code> / <code>rowspan</code>: Attributes that stretch cells across multiple columns or rows.</li>
            </ul>
          </div>
        `,
        html: `<table border="1" class="data-table">
  <thead>
    <tr>
      <th>Topic</th>
      <th>Duration</th>
      <th>Complexity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>HTML Lists</td>
      <td>10 mins</td>
      <td>Easy</td>
    </tr>
    <tr>
      <td>HTML Tables</td>
      <td>15 mins</td>
      <td>Medium</td>
    </tr>
    <tr>
      <td colspan="2">Total Study Time</td>
      <td>25 mins</td>
    </tr>
  </tbody>
</table>`,
        css: `.data-table {
  width: 100%;
  border-collapse: collapse;
  font-family: sans-serif;
}
.data-table th, .data-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #cbd5e1;
}
.data-table th {
  background-color: #f1f5f9;
  color: #1e293b;
}
.data-table tr:hover {
  background-color: #f8fafc;
}`,
        js: `// Select table rows and add highlighting code if needed!`,
        quiz: {
          question: 'Which attribute allows a single table cell (<td>) to span across three columns?',
          options: ['rowspan="3"', 'colspan="3"', 'width="3"', 'grid-column="span 3"'],
          answer: 1,
          explanation: 'The "colspan" attribute defines the number of columns a cell should stretch horizontally.',
        },
      },
    ],
  },
  css: {
    title: 'CSS3',
    lessons: [
      {
        title: 'Introduction to CSS',
        level: 'Fresher',
        summary: 'Learn what Cascading Style Sheets are, how they link to HTML, and the core ruleset syntax.',
        content: `
          <h3>Introduction to CSS</h3>
          <p>CSS (Cascading Style Sheets) controls the visual presentation and layout of HTML pages. It lets you apply colors, spacing, alignments, and grids to web nodes.</p>
          
          <div class="concept-point">
            <strong>CSS Inclusion Methods:</strong>
            <ul>
              <li><strong>Inline Styles:</strong> Applied directly in the HTML tag (e.g. <code>style="color: red;"</code>).</li>
              <li><strong>Internal Stylesheet:</strong> Declared inside a <code>&lt;style&gt;</code> block within the HTML <code>&lt;head&gt;</code>.</li>
              <li><strong>External Stylesheet:</strong> Linked via a <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code> tag. The most scalable method.</li>
            </ul>
          </div>
        `,
        html: `<h1 id="introHeading">CSS Styling Intro</h1>
<p>Change this heading's color or font-size inside the CSS tab to see it render live!</p>`,
        css: `#introHeading {
  color: #3b82f6;
  font-family: sans-serif;
  font-size: 28px;
}`,
        js: `// Hover properties can also be defined in CSS rulesets.`,
        quiz: {
          question: 'What does CSS stand for?',
          options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Styling Syntax', 'Complex Style Sheets'],
          answer: 0,
          explanation: 'CSS stands for Cascading Style Sheets. "Cascading" means that style rules waterfall down and combine based on priority.',
        },
      },
      {
        title: 'CSS Selectors & Combinators',
        level: 'Fresher',
        summary: 'Learn how to target specific HTML elements using simple selectors, class/ID naming rules, structural combinators, and pseudo-states.',
        content: `
          <h3>CSS Selectors</h3>
          <p>CSS selectors define which HTML elements stylesheet rules are applied to. Understanding selector types and combinators is essential for clean styles.</p>
          
          <div class="concept-point">
            <strong>Core Selectors:</strong>
            <ul>
              <li><strong>Element Selector:</strong> Targets tags directly (e.g. <code>p { color: red; }</code>).</li>
              <li><strong>Class Selector (<code>.classname</code>):</strong> Targets elements with matching classes. Reusable.</li>
              <li><strong>ID Selector (<code>#idname</code>):</strong> Targets a single element with a unique ID. High specificity.</li>
              <li><strong>Attribute Selector (<code>[type="text"]</code>):</strong> Targets elements based on attributes.</li>
            </ul>
          </div>

          <div class="concept-point">
            <strong>Combinators & Pseudo-classes:</strong>
            <ul>
              <li><strong>Descendant (space):</strong> <code>div p</code> targets all &lt;p&gt; inside &lt;div&gt;.</li>
              <li><strong>Child (<code>&gt;</code>):</strong> <code>div &gt; p</code> targets only direct &lt;p&gt; children.</li>
              <li><strong>Pseudo-class (<code>:hover</code>):</strong> Styles elements on cursor hover.</li>
            </ul>
          </div>
        `,
        html: `<div id="mainCard" class="card">
  <h2 class="title">Sreekanth WebTech</h2>
  <p>Learn CSS selectors to style elements selectively.</p>
  <p class="highlight">This paragraph is a child of the card.</p>
  <button type="button" disabled>Locked Button</button>
</div>`,
        css: `/* Class Selector */
.card {
  padding: 20px;
  background: #f1f5f9;
  border-radius: 8px;
  font-family: sans-serif;
}
/* Descendant Combinator */
.card p {
  color: #475569;
}
/* Target by class AND tag */
p.highlight {
  color: #4f46e5;
  font-weight: bold;
}
/* Attribute Selector */
button[disabled] {
  background: #cbd5e1;
  color: #94a3b8;
  cursor: not-allowed;
  padding: 8px;
  border: none;
}
/* Pseudo-Class */
.card:hover {
  border: 1px solid #06b6d4;
  box-shadow: 0 4px 10px rgba(6, 182, 212, 0.15);
}`,
        js: `// Hover the card in the preview pane to see pseudo-classes in action!`,
        quiz: {
          question: 'Which CSS selector targets an element when the user hovers their mouse pointer over it?',
          options: [':focus', ':active', ':hover', ':visited'],
          answer: 2,
          explanation: 'The ":hover" pseudo-class applies styles when the user designates an element with a pointing device (like hovering a mouse cursor).',
        },
      },
      {
        title: 'CSS Box Model & Sizing',
        level: 'Fresher',
        summary: 'Control spacings and borders of elements. Master the core block-level elements sizing variables.',
        content: `
          <h3>CSS Box Model</h3>
          <p>Every element in HTML is modeled as a rectangular box. Managing this box defines the space, dimensions, and styling of elements.</p>
          
          <div class="concept-point">
            <strong>Layers of the Box Model:</strong>
            <ul>
              <li><strong>Content:</strong> The text or media values.</li>
              <li><strong>Padding:</strong> Space immediately surrounding the content inside the border.</li>
              <li><strong>Border:</strong> A line enclosing padding and content.</li>
              <li><strong>Margin:</strong> Transparent outer buffer separating this element from neighbors.</li>
            </ul>
          </div>

          <div class="note-box">
            <strong>Tip:</strong> Use <code>box-sizing: border-box</code> globally. This forces borders and paddings to fit inside width variables, making sizes predictable!
          </div>
        `,
        html: `<div class="box-element">
  Container One
</div>

<div class="box-element alt">
  Container Two
</div>`,
        css: `.box-element {
  /* Box Model Config */
  width: 150px;
  height: 80px;
  padding: 15px;
  border: 4px solid #6366f1;
  margin: 10px;
  background-color: #e0e7ff;
  font-family: sans-serif;
  box-sizing: border-box; /* Width includes border & padding */
}

.box-element.alt {
  border-color: #06b6d4;
  background-color: #ecfeff;
  box-sizing: content-box; /* Width excludes border & padding */
}`,
        js: `// Observe how Box 2 is larger because box-sizing is set to content-box.`,
        quiz: {
          question: 'Which box-sizing value includes padding and border into the element’s total declared width?',
          options: ['padding-box', 'content-box', 'border-box', 'margin-box'],
          answer: 2,
          explanation: '"border-box" dictates that width and height variables cover content, padding, and borders, keeping sizing calculations simple.',
        },
      },
      {
        title: 'Flexbox Layouts',
        level: 'Fresher',
        summary: 'Arrange, align, and wrap items in one dimension (rows or columns) with ease.',
        content: `
          <h3>CSS Flexbox</h3>
          <p>Flexbox is a one-dimensional layout framework that simplifies spacing, alignment, and distribution of elements within a flex container.</p>
          
          <div class="concept-point">
            <strong>Parent Attributes (Container):</strong>
            <ul>
              <li><code>display: flex</code>: Activates flex rules on children.</li>
              <li><code>flex-direction</code>: Sets primary axis (row or column).</li>
              <li><code>justify-content</code>: Aligns elements along the main-axis (start, center, space-between, space-around).</li>
              <li><code>align-items</code>: Aligns elements along the cross-axis.</li>
            </ul>
          </div>
        `,
        html: `<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>`,
        css: `.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f1f5f9;
  padding: 15px;
  height: 150px;
  border-radius: 8px;
}
.flex-item {
  background: #6366f1;
  color: white;
  padding: 15px 25px;
  border-radius: 6px;
  font-family: sans-serif;
}`,
        js: `// Try changing justify-content inside CSS to 'center' or 'space-around' and click Run.`,
        quiz: {
          question: 'Which property aligns flex items along the cross-axis (perpendicular to direction)?',
          options: ['justify-content', 'align-items', 'flex-flow', 'align-content'],
          answer: 1,
          explanation: 'While "justify-content" aligns items along the primary axis, "align-items" aligns elements along the cross-axis.',
        },
      },
      {
        title: 'CSS Grid Layouts',
        level: 'Junior Developer',
        summary: 'Build grid layouts across two dimensions (columns and rows simultaneously) for page scaffolds.',
        content: `
          <h3>CSS Grid</h3>
          <p>Grid is a two-dimensional grid-based layout tool. Unlike Flexbox, which deals with linear tracks, Grid manages both rows and columns at once.</p>
          
          <div class="concept-point">
            <strong>Core Properties:</strong>
            <ul>
              <li><code>display: grid</code>: Starts grid layout.</li>
              <li><code>grid-template-columns</code>: Configures size and numbers of vertical columns (e.g. <code>1fr 2fr 1fr</code>).</li>
              <li><code>grid-gap</code>: Space between row and column cells.</li>
              <li><code>grid-area</code>: Specifies where an item is placed in template layouts.</li>
            </ul>
          </div>
        `,
        html: `<div class="grid-container">
  <div class="item header">Header</div>
  <div class="item menu">Menu</div>
  <div class="item content">Main Content</div>
  <div class="item footer">Footer</div>
</div>`,
        css: `.grid-container {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 60px 150px 50px;
  grid-gap: 10px;
  font-family: sans-serif;
}
.item {
  background: #cbd5e1;
  padding: 10px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-weight: bold;
}
.header {
  grid-column: 1 / span 2;
  background: #6366f1;
  color: white;
}
.menu {
  background: #06b6d4;
  color: white;
}
.content {
  background: #ecfeff;
  color: #0891b2;
}
.footer {
  grid-column: 1 / span 2;
  background: #334155;
  color: white;
}`,
        js: `// Change columns or rows templates to alter sizes.`,
        quiz: {
          question: 'How do you define a grid column that takes up one fractional unit of the remaining space?',
          options: ['1%', '1fr', '1px', '1em'],
          answer: 1,
          explanation: '"fr" stands for fractional unit. "1fr" allocates 1 part of the flexible space available inside the grid layout container.',
        },
      },
      {
        title: 'CSS Variables & Themes',
        level: 'Senior Developer',
        summary: 'Create variables (custom properties) to implement scalable color schemes, sizing systems, and active dark modes.',
        content: `
          <h3>CSS Custom Properties</h3>
          <p>CSS variables allow properties to be declared globally at the root level and dynamically reused or toggled throughout stylesheet files.</p>
          
          <div class="concept-point">
            <strong>Usage Syntax:</strong>
            <ul>
              <li>Declare: <code>--variable-name: value;</code> (usually under <code>:root</code> selector).</li>
              <li>Reference: <code>var(--variable-name)</code>.</li>
              <li>Re-assign: Change it inside a class selector to automatically update children variables.</li>
            </ul>
          </div>
        `,
        html: `<div class="theme-box">
  <h2>Toggleable Theme Card</h2>
  <p>Learn CSS Custom Properties to configure dark theme variables.</p>
  <button id="themeToggle">Toggle Dark Mode</button>
</div>`,
        css: `:root {
  --primary-color: #6366f1;
  --bg-color: #ffffff;
  --text-color: #1e293b;
  --border-color: #e2e8f0;
}

.theme-box {
  background: var(--bg-color);
  color: var(--text-color);
  border: 2px solid var(--border-color);
  padding: 20px;
  border-radius: 8px;
  font-family: sans-serif;
}

button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}`,
        js: `const btn = document.getElementById('themeToggle');
let isDark = false;

btn.addEventListener('click', () => {
  isDark = !isDark;
  const root = document.documentElement;
  
  if (isDark) {
    root.style.setProperty('--bg-color', '#0f172a');
    root.style.setProperty('--text-color', '#f1f5f9');
    root.style.setProperty('--border-color', '#334155');
  } else {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#1e293b');
    root.style.setProperty('--border-color', '#e2e8f0');
  }
});`,
        quiz: {
          question: 'What is the syntax used to retrieve a CSS custom property variable value?',
          options: ['val(--name)', 'variable(--name)', 'var(--name)', '$name'],
          answer: 2,
          explanation: 'The CSS function "var()" retrieves the value of custom variables (e.g. var(--primary-color)).',
        },
      },
      {
        title: 'Animations & Keyframes',
        level: 'Experienced',
        summary: 'Build hardware-accelerated animations using transitions, transforms, and custom keyframes.',
        content: `
          <h3>CSS Keyframe Animations</h3>
          <p>Keyframes give you complete control over intermediary stages of CSS style animations during transition stages.</p>
          
          <div class="concept-point">
            <strong>Animation Parameters:</strong>
            <ul>
              <li><code>@keyframes</code>: Outlines the percentages and properties changing (e.g., from/to, or 0% to 100%).</li>
              <li><code>animation-name</code>: References keyframe rule identifier.</li>
              <li><code>animation-duration</code>: Time of animation loops.</li>
              <li><code>animation-iteration-count</code>: Defines repeating loops (e.g., <code>infinite</code> or integers).</li>
            </ul>
          </div>
        `,
        html: `<div class="spinning-loader"></div>
<p style="margin-top: 20px; font-family: sans-serif;">Spinning CSS components using custom keyframes.</p>`,
        css: `.spinning-loader {
  width: 50px;
  height: 50px;
  border: 5px solid #cbd5e1;
  border-top-color: #6366f1;
  border-radius: 50%;
  
  /* Animation Hook */
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
        js: `// Keyframe animations run automatically on GPU hardware threads.`,
        quiz: {
          question: 'Which keyword creates the rules for a CSS animation sequence timeline?',
          options: ['@animate', '@keyframes', '@transitions', '@timeline'],
          answer: 1,
          explanation: '"@keyframes" is the rule modifier that defines states for an animation lifecycle.',
        },
      },
    ],
  },
  javascript: {
    title: 'JavaScript',
    lessons: [
      {
        title: 'Introduction to JavaScript',
        level: 'Fresher',
        summary: 'Learn what JavaScript is, its role in modern web development, and how to execute basic code.',
        content: `
          <h3>Introduction to JavaScript</h3>
          <p>JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. It is the language that makes websites interactive and alive.</p>
          
          <div class="concept-point">
            <strong>Key Features:</strong>
            <ul>
              <li><strong>Client-Side Interaction:</strong> Runs inside web browsers to dynamically update HTML and CSS styles.</li>
              <li><strong>Single-Threaded:</strong> Processes one command line at a time, utilizing an event loop scheduler for async tasks.</li>
              <li><strong>Full-Stack Reach:</strong> Runs on the server side using the Node.js runtime environments.</li>
            </ul>
          </div>
        `,
        html: `<h3>Interactive JS Sandbox</h3>
<p>JavaScript code executes inside the browser tab dynamically.</p>
<button id="sayHelloBtn">Click to run JS</button>
<p id="greetText" style="color: #6366f1; font-weight: bold; font-family: sans-serif; margin-top: 10px;"></p>`,
        css: `button { background: #6366f1; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }`,
        js: `document.getElementById('sayHelloBtn').addEventListener('click', () => {
  document.getElementById('greetText').innerText = 'Welcome to Sreekanth WebTech! JavaScript is running successfully!';
});`,
        quiz: {
          question: 'Which of the following is true about JavaScript?',
          options: ['It is a compiled-only markup language', 'It can run on both client-side browsers and server-side runtimes', 'It is identical to Java', 'It can only style layouts'],
          answer: 1,
          explanation: 'JavaScript is a multi-platform scripting language. It executes in client-side web browsers, and also on server environments via Node.js.',
        },
      },
      {
        title: 'Variables & Data Types',
        level: 'Fresher',
        summary: 'Learn variables scope storage (let, const) and differences between primitives and objects.',
        content: `
          <h3>JS Data Values & variables</h3>
          <p>JavaScript is a dynamically-typed scripting language. Variables store values that fall under primitive types or reference objects.</p>
          
          <div class="concept-point">
            <strong>Variable Scopes:</strong>
            <ul>
              <li><code>const</code>: Scope-locked variable that cannot be reassigned. Use by default.</li>
              <li><code>let</code>: Scope-locked variable that permits reassignment.</li>
              <li><code>var</code>: Old function-scoped keyword. Avoid due to scoping bugs.</li>
            </ul>
          </div>
        `,
        html: `<div id="output" style="font-family: monospace; font-size: 16px; padding: 15px; background: #f8fafc; border-radius: 6px;"></div>`,
        css: ``,
        js: `const name = "Sreekanth WebTech";
let age = 5;
const skills = ["HTML", "CSS", "JS"];
const isLearning = true;

// Re-assignment
age = 6; 

const out = document.getElementById('output');
out.innerHTML = \`
  <strong>Name:</strong> \${name}<br>
  <strong>Age:</strong> \${age} years online<br>
  <strong>Skills Array:</strong> \${skills.join(', ')}<br>
  <strong>Booleans:</strong> \${isLearning}
\`;`,
        quiz: {
          question: 'Which variable keyword is blocked from being reassigned new values?',
          options: ['let', 'var', 'const', 'assign'],
          answer: 2,
          explanation: 'Variables declared with "const" are block-scoped constants and cannot have their value reassigned.',
        },
      },
      {
        title: 'JavaScript Functions',
        level: 'Fresher',
        summary: 'Learn arrow function syntax, parameters, local return values, and lexical scopes.',
        content: `
          <h3>Function syntax</h3>
          <p>Functions wrap reusable code blocks. ES6 introduced arrow functions, offering a shorter syntax and keeping contextual scopes.</p>
          
          <div class="concept-point">
            <strong>Writing Styles:</strong>
            <ul>
              <li>Standard Function: <code>function add(a, b) { return a + b; }</code></li>
              <li>Arrow Function: <code>const add = (a, b) => a + b;</code></li>
            </ul>
          </div>
        `,
        html: `<input type="number" id="numA" value="5"> + 
<input type="number" id="numB" value="10">
<button id="calcBtn">=</button>
<span id="result" style="font-weight: bold; margin-left: 10px;"></span>`,
        css: `input { width: 60px; padding: 6px; }
button { background: #6366f1; color: white; border: none; padding: 6px 12px; border-radius: 4px; }`,
        js: `// Arrow function syntax
const sumNumbers = (a, b) => Number(a) + Number(b);

document.getElementById('calcBtn').addEventListener('click', () => {
  const valA = document.getElementById('numA').value;
  const valB = document.getElementById('numB').value;
  
  // Call function
  const total = sumNumbers(valA, valB);
  
  document.getElementById('result').innerText = total;
});`,
        quiz: {
          question: 'How is an ES6 arrow function written to return a value without explicit "return" keyword?',
          options: ['(x) => { x }', '(x) => return x', '(x) => x', '(x) => returns(x)'],
          answer: 2,
          explanation: 'Arrow functions support implicit return when written on a single line without braces (e.g. (x) => x).',
        },
      },
      {
        title: 'JavaScript Arrays & Methods',
        level: 'Fresher',
        summary: 'Master JavaScript arrays and utility methods like map(), filter(), and reduce() to loop and manipulate list data.',
        content: `
          <h3>JavaScript Arrays & Methods</h3>
          <p>An array is a single variable that can hold multiple values under a single name, ordered by index numbers (starting at 0).</p>
          
          <div class="concept-point">
            <strong>Essential Array Methods:</strong>
            <ul>
              <li><code>push(item)</code> / <code>pop()</code>: Add or remove items at the end of an array.</li>
              <li><code>map(callback)</code>: Creates a new array by transforming every element in the original list.</li>
              <li><code>filter(callback)</code>: Creates a new array containing only items that satisfy a specific condition.</li>
              <li><code>reduce(callback, initial)</code>: Aggregates list items down into a single summary value (e.g. sums).</li>
            </ul>
          </div>
        `,
        html: `<div style="font-family:sans-serif;">
  <h3>Course Prices (Original: [10, 20, 30, 40, 50])</h3>
  <button id="filterBtn">Filter > 25</button>
  <button id="discountBtn">Apply 20% Discount</button>
  <button id="sumBtn">Calculate Total Cost</button>
  
  <div id="arrayOutput" style="margin-top:15px; font-family:monospace; font-size:15px; color:#4f46e5;">
    Current list: [10, 20, 30, 40, 50]
  </div>
</div>`,
        css: `button { background: #6366f1; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; margin-right: 5px; }`,
        js: `let prices = [10, 20, 30, 40, 50];
const output = document.getElementById('arrayOutput');

document.getElementById('filterBtn').addEventListener('click', () => {
  const filtered = prices.filter(p => p > 25);
  output.innerHTML = 'Filtered list (> 25): [' + filtered.join(', ') + ']';
});

document.getElementById('discountBtn').addEventListener('click', () => {
  const discounted = prices.map(p => p * 0.8);
  output.innerHTML = 'Discounted prices (20% off): [' + discounted.join(', ') + ']';
});

document.getElementById('sumBtn').addEventListener('click', () => {
  const total = prices.reduce((sum, p) => sum + p, 0);
  output.innerHTML = 'Total Sum: $' + total;
});`,
        quiz: {
          question: 'Which array method creates a new array by transforming every element of an existing array?',
          options: ['filter()', 'map()', 'reduce()', 'forEach()'],
          answer: 1,
          explanation: 'The "map()" method returns a new array where each item has been processed and modified by a callback function.',
        },
      },
      {
        title: 'DOM Manipulation & Dynamic Elements',
        level: 'Junior Developer',
        summary: 'Select elements, dynamically toggle class lists, edit inline styles, and access detailed event properties.',
        content: `
          <h3>DOM Manipulation & Class Lists</h3>
          <p>JavaScript interacts with the browser DOM to change styles, toggle active class names, and listen to event bubbles.</p>
          
          <div class="concept-point">
            <strong>Key Operations:</strong>
            <ul>
              <li><code>element.style.propertyName</code>: Changes inline styling rules (e.g. <code>style.color = "blue"</code>).</li>
              <li><code>element.classList.toggle("classname")</code>: Safely adds or removes classes without replacing existing ones.</li>
              <li><code>event.target</code>: References the exact element that triggered the clicked action inside callback scopes.</li>
            </ul>
          </div>
        `,
        html: `<div id="styleBox" class="panel-box">
  <h4>Dynamic Preview Panel</h4>
  <p>Practice toggling styling attributes and class parameters.</p>
</div>

<div style="margin-top: 15px;">
  <button id="colorBtn">Toggle Color</button>
  <button id="classBtn">Toggle Glow border</button>
</div>`,
        css: `.panel-box {
  padding: 15px;
  background: #f1f5f9;
  border-radius: 6px;
  font-family: sans-serif;
  border: 2px solid #cbd5e1;
  transition: all 0.3s;
}
.glow-border {
  border-color: #06b6d4 !important;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.4);
}
button {
  background: #06b6d4;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}`,
        js: `const box = document.getElementById('styleBox');

document.getElementById('colorBtn').addEventListener('click', () => {
  // Toggle inline text color
  if (box.style.color === 'rgb(99, 102, 241)' || box.style.color === '#6366f1') {
    box.style.color = '#1e293b';
  } else {
    box.style.color = '#6366f1';
  }
});

document.getElementById('classBtn').addEventListener('click', () => {
  // Toggle CSS class
  box.classList.toggle('glow-border');
});`,
        quiz: {
          question: 'Which element property is used to add, remove, or toggle active CSS classes on an element?',
          options: ['style', 'className', 'classList', 'classes'],
          answer: 2,
          explanation: 'The "classList" property exposes utility methods like add(), remove(), toggle(), and contains() to edit CSS class variables.',
        },
      },
      {
        title: 'Async JS: Promises & Fetch',
        level: 'Senior Developer',
        summary: 'Interact with external APIs using Fetch queries, handle Promises, and manage async/await parameters.',
        content: `
          <h3>Asynchronous JavaScript</h3>
          <p>Web APIs are asynchronous. JS uses Promises and async/await syntax to handle data fetching without freezing user screens.</p>
          
          <div class="concept-point">
            <strong>Async/Await Syntax:</strong>
            <pre><code>async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}</code></pre>
          </div>
        `,
        html: `<button id="fetchBtn">Load Mock Profile</button>
<div id="profile" style="margin-top: 15px; padding: 15px; border-radius: 6px; background: #f8fafc; display: none;">
  <p><strong>Name:</strong> <span id="userName"></span></p>
  <p><strong>Email:</strong> <span id="userEmail"></span></p>
</div>`,
        css: `button { background: #6366f1; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }`,
        js: `const btn = document.getElementById('fetchBtn');
const profileDiv = document.getElementById('profile');

btn.addEventListener('click', async () => {
  btn.innerText = 'Loading...';
  try {
    // Fetch random user API
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    
    document.getElementById('userName').innerText = user.name;
    document.getElementById('userEmail').innerText = user.email;
    profileDiv.style.display = 'block';
  } catch (error) {
    alert('API Fetch failed.');
  } finally {
    btn.innerText = 'Load Mock Profile';
  }
});`,
        quiz: {
          question: 'Which block handles errors in an async/await execution block?',
          options: ['then / catch', 'try / catch', 'resolve / reject', 'if / else'],
          answer: 1,
          explanation: 'In async/await, errors are thrown as normal exceptions, meaning standard try/catch blocks handle them directly.',
        },
      },
      {
        title: 'ES6+ & OOP Class Basics',
        level: 'Experienced',
        summary: 'Understand destructurings, spread arguments, and Object Oriented JavaScript class setups.',
        content: `
          <h3>ES6+ & Object-Oriented JS</h3>
          <p>Modern JS includes syntactical features like object destructuring, spread operators, and class declarations for clean code organization.</p>
          
          <div class="concept-point">
            <strong>OOP Class Example:</strong>
            <pre><code>class Developer {
  constructor(name, lang) {
    this.name = name;
    this.lang = lang;
  }
  greet() {
    return \`Hello \${this.name}\`;
  }
}</code></pre>
          </div>
        `,
        html: `<div id="output" style="font-family: monospace;"></div>`,
        css: ``,
        js: `// Class definition
class Course {
  constructor(title, difficulty) {
    this.title = title;
    this.difficulty = difficulty;
  }
  getInfo() {
    return \`Course: \${this.title} | Level: \${this.difficulty}\`;
  }
}

// Spread & Destructuring
const baseStats = { students: 1000, duration: '20 hours' };
const fullStats = { ...baseStats, author: 'Sreekanth' }; // Spread

const { students, author } = fullStats; // Destructuring

const htmlCourse = new Course('HTML5 for Freshers', 'Beginner');

document.getElementById('output').innerHTML = \`
  <strong>Class Instance:</strong> \${htmlCourse.getInfo()}<br>
  <strong>Destructured Student Count:</strong> \${students}<br>
  <strong>Destructured Instructor:</strong> \${author}
\`;`,
        quiz: {
          question: 'Which JS operator is represented by three consecutive dots (...) to extract values?',
          options: ['Rest operator', 'Destructure operator', 'Spread operator', 'Extract operator'],
          answer: 2,
          explanation: 'The spread operator (...) copies elements or properties from arrays/objects into new collections.',
        },
      },
    ],
  },
  react: {
    title: 'React.js',
    lessons: [
      {
        title: 'Introduction to React.js',
        level: 'Fresher',
        summary: 'Learn what React.js is, its core declarative nature, component-based system, and virtual DOM basics.',
        content: `
          <h3>Introduction to React.js</h3>
          <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces, developed by Facebook (Meta).</p>
          
          <div class="concept-point">
            <strong>Core Pillars of React:</strong>
            <ul>
              <li><strong>Declarative UI:</strong> React makes it painless to create interactive UIs. Design simple views for each state, and React will update and render just the right components.</li>
              <li><strong>Component-Based:</strong> Build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
              <li><strong>Virtual DOM:</strong> Instead of manipulating the browser DOM directly, React updates a virtual representation in memory first, minimizing performance-heavy repaints.</li>
            </ul>
          </div>
        `,
        html: `<h3>Welcome to React</h3>
<div id="rootNode"></div>`,
        css: `.react-pill { background: #0ea5e9; color: white; padding: 4px 10px; border-radius: 50px; font-family: sans-serif; font-size: 13px; font-weight: bold; }`,
        js: `document.getElementById('rootNode').innerHTML = \`
  <p style="font-family: sans-serif;">
    <span class="react-pill">⚛️ Rendered Node</span><br><br>
    React updates views dynamically in response to state transitions.
  </p>
\`;`,
        quiz: {
          question: 'Who developed and maintains the React.js library?',
          options: ['Google', 'Microsoft', 'Facebook (Meta)', 'Twitter'],
          answer: 2,
          explanation: 'React.js was created by Jordan Walke, a software engineer at Facebook (Meta), and is maintained by Meta and the open-source community.',
        },
      },
      {
        title: 'JSX & Component Trees',
        level: 'Fresher',
        summary: 'Understand JSX syntax, rendering sub-components, and nesting visual trees.',
        content: `
          <h3>What is React JSX?</h3>
          <p>React is a component-driven frontend library. JSX is a syntax extension for Javascript that lets you write HTML-like elements inside script files.</p>
          
          <div class="concept-point">
            <strong>Key Features:</strong>
            <ul>
              <li><strong>Virtual DOM:</strong> React tracks differences in a lightweight virtual copy and only updates real nodes where changes occur.</li>
              <li><strong>JSX Expression Evaluator:</strong> Insert any Javascript variable inside curly braces <code>{name}</code>.</li>
            </ul>
          </div>
        `,
        html: `<!-- Conceptual template: JSX compiles HTML and Script values together -->
<div id="mockApp"></div>`,
        css: `.react-component { border: 1px dashed #6366f1; padding: 10px; margin: 10px; font-family: sans-serif; }`,
        js: `// Simulated compilation of a React Functional Component
const TitleComponent = () => '<h2>⚛️ Title Component Header</h2>';
const CardComponent = (props) => \`
  <div class="react-component">
    \${TitleComponent()}
    <p>This is a component render tree. Props passed: <strong>\${props.text}</strong></p>
  </div>
\`;

document.getElementById('mockApp').innerHTML = CardComponent({ text: 'Fresher React Data' });`,
        quiz: {
          question: 'What is JSX in React?',
          options: ['A styling extension', 'JavaScript XML syntax compiler extension', 'A router component', 'A state store'],
          answer: 1,
          explanation: 'JSX stands for JavaScript XML. It allows us to write HTML tags inside Javascript files, compiling down to React.createElement commands.',
        },
      },
      {
        title: 'Props & State Management',
        level: 'Fresher',
        summary: 'Understand local useState states vs component configuration inputs (props).',
        content: `
          <h3>State vs Props</h3>
          <p>Understanding variables management is essential for React. elements communicate and re-render based on local States and incoming Props.</p>
          
          <div class="concept-point">
            <strong>Definitions:</strong>
            <ul>
              <li><strong>Props:</strong> Configuration variables passed *down* from parent elements. They are read-only/immutable.</li>
              <li><strong>State:</strong> Dynamic variables maintained *inside* the component. Toggled by setting functions.</li>
            </ul>
          </div>
        `,
        html: `<div id="interactiveRoot"></div>`,
        css: `.counter-box { font-family: sans-serif; text-align: center; }
button { background: #6366f1; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer; }`,
        js: `// Simulate React useState hook behavior
let stateVal = 0;

const render = () => {
  document.getElementById('interactiveRoot').innerHTML = \`
    <div class="counter-box">
      <h3>Simulated State Counter</h3>
      <h1 style="font-size: 3rem;">\${stateVal}</h1>
      <button id="addCount">Increment Count</button>
    </div>
  \`;
  
  document.getElementById('addCount').addEventListener('click', () => {
    stateVal += 1;
    render(); // Re-render on state change
  });
};

render();`,
        quiz: {
          question: 'Which of the following describes "Props" in React components?',
          options: ['Mutable inside the component', 'Created inside the component constructor', 'Read-only properties passed down from parents', 'Private database variables'],
          answer: 2,
          explanation: 'Props are configuration values passed into elements by parents. They are read-only and immutable for the child component.',
        },
      },
      {
        title: 'React Hooks: useState, useEffect & useRef',
        level: 'Junior Developer',
        summary: 'Master key React hooks including useState for state tracking, useEffect for side-effects, and useRef for persistent reference variables.',
        content: `
          <h3>React Hooks: useState, useEffect & useRef</h3>
          <p>Hooks allow functional components to access component lifecycle states and directly manipulate DOM elements.</p>
          
          <div class="concept-point">
            <strong>Hook Configurations:</strong>
            <ul>
              <li><code>useState(val)</code>: Manages state items that trigger a re-render when set.</li>
              <li><code>useEffect(callback, deps)</code>: Runs asynchronous tasks on mount, updates, or unmounts.</li>
              <li><code>useRef(initial)</code>: Returns a mutable reference object whose <code>.current</code> property persists across renders. Changing it does <strong>not</strong> trigger a re-render. Ideal for referencing direct DOM nodes.</li>
            </ul>
          </div>

          <div class="note-box">
            <strong>useRef Tip:</strong> Use <code>useRef</code> to store input field node targets, timers, or tracking previous states without starting re-render loops.
          </div>
        `,
        html: `<div style="font-family:sans-serif;">
  <h3>useRef DOM Input Focus</h3>
  <input type="text" id="myInput" placeholder="Click button to focus me...">
  <button id="focusBtn">Focus Input</button>
  
  <h3 style="margin-top:20px;">useRef Click Counter (No Re-renders)</h3>
  <button id="clickBtn">Click (Check console)</button>
  <p>Render Count: <span id="renderIndicator" style="font-weight:bold; color:red;">1</span></p>
</div>`,
        css: `button { background: #6366f1; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px; }
input { padding: 8px; border: 1px solid #cbd5e1; border-radius: 4px; }`,
        js: `// Simulated useRef hook behavior
let renderCount = 1;
const countRef = { current: 0 }; // Persistent reference

document.getElementById('focusBtn').addEventListener('click', () => {
  const inputEl = document.getElementById('myInput');
  inputEl.focus(); // Direct DOM access
  inputEl.style.borderColor = '#06b6d4';
});

document.getElementById('clickBtn').addEventListener('click', () => {
  countRef.current += 1;
  console.log('Clicks stored in ref.current:', countRef.current);
  alert('Ref count increased to ' + countRef.current + ' (Visual Render count is still ' + renderCount + ')');
});`,
        quiz: {
          question: 'Which Hook returns a persistent mutable object that does NOT trigger a component re-render when altered?',
          options: ['useState', 'useRef', 'useEffect', 'useMemo'],
          answer: 1,
          explanation: 'useRef returns a mutable object with a ".current" property. Updating ".current" does not trigger component re-render cycles.',
        },
      },
      {
        title: 'React State Hooks: useContext & useReducer',
        level: 'Senior Developer',
        summary: 'Manage complex component tree parameters using useContext providers and useReducer action handlers.',
        content: `
          <h3>React State: useContext & useReducer</h3>
          <p>As state systems scale, simple useState variables become complex. React provides useContext and useReducer hooks to clean up parameters.</p>
          
          <div class="concept-point">
            <strong>Hook Targets:</strong>
            <ul>
              <li><code>useContext(ContextObj)</code>: Consumes value parameters from Context Providers, resolving prop drilling.</li>
              <li><code>useReducer(reducer, initial)</code>: Manages state using action dispatch cycles, matching Redux architectures.</li>
            </ul>
          </div>
          
          <div class="concept-point">
            <strong>useReducer Pattern:</strong>
            <pre><code>const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    default: return state;
  }
}</code></pre>
          </div>
        `,
        html: `<div id="reducerRoot" style="font-family:sans-serif;"></div>`,
        css: `button { background: #06b6d4; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; }`,
        js: `// Simulated useReducer flow
let state = { count: 0 };

const reducer = (currentState, action) => {
  switch (action.type) {
    case 'ADD': return { count: currentState.count + 1 };
    case 'SUB': return { count: currentState.count - 1 };
    default: return currentState;
  }
};

const dispatch = (action) => {
  state = reducer(state, action);
  render();
};

const render = () => {
  document.getElementById('reducerRoot').innerHTML = \`
    <h3>Reducer Count: \${state.count}</h3>
    <button id="addAct">Add (Dispatch ADD)</button>
    <button id="subAct" style="margin-left:10px;">Sub (Dispatch SUB)</button>
  \`;
  
  document.getElementById('addAct').addEventListener('click', () => dispatch({ type: 'ADD' }));
  document.getElementById('subAct').addEventListener('click', () => dispatch({ type: 'SUB' }));
};

render();`,
        quiz: {
          question: 'What is the function of the "dispatch" method returned by the useReducer hook?',
          options: ['It re-orders state lists', 'It triggers side effects', 'It sends an action object to the reducer to update state', 'It binds CSS components'],
          answer: 2,
          explanation: 'The dispatch function sends an action object (describing "what happened") to the reducer function to compute the next state.',
        },
      },
      {
        title: 'React Performance Hooks: useMemo & useCallback',
        level: 'Experienced',
        summary: 'Optimize component rendering by memoizing heavy calculation values and callback functions.',
        content: `
          <h3>useMemo vs useCallback Performance Hooks</h3>
          <p>Prevent expensive re-render calculations. React provides two memoization hooks to cache values and instances:</p>
          
          <div class="concept-point">
            <strong>Hook Comparison:</strong>
            <ul>
              <li><code>useMemo(() => computeValue(a, b), [a, b])</code>: Caches the <strong>returned value</strong> of a function. Recalculates only when dependency keys update.</li>
              <li><code>useCallback(() => { handleAction() }, [a])</code>: Caches the <strong>function instance itself</strong>. Prevents child elements from re-rendering if they receive the callback prop.</li>
            </ul>
          </div>
        `,
        html: `<div id="perfSimulator"></div>`,
        css: `button { background: #6366f1; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; }`,
        js: `let cachedVal = null;
let runCount = 0;

const heavyMath = (n) => {
  runCount += 1;
  return n * n * n;
};

const renderPerf = () => {
  const container = document.getElementById('perfSimulator');
  
  // Simulate useMemo
  if (cachedVal === null) {
    cachedVal = heavyMath(12);
  }
  
  container.innerHTML = \`
    <div style="font-family:sans-serif;">
      <h3>useMemo Simulator</h3>
      <p>Cached Computation Result: <strong>\${cachedVal}</strong></p>
      <p>Heavymethod Run Count: <strong>\${runCount}</strong></p>
      <button id="renderBtn">Trigger Re-render Tree</button>
    </div>
  \`;
  
  document.getElementById('renderBtn').addEventListener('click', () => {
    // Render loop triggers without recalculating the heavy math value
    renderPerf();
  });
};

renderPerf();`,
        quiz: {
          question: 'What is the primary difference between useMemo and useCallback hooks?',
          options: [
            'useMemo caches state, useCallback caches references',
            'useMemo caches a computed value, useCallback caches a function instance',
            'useMemo handles side-effects, useCallback handles state',
            'useMemo is for styling, useCallback is for logic'
          ],
          answer: 1,
          explanation: 'useMemo returns a memoized value of a function, while useCallback returns a memoized callback function itself.',
        },
      },
    ],
  },
  node: {
    title: 'Node.js',
    lessons: [
      {
        title: 'Introduction to Node.js',
        level: 'Fresher',
        summary: 'Learn what Node.js is, its backend execution environment, and how it differs from browser JavaScript.',
        content: `
          <h3>Introduction to Node.js</h3>
          <p>Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to write server-side scripts to produce dynamic web page content.</p>
          
          <div class="concept-point">
            <strong>Key Concepts:</strong>
            <ul>
              <li><strong>Runtime vs Language:</strong> JavaScript is the programming language, whereas Node.js is the runtime environment that lets you execute JS outside the browser.</li>
              <li><strong>Built-in Modules:</strong> Node provides access to OS-level system modules (like file management and servers) not available in standard client-side browser JS.</li>
              <li><strong>NPM (Node Package Manager):</strong> The world's largest registry of open-source libraries and reusable modules.</li>
            </ul>
          </div>
        `,
        html: `<h3>Node.js Server Environment</h3>
<div id="nodeRootNode"></div>`,
        css: `.node-badge { background: #22c55e; color: white; padding: 4px 10px; border-radius: 4px; font-family: monospace; }`,
        js: `document.getElementById('nodeRootNode').innerHTML = \`
  <p style="font-family: sans-serif;">
    Server Status: <span class="node-badge">Active (Node.js runtime)</span><br><br>
    Node.js handles server requests concurrently using a single-threaded event loop.
  </p>
\`;`,
        quiz: {
          question: 'What is Node.js?',
          options: ['A new programming language', 'A JavaScript runtime environment', 'A frontend styling library', 'A database engine'],
          answer: 1,
          explanation: 'Node.js is not a separate language, but rather a runtime environment built on Chrome’s V8 engine that runs standard JavaScript on servers.',
        },
      },
      {
        title: 'Node.js Core & Modules',
        level: 'Fresher',
        summary: 'Understand the Javascript runtime environment, process modules, and require/import dependencies.',
        content: `
          <h3>What is Node.js?</h3>
          <p>Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine that runs JS server-side.</p>
          
          <div class="concept-point">
            <strong>Key Architectural Concepts:</strong>
            <ul>
              <li><strong>Non-blocking I/O:</strong> Node runs on a single thread and processes asynchronous requests concurrently without waiting.</li>
              <li><strong>Event Loop:</strong> The core scheduler that delegates async OS tasks and executes JS callbacks.</li>
            </ul>
          </div>
        `,
        html: `<div id="consoleOut" style="background:#0f172a; color:#10b981; font-family:monospace; padding:15px; border-radius:6px;"></div>`,
        css: ``,
        js: `// Simulating how Node processes async event loops
const logs = [];
logs.push("1. Process Script Startup");

setTimeout(() => {
  logs.push("3. Async Timeout Task finished");
  printLogs();
}, 100);

logs.push("2. Heavy calculations complete");

function printLogs() {
  document.getElementById('consoleOut').innerHTML = logs.join('<br>');
}
printLogs();`,
        quiz: {
          question: 'What engine does Node.js use to compile and execute JavaScript code?',
          options: ['Chakra', 'SpiderMonkey', 'Chrome V8', 'JavaScriptCore'],
          answer: 2,
          explanation: 'Node.js uses Chrome’s V8 engine, written in C++, to compile JavaScript directly into native machine code.',
        },
      },
      {
        title: 'File System & HTTP module',
        level: 'Junior Developer',
        summary: 'Read and write local server files, and create a raw HTTP server using core Node.js modules.',
        content: `
          <h3>Core File Systems and HTTP APIs</h3>
          <p>Node.js provides standard built-in libraries like <code>fs</code> (File System) and <code>http</code> to manage files and spin up local network channels.</p>
          
          <div class="concept-point">
            <strong>Core Modules:</strong>
            <ul>
              <li><code>const http = require('http');</code>: Handles web requests.</li>
              <li><code>const fs = require('fs');</code>: Edits files.</li>
            </ul>
          </div>
        `,
        html: `<div id="apiResponse" style="font-family:monospace; padding:15px; background:#f8fafc; border-radius:6px;">
  Sending mock request to Node HTTP Server...
</div>`,
        css: ``,
        js: `// Simulated HTTP server routing
const mockHttpServer = (requestPath) => {
  if (requestPath === '/') {
    return { status: 200, body: 'Welcome to Sreekanth WebTech Server!' };
  } else if (requestPath === '/data') {
    return { status: 200, body: JSON.stringify({ message: 'Dynamic API JSON' }) };
  }
  return { status: 404, body: 'Not Found' };
};

setTimeout(() => {
  const result = mockHttpServer('/data');
  document.getElementById('apiResponse').innerHTML = \`
    <strong>Status:</strong> \${result.status}<br>
    <strong>Headers:</strong> application/json<br>
    <strong>Body:</strong> \${result.body}
  \`;
}, 800);`,
        quiz: {
          question: 'Which built-in Node.js module is used to read and write files?',
          options: ['file', 'fs', 'path', 'http'],
          answer: 1,
          explanation: 'The "fs" (File System) core module provides synchronous and asynchronous APIs to interact with local files.',
        },
      },
      {
        title: 'Express.js & REST API Design',
        level: 'Junior Developer',
        summary: 'Construct an Express server framework and set up GET, POST, and PUT REST endpoints.',
        content: `
          <h3>Building APIs with Express</h3>
          <p>Express.js is a minimalist web framework for Node that simplifies routing, request parsing, and middle-layer functions.</p>
          
          <div class="concept-point">
            <strong>Express Boilerplate:</strong>
            <pre><code>const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({ success: true });
});

app.listen(3000);</code></pre>
          </div>
        `,
        html: `<div style="font-family:sans-serif;">
  <h3>Simulated Express Client API Client</h3>
  <button id="postBtn" style="background:#6366f1; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer;">
    POST new user details
  </button>
  <div id="output" style="margin-top:15px; font-family:monospace; color:blue;"></div>
</div>`,
        css: ``,
        js: `// Mock Express backend route handler
const usersDb = [];

const expressPostUserHandler = (reqBody) => {
  if (!reqBody.name) {
    return { status: 400, data: { error: 'Name is required' } };
  }
  const newUser = { id: usersDb.length + 1, name: reqBody.name };
  usersDb.push(newUser);
  return { status: 201, data: newUser };
};

document.getElementById('postBtn').addEventListener('click', () => {
  const result = expressPostUserHandler({ name: 'Sreekanth Learner' });
  document.getElementById('output').innerHTML = \`
    <strong>Server Route:</strong> POST /api/users<br>
    <strong>Status Code:</strong> \${result.status} Created<br>
    <strong>Response JSON:</strong> \${JSON.stringify(result.data)}
  \`;
});`,
        quiz: {
          question: 'What Express.js method is used to define a POST router endpoint?',
          options: ['app.get()', 'app.post()', 'app.put()', 'app.route()'],
          answer: 1,
          explanation: '"app.post(\'/route\', handler)" creates a router endpoint that listens for HTTP POST request submissions.',
        },
      },
      {
        title: 'Middleware, Security & JWT Auth',
        level: 'Senior Developer',
        summary: 'Protect API routers using middle-layer check functions, JSON Web Tokens (JWT), and security headers.',
        content: `
          <h3>Express Middleware & JWT</h3>
          <p>Middlewares are functions that execute between receiving a request and sending a response. They are used for authentication checks and log audits.</p>
          
          <div class="concept-point">
            <strong>JWT Tokens:</strong>
            <p>JSON Web Tokens sign user credentials on login, sending a string key to the client. The client attaches this to authorization headers to access protected resources securely.</p>
          </div>
        `,
        html: `<div style="font-family:sans-serif;">
  <button id="loginBtn" style="background:#06b6d4; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">1. User Login</button>
  <button id="fetchSecuredBtn" style="background:#cbd5e1; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; margin-left:10px;">2. Access Protected Route</button>
  <div id="output" style="margin-top:15px; font-family:monospace;"></div>
</div>`,
        css: ``,
        js: `let savedToken = null;

const mockLoginRoute = () => {
  // Sign credentials
  savedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user_id_1';
  return { token: savedToken };
};

const mockSecuredMiddlewareRoute = (headers) => {
  const authHeader = headers['Authorization'];
  if (!authHeader || authHeader !== 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.user_id_1') {
    return { status: 401, error: 'Unauthorized: Invalid JWT' };
  }
  return { status: 200, data: 'Secret server dashboard info!' };
};

const logDiv = document.getElementById('output');

document.getElementById('loginBtn').addEventListener('click', () => {
  const res = mockLoginRoute();
  logDiv.innerHTML += 'Login Successful! Token Saved.<br>';
  document.getElementById('fetchSecuredBtn').style.background = '#6366f1';
  document.getElementById('fetchSecuredBtn').style.color = 'white';
});

document.getElementById('fetchSecuredBtn').addEventListener('click', () => {
  // Send request with headers
  const mockHeaders = { 'Authorization': savedToken ? 'Bearer ' + savedToken : '' };
  const res = mockSecuredMiddlewareRoute(mockHeaders);
  
  if (res.status === 200) {
    logDiv.innerHTML += '<span style="color:green;">Access Granted: ' + res.data + '</span><br>';
  } else {
    logDiv.innerHTML += '<span style="color:red;">Access Denied: ' + res.error + '</span><br>';
  }
});`,
        quiz: {
          question: 'Where should a JWT token be attached in a standard client API request to access secured routes?',
          options: ['In the URL params', 'In the request body JSON', 'In the Authorization HTTP header', 'In the Cookie name'],
          answer: 2,
          explanation: 'For secure API requests, JWT tokens are attached in the "Authorization" HTTP header as a "Bearer <token>" value.',
        },
      },
      {
        title: 'Streams, Buffers & Event Loop',
        level: 'Experienced',
        summary: 'Explore node runtime threads, event loop phases, cluster processes, and file stream pipe structures.',
        content: `
          <h3>Scaling Node: Streams & Clusters</h3>
          <p>For high-throughput applications, Node uses Streams to process data in chunks without loading entire files into memory, alongside Clusters to scale across CPU cores.</p>
          
          <div class="concept-point">
            <strong>Stream Channels:</strong>
            <ul>
              <li>Readable: Read data (e.g. <code>fs.createReadStream()</code>).</li>
              <li>Writable: Write data.</li>
              <li>Duplex & Transform: Read and modify data on the fly.</li>
            </ul>
          </div>
        `,
        html: `<div id="streamConsole" style="background:#0f172a; color:#f1f5f9; font-family:monospace; padding:15px; border-radius:6px;"></div>`,
        css: ``,
        js: `// Simulating chunk stream data processing
const mockDataChunks = ['[Chunk 1]', '[Chunk 2]', '[Chunk 3]', '[Finish Stream]'];
let logText = 'Reading file stream chunks...<br>';
const consoleEl = document.getElementById('streamConsole');

consoleEl.innerHTML = logText;

mockDataChunks.forEach((chunk, index) => {
  setTimeout(() => {
    logText += \`Processed Buffer: \${chunk} (\${(index+1)*256} bytes buffered)<br>\`;
    consoleEl.innerHTML = logText;
  }, (index + 1) * 400);
});`,
        quiz: {
          question: 'Which Node.js stream method is used to connect a Readable stream directly to a Writable stream?',
          options: ['link()', 'connect()', 'pipe()', 'transfer()'],
          answer: 2,
          explanation: 'The "pipe()" method binds a readable stream outputs directly to the write inputs of a writable stream (e.g. readable.pipe(writable)).',
        },
      },
    ],
  },
  mongodb: {
    title: 'MongoDB',
    lessons: [
      {
        title: 'Introduction to MongoDB',
        level: 'Fresher',
        summary: 'Learn what MongoDB is, dynamic JSON/BSON document structures, collections, and NoSQL databases.',
        content: `
          <h3>Introduction to MongoDB</h3>
          <p>MongoDB is a document database designed for ease of development and scaling. It is classified as a NoSQL database program, using JSON-like documents with optional schemas.</p>
          
          <div class="concept-point">
            <strong>Key Terminology:</strong>
            <ul>
              <li><strong>Database:</strong> A physical container for database collections.</li>
              <li><strong>Collection:</strong> A group of MongoDB documents (analogous to a relational SQL table).</li>
              <li><strong>Document:</strong> A single record in a collection, represented as a BSON (Binary JSON) key-value structure.</li>
            </ul>
          </div>
        `,
        html: `<h3>MongoDB BSON Preview</h3>
<div id="bsonPreview"></div>`,
        css: `.bson-box { background: #1e293b; color: #38bdf8; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px; }`,
        js: `document.getElementById('bsonPreview').innerHTML = \`
  <div class="bson-box">
    {<br>
    &nbsp;&nbsp;"_id": "60c72b2f9b1d8",<br>
    &nbsp;&nbsp;"title": "MERN Stack Course",<br>
    &nbsp;&nbsp;"status": "Published"<br>
    }
  </div>
\`;`,
        quiz: {
          question: 'What does "NoSQL" stand for in database architectures?',
          options: ['No SQL at all', 'Not Only SQL', 'New Object Structured Query Language', 'Network Operating System SQL'],
          answer: 1,
          explanation: '"NoSQL" stands for "Not Only SQL". It designates databases that store data in formats other than traditional relational tables (like document-based, key-value, or graph structures).',
        },
      },
      {
        title: 'SQL vs NoSQL Databases',
        level: 'Fresher',
        summary: 'Learn key differences between relational row databases and document-based JSON databases.',
        content: `
          <h3>SQL vs NoSQL (MongoDB)</h3>
          <p>NoSQL databases like MongoDB store data in flexible, JSON-like documents rather than fixed tables with columns and rows.</p>
          
          <div class="concept-point">
            <strong>Comparison Table:</strong>
            <ul>
              <li><strong>Relational SQL:</strong> Tables, Rows, Columns, Fixed Schema, Foreign Keys (Joins).</li>
              <li><strong>NoSQL Document:</strong> Collections, BSON Documents, Dynamic Fields, Embedded Arrays.</li>
            </ul>
          </div>
        `,
        html: `<div id="dbOutput" style="font-family:monospace; padding:15px; background:#f8fafc; border-radius:6px;"></div>`,
        css: ``,
        js: `// Simulated MongoDB BSON Document structure
const mockMongoDocument = {
  _id: "60c72b2f9b1d8a1c88c7f999",
  username: "sree_webtech",
  email: "sreekanth@webtech.com",
  skills: ["HTML", "React", "Node"], // Embedded arrays
  profile: {
    role: "Fullstack Instructor",
    experienceYears: 8
  }
};

document.getElementById('dbOutput').innerHTML = \`
  <strong>Collection Name:</strong> users<br>
  <strong>BSON Document JSON:</strong><br>
  <pre>\${JSON.stringify(mockMongoDocument, null, 2)}</pre>
\`;`,
        quiz: {
          question: 'What is the format used by MongoDB internally to store document collections?',
          options: ['XML', 'SQL Tables', 'BSON (Binary JSON)', 'CSV files'],
          answer: 2,
          explanation: 'MongoDB stores documents as BSON (Binary JSON), which extends JSON to support additional data types like dates and ObjectIds.',
        },
      },
      {
        title: 'MongoDB CRUD Operations',
        level: 'Junior Developer',
        summary: 'Learn to execute document filters, insert schemas, update variables, and delete collections.',
        content: `
          <h3>MongoDB CRUD Query Commands</h3>
          <p>CRUD represents the fundamental operations supported by database management systems.</p>
          
          <div class="concept-point">
            <strong>Command Maps:</strong>
            <ul>
              <li>Create: <code>db.collection.insertOne({ name: 'Sree' })</code></li>
              <li>Read: <code>db.collection.find({ age: { $gt: 18 } })</code></li>
              <li>Update: <code>db.collection.updateOne({ id: 1 }, { $set: { status: 'active' } })</code></li>
              <li>Delete: <code>db.collection.deleteOne({ id: 1 })</code></li>
            </ul>
          </div>
        `,
        html: `<div style="font-family:sans-serif;">
  <button id="insertBtn" style="background:#059669; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Insert User</button>
  <button id="findBtn" style="background:#2563eb; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; margin-left:10px;">Find Active Users</button>
  <div id="queryConsole" style="margin-top:15px; font-family:monospace; background:#0f172a; color:#10b981; padding:15px; border-radius:6px;"></div>
</div>`,
        css: ``,
        js: `const localCollection = [];
const consoleEl = document.getElementById('queryConsole');

document.getElementById('insertBtn').addEventListener('click', () => {
  const doc = { name: 'Student_' + (localCollection.length + 1), status: Math.random() > 0.5 ? 'active' : 'pending' };
  localCollection.push(doc);
  consoleEl.innerHTML = 'Executed: db.users.insertOne(' + JSON.stringify(doc) + ')<br>Current Collection count: ' + localCollection.length;
});

document.getElementById('findBtn').addEventListener('click', () => {
  const queryResult = localCollection.filter(user => user.status === 'active');
  consoleEl.innerHTML = 'Executed: db.users.find({ status: "active" })<br>Result Documents:<br>' + JSON.stringify(queryResult, null, 2);
});`,
        quiz: {
          question: 'Which query operator is used in MongoDB to filter fields greater than a specific value?',
          options: ['$gt', '$lt', '$eq', '$or'],
          answer: 0,
          explanation: 'The "$gt" (greater than) query operator filters records whose target value exceeds the parameter (e.g. { age: { $gt: 21 } }).',
        },
      },
      {
        title: 'Mongoose Schemas & Models',
        level: 'Junior Developer',
        summary: 'Structure MongoDB collections inside Express servers using Mongoose schemas and models.',
        content: `
          <h3>Mongoose ODM for Node</h3>
          <p>Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages database schemas, validation rules, and relationships.</p>
          
          <div class="concept-point">
            <strong>Mongoose Setup:</strong>
            <pre><code>const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);</code></pre>
          </div>
        `,
        html: `<div style="font-family:sans-serif;">
  <h3>Mongoose Model Validation Simulator</h3>
  <input type="text" id="emailInput" placeholder="Enter email">
  <button id="validateBtn" style="background:#059669; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Save User</button>
  <div id="output" style="margin-top:15px; font-family:monospace;"></div>
</div>`,
        css: ``,
        js: `document.getElementById('validateBtn').addEventListener('click', () => {
  const emailVal = document.getElementById('emailInput').value;
  const logDiv = document.getElementById('output');
  
  // Simulate Mongoose field validation rules
  if (!emailVal.includes('@')) {
    logDiv.innerHTML = '<span style="color:red;">ValidationError: Email must contain standard symbol (@)</span>';
  } else {
    logDiv.innerHTML = '<span style="color:green;">User validated and saved to MongoDB collections successfully!</span>';
  }
});`,
        quiz: {
          question: 'What is the role of a Mongoose "Model"?',
          options: ['It builds front-end UI forms', 'It wraps the Mongoose schema to provide database query interfaces (CRUD)', 'It links Node HTTP controllers', 'It scales hardware processors'],
          answer: 1,
          explanation: 'A Mongoose Model compiles schemas into query controllers, providing methods like find(), create(), and save().',
        },
      },
      {
        title: 'MongoDB Aggregation Framework',
        level: 'Senior Developer',
        summary: 'Construct complex data analytics pipelines using aggregate stages ($match, $group, $sort).',
        content: `
          <h3>MongoDB Aggregations</h3>
          <p>Aggregations process query documents through sequential pipeline stages to calculate combined data sets (e.g. sums, counts, averages).</p>
          
          <div class="concept-point">
            <strong>Pipeline Stages:</strong>
            <ul>
              <li><code>$match</code>: Filters records.</li>
              <li><code>$group</code>: Categorizes documents based on a key and sums/averages them.</li>
              <li><code>$sort</code>: Arranges search results in order.</li>
              <li><code>$project</code>: Selects specific fields to output.</li>
            </ul>
          </div>
        `,
        html: `<div style="font-family:sans-serif;">
  <button id="aggregateBtn" style="background:#6366f1; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer;">
    Run Analytics Pipeline
  </button>
  <div id="output" style="margin-top:15px; font-family:monospace; background:#0f172a; color:#10b981; padding:15px; border-radius:6px;"></div>
</div>`,
        css: ``,
        js: `const salesData = [
  { item: 'Course', category: 'Tech', price: 10 },
  { item: 'Ebook', category: 'Tech', price: 5 },
  { item: 'Mentoring', category: 'Career', price: 100 }
];

document.getElementById('aggregateBtn').addEventListener('click', () => {
  // Simulate $group by category stage and summing price
  const groups = {};
  salesData.forEach(sale => {
    groups[sale.category] = (groups[sale.category] || 0) + sale.price;
  });
  
  document.getElementById('output').innerHTML = \`
    <strong>Pipeline:</strong> db.sales.aggregate([ { $group: { _id: "$category", totalRevenue: { $sum: "$price" } } } ])<br>
    <strong>Aggregated Result:</strong><br>
    \${JSON.stringify(groups, null, 2)}
  \`;
});`,
        quiz: {
          question: 'Which aggregation stage is used to categorize and summarize records?',
          options: ['$match', '$group', '$project', '$sort'],
          answer: 1,
          explanation: 'The "$group" stage clusters documents based on a category ID and computes statistics (sum, average) for each group.',
        },
      },
      {
        title: 'Database Indexing & Tuning',
        level: 'Experienced',
        summary: 'Speed up queries using single, compound, and multikey indexes. Learn to audit execution states.',
        content: `
          <h3>MongoDB Indexing</h3>
          <p>Without indexes, MongoDB must run a <em>collection scan</em> (read every single document) to resolve queries. Indexes store a sorted subset of keys to locate records instantly.</p>
          
          <div class="concept-point">
            <strong>Key Index Concepts:</strong>
            <ul>
              <li>Create: <code>db.users.createIndex({ email: 1 })</code> (1 for ascending, -1 for descending).</li>
              <li>Audit: Append <code>.explain("executionStats")</code> to queries to view processed document counts.</li>
            </ul>
          </div>
        `,
        html: `<div style="font-family:sans-serif;">
  <button id="noIndexBtn" style="background:#ef4444; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer;">Query without Index</button>
  <button id="indexBtn" style="background:#10b981; color:white; border:none; padding:6px 12px; border-radius:4px; cursor:pointer; margin-left:10px;">Query with Index</button>
  <div id="output" style="margin-top:15px; font-family:monospace;"></div>
</div>`,
        css: ``,
        js: `const dbSize = 100000;

document.getElementById('noIndexBtn').addEventListener('click', () => {
  document.getElementById('output').innerHTML = \`
    <strong>Executed:</strong> db.users.find({ email: "test@test.com" })<br>
    <strong>Scanning Strategy:</strong> COLLSCAN (Collection Scan)<br>
    <strong>Documents Scanned:</strong> \${dbSize} docs<br>
    <strong>Query Time:</strong> 180 ms
  \`;
});

document.getElementById('indexBtn').addEventListener('click', () => {
  document.getElementById('output').innerHTML = \`
    <strong>Executed:</strong> db.users.find({ email: "test@test.com" })<br>
    <strong>Scanning Strategy:</strong> IXSCAN (Index Scan)<br>
    <strong>Documents Scanned:</strong> 1 doc<br>
    <strong>Query Time:</strong> 1 ms
  \`;
});`,
        quiz: {
          question: 'What scanning strategy does MongoDB employ when executing queries on unindexed fields?',
          options: ['IXSCAN (Index Scan)', 'COLLSCAN (Collection Scan)', 'SORTEDSCAN', 'HASHSCAN'],
          answer: 1,
          explanation: 'If no index exists, MongoDB performs a COLLSCAN, reading every document in the collection to check for matches.',
        },
      },
    ],
  },
};
