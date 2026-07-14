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
  const [currentTab, setCurrentTab] = useState('home');
  const [lessonIndices, setLessonIndices] = useState({
    html: 0,
    css: 0,
    javascript: 0,
    react: 0,
    node: 0,
    mongodb: 0,
  });

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
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Content Layout Switcher */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentTab === 'home' && (
          <Hero setCurrentTab={setCurrentTab} />
        )}

        {currentTab === 'roadmap' && (
          <RoadmapSection setCurrentTab={setCurrentTab} />
        )}

        {currentTab === 'interview' && (
          <InterviewPrep />
        )}

        {isCourseTab && coursesData[currentTab] && (
          <CourseSection
            courseTitle={coursesData[currentTab].title}
            lessons={coursesData[currentTab].lessons}
            activeIndex={lessonIndices[currentTab]}
            setActiveIndex={(idx) => setLessonIndexForCourse(currentTab, idx)}
            onBackHome={() => setCurrentTab('home')}
          />
        )}
      </main>

      {/* Dynamic Footer Layout */}
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default App;
