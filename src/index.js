import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodosList from './components/TodosList';

ReactDOM.render(
  <React.StrictMode>
    <TodosList />
  </React.StrictMode>,
  document.getElementById('root')
);
