import { useState } from 'react';

export default function Hero({ setCurrentTab }) {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const courses = [
    {
      id: 'html',
      title: 'HTML5',
      badge: 'Structure',
      desc: 'Build the bones of the web. Learn semantic structures, formatting tags, element attributes, tables, forms, and accessibility.',
      lessonsCount: '9 Lessons',
      level: 'Beginner / Fresher',
      icon: '📁',
    },
    {
      id: 'css',
      title: 'CSS3',
      badge: 'Styling',
      desc: 'Make it look stunning. Learn basic syntax introduction, margins, custom flexbox layouts, grids, visual variables, and transitions.',
      lessonsCount: '6 Lessons',
      level: 'Beginner / Fresher',
      icon: '🎨',
    },
    {
      id: 'javascript',
      title: 'JavaScript',
      badge: 'Logic',
      desc: 'Inject life into elements. Learn variables data structures, array operations, dynamic DOM selectors, async API calls, and OOP classes.',
      lessonsCount: '7 Lessons',
      level: 'Junior Developer',
      icon: '⚡',
    },
    {
      id: 'react',
      title: 'React.js',
      badge: 'Components',
      desc: 'Build component interfaces. Learn JSX structures, state hooks (useState/useRef), context/reducers, and caching performance.',
      lessonsCount: '6 Lessons',
      level: 'Junior / Mid-Level',
      icon: '⚛️',
    },
    {
      id: 'node',
      title: 'Node.js',
      badge: 'Backend',
      desc: 'Spin up active servers. Create basic http connections, Express routing, authorization middlewares, and stream pipelines.',
      lessonsCount: '6 Lessons',
      level: 'Mid / Senior Level',
      icon: '🟢',
    },
    {
      id: 'mongodb',
      title: 'MongoDB',
      badge: 'Database',
      desc: 'Save persistent user tables. Learn CRUD commands, schema validation, collection indexing, and aggregation framework pipelines.',
      lessonsCount: '6 Lessons',
      level: 'Mid / Senior Level',
      icon: '🍃',
    },
  ];

  const youtubeVideos = [
    {
      title: 'Web Dev Roadmap 2026 - Frontend Developer',
      duration: '36:17',
      views: 'New',
      tag: 'Roadmap',
      thumbnailUrl: 'https://img.youtube.com/vi/NZkxXE-CxL8/maxresdefault.jpg',
      url: 'https://youtu.be/NZkxXE-CxL8?si=isiLXsU8Q6-T-tZx',
    },
    {
      title: 'CSS Introduction & Types (Telugu)',
      duration: '11:34',
      views: 'New',
      tag: 'CSS',
      thumbnailUrl: 'https://img.youtube.com/vi/gKgwYtKPyXc/maxresdefault.jpg',
      url: 'https://youtu.be/gKgwYtKPyXc?si=thyhJ90W02LoJUxo',
    },
    {
      title: 'HTML Tables in Telugu - Easy Guide',
      duration: '5:35',
      views: 'New',
      tag: 'HTML',
      thumbnailUrl: 'https://img.youtube.com/vi/br2GFX4sj4s/maxresdefault.jpg',
      url: 'https://youtu.be/br2GFX4sj4s?si=X8IFo8QCDRQL6fSg',
    },
  ];

  const faqs = [
    {
      q: 'What is Sreekanth WebTech platform?',
      a: 'It is a comprehensive, interactive Full Stack training workspace. We offer structural text lessons from Fresher core technologies (HTML/CSS) to Senior databases (MongoDB) alongside real-time compiler sandboxes and instant check quizzes.',
    },
    {
      q: 'Is this training program free?',
      a: 'Yes, 100% free! All educational roadmaps, curriculum codes, and coding playgrounds are free. You can support our channel by clicking "Subscribe" and turning on the bell icon to get notified of new tutorial walkthroughs!',
    },
    {
      q: 'How do I run code inside the playgrounds?',
      a: 'Every lesson features a "Try it Yourself" editor split panel. You can modify HTML, CSS, or JS code inside the editor cards and click "Run Output" to compile and see a live sandbox view inside the preview iframe.',
    },
    {
      q: 'Does it cover job readiness and technical interviews?',
      a: 'Yes! We have built a dedicated "Interview Prep" section containing MERN stack interview questions and 6 live algorithmic coding challenges complete with compilers to build confidence for technical interviews.',
    },
  ];

  const testimonials = [
    {
      name: 'Ravi Kanth',
      role: 'Junior Frontend Developer',
      comment: 'The HTML & CSS lessons coupled with the live sandbox made learning so visual. The Web Dev roadmap is a perfect guide!',
      rating: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'Siri P.',
      role: 'MERN Stack Intern',
      comment: 'The react hooks (useRef/useMemo) examples are explained beautifully. The interview challenges helped me clear my placement tests.',
      rating: '⭐⭐⭐⭐⭐',
    },
    {
      name: 'Ravi Kumar',
      role: 'Full Stack Learner',
      comment: 'Node.js Express routing and Mongo CRUD sections are extremely clean and simple for beginners to grasp.',
      rating: '⭐⭐⭐⭐⭐',
    },
  ];

  const handleNav = (tabId) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="hero-container animate-fade-in">
      {/* Hero Welcome Header */}
      <section className="hero-welcome">
        <div className="hero-welcome-content">
          <span className="eyebrow-badge">Fresher to Experience Road</span>
          <h1 className="hero-main-title">
            Learn Full Stack Web Development <span className="gradient-text">Like a Pro</span>
          </h1>
          <p className="hero-welcome-desc">
            Build strong foundations in HTML, CSS, JavaScript, React, Node.js, and MongoDB. Explore hand-crafted step-by-step concepts, play with our live browser sandbox, and check your skills with instant checkpoints.
          </p>
          <div className="hero-welcome-actions">
            <button className="hero-cta-primary" onClick={() => handleNav('roadmap')}>
              Explore Interactive Roadmap
            </button>
            <button className="hero-cta-secondary" onClick={() => handleNav('html')}>
              Start HTML Course
            </button>
          </div>

          {/* Stats Bar */}
          <div className="hero-stats-bar glass">
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Core Courses</span>
            </div>
            <div className="stat-border-line"></div>
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Interactive Lessons</span>
            </div>
            <div className="stat-border-line"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Hands-on Playgrounds</span>
            </div>
          </div>
        </div>

        {/* Brand Card Promo */}
        <div className="hero-promo-card glass animate-float">
          <div className="promo-badge">Official Channel</div>
          <h3>Sreekanth WebTech</h3>
          <p className="promo-tagline">Subscribe to accelerate your career</p>
          <p className="promo-desc">
            Watch real-world project tutorials, coding tips, job application secrets, and interview questions tailored for freshers and experienced professionals.
          </p>
          
          <a
            href="https://youtube.com/@sreekanthwebtech?si=jjYEFg5JWY5stBi9"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-subscribe-btn promo-youtube-subscribe animate-pulse-light"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            <span>Subscribe Now</span>
            <span className="bell-icon-wiggle">🔔</span>
          </a>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <a
              href="https://www.facebook.com/share/14mDeiJp6e3/"
              target="_blank"
              rel="noopener noreferrer"
              className="promo-subscribe-btn"
              style={{ background: 'linear-gradient(135deg, #1877f2 0%, #0d47a1 100%)', flex: 1, padding: '10px', fontSize: '0.82rem' }}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/sreekanth_webtech/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="promo-subscribe-btn"
              style={{ background: 'linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)', flex: 1, padding: '10px', fontSize: '0.82rem' }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Courses Catalog Directory */}
      <section className="courses-directory">
        <div className="directory-header">
          <span className="section-label">Course Catalog</span>
          <h2>Select a Topic to Start Learning</h2>
          <p>Each topic features structured, progressive text material, a compiler sandbox, and a quiz checklist.</p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card-item glass glass-hover">
              <div className="course-card-top">
                <span className="course-icon">{course.icon}</span>
                <span className="course-badge">{course.badge}</span>
              </div>
              <h3 className="course-title">{course.title}</h3>
              <span className="course-level">{course.level}</span>
              <p className="course-description">{course.desc}</p>
              <div className="course-card-bottom">
                <span className="lessons-indicator">{course.lessonsCount}</span>
                <button className="course-start-btn" onClick={() => handleNav(course.id)}>
                  Start Learning →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Features Grid */}
      <section className="features-grid-section">
        <div className="directory-header">
          <span className="section-label">Platform Highlights</span>
          <h2>Designed for Fast, Interactive Learning</h2>
          <p>Everything you need to go from code beginner to hiring-ready full stack engineer.</p>
        </div>
        
        <div className="features-box-grid">
          <div className="feature-box-card glass">
            <span className="feature-box-icon">⚡</span>
            <h4>Live Compiler Playgrounds</h4>
            <p>Write HTML, CSS, and JS inside split-screen panels and compile directly inside sandboxed iframe nodes.</p>
          </div>
          <div className="feature-box-card glass">
            <span className="feature-box-icon">🗺️</span>
            <h4>Chronological Roadmaps</h4>
            <p>Tick off progress milestones through Frontend, Backend, and Database tracks stored inside localStorage.</p>
          </div>
          <div className="feature-box-card glass">
            <span className="feature-box-icon">🧠</span>
            <h4>Instant Checkpoint Quizzes</h4>
            <p>Every single lesson features interactive multiple-choice checkpoints with instant logic explanations.</p>
          </div>
          <div className="feature-box-card glass">
            <span className="feature-box-icon">💼</span>
            <h4>Real Interview Questions</h4>
            <p>Prepare for MERN interviews with handpicked Q&As and 6 live sandbox coding algorithms.</p>
          </div>
        </div>
      </section>

      {/* YouTube Highlights Video Grid */}
      <section className="youtube-highlights-section glass">
        <div className="highlights-header">
          <div className="highlights-header-details">
            <span className="section-label-red">Tutorial Videos</span>
            <h2>Learn From Visual Code Walkthroughs</h2>
            <p>Combine your hands-on text exercises with detailed explanations on our YouTube channel.</p>
          </div>
          <a
            href="https://youtube.com/@sreekanthwebtech?si=jjYEFg5JWY5stBi9"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-channel-btn"
          >
            View All Videos
          </a>
        </div>

        <div className="videos-grid">
          {youtubeVideos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="video-card glass-hover"
            >
              <div
                className="video-thumbnail-box"
                style={
                  video.thumbnailUrl
                    ? { backgroundImage: `url(${video.thumbnailUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : { background: video.thumbnailBg }
                }
              >
                <span className="video-tag">{video.tag}</span>
                <div className="play-button-overlay">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="video-duration">{video.duration}</span>
              </div>
              <div className="video-details">
                <h4>{video.title}</h4>
                <p className="video-stats">{video.views} • Watch on YouTube</p>
              </div>
            </a>
          ))}
        </div>

        {/* Watch Some More Videos CTA Banner */}
        <div className="watch-more-wrapper">
          <a
            href="https://youtube.com/@sreekanthwebtech?si=jjYEFg5JWY5stBi9"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-more-cta-card glass glass-hover"
          >
            <div className="watch-more-info">
              <span className="watch-more-tag">YouTube Channel</span>
              <h3>Watch Some More Videos</h3>
              <p>Explore hours of tutorials, MERN stack guide projects, tips & tricks on our channel.</p>
            </div>
            <div className="watch-more-action">
              <div className="watch-more-youtube-icon animate-pulse-light">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="watch-more-btn-text">Visit Channel →</span>
            </div>
          </a>
        </div>
      </section>

      {/* Testimonials Review Slider */}
      <section className="testimonials-section">
        <div className="directory-header">
          <span className="section-label">Learner Reviews</span>
          <h2>Loved by Students and Professionals</h2>
          <p>Read what our learners say about Sreekanth WebTech tutorials and playgrounds.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <div key={index} className="testimonial-card glass">
              <span className="testimonial-stars">{test.rating}</span>
              <p className="testimonial-comment">"{test.comment}"</p>
              <div className="testimonial-author">
                <strong>{test.name}</strong>
                <span>{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Creator / Connect with Me Section */}
      <section className="creator-profile-section glass">
        <div className="creator-container">
          <div className="creator-info-side">
            <span className="section-label">Creator & Instructor</span>
            <h2>Sreekanth</h2>
            <p className="creator-title">Full Stack Developer & Educator</p>
            <p className="creator-bio">
              Welcome! I'm Sreekanth, the developer and educator behind Sreekanth WebTech. I design modern architectures, build clean-code web applications, and create structured courses to help you master full-stack engineering. Check out my portfolio to explore my developer journey!
            </p>
            <a
              href="https://sreekanthportfolio7373.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="creator-portfolio-btn"
            >
              <span>Visit My Portfolio</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          <div className="creator-contact-side">
            <h3>Get In Touch</h3>
            <p>Do you have any queries about our courses, need career advice, or want to collaborate? Contact me directly!</p>
            
            <div className="contact-cards-list">
              <a href="tel:+916281762361" className="contact-card glass glass-hover">
                <div className="contact-card-icon phone">📞</div>
                <div className="contact-card-details">
                  <span className="contact-label">Call or WhatsApp</span>
                  <span className="contact-value">+91 6281762361</span>
                </div>
              </a>

              <a href="mailto:sree13049@gmail.com" className="contact-card glass glass-hover">
                <div className="contact-card-icon email">✉️</div>
                <div className="contact-card-details">
                  <span className="contact-label">Send Email</span>
                  <span className="contact-value">sree13049@gmail.com</span>
                </div>
              </a>

              <a href="https://sreekanthportfolio7373.vercel.app/" target="_blank" rel="noopener noreferrer" className="contact-card glass glass-hover">
                <div className="contact-card-icon portfolio">🌐</div>
                <div className="contact-card-details">
                  <span className="contact-label">Portfolio Website</span>
                  <span className="contact-value">sreekanthportfolio7373.vercel.app</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collapsible FAQ Section */}
      <section className="faq-section glass" style={{ padding: '60px 40px', borderRadius: '24px', margin: '80px 0' }}>
        <div className="directory-header" style={{ marginBottom: '40px' }}>
          <span className="section-label">Common Queries</span>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about the platform, curriculum, and interactive tools.</p>
        </div>

        <div className="faq-accordions-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqs.map((faq, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div
                key={index}
                className={`faq-item-card glass ${isOpen ? 'active' : ''}`}
                style={{
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  transition: 'var(--transition-smooth)',
                }}
              >
                <div
                  onClick={() => toggleFaq(index)}
                  style={{
                    padding: '20px 24px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: isOpen ? 'rgba(255, 255, 255, 0.02)' : 'transparent',
                    userSelect: 'none',
                  }}
                >
                  <h4 style={{ color: 'white', fontSize: '1.02rem', margin: 0, fontWeight: '700' }}>{faq.q}</h4>
                  <span style={{ fontSize: '1.4rem', color: 'var(--primary-teal)', transition: 'transform 0.2s', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </div>
                {isOpen && (
                  <div
                    style={{
                      padding: '24px',
                      borderTop: '1px solid var(--border-color)',
                      background: 'rgba(0,0,0,0.15)',
                      color: 'var(--text-muted)',
                      fontSize: '0.92rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
