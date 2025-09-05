import React from 'react';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import MentorCard from './components/MentorCard';
import SkillProgress from './components/SkillProgress';
import { mentors, skillsData } from './data/mockData';
import './styles/index.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 app-content">
        <Dashboard />
        
        <div className="grid grid-cols-1 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentors.map(mentor => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skill Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsData.map((skill, index) => (
                <SkillProgress
                  key={index}
                  skill={skill.skill}
                  progress={skill.progress}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;