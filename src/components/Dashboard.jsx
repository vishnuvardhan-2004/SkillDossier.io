import React from 'react';
import { userProfile } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-blue-100 rounded-2xl p-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {userProfile.name}!</h2>
          <p className="text-gray-600 mb-6">Continue your learning journey and connect with expert mentors.</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary-600">{userProfile.completedMentorships}</div>
              <div className="text-sm text-gray-600">Completed Mentorships</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary-600">{userProfile.ongoingMentorships}</div>
              <div className="text-sm text-gray-600">Ongoing Mentorships</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-semibold text-gray-900 mb-4">Learning Goals</h3>
          <ul className="space-y-2">
            {userProfile.learningGoals.map((goal, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span className="text-sm text-gray-700">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;