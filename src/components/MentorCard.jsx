import React from 'react';

const MentorCard = ({ mentor }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
            <p className="text-gray-600 text-sm">{mentor.title} @ {mentor.company}</p>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4">{mentor.bio}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm text-gray-700">{mentor.rating}</span>
          </div>
          <div className="text-sm text-gray-600">{mentor.students} students</div>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {mentor.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition duration-200">
          Connect with Mentor
        </button>
      </div>
    </div>
  );
};

export default MentorCard;