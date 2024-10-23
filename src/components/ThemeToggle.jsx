import React from 'react';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm">{darkMode ? 'Dark' : 'Light'}</span>
      <div
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer ${
          darkMode ? 'bg-indigo-600' : 'bg-gray-300'
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? 'translate-x-7' : 'translate-x-0'
          }`}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;