import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CourseSection from './components/CourseSection';
import RoadmapSection from './components/RoadmapSection';
import InterviewPrep from './components/InterviewPrep';
import { coursesData } from './data/coursesData';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  });
  const [lessonIndices, setLessonIndices] = useState({
    html: 0,
    css: 0,
    javascript: 0,
    react: 0,
    node: 0,
    
    mongodb: 0,
  });

  // Sync state when hash changes (browser back/forward buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentTab(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when tab changes
  const changeTab = (tabId) => {
    if (tabId === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = tabId;
    }
  };

  // Automatically scroll to the top of the viewport when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentTab]);

  const setLessonIndexForCourse = (courseId, index) => {
    setLessonIndices((prev) => ({
      ...prev,
      [courseId]: index,
    }));
  };

  const isCourseTab = ['html', 'css', 'javascript', 'react', 'node', 'mongodb'].includes(currentTab);

  return (
    <div className="app-shell">
      {/* Dynamic Header Navbar */}
      <Navbar currentTab={currentTab} setCurrentTab={changeTab} />

      {/* Main Content Layout Switcher */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentTab === 'home' && (
          <Hero setCurrentTab={changeTab} />
        )}

        {currentTab === 'roadmap' && (
          <RoadmapSection setCurrentTab={changeTab} />
        )}

        {currentTab === 'interview' && (
          <InterviewPrep onBackHome={() => changeTab('home')} />
        )}

        {isCourseTab && coursesData[currentTab] && (
          <CourseSection
            courseTitle={coursesData[currentTab].title}
            lessons={coursesData[currentTab].lessons}
            activeIndex={lessonIndices[currentTab]}
            setActiveIndex={(idx) => setLessonIndexForCourse(currentTab, idx)}
            onBackHome={() => changeTab('home')}
          />
        )}
      </main>

      {/* Dynamic Footer Layout */}
      <Footer setCurrentTab={changeTab} />
    </div>
  );
}

export default App;
