import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">SkillDossier.io</h1>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a href="#dashboard" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Dashboard
              </a>
              <a href="#mentors" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                Mentors
              </a>
              <a href="#skills" className="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium">
                My Skills
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-white font-semibold">AT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;