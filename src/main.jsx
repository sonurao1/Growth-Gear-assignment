import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Yeh import karna zaroori hai
import store from './redux/store'; // Apna store import karo
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* App ko Provider mein wrap karo */}
    <App />
  </Provider>
);