import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

console.log(React,ReactDOM, '<------------React')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    console.log(111111111111111111)
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
}