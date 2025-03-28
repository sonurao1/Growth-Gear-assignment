import React, { useState } from 'react';

const QueryInput = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const suggestions = ['Show sales data', 'Revenue by month', 'Top products'];

  const handleSubmit = () => {
    onSubmit(query);
    setQuery('');
  };

  return (
    <div className="p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg shadow-cyan-500/20 m-4 border border-gray-800">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your query..."
        className="w-full p-3 bg-gray-800 bg-opacity-50 border border-cyan-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-600 shadow-inner transition duration-300"
      />
      {query && (
        <ul className="mt-2 bg-gray-800 bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              className="p-3 text-cyan-300 hover:bg-cyan-900 hover:bg-opacity-50 cursor-pointer transition duration-200 ease-in-out"
              onClick={() => setQuery(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full p-3 bg-cyan-600 text-white rounded-lg shadow-md shadow-cyan-500/50 hover:bg-cyan-700 hover:shadow-cyan-500/70 transform hover:scale-105 transition duration-300 animate-pulse"
      >
        Submit
      </button>
    </div>
  );
};

export default QueryInput;