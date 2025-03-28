import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const ResultsDisplay = ({ data, loading, error }) => {
  if (loading)
    return (
      <div className="p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg shadow-cyan-500/20 m-4 text-center text-cyan-400">
        <p className="text-lg animate-bounce">Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg shadow-red-500/20 m-4 text-center text-red-400">
        <p className="text-lg">Error: {error}</p>
      </div>
    );

  return (
    <div className="p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md rounded-xl shadow-lg shadow-cyan-500/20 m-4 border border-gray-800">
      <h3 className="text-xl font-bold text-cyan-400 mb-4 tracking-wider">Results</h3>
      <div className="overflow-x-auto">
        <BarChart width={500} height={300} data={data} className="mx-auto">
          <XAxis dataKey="name" stroke="#22D3EE" />
          <YAxis stroke="#22D3EE" />
          <Tooltip
            wrapperClassName="bg-gray-900 bg-opacity-90 text-cyan-300 rounded-md p-2 border border-cyan-500"
          />
          <Bar
            dataKey="value"
            fill="#22D3EE"
            radius={[8, 8, 0, 0]}
            className="shadow-md shadow-cyan-500/50"
          />
        </BarChart>
      </div>
    </div>
  );
};

export default ResultsDisplay;