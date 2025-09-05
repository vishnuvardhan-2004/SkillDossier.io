import React from 'react';

const SkillProgress = ({ skill, progress, level }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-gray-900">{skill}</h4>
        <span className="text-sm text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
          {level}
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-sm text-gray-600">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
    </div>
  );
};

export default SkillProgress;