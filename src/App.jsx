import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';
import { submitQuery, setResults, setError } from './redux/querySlice';

const mockData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 500 },
];

const App = () => {
  const dispatch = useDispatch();
  const { history, results, loading, error } = useSelector((state) => state.query);

  const handleQuerySubmit = (query) => {
    if (!query || query.trim() === '') {
      dispatch(setError('Please enter a valid query'));
      return;
    }
    dispatch(submitQuery(query));
    dispatch(setError(null));
    setTimeout(() => {
      dispatch(setResults(mockData));
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col md:flex-row gap-8 p-8 border-t-2 border-cyan-500/20">
      <div className="md:w-1/3 flex flex-col gap-8">
        <QueryInput onSubmit={handleQuerySubmit} />
        <QueryHistory history={history} />
      </div>
      <div className="md:w-2/3">
        <ResultsDisplay data={results} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default App;