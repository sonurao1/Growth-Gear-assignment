const QueryHistory = ({ history }) => (
    <div className="p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg shadow-cyan-500/20 m-4 border border-gray-800">
      <h3 className="text-xl font-bold text-cyan-400 mb-4 tracking-wider">Query History</h3>
      <ul className="space-y-2">
        {history.map((q, idx) => (
          <li
            key={idx}
            className="p-2 border-b border-gray-700 text-gray-300 hover:text-cyan-300 hover:bg-gray-800 hover:bg-opacity-50 transition duration-200"
          >
            {q}
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default QueryHistory;