import { useState, useEffect } from 'react';
import Playground from './Playground';
import Quiz from './Quiz';

export default function CourseSection({ courseTitle, lessons = [], activeIndex, setActiveIndex, onBackHome }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar on lesson select (for mobile viewport)
  const handleSelectLesson = (idx) => {
    setActiveIndex(idx);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeLesson = lessons[activeIndex] || {};

  const handleNext = () => {
    if (activeIndex < lessons.length - 1) {
      handleSelectLesson(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      handleSelectLesson(activeIndex - 1);
    }
  };

  return (
    <div className="course-workspace animate-fade-in">
      {/* Mobile Sidebar Toggle */}
      <button
        className="mobile-sidebar-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Toggle Lessons Menu"
      >
        {isSidebarOpen ? '✕ Hide Lessons' : '☰ Show Lessons'}
      </button>

      {/* Sidebar List */}
      <aside className={`course-sidebar glass ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <button className="back-home-btn" onClick={onBackHome}>
            ← Back to Catalog
          </button>
          <h3>{courseTitle} Topics</h3>
        </div>

        <nav className="sidebar-lessons-nav">
          {lessons.map((lesson, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectLesson(idx)}
              className={`sidebar-lesson-item ${idx === activeIndex ? 'active' : ''}`}
            >
              <div className="sidebar-lesson-number">{(idx + 1).toString().padStart(2, '0')}</div>
              <div className="sidebar-lesson-info">
                <span className="sidebar-lesson-title">{lesson.title}</span>
                <span className={`sidebar-lesson-badge badge-${lesson.level.toLowerCase().replace(/[^a-z]/g, '')}`}>
                  {lesson.level}
                </span>
              </div>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="course-main-content">
        {/* Course Breadcrumbs */}
        <div className="course-breadcrumbs">
          <span className="crumb-link" onClick={onBackHome}>Home</span>
          <span className="crumb-divider">/</span>
          <span className="crumb-current">{courseTitle}</span>
          <span className="crumb-divider">/</span>
          <span className="crumb-lesson">{activeLesson.title}</span>
        </div>

        {/* Lesson Header */}
        <section className="lesson-header-card glass">
          <div className="lesson-badge-row">
            <span className={`difficulty-badge badge-${activeLesson.level?.toLowerCase().replace(/[^a-z]/g, '')}`}>
              Level: {activeLesson.level}
            </span>
          </div>
          <h1>{activeLesson.title}</h1>
          <p className="lesson-description-text">{activeLesson.summary}</p>
        </section>

        {/* Lesson Body Content */}
        <section className="lesson-body-rich glass">
          <div dangerouslySetInnerHTML={{ __html: activeLesson.content }} />
        </section>

        {/* Live Code Playground */}
        {(activeLesson.html !== undefined || activeLesson.css !== undefined || activeLesson.js !== undefined) && (
          <section className="lesson-playground-section">
            <Playground
              initialHtml={activeLesson.html || ''}
              initialCss={activeLesson.css || ''}
              initialJs={activeLesson.js || ''}
              lessonTitle={activeLesson.title}
            />
          </section>
        )}

        {/* Quiz Checkpoint */}
        {activeLesson.quiz && (
          <section className="lesson-quiz-section">
            <Quiz
              quizData={activeLesson.quiz}
              lessonId={`${courseTitle.toLowerCase()}_${activeIndex}`}
            />
          </section>
        )}

        {/* Lesson Bottom Navigation */}
        <div className="lesson-footer-nav">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="lesson-nav-btn prev"
          >
            ← Previous Topic
          </button>
          <button
            onClick={handleNext}
            disabled={activeIndex === lessons.length - 1}
            className="lesson-nav-btn next"
          >
            Next Topic →
          </button>
        </div>
      </main>
    </div>
  );
}
